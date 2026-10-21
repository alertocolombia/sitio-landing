import { createHmac } from "node:crypto";
import { demoRecipient, demoSummary, parseDemoRequest } from "@/lib/demo-request";

export const runtime = "nodejs";

const windowMs = 15 * 60 * 1000;
// Best-effort per-process throttle. A shared limiter/WAF is needed before wider rollout.
const attempts = new Map<string, { count: number; expires: number }>();
function allowed(key: string) {
  const now = Date.now();
  for (const [id, entry] of attempts) if (entry.expires <= now) attempts.delete(id);
  const entry = attempts.get(key);
  if (entry && entry.count >= 3) return false;
  if (!entry && attempts.size >= 2000) return false;
  attempts.set(key, { count: (entry?.count ?? 0) + 1, expires: entry?.expires ?? now + windowMs });
  return true;
}
function failure(status: number, error: string) {
  return Response.json({ error }, { status, headers: { "Cache-Control": "no-store" } });
}

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin || origin !== new URL(request.url).origin) {
    return failure(403, "Abre el formulario desde esta página para enviar tu solicitud.");
  }
  if (!request.headers.get("content-type")?.startsWith("application/json")) {
    return failure(415, "El formato de la solicitud no es válido.");
  }
  const raw = await request.text();
  if (new TextEncoder().encode(raw).length > 6000) return failure(413, "La solicitud es demasiado larga.");
  let input: unknown;
  try { input = JSON.parse(raw); } catch { return failure(400, "Revisa los datos de tu solicitud."); }
  if (input && typeof input === "object" && "website" in input && input.website) {
    return failure(400, "No pudimos validar la solicitud. Inténtalo de nuevo.");
  }
  const data = parseDemoRequest(input);
  if (!data) return failure(400, "Revisa tu idea, nombre, teléfono y autorización de contacto.");

  const apiKey = process.env.RESEND_API_KEY;
  const domain = process.env.RESEND_EMAIL_DOMAIN;
  if (!apiKey || !domain || !/^[a-z0-9.-]+\.[a-z]{2,}$/i.test(domain)) {
    return failure(503, "El envío directo no está disponible. Puedes enviarnos el resumen desde tu correo.");
  }
  const digest = (value: string) => createHmac("sha256", apiKey).update(value).digest("hex");
  // Hash contact data; neither it nor provider errors are written to application logs.
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
  if (!allowed(digest(`ip:${ip}`)) || !allowed(digest(`phone:${data.phone.replace(/\D/g, "")}`))) {
    return failure(429, "Ya hubo varios intentos. Espera 15 minutos o envía el resumen desde tu correo.");
  }
  const text = demoSummary(data);
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "Idempotency-Key": `sitio-demo/${digest(`${demoRecipient}\n${text}`)}`,
      },
      body: JSON.stringify({
        from: `Sitio <solicitudes@${domain}>`,
        to: [demoRecipient],
        reply_to: demoRecipient,
        subject: `Demo gratis · ${data.goal}`,
        text,
      }),
      signal: AbortSignal.timeout(12000),
      cache: "no-store",
    });
    const result = await response.json();
    if (!response.ok || typeof result.id !== "string") {
      return failure(502, "No pudimos confirmar el envío. Inténtalo de nuevo o usa tu correo.");
    }
    return Response.json({ accepted: true }, { headers: { "Cache-Control": "no-store" } });
  } catch {
    return failure(502, "No pudimos confirmar el envío. Tus datos siguen aquí para reintentar o copiar.");
  }
}
