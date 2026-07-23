/**
 * Vectoriza los PNG de marca a SVG limpio (currentColor, viewBox ajustado).
 * Genera: components/brand/logo-paths.ts + app/icon.svg
 * Uso: node scripts/trace-logos.js
 */
const fs = require("fs");
const path = require("path");
const potrace = require("potrace");
const Jimp = require("jimp");

const SRC = path.join(__dirname, "..", "..", "LOGOS SITIO 12 VERSIONES CANVA");

function traceFile(file, opts) {
  return new Promise((resolve, reject) => {
    Jimp.read(path.join(SRC, file))
      .then((img) => {
        img.autocrop({ cropOnlyFrames: false, tolerance: 0.01 });
        const { width, height } = img.bitmap;
        const tracer = new potrace.Potrace({
          threshold: 170,
          turdSize: 20,
          optTolerance: 0.35,
          alphaMax: 1,
          color: "currentColor",
          background: "transparent",
          ...opts,
        });
        tracer.loadImage(img, (err) => {
          if (err) return reject(err);
          resolve({ d: tracer.getPathTag(), width, height });
        });
      })
      .catch(reject);
  });
}

function extractD(pathTag) {
  const m = pathTag.match(/d="([^"]+)"/);
  if (!m) throw new Error("no d attr");
  return m[1];
}

(async () => {
  // 2.png = wordmark "sitio." azul sobre blanco (tinta oscura sobre claro)
  const word = await traceFile("2.png");
  // 6.png = isotipo [;] azul sobre blanco
  const iso = await traceFile("6.png");

  const wordD = extractD(word.d);
  const isoD = extractD(iso.d);

  const out = `// Generado por scripts/trace-logos.js — NO editar a mano.
// Paths trazados desde los PNG oficiales de marca (potrace).
export const WORDMARK = {
  d: ${JSON.stringify(wordD)},
  viewBox: "0 0 ${word.width} ${word.height}",
  width: ${word.width},
  height: ${word.height},
};

export const ISOTYPE = {
  d: ${JSON.stringify(isoD)},
  viewBox: "0 0 ${iso.width} ${iso.height}",
  width: ${iso.width},
  height: ${iso.height},
};
`;
  const outDir = path.join(__dirname, "..", "components", "brand");
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "logo-paths.ts"), out);

  // Favicon: isotipo blanco centrado sobre azul, esquinas redondeadas
  const pad = 0.22; // margen relativo
  const size = Math.max(iso.width, iso.height) * (1 + pad * 2);
  const ox = (size - iso.width) / 2;
  const oy = (size - iso.height) / 2;
  const icon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}">
  <rect width="${size}" height="${size}" rx="${size * 0.18}" fill="#0054FC"/>
  <g transform="translate(${ox} ${oy})"><path d="${isoD}" fill="#FFFFFF"/></g>
</svg>
`;
  fs.writeFileSync(path.join(__dirname, "..", "app", "icon.svg"), icon);

  console.log("wordmark:", word.width, "x", word.height, "| d length:", wordD.length);
  console.log("isotipo :", iso.width, "x", iso.height, "| d length:", isoD.length);
})();
