#!/usr/bin/env node
/*
 * Genera una demo lista para publicar en dist/<nombre>/.
 *
 *   node scripts/construir.mjs nichos/gimnasio
 *   node scripts/construir.mjs clientes/box-norte
 *   node scripts/construir.mjs --todas
 *
 * Orden de copia (lo de abajo pisa a lo de arriba):
 *   1. base/                  plantilla y efectos
 *   2. recursos/<nicho>/      → media/  (fotos, vídeos y secuencias compartidas del nicho)
 *   3. la carpeta de la demo  config.js, estilo.css, img/, media/ propios
 *
 * Para un cliente, el nicho sale del archivo "nicho" de su carpeta (lo crea nueva-demo.mjs).
 */
import { cpSync, existsSync, readdirSync, readFileSync, rmSync, statSync } from "node:fs";
import { basename, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const raiz = resolve(fileURLToPath(import.meta.url), "../..");
const IGNORAR = new Set(["README.md", "nicho", ".gitkeep"]);

function nichoDe(carpeta) {
  const archivo = join(carpeta, "nicho");
  if (existsSync(archivo)) return readFileSync(archivo, "utf8").trim();
  if (resolve(carpeta, "..") === join(raiz, "nichos")) return basename(carpeta);
  return null;
}

function construir(rutaDemo) {
  const carpeta = resolve(raiz, rutaDemo);
  if (!existsSync(join(carpeta, "config.js"))) {
    throw new Error(`${rutaDemo} no tiene config.js`);
  }
  const nombre = basename(carpeta);
  const destino = join(raiz, "dist", nombre);
  rmSync(destino, { recursive: true, force: true });

  cpSync(join(raiz, "base"), destino, { recursive: true });

  const nicho = nichoDe(carpeta);
  const recursos = nicho && join(raiz, "recursos", nicho);
  if (recursos && existsSync(recursos)) {
    cpSync(recursos, join(destino, "media"), {
      recursive: true,
      filter: (src) => !IGNORAR.has(basename(src)),
    });
  }

  cpSync(carpeta, destino, {
    recursive: true,
    filter: (src) => !IGNORAR.has(basename(src)),
  });

  console.log(`✓ ${rutaDemo} → dist/${nombre}${nicho ? ` (nicho: ${nicho})` : ""}`);
}

const args = process.argv.slice(2);
if (args.length === 0) {
  console.error("Uso: node scripts/construir.mjs <nichos/x | clientes/x> [...] | --todas");
  process.exit(1);
}

const demos = args.includes("--todas")
  ? ["nichos", "clientes"].flatMap((grupo) =>
      readdirSync(join(raiz, grupo))
        .filter((d) => statSync(join(raiz, grupo, d)).isDirectory())
        .map((d) => `${grupo}/${d}`))
  : args;

try {
  demos.forEach(construir);
} catch (error) {
  console.error(`✗ ${error.message}`);
  process.exit(1);
}
