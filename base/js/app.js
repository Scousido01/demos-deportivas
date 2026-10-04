/*
 * Pinta la página a partir de window.DEMO_CONFIG.
 * Aquí no hay efectos: cada efecto vive en js/efectos/ y lee la misma configuración.
 */
(function () {
  "use strict";

  const config = window.DEMO_CONFIG || {};
  const $ = (sel, raiz = document) => raiz.querySelector(sel);
  const $$ = (sel, raiz = document) => [...raiz.querySelectorAll(sel)];

  // Lee "portada.titulo" dentro de config.
  const leer = (ruta) => ruta.split(".").reduce((obj, clave) => (obj == null ? obj : obj[clave]), config);

  const vacio = (valor) =>
    valor == null || valor === "" || (Array.isArray(valor) && valor.length === 0) ||
    (typeof valor === "object" && !Array.isArray(valor) && Object.keys(valor).length === 0);

  // Crea un elemento con atributos e hijos sin usar innerHTML con datos del cliente.
  function el(etiqueta, attrs = {}, ...hijos) {
    const nodo = document.createElement(etiqueta);
    for (const [clave, valor] of Object.entries(attrs)) {
      if (valor == null || valor === false) continue;
      if (clave === "texto") nodo.textContent = valor;
      else nodo.setAttribute(clave, valor === true ? "" : valor);
    }
    for (const hijo of hijos.flat()) if (hijo != null) nodo.append(hijo);
    return nodo;
  }

  const enlaceWhatsapp = (mensaje) => {
    const c = config.contacto || {};
    if (!c.whatsapp) return "";
    return `https://wa.me/${c.whatsapp}?text=${encodeURIComponent(mensaje || c.mensajeWhatsapp || "")}`;
  };

  function aplicarColores() {
    const c = config.colores || {};
    const raiz = document.documentElement.style;
    if (c.primario) raiz.setProperty("--color-primario", c.primario);
    if (c.secundario) raiz.setProperty("--color-secundario", c.secundario);
    if (c.fondo) raiz.setProperty("--color-fondo", c.fondo);
    if (c.texto) raiz.setProperty("--color-texto", c.texto);
  }

  function ocultarSeccionesVacias() {
    for (const seccion of $$("[data-seccion]")) {
      const clave = seccion.dataset.seccion;
      let valor = config[clave];
      if (clave === "scrollGuiado") valor = valor && valor.frames > 0 ? valor : null;
      if (clave === "modelo3d") valor = valor && valor.modelo ? valor : null;
      if (vacio(valor)) seccion.hidden = true;
    }
  }

  function pintarTextos() {
    for (const nodo of $$("[data-texto]")) {
      const valor = leer(nodo.dataset.texto);
      if (vacio(valor)) nodo.hidden = true;
      else nodo.textContent = valor;
    }
  }

  function pintarCabecera() {
    const n = config.negocio || {};
    document.title = [n.nombre, n.eslogan].filter(Boolean).join(" · ") || "Demo";
    const marca = $("[data-marca]");
    marca.append(n.logo ? el("img", { src: n.logo, alt: n.nombre || "" }) : el("span", { texto: n.nombre }));

    const menu = $("[data-menu]");
    for (const seccion of $$("[data-menu-titulo]")) {
      if (seccion.hidden) continue;
      menu.append(el("a", { href: `#${seccion.id}`, texto: seccion.dataset.menuTitulo }));
    }

    const boton = $("[data-menu-boton]");
    boton.addEventListener("click", () => {
      const abierto = boton.getAttribute("aria-expanded") === "true";
      boton.setAttribute("aria-expanded", String(!abierto));
      menu.classList.toggle("abierto", !abierto);
    });
    menu.addEventListener("click", (e) => {
      if (e.target.closest("a")) {
        boton.setAttribute("aria-expanded", "false");
        menu.classList.remove("abierto");
      }
    });
  }

  function pintarPortada() {
    const p = config.portada || {};
    const media = $("[data-portada-media]");
    if (p.imagen) media.append(el("img", { src: p.imagen, alt: "", loading: "eager" }));
    const sinMovimiento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (p.video && !sinMovimiento) {
      media.append(el("video", { src: p.video, autoplay: true, muted: true, loop: true, playsinline: true, poster: p.imagen || null }));
    }
  }

  function pintarQuienesSomos() {
    const datos = (config.quienesSomos || {}).datos || [];
    $("[data-datos]").append(...datos.map((d) =>
      el("li", {}, el("strong", { texto: d.valor }), el("span", { texto: d.etiqueta }))));
  }

  function pintarServicios() {
    const tarjetas = (config.servicios || []).map((s) =>
      el("article", { class: "tarjeta", "data-tilt": true },
        el("div", { class: "tarjeta-media" },
          s.imagen ? el("img", { src: s.imagen, alt: "", loading: "lazy" }) : null,
          s.video ? el("video", { "data-src": s.video, muted: true, loop: true, playsinline: true, preload: "none" }) : null),
        el("div", { class: "tarjeta-texto" }, el("h3", { texto: s.titulo }), el("p", { texto: s.texto }))));
    $("[data-tarjetas]").append(...tarjetas);
  }

  function pintarHorarios() {
    const lista = $("[data-horarios]");
    for (const h of config.horarios || []) lista.append(el("dt", { texto: h.dia }), el("dd", { texto: h.horas }));
  }

  function pintarTarifas() {
    const tarifas = (config.tarifas || []).map((t) =>
      el("article", { class: t.destacada ? "tarifa destacada" : "tarifa" },
        el("h3", { texto: t.nombre }),
        el("p", { class: "precio" }, t.precio, el("small", { texto: t.periodo || "" })),
        el("ul", {}, (t.incluye || []).map((i) => el("li", { texto: i }))),
        el("a", { class: "boton", href: "#reservas", texto: "La quiero" })));
    $("[data-tarifas]").append(...tarifas);
  }

  function pintarGaleria() {
    const fotos = (config.galeria || []).map((src) =>
      el("figure", {}, el("img", { src, alt: "", loading: "lazy" })));
    $("[data-galeria]").append(...fotos);
  }

  function pintarContacto() {
    const c = config.contacto || {};
    const datos = $("[data-contacto]");
    if (c.direccion) datos.append(el("p", { texto: c.direccion }));
    if (c.telefono) datos.append(el("p", {}, el("a", { href: `tel:${c.telefono.replace(/\s/g, "")}`, texto: c.telefono })));
    if (c.email) datos.append(el("p", {}, el("a", { href: `mailto:${c.email}`, texto: c.email })));
    if (c.whatsapp) datos.append(el("a", { class: "boton", href: enlaceWhatsapp(), target: "_blank", rel: "noopener", texto: "Escríbenos por WhatsApp" }));
    if (!vacio(c.redes)) {
      datos.append(el("p", { class: "redes" }, c.redes.map((r) => el("a", { href: r.url, target: "_blank", rel: "noopener", texto: r.nombre }))));
    }
    if (c.mapa) {
      $("[data-mapa]").append(el("iframe", {
        title: "Mapa",
        loading: "lazy",
        referrerpolicy: "no-referrer-when-downgrade",
        src: `https://maps.google.com/maps?q=${encodeURIComponent(c.mapa)}&output=embed`,
      }));
    }

    const flotante = $("[data-whatsapp-flotante]");
    if (c.whatsapp) {
      flotante.href = enlaceWhatsapp();
      flotante.target = "_blank";
      flotante.rel = "noopener";
    } else {
      flotante.hidden = true;
    }
  }

  function pintarPie() {
    const n = config.negocio || {};
    $("[data-pie]").textContent = `© ${new Date().getFullYear()} ${n.nombre || ""}${n.ciudad ? " · " + n.ciudad : ""}`;
  }

  aplicarColores();
  ocultarSeccionesVacias();
  pintarTextos();
  pintarCabecera();
  pintarPortada();
  pintarQuienesSomos();
  pintarServicios();
  pintarHorarios();
  pintarTarifas();
  pintarGaleria();
  pintarContacto();
  pintarPie();

  // Utilidades compartidas con los efectos.
  window.Demo = { config, el, enlaceWhatsapp, $, $$ };
})();
