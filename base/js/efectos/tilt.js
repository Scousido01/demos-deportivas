/*
 * Efecto: tarjetas con tilt (inclinación 3D al mover el ratón) y microvídeo al pasar por encima.
 * Se aplica a cualquier elemento con [data-tilt]. Si la tarjeta tiene <video data-src>,
 * el vídeo se carga la primera vez que se pasa por encima y se pausa al salir.
 * Con prefers-reduced-motion o en pantallas táctiles no hay inclinación.
 */
(function () {
  "use strict";

  const INCLINACION_MAX = 10; // grados
  const sinMovimiento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const tactil = window.matchMedia("(hover: none)").matches;

  function activarVideo(tarjeta, activo) {
    const video = tarjeta.querySelector("video");
    if (!video) return;
    if (activo) {
      if (!video.src && video.dataset.src) video.src = video.dataset.src;
      video.play().catch(() => {});
      tarjeta.classList.add("con-video");
    } else {
      video.pause();
      tarjeta.classList.remove("con-video");
    }
  }

  for (const tarjeta of document.querySelectorAll("[data-tilt]")) {
    tarjeta.addEventListener("pointerenter", () => activarVideo(tarjeta, !sinMovimiento));
    tarjeta.addEventListener("pointerleave", () => {
      activarVideo(tarjeta, false);
      tarjeta.style.transform = "";
    });

    if (sinMovimiento || tactil) continue;

    let pendiente = null;
    tarjeta.addEventListener("pointermove", (e) => {
      if (pendiente) return;
      pendiente = requestAnimationFrame(() => {
        pendiente = null;
        const r = tarjeta.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        tarjeta.style.transform =
          `perspective(800px) rotateX(${(-y * INCLINACION_MAX).toFixed(2)}deg) rotateY(${(x * INCLINACION_MAX).toFixed(2)}deg) scale(1.02)`;
        tarjeta.style.setProperty("--brillo-x", `${(x + 0.5) * 100}%`);
        tarjeta.style.setProperty("--brillo-y", `${(y + 0.5) * 100}%`);
      });
    });
  }
})();
