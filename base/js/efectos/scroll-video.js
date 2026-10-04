/*
 * Efecto: scroll guiado con secuencia de imágenes dibujada en un canvas.
 * Lee config.scrollGuiado: { ruta: "media/secuencia/frame-{n}.jpg", frames, digitos, textos }.
 * La sección mide varias pantallas de alto; el canvas queda fijo y el frame depende del scroll.
 * Con prefers-reduced-motion solo se muestra el primer frame y los textos uno debajo de otro.
 */
(function () {
  "use strict";

  const cfg = (window.DEMO_CONFIG || {}).scrollGuiado || {};
  const seccion = document.querySelector('[data-seccion="scrollGuiado"]');
  if (!seccion || seccion.hidden || !(cfg.frames > 0)) return;

  const canvas = seccion.querySelector("[data-scroll-canvas]");
  const ctx = canvas.getContext("2d");
  const cajaTextos = seccion.querySelector("[data-scroll-textos]");
  const textos = (cfg.textos || []).map((t) => {
    const p = document.createElement("p");
    p.textContent = t;
    cajaTextos.append(p);
    return p;
  });

  const sinMovimiento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (sinMovimiento) seccion.classList.add("estatico");

  const rutaFrame = (i) => cfg.ruta.replace("{n}", String(i + 1).padStart(cfg.digitos || 3, "0"));
  const imagenes = [];
  for (let i = 0; i < (sinMovimiento ? 1 : cfg.frames); i++) {
    const img = new Image();
    img.decoding = "async";
    img.src = rutaFrame(i);
    imagenes.push(img);
  }

  let frameActual = -1;

  function dibujar(indice) {
    const img = imagenes[indice];
    if (!img || !img.complete || !img.naturalWidth) return;
    const ancho = canvas.clientWidth * devicePixelRatio;
    const alto = canvas.clientHeight * devicePixelRatio;
    if (canvas.width !== ancho || canvas.height !== alto) {
      canvas.width = ancho;
      canvas.height = alto;
    }
    // Recorte tipo "cover".
    const escala = Math.max(ancho / img.naturalWidth, alto / img.naturalHeight);
    const w = img.naturalWidth * escala;
    const h = img.naturalHeight * escala;
    ctx.drawImage(img, (ancho - w) / 2, (alto - h) / 2, w, h);
    frameActual = indice;
  }

  function progreso() {
    const r = seccion.getBoundingClientRect();
    const recorrido = r.height - window.innerHeight;
    return Math.min(1, Math.max(0, -r.top / recorrido));
  }

  function actualizar() {
    const p = progreso();
    const indice = Math.min(imagenes.length - 1, Math.floor(p * imagenes.length));
    if (indice !== frameActual) dibujar(indice);
    const tramo = Math.min(textos.length - 1, Math.floor(p * textos.length));
    textos.forEach((t, i) => t.classList.toggle("visible", i === tramo));
  }

  imagenes[0].addEventListener("load", () => dibujar(0));
  window.addEventListener("resize", () => { frameActual = -1; actualizar(); });

  if (sinMovimiento) return;

  let pendiente = false;
  window.addEventListener("scroll", () => {
    if (pendiente) return;
    pendiente = true;
    requestAnimationFrame(() => { pendiente = false; actualizar(); });
  }, { passive: true });
  actualizar();
})();
