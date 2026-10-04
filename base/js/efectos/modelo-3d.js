/*
 * Efecto: modelo 3D configurable con <model-viewer>.
 * Solo se carga si config.modelo3d.modelo tiene un .glb; si no, no descarga nada.
 * config.modelo3d.colores crea botones que cambian el color base del primer material.
 * Con prefers-reduced-motion no hay autorrotación.
 */
(function () {
  "use strict";

  const { config, el } = window.Demo || {};
  const cfg = (config || {}).modelo3d || {};
  const caja = document.querySelector("[data-modelo]");
  if (!cfg.modelo || !caja) return;

  const script = document.createElement("script");
  script.type = "module";
  script.src = "https://cdn.jsdelivr.net/npm/@google/model-viewer@3/dist/model-viewer.min.js";
  document.head.append(script);

  const sinMovimiento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const visor = el("model-viewer", {
    src: cfg.modelo,
    alt: cfg.titulo || "Modelo 3D",
    "camera-controls": true,
    "auto-rotate": sinMovimiento ? null : true,
    "shadow-intensity": "1",
    loading: "lazy",
  });
  caja.append(visor);

  if (!(cfg.colores || []).length) return;

  const hexARgba = (hex) => {
    const n = parseInt(hex.replace("#", ""), 16);
    return [(n >> 16 & 255) / 255, (n >> 8 & 255) / 255, (n & 255) / 255, 1];
  };

  const botones = el("div", { class: "modelo-colores" }, cfg.colores.map((color) =>
    el("button", { type: "button", style: `--muestra:${color}`, "aria-label": `Color ${color}`, "data-color": color })));
  caja.append(botones);

  botones.addEventListener("click", (e) => {
    const boton = e.target.closest("[data-color]");
    const material = visor.model && visor.model.materials[0];
    if (boton && material) material.pbrMetallicRoughness.setBaseColorFactor(hexARgba(boton.dataset.color));
  });
})();
