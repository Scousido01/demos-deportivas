/*
 * Secciones propias del nicho club: próximo partido con cuenta atrás, últimos resultados,
 * noticias con filtro, calendario por equipo, clasificación y cinta de patrocinadores.
 * Se carga después de js/app.js y usa sus utilidades (window.Demo). No toca los efectos de base/.
 * Cada sección sale solo si su campo existe en config.js.
 */
(function () {
  "use strict";
  if (!window.Demo) return;
  const { config, el, $, $$ } = window.Demo;
  const sinMovimiento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const hayDatos = (v) => Array.isArray(v) ? v.length > 0 : v != null && v !== "";

  const fecha = (opciones) => new Intl.DateTimeFormat("es-ES", opciones);
  const fmtDia = fecha({ weekday: "short", day: "numeric", month: "short" });
  const fmtLargo = fecha({ weekday: "long", day: "numeric", month: "long" });
  const fmtHora = fecha({ hour: "2-digit", minute: "2-digit" });
  const fmtMes = fecha({ month: "long", year: "numeric" });
  const fmtSemana = fecha({ weekday: "short" });

  const n = config.negocio || {};
  const nosotros = n.nombreCorto || n.nombre || "";
  const hoy = () => (config.fechaDemo ? new Date(config.fechaDemo) : new Date());

  const partidos = (config.partidos || [])
    .map((p) => ({ ...p, d: new Date(p.fecha) }))
    .sort((a, b) => a.d - b.d);
  const pendientes = partidos.filter((p) => !p.resultado && p.d >= hoy());
  const jugados = partidos.filter((p) => p.resultado).reverse();
  const proximo = pendientes.find((p) => p.equipo === config.equipoPrincipal) || pendientes[0];

  const local = (p) => (p.local ? nosotros : p.rival);
  const visitante = (p) => (p.local ? p.rival : nosotros);
  const desenlace = (p) => {
    const [a, b] = p.resultado.split("-").map(Number);
    const [nuestros, suyos] = p.local ? [a, b] : [b, a];
    return nuestros > suyos ? "victoria" : nuestros < suyos ? "derrota" : "empate";
  };

  // Archivo .ics para "Añadir a mi calendario" (sin servidor).
  function enlaceIcs(p) {
    const f = (d) => d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
    const lineas = [
      "BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//demos-deportivas//club//ES", "BEGIN:VEVENT",
      `UID:${f(p.d)}-${p.rival.replace(/\W/g, "")}@demos-deportivas`, `DTSTAMP:${f(new Date())}`,
      `DTSTART:${f(p.d)}`, `DTEND:${f(new Date(p.d.getTime() + 2 * 3600e3))}`,
      `SUMMARY:${local(p)} - ${visitante(p)} (${p.equipo})`,
      `LOCATION:${p.local ? (config.contacto || {}).direccion || "" : "Pistas de " + p.rival}`,
      "END:VEVENT", "END:VCALENDAR",
    ];
    return "data:text/calendar;charset=utf-8," + encodeURIComponent(lineas.join("\r\n"));
  }

  const escudoRival = (nombre) => el("span", { class: "escudo-rival", "aria-hidden": "true", texto: nombre.trim()[0] });
  const escudoPropio = () => n.logo ? el("img", { src: n.logo, alt: "" }) : escudoRival(nosotros);
  const seccion = (id, menu, titulo, ...hijos) =>
    el("section", { id, class: `bloque club-${id}`, "data-menu-titulo": menu }, titulo ? el("h2", { texto: titulo }) : null, ...hijos);

  // ---- Próximo partido y últimos resultados ----
  function seccionPartido() {
    if (!hayDatos(partidos)) return null;
    let tarjeta;
    if (proximo) {
      const cuenta = el("div", { class: "cuenta", role: "timer", "aria-label": "Cuenta atrás" });
      const pintarCuenta = () => {
        const s = Math.max(0, Math.floor((proximo.d - hoy()) / 1000));
        cuenta.replaceChildren(...[["días", s / 86400], ["horas", (s % 86400) / 3600], ["min", (s % 3600) / 60], ["seg", s % 60]]
          .map(([t, v]) => el("div", {}, el("strong", { texto: String(Math.floor(v)).padStart(2, "0") }), el("span", { texto: t }))));
      };
      pintarCuenta();
      if (!config.fechaDemo) setInterval(pintarCuenta, 1000);
      const lado = (nombre, propio) => el("div", { class: propio ? "lado nosotros" : "lado" }, propio ? escudoPropio() : escudoRival(nombre), el("span", { texto: nombre }));
      tarjeta = el("div", { class: "partido-tarjeta" },
        el("p", { class: "partido-comp", texto: `${proximo.competicion} · ${proximo.equipo}` }),
        el("div", { class: "partido-equipos" }, lado(local(proximo), proximo.local), el("span", { class: "vs", texto: "VS" }), lado(visitante(proximo), !proximo.local)),
        el("p", { class: "partido-fecha", texto: `${fmtLargo.format(proximo.d)} · ${fmtHora.format(proximo.d)} h · ${proximo.local ? "En casa" : "Fuera"}` }),
        cuenta,
        el("a", { class: "boton", href: enlaceIcs(proximo), download: "partido.ics", texto: "Añadir a mi calendario" }));
    } else {
      tarjeta = el("div", { class: "partido-tarjeta" }, el("p", { class: "partido-fecha", texto: "Temporada terminada. ¡Nos vemos en la próxima!" }));
    }
    const resultados = hayDatos(jugados) ? el("div", { class: "ultimos" },
      el("h3", { texto: "Últimos resultados" }),
      el("ul", { class: "resultados" }, jugados.slice(0, 5).map((p) => el("li", { class: desenlace(p) },
        el("span", { class: "res-fecha", texto: fmtDia.format(p.d) }),
        el("span", { class: "res-equipo", texto: p.equipo }),
        el("span", { class: "res-partido" }, local(p), " ", el("b", { texto: p.resultado }), " ", visitante(p)))))) : null;
    return seccion("partido", "Partidos", proximo ? "Próximo partido" : "Partidos", el("div", { class: "partido-rejilla" }, tarjeta, resultados));
  }

  // ---- Noticias con filtro por categoría ----
  function seccionNoticias() {
    const noticias = (config.noticias || []).slice().sort((a, b) => b.fecha.localeCompare(a.fecha));
    if (!hayDatos(noticias)) return null;
    const lista = el("div", { class: "noticias" });
    const pintar = (cat) => lista.replaceChildren(...noticias
      .filter((x) => cat === "Todas" || x.categoria === cat)
      .map((x, i) => el("article", { class: i === 0 && cat === "Todas" ? "noticia destacada" : "noticia" },
        el("div", { class: "noticia-img" }, x.imagen ? el("img", { src: x.imagen, alt: "", loading: "lazy" }) : null),
        el("div", { class: "noticia-texto" },
          el("p", { class: "noticia-meta" }, el("span", { class: "chip", texto: x.categoria }), " ", fmtDia.format(new Date(x.fecha))),
          el("h3", { texto: x.titulo }),
          el("p", { texto: x.resumen })))));
    const categorias = ["Todas", ...new Set(noticias.map((x) => x.categoria))];
    const filtros = el("div", { class: "filtros", role: "group", "aria-label": "Filtrar noticias" },
      categorias.map((c, i) => el("button", { type: "button", "aria-pressed": String(i === 0), texto: c })));
    filtros.addEventListener("click", (e) => {
      const b = e.target.closest("button");
      if (!b) return;
      $$("button", filtros).forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
      const cambiar = () => pintar(b.textContent);
      if (document.startViewTransition && !sinMovimiento) document.startViewTransition(cambiar);
      else cambiar();
    });
    pintar("Todas");
    return seccion("noticias", "Noticias", null, el("div", { class: "cabecera-seccion" }, el("h2", { texto: "Noticias" }), filtros), lista);
  }

  // ---- Calendario agrupado por mes y filtrable por equipo ----
  function seccionCalendario() {
    if (!hayDatos(partidos)) return null;
    const caja = el("div");
    const selector = el("select", {}, ["Todos", ...new Set(partidos.map((p) => p.equipo))].map((e) => el("option", { texto: e })));
    const pintar = () => {
      const meses = new Map();
      partidos.filter((p) => selector.value === "Todos" || p.equipo === selector.value).forEach((p) => {
        const mes = fmtMes.format(p.d);
        meses.set(mes, [...(meses.get(mes) || []), p]);
      });
      caja.replaceChildren(...[...meses].flatMap(([mes, ps]) => [
        el("h3", { class: "mes", texto: mes }),
        el("ul", { class: "jornadas" }, ps.map((p) => el("li", { class: [p.resultado && "jugado", p === proximo && "siguiente"].filter(Boolean).join(" ") || null },
          el("time", { datetime: p.fecha }, el("b", { texto: String(p.d.getDate()) }), fmtSemana.format(p.d)),
          el("div", { class: "jornada-info" },
            el("span", { class: "jornada-equipo", texto: `${p.equipo} · ${p.competicion}` }),
            el("strong", { texto: `${local(p)} – ${visitante(p)}` })),
          p.resultado
            ? el("span", { class: "jornada-dato" }, el("b", { class: `marcador ${desenlace(p)}`, texto: p.resultado }))
            : el("span", { class: "jornada-dato" }, `${fmtHora.format(p.d)} h`, el("small", { texto: p.local ? "Casa" : "Fuera" }))))),
      ]));
    };
    selector.addEventListener("change", pintar);
    pintar();
    return seccion("calendario", "Calendario", null,
      el("div", { class: "cabecera-seccion" }, el("h2", { texto: "Calendario" }), el("label", { class: "selector" }, "Equipo ", selector)),
      caja);
  }

  // ---- Clasificación ----
  function seccionClasificacion() {
    const cl = config.clasificacion;
    if (!cl || !hayDatos(cl.filas)) return null;
    const columnas = ["#", "Equipo", "PJ", "G", "E", "P", "Pts"];
    const tabla = el("table", { class: "tabla" },
      el("thead", {}, el("tr", {}, columnas.map((c) => el("th", { scope: "col", texto: c })))),
      el("tbody", {}, cl.filas.map((f, i) => el("tr", { class: f.nosotros ? "nosotros" : null },
        [i + 1, f.equipo, f.pj, f.g, f.e, f.p].map((v) => el("td", { texto: String(v) })),
        el("td", {}, el("b", { texto: String(f.puntos) }))))));
    const nota = [cl.titulo, cl.actualizada && `actualizada el ${fmtDia.format(new Date(cl.actualizada))}`].filter(Boolean).join(" · ");
    return seccion("clasificacion", null, "Clasificación", el("p", { class: "nota", texto: nota }), el("div", { class: "tabla-envoltura" }, tabla));
  }

  // ---- Cinta de patrocinadores ----
  function seccionPatrocinadores() {
    const pats = config.patrocinadores || [];
    if (!hayDatos(pats)) return null;
    const nombres = (oculto) => pats.map((p) => el("span", { "aria-hidden": oculto ? "true" : null, texto: p }));
    return el("section", { class: "patrocinadores", "aria-label": "Patrocinadores" },
      el("div", { class: "cinta" }, el("div", { class: "cinta-pista" }, nombres(false), nombres(true))));
  }

  // ---- Colocación en la página ----
  const despues = (ancla, nodo) => { if (nodo && ancla) ancla.after(nodo); return nodo || ancla; };
  let ancla = $("#inicio");
  ancla = despues(ancla, seccionPartido());
  despues(ancla, seccionNoticias());
  ancla = $("#servicios");
  ancla = despues(ancla, seccionCalendario());
  despues(ancla, seccionClasificacion());
  const patrocinadores = seccionPatrocinadores();
  if (patrocinadores) $("#contacto").before(patrocinadores);

  // app.js ya montó el menú: se rehace en el orden real de la página.
  const menu = $("[data-menu]");
  menu.replaceChildren(...$$("[data-menu-titulo]")
    .filter((s) => !s.hidden && s.dataset.menuTitulo)
    .map((s) => el("a", { href: `#${s.id}`, texto: s.dataset.menuTitulo })));
})();
