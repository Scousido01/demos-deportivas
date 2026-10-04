/*
 * Efecto: reservas por pasos con View Transitions.
 * Pasos: actividad → franja → datos → resumen. Al confirmar abre WhatsApp con el resumen,
 * así la demo funciona sin servidor. Si el navegador no soporta View Transitions
 * (o hay prefers-reduced-motion), cambia de paso sin animación.
 */
(function () {
  "use strict";

  const { config, el, enlaceWhatsapp } = window.Demo || {};
  const cfg = (config || {}).reservas;
  const form = document.querySelector("[data-reservas]");
  if (!cfg || !form || form.closest("[hidden]")) return;

  const sinMovimiento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const datos = { actividad: "", franja: "", nombre: "", telefono: "" };
  let paso = 0;

  function opciones(nombre, lista) {
    return el("div", { class: "opciones" }, lista.map((valor) =>
      el("label", { class: "opcion" },
        el("input", { type: "radio", name: nombre, value: valor, checked: datos[nombre] === valor, required: true }),
        el("span", { texto: valor }))));
  }

  const pasos = [
    { titulo: "¿Qué te apetece probar?", cuerpo: () => opciones("actividad", cfg.actividades || []) },
    { titulo: "¿Qué franja te viene mejor?", cuerpo: () => opciones("franja", cfg.franjas || []) },
    {
      titulo: "¿Cómo te llamamos?",
      cuerpo: () => el("div", { class: "campos" },
        el("label", {}, "Nombre", el("input", { name: "nombre", value: datos.nombre, autocomplete: "name", required: true })),
        el("label", {}, "Teléfono", el("input", { name: "telefono", value: datos.telefono, type: "tel", autocomplete: "tel", required: true }))),
    },
    {
      titulo: "Revisa tu reserva",
      cuerpo: () => el("dl", { class: "resumen" },
        el("dt", { texto: "Actividad" }), el("dd", { texto: datos.actividad }),
        el("dt", { texto: "Franja" }), el("dd", { texto: datos.franja }),
        el("dt", { texto: "Nombre" }), el("dd", { texto: datos.nombre }),
        el("dt", { texto: "Teléfono" }), el("dd", { texto: datos.telefono })),
    },
  ];

  function pintar() {
    const p = pasos[paso];
    const ultimo = paso === pasos.length - 1;
    form.replaceChildren(
      el("ol", { class: "reservas-progreso", "aria-label": "Pasos" },
        pasos.map((_, i) => el("li", { class: i <= paso ? "hecho" : null, "aria-current": i === paso ? "step" : null }))),
      el("div", { class: "reservas-paso" },
        el("h3", { texto: p.titulo }),
        p.cuerpo(),
        el("p", { class: "reservas-error", "aria-live": "polite" })),
      el("div", { class: "reservas-botones" },
        paso > 0 ? el("button", { type: "button", class: "boton secundario", "data-accion": "atras", texto: "Atrás" }) : null,
        el("button", { type: "submit", class: "boton", texto: ultimo ? "Confirmar por WhatsApp" : "Siguiente" })));
    const primero = form.querySelector("input");
    if (primero && paso > 0) primero.focus({ preventScroll: true });
  }

  function irA(nuevo) {
    const cambiar = () => { paso = nuevo; pintar(); };
    if (document.startViewTransition && !sinMovimiento) document.startViewTransition(cambiar);
    else cambiar();
  }

  function guardar() {
    for (const campo of form.querySelectorAll("input")) {
      if (campo.type === "radio" && !campo.checked) continue;
      datos[campo.name] = campo.value.trim();
    }
    const invalido = [...form.querySelectorAll("input")].some((c) => !c.checkValidity()) ||
      (paso === 2 && (!datos.nombre || !datos.telefono));
    form.querySelector(".reservas-error").textContent = invalido ? "Completa este paso para seguir." : "";
    return !invalido;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (paso < pasos.length - 1) {
      if (guardar()) irA(paso + 1);
      return;
    }
    const mensaje = `Hola, quiero reservar: ${datos.actividad}, franja ${datos.franja}. Soy ${datos.nombre} (${datos.telefono}).`;
    const url = enlaceWhatsapp(mensaje);
    if (url) window.open(url, "_blank", "noopener");
  });

  form.addEventListener("click", (e) => {
    if (e.target.closest('[data-accion="atras"]')) irA(paso - 1);
  });

  pintar();
})();
