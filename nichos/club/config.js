/*
 * Nicho club amateur de pádel: colores del club, escudo, noticias, liga por equipos y torneos.
 * Mismos campos que base/config.js, más los propios del club (al final del archivo),
 * que pinta nicho.js: partidos, torneos, clasificacion, ranking, noticias y patrocinadores.
 * Las imágenes son marcadores de base/img; las fotos reales van en recursos/club/ o en img/.
 */
window.DEMO_CONFIG = {
  negocio: { nombre: "Club Pádel Ribera", nombreCorto: "CP Ribera", eslogan: "Pádel de barrio, pistas llenas y buen ambiente", logo: "img/escudo.svg", ciudad: "Ribera del Ebro" },
  colores: { primario: "#0a3d91", secundario: "#c6f432", fondo: "#f3f6fa", texto: "#0f1a2e" },
  portada: {
    titulo: "Juega en el Ribera",
    subtitulo: "8 pistas, escuela para todos los niveles, liga por equipos y torneos cada mes.",
    boton: "Reserva pista o clase",
    imagen: "img/portada.svg",
    video: "",
  },
  quienesSomos: {
    titulo: "El club de pádel del barrio",
    texto: "Empezamos en 2012 con dos pistas y un grupo de amigos. Hoy somos más de 400 socios, una escuela con monitores titulados y cinco equipos en la liga federada.",
    datos: [{ valor: "8", etiqueta: "pistas" }, { valor: "420", etiqueta: "socios" }, { valor: "5", etiqueta: "equipos federados" }, { valor: "12", etiqueta: "torneos al año" }],
  },
  servicios: [
    { titulo: "Escuela de pádel", texto: "Clases en grupos de 4 por nivel, de iniciación a competición. Peques desde los 6 años.", imagen: "img/tarjeta.svg", video: "" },
    { titulo: "Liga por equipos", texto: "Cinco equipos en la liga federada, masculinos, femeninos y mixto.", imagen: "img/tarjeta.svg", video: "" },
    { titulo: "Torneos y americanas", texto: "Un torneo al mes y americanas los viernes para conocer a otros jugadores.", imagen: "img/tarjeta.svg", video: "" },
  ],
  scrollGuiado: { titulo: "Un viernes en el club", textos: ["Calientas.", "Peloteo.", "Bandeja.", "¡Por tres!"], ruta: "media/secuencia/frame-{n}.jpg", frames: 0, digitos: 3 },
  horarios: [
    { dia: "Pistas", horas: "L a D · 08:00 – 23:30" },
    { dia: "Escuela adultos", horas: "L a J · 18:00 – 22:00" },
    { dia: "Escuela peques", horas: "M y J · 17:00 – 18:00" },
    { dia: "Americanas", horas: "Viernes · 20:00" },
  ],
  tarifas: [
    { nombre: "Socio", precio: "25 €", periodo: "/mes", incluye: ["Pista a precio de socio (8 €/hora)", "Reserva con 7 días de antelación", "Torneos internos gratis"] },
    { nombre: "Escuela", precio: "45 €", periodo: "/mes", incluye: ["2 clases por semana en grupo de 4", "Monitor titulado", "Préstamo de pala"], destacada: true },
    { nombre: "Pista suelta", precio: "16 €", periodo: "/hora y media", incluye: ["Sin cuota", "Luz incluida", "Reserva con 2 días"] },
  ],
  galeria: ["img/galeria.svg", "img/galeria.svg", "img/galeria.svg", "img/galeria.svg"],
  reservas: {
    titulo: "Reserva pista o clase",
    actividades: ["Pista 1 h 30 min", "Clase de prueba (iniciación)", "Clase de perfeccionamiento", "Escuela peques"],
    franjas: ["Mañana (8:00 – 14:00)", "Tarde (14:00 – 19:00)", "Noche (19:00 – 23:30)"],
  },
  modelo3d: { titulo: "", modelo: "", colores: [] },
  contacto: {
    whatsapp: "34600000000",
    mensajeWhatsapp: "Hola, quiero información sobre el club de pádel.",
    telefono: "+34 600 000 000",
    email: "hola@padelribera.es",
    direccion: "Club Pádel Ribera, Av. del Río 12",
    mapa: "Av. del Río 12, Zaragoza",
    redes: [{ nombre: "Instagram", url: "https://instagram.com/" }, { nombre: "Facebook", url: "https://facebook.com/" }],
  },

  /* ---- Campos propios del club (los pinta nicho.js) ---- */

  // Fecha que la demo toma como "hoy" para el próximo partido y la cuenta atrás.
  // Déjala vacía ("") para usar la fecha real; fíjala para que la demo no envejezca.
  fechaDemo: "",

  // Eliminatorias de la liga por equipos (3 parejas por equipo: el resultado es parejas ganadas)
  // y torneos del club. "local: true" si se juega en nuestras pistas.
  // Con resultado salen en "Últimos resultados"; el primero pendiente del equipo principal es el "Próximo partido".
  equipoPrincipal: "Masculino A",
  partidos: [
    { fecha: "2026-09-13T10:00", equipo: "Masculino A", rival: "Pádel Valdemar", local: true, competicion: "Liga por equipos", resultado: "2-1" },
    { fecha: "2026-09-20T10:00", equipo: "Masculino A", rival: "Indoor Puente Alto", local: false, competicion: "Liga por equipos", resultado: "1-2" },
    { fecha: "2026-09-20T16:00", equipo: "Femenino A", rival: "CP Los Pinos", local: true, competicion: "Liga por equipos", resultado: "3-0" },
    { fecha: "2026-09-27T10:00", equipo: "Masculino A", rival: "Club Arenal Pádel", local: true, competicion: "Liga por equipos", resultado: "3-0" },
    { fecha: "2026-10-03T17:00", equipo: "Mixto", rival: "Racket Norte", local: false, competicion: "Liga por equipos", resultado: "2-1" },
    { fecha: "2026-10-04T10:00", equipo: "Masculino A", rival: "Sotillo Pádel", local: false, competicion: "Liga por equipos" },
    { fecha: "2026-10-04T16:00", equipo: "Femenino A", rival: "Vega Indoor", local: false, competicion: "Liga por equipos" },
    { fecha: "2026-10-11T10:00", equipo: "Masculino A", rival: "CP Mirador", local: true, competicion: "Liga por equipos" },
    { fecha: "2026-10-17T17:00", equipo: "Mixto", rival: "Pádel Las Eras", local: true, competicion: "Liga por equipos" },
    { fecha: "2026-10-18T10:00", equipo: "Masculino A", rival: "Olivar Pádel Club", local: false, competicion: "Liga por equipos" },
    { fecha: "2026-10-18T16:00", equipo: "Femenino A", rival: "CP Ribazo", local: true, competicion: "Liga por equipos" },
    { fecha: "2026-10-25T10:00", equipo: "Masculino A", rival: "Fuentefría Pádel", local: true, competicion: "Liga por equipos" },
  ],

  // Torneos y americanas abiertos a inscripción (salen solo los que aún no se han jugado).
  torneos: [
    { fecha: "2026-10-09T20:00", tipo: "Americana", nombre: "Americana de los viernes", categorias: "Mixta, nivel medio", precio: "10 € con bolas y cerveza", plazas: "Quedan 6 plazas" },
    { fecha: "2026-10-10T09:00", tipo: "Torneo", nombre: "Torneo de otoño", categorias: "Masculina, femenina y mixta por niveles", precio: "20 € por jugador", plazas: "Cuadros de 16 parejas" },
    { fecha: "2026-10-24T10:00", tipo: "Escuela", nombre: "Torneo de la escuela peques", categorias: "De 6 a 14 años", precio: "Gratis para alumnos" },
    { fecha: "2026-10-30T20:00", tipo: "Americana", nombre: "Americana de Halloween", categorias: "Mixta, todos los niveles", precio: "12 € con cena", plazas: "Disfraz opcional" },
  ],

  // Ranking interno: suma puntos de torneos, americanas y retos entre socios.
  ranking: {
    titulo: "Ranking del club",
    nota: "Puntos de torneos, americanas y retos entre socios · actualizado el 28 sept",
    jugadores: [
      { nombre: "Laura Gil", nivel: "4.5", puntos: 1240, tendencia: "sube" },
      { nombre: "Dani Ortega", nivel: "4.5", puntos: 1185, tendencia: "igual" },
      { nombre: "Marta Pardo", nivel: "4.0", puntos: 1120, tendencia: "sube" },
      { nombre: "Rubén Sanz", nivel: "4.0", puntos: 1090, tendencia: "baja" },
      { nombre: "Ana Lozano", nivel: "3.5", puntos: 980, tendencia: "sube" },
      { nombre: "Javi Romero", nivel: "3.5", puntos: 945, tendencia: "baja" },
    ],
  },

  clasificacion: {
    titulo: "Liga por equipos · 2ª categoría masculina",
    actualizada: "2026-09-28",
    filas: [
      { equipo: "Club Pádel Ribera", pj: 3, g: 2, e: 0, p: 1, puntos: 6, nosotros: true },
      { equipo: "Indoor Puente Alto", pj: 3, g: 2, e: 0, p: 1, puntos: 6 },
      { equipo: "Olivar Pádel Club", pj: 3, g: 2, e: 0, p: 1, puntos: 6 },
      { equipo: "CP Mirador", pj: 3, g: 1, e: 0, p: 2, puntos: 3 },
      { equipo: "Sotillo Pádel", pj: 3, g: 1, e: 0, p: 2, puntos: 3 },
      { equipo: "Pádel Valdemar", pj: 3, g: 1, e: 0, p: 2, puntos: 3 },
    ],
  },

  noticias: [
    { fecha: "2026-09-28", categoria: "Liga", titulo: "El Masculino A gana 3-0 y se coloca líder", resumen: "Las tres parejas ganaron en dos sets ante el Arenal. Empate a puntos arriba con Puente Alto y Olivar.", imagen: "img/tarjeta.svg" },
    { fecha: "2026-09-25", categoria: "Torneos", titulo: "Abiertas las inscripciones del Torneo de otoño", resumen: "Categorías masculina, femenina y mixta por niveles. 10 y 11 de octubre, con regalo de bienvenida.", imagen: "img/tarjeta.svg" },
    { fecha: "2026-09-18", categoria: "Escuela", titulo: "Nuevos grupos de iniciación por las mañanas", resumen: "Grupos de 4 a las 10:00 y a las 11:30 para quien no puede por la tarde. Primera clase gratis.", imagen: "img/tarjeta.svg" },
    { fecha: "2026-09-10", categoria: "Club", titulo: "Estrenamos césped en las pistas 1 a 4", resumen: "Césped nuevo de última generación y LED en todas las pistas cubiertas.", imagen: "img/tarjeta.svg" },
  ],

  patrocinadores: ["Deportes Ebro", "Fisioterapia Plaza", "Bar El Rincón", "Seguros Ribera", "Ópticas Vista"],
};
