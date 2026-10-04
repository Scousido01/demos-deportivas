#!/usr/bin/env node
/*
 * Crea la carpeta de un cliente copiando un nicho.
 *
 *   node scripts/nueva-demo.mjs gimnasio box-norte
 *
 * Resultado: clientes/box-norte/ con config.js y estilo.css del nicho, listos para editar.
 */
import { cpSync, existsSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const raiz = resolve(fileURLToPath(import.meta.url), "../..");
const [nicho, cliente] = process.argv.slice(2);

if (!nicho || !cliente) {
  console.error("Uso: node scripts/nueva-demo.mjs <nicho> <nombre-cliente>");
  process.exit(1);
}
if (!/^[a-z0-9-]+$/.test(cliente)) {
  console.error("El nombre del cliente va en minúsculas, sin espacios ni tildes (p. ej. box-norte).");
  process.exit(1);
}

const origen = join(raiz, "nichos", nicho);
const destino = join(raiz, "clientes", cliente);
if (!existsSync(origen)) {
  console.error(`No existe el nicho "${nicho}". Opciones: gimnasio, club, entrenador.`);
  process.exit(1);
}
if (existsSync(destino)) {
  console.error(`Ya existe clientes/${cliente}.`);
  process.exit(1);
}

cpSync(origen, destino, { recursive: true, filter: (src) => !src.endsWith("README.md") });
writeFileSync(join(destino, "nicho"), `${nicho}\n`);

console.log(`✓ Creado clientes/${cliente} a partir de nichos/${nicho}`);
console.log(`  Siguiente: edita clientes/${cliente}/config.js y mete su logo y fotos en clientes/${cliente}/img/`);
