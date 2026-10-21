import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import ts from 'typescript';

// Compile with the project's TypeScript; all provider responses below are isolated test fixtures.
const asModule = (source) => 'data:text/javascript;base64,' + Buffer.from(ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 },
}).outputText).toString('base64');
const contactUrl = asModule(await readFile(new URL('../content/contact.ts', import.meta.url), 'utf8'));
const sharedUrl = asModule((await readFile(new URL('../lib/demo-request.ts', import.meta.url), 'utf8')).replace('@/content/contact', contactUrl));
const source = (await readFile(new URL('../app/api/demo-request/route.ts', import.meta.url), 'utf8')).replace('@/lib/demo-request', sharedUrl);
const { POST } = await import(asModule(source));
const valid = { name: 'Prueba local', phone: '+57 300 000 0000', goal: 'Vender productos', idea: 'Una tienda de ropa de ejemplo.', method: 'Llamada', day: 'Miércoles', time: '15:00–18:00', consent: true, website: '' };
let sequence = 0;
function request(body, headers = {}) {
  return new Request('http://localhost:3000/api/demo-request', { method: 'POST', headers: { origin: 'http://localhost:3000', 'content-type': 'application/json', 'x-forwarded-for': `192.0.2.${++sequence}`, ...headers }, body: typeof body === 'string' ? body : JSON.stringify(body) });
}

test('email request safeguards and provider outcomes (no email sent)', async (t) => {
  const originalFetch = globalThis.fetch;
  const saved = { key: process.env.RESEND_API_KEY, domain: process.env.RESEND_EMAIL_DOMAIN };
  const calls = [];
  globalThis.fetch = async (url, options) => { calls.push({ url, ...options }); return Response.json({ id: 'fixture-accepted' }); };
  process.env.RESEND_API_KEY = 're_isolated_test_fixture';
  process.env.RESEND_EMAIL_DOMAIN = 'sitio.com.co';
  try {
    await t.test('rejects foreign origins', async () => assert.equal((await POST(request(valid, { origin: 'https://untrusted.example' }))).status, 403));
    await t.test('rejects non-JSON input', async () => assert.equal((await POST(request(valid, { 'content-type': 'text/plain' }))).status, 415));
    await t.test('rejects malformed JSON', async () => assert.equal((await POST(request('{'))).status, 400));
    await t.test('caps payload size', async () => assert.equal((await POST(request('x'.repeat(6001)))).status, 413));
    await t.test('requires explicit consent', async () => assert.equal((await POST(request({ ...valid, consent: false }))).status, 400));
    await t.test('rejects whitespace names and invalid phones', async () => {
      for (const change of [{ name: '  ' }, { phone: '----------' }, { phone: '123' }, { phone: '+57\n3000000000' }]) assert.equal((await POST(request({ ...valid, ...change }))).status, 400);
    });
    await t.test('rejects unrecognized choices and honeypot', async () => {
      for (const change of [{ goal: 'other' }, { method: 'fax' }, { website: 'spam.example' }]) assert.equal((await POST(request({ ...valid, ...change }))).status, 400);
      assert.equal(calls.length, 0);
    });
    await t.test('reports missing configuration honestly', async () => {
      delete process.env.RESEND_API_KEY;
      assert.equal((await POST(request(valid))).status, 503);
      process.env.RESEND_API_KEY = 're_isolated_test_fixture';
    });
    await t.test('uses the fixed recipient and preserves selected contact details', async () => {
      const response = await POST(request({ ...valid, to: 'untrusted@example.com' }));
      assert.deepEqual(await response.json(), { accepted: true });
      const payload = JSON.parse(calls[0].body);
      assert.equal(calls[0].url, 'https://api.resend.com/emails');
      assert.deepEqual(payload.to, ['hola@sitio.com.co']);
      assert.equal(payload.reply_to, 'hola@sitio.com.co');
      assert.equal(payload.from, 'Sitio <solicitudes@sitio.com.co>');
      assert.match(payload.text, /Llamada/);
      assert.match(payload.text, /Miércoles/);
      assert.match(payload.text, /15:00–18:00/);
    });
    await t.test('retries reuse the provider idempotency key', async () => {
      await POST(request(valid));
      assert.equal(calls[0].headers['Idempotency-Key'], calls[1].headers['Idempotency-Key']);
    });
    await t.test('does not report acceptance on provider failure', async () => {
      globalThis.fetch = async () => Response.json({ message: 'fixture failure' }, { status: 403 });
      const response = await POST(request({ ...valid, phone: '+57 300 000 0001' }));
      assert.equal(response.status, 502);
      assert.equal((await response.json()).accepted, undefined);
    });
    await t.test('handles network failure without losing the error contract', async () => {
      globalThis.fetch = async () => { throw new Error('fixture timeout'); };
      assert.equal((await POST(request({ ...valid, phone: '+57 300 000 0002' }))).status, 502);
    });
    await t.test('limits repeated attempts from one visitor', async () => {
      globalThis.fetch = async () => Response.json({ id: 'fixture-accepted' });
      for (let i = 0; i < 3; i++) assert.equal((await POST(request({ ...valid, phone: `+57 300 000 001${i}` }, { 'x-forwarded-for': '192.0.2.200' }))).status, 200);
      assert.equal((await POST(request({ ...valid, phone: '+57 300 000 0019' }, { 'x-forwarded-for': '192.0.2.200' }))).status, 429);
    });
  } finally {
    globalThis.fetch = originalFetch;
    if (saved.key === undefined) delete process.env.RESEND_API_KEY; else process.env.RESEND_API_KEY = saved.key;
    if (saved.domain === undefined) delete process.env.RESEND_EMAIL_DOMAIN; else process.env.RESEND_EMAIL_DOMAIN = saved.domain;
  }
});
