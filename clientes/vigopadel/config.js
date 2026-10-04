/*
 * Demo personalizada para Vigopadel (Sárdoma, Vigo). Parte del nicho club de pádel.
 *
 * Datos reales (fuentes públicas consultadas el 2026-10-04: Páxinas Galegas, padelnest,
 * pistaenjuego.com, esopiniones.com): nombre, dirección, teléfono, correo, 5 pistas cubiertas,
 * 2.000 m², cafetería, vestuarios, tienda, escuela Vigopadel-Progede, torneos sociales y open,
 * horario y precio "desde 5 €/hora/persona".
 *
 * De ejemplo (hay que confirmarlo o quitarlo antes de enviarla): colores y escudo, cuotas exactas,
 * equipos y partidos, torneos, ranking, clasificación, noticias y patrocinadores. Los rivales y
 * jugadores son ficticios a propósito. Ver clientes/vigopadel/README.md.
 */
window.DEMO_CONFIG = {
  negocio: { nombre: "Vigopadel", nombreCorto: "Vigopadel", eslogan: "Pádel cuberto en Sárdoma, chova ou faga sol", logo: "img/escudo.svg", ciudad: "Vigo" },
  colores: { primario: "#0b3a5b", secundario: "#ffc629", fondo: "#f2f6f9", texto: "#0c1b2a" },
  portada: {
    titulo: "Reserva tu pista en Vigopadel",
    subtitulo: "5 pistas cubiertas en Sárdoma, escuela Vigopadel-Progede y torneos todo el año. Reserva desde el móvil en 30 segundos.",
    boton: "Reservar pista",
    imagen: "img/portada.svg",
    video: "",
  },
  quienesSomos: {
    titulo: "Pádel indoor en Vigo",
    texto: "Más de 2.000 m² en Sárdoma pensados para jugar al pádel en Vigo sin mirar al cielo: cinco pistas cubiertas reglamentarias, vestuarios, cafetería y tienda especializada. Y la escuela Vigopadel-Progede para aprender o competir, con monitores para todos los niveles.",
    datos: [{ valor: "5", etiqueta: "pistas cubiertas" }, { valor: "2.000", etiqueta: "m² de club" }, { valor: "365", etiqueta: "días sin lluvia" }, { valor: "5 €", etiqueta: "hora y persona, desde" }],
  },
  servicios: [
    { titulo: "Escuela Vigopadel-Progede", texto: "Clases de iniciación, perfeccionamiento y competición, y grupos para peques. Monitores con experiencia y grupos por nivel.", imagen: "img/tarjeta.svg", video: "" },
    { titulo: "Torneos sociales y open", texto: "Torneos del club, americanas y opens para jugar con gente de tu nivel y subir en el ranking.", imagen: "img/tarjeta.svg", video: "" },
    { titulo: "Cafetería y tienda", texto: "Tercer tiempo en la cafetería y tienda con palas, pelotas y encordados para no salir del club.", imagen: "img/tarjeta.svg", video: "" },
  ],
  scrollGuiado: { titulo: "Una tarde en Vigopadel", textos: ["Llegas.", "Calientas.", "Bandeja.", "¡Por tres!"], ruta: "media/secuencia/frame-{n}.jpg", frames: 0, digitos: 3 },
  horarios: [
    { dia: "Lunes a viernes", horas: "09:30 – 24:00" },
    { dia: "Sábados y domingos", horas: "09:30 – 14:00 · 17:00 – 21:30" },
    { dia: "Escuela adultos", horas: "L a J · tardes (por confirmar)" },
    { dia: "Escuela peques", horas: "Tardes entre semana (por confirmar)" },
  ],
  tarifas: [
    { nombre: "Pista", precio: "desde 5 €", periodo: "/hora y persona", incluye: ["Pistas cubiertas reglamentarias", "Reserva online al momento", "Recordatorio por WhatsApp"] },
    { nombre: "Escuela", precio: "Consultar", periodo: "", incluye: ["Iniciación, perfeccionamiento y competición", "Grupos por nivel", "Clase de prueba"], destacada: true },
    { nombre: "Peques", precio: "Consultar", periodo: "", incluye: ["Grupos por edad", "Torneo de la escuela", "Material para empezar"] },
  ],
  galeria: ["img/galeria.svg", "img/galeria.svg", "img/galeria.svg", "img/galeria.svg"],
  reservas: {
    titulo: "Reserva pista o clase",
    actividades: ["Pista 1 h 30 min", "Clase de prueba (iniciación)", "Clase de perfeccionamiento", "Escuela peques"],
    franjas: ["Mañana (9:30 – 14:00)", "Tarde (14:00 – 19:00)", "Noche (19:00 – 24:00)"],
  },
  modelo3d: { titulo: "", modelo: "", colores: [] },
  contacto: {
    // Pendiente: el club solo publica fijo (986 093 543). Pedir el móvil de WhatsApp antes de enviarla.
    whatsapp: "34986093543",
    mensajeWhatsapp: "Hola, quiero reservar pista en Vigopadel.",
    telefono: "986 093 543",
    email: "info@vigopadel.com",
    direccion: "Estrada Ponte Segade-Sárdoma 29, 36214 Vigo",
    mapa: "Vigopadel, Estrada Ponte Segade-Sárdoma 29, 36214 Vigo",
    redes: [{ nombre: "Facebook", url: "https://www.facebook.com/Vigopadel/" }],
  },

  /* ---- Campos propios del club (los pinta nicho.js). Todo lo de abajo es DE EJEMPLO. ---- */

  // "Hoy" fijo para que el próximo partido no caduque mientras se enseña la demo.
  fechaDemo: "2026-10-06",

  equipoPrincipal: "Masculino A",
  partidos: [
    { fecha: "2026-09-19T10:00", equipo: "Masculino A", rival: "Pádel Atlántico", local: true, competicion: "Liga galega por equipos", resultado: "2-1" },
    { fecha: "2026-09-26T10:00", equipo: "Masculino A", rival: "Club Ría Indoor", local: false, competicion: "Liga galega por equipos", resultado: "1-2" },
    { fecha: "2026-09-26T17:00", equipo: "Femenino A", rival: "CP Monte Alba", local: true, competicion: "Liga galega por equipos", resultado: "3-0" },
    { fecha: "2026-10-03T10:00", equipo: "Masculino A", rival: "Pádel Costa Norte", local: true, competicion: "Liga galega por equipos", resultado: "3-0" },
    { fecha: "2026-10-04T17:00", equipo: "Mixto", rival: "Racket Miño", local: false, competicion: "Liga galega por equipos", resultado: "2-1" },
    { fecha: "2026-10-10T10:00", equipo: "Masculino A", rival: "Indoor Las Rías", local: false, competicion: "Liga galega por equipos" },
    { fecha: "2026-10-11T17:00", equipo: "Femenino A", rival: "Pádel Cíes", local: false, competicion: "Liga galega por equipos" },
    { fecha: "2026-10-17T10:00", equipo: "Masculino A", rival: "CP Castro", local: true, competicion: "Liga galega por equipos" },
    { fecha: "2026-10-18T17:00", equipo: "Mixto", rival: "Pádel Lagares", local: true, competicion: "Liga galega por equipos" },
    { fecha: "2026-10-24T10:00", equipo: "Masculino A", rival: "Club Morrazo Pádel", local: false, competicion: "Liga galega por equipos" },
    { fecha: "2026-10-25T17:00", equipo: "Femenino A", rival: "CP Baiona Indoor", local: true, competicion: "Liga galega por equipos" },
    { fecha: "2026-10-31T10:00", equipo: "Masculino A", rival: "Pádel Atlántico", local: false, competicion: "Liga galega por equipos" },
  ],

  torneos: [
    { fecha: "2026-10-09T20:00", tipo: "Americana", nombre: "Americana dos venres", categorias: "Mixta, nivel medio", precio: "10 € con bolas y bebida", plazas: "Quedan 6 plazas" },
    { fecha: "2026-10-17T09:00", tipo: "Torneo", nombre: "Open de outono Vigopadel", categorias: "Masculina, femenina y mixta por niveles", precio: "20 € por jugador", plazas: "Cuadros de 16 parejas" },
    { fecha: "2026-10-24T10:00", tipo: "Escuela", nombre: "Torneo da escola Vigopadel-Progede", categorias: "De 6 a 14 años", precio: "Gratis para alumnos" },
    { fecha: "2026-10-31T20:00", tipo: "Americana", nombre: "Americana de Samaín", categorias: "Mixta, todos los niveles", precio: "12 € con cena", plazas: "Disfraz opcional" },
  ],

  ranking: {
    titulo: "Ranking Vigopadel",
    nota: "Puntos de torneos, americanas y retos entre socios · actualizado el 4 oct",
    jugadores: [
      { nombre: "Uxía Pereira", nivel: "4.5", puntos: 1240, tendencia: "sube" },
      { nombre: "Brais Costas", nivel: "4.5", puntos: 1185, tendencia: "igual" },
      { nombre: "Antía Lago", nivel: "4.0", puntos: 1120, tendencia: "sube" },
      { nombre: "Iago Rial", nivel: "4.0", puntos: 1090, tendencia: "baja" },
      { nombre: "Noa Vilas", nivel: "3.5", puntos: 980, tendencia: "sube" },
      { nombre: "Xoán Freire", nivel: "3.5", puntos: 945, tendencia: "baja" },
    ],
  },

  clasificacion: {
    titulo: "Liga galega por equipos · 2ª masculina (ejemplo)",
    actualizada: "2026-10-04",
    filas: [
      { equipo: "Vigopadel", pj: 3, g: 2, e: 0, p: 1, puntos: 6, nosotros: true },
      { equipo: "Club Ría Indoor", pj: 3, g: 2, e: 0, p: 1, puntos: 6 },
      { equipo: "Indoor Las Rías", pj: 3, g: 2, e: 0, p: 1, puntos: 6 },
      { equipo: "CP Castro", pj: 3, g: 1, e: 0, p: 2, puntos: 3 },
      { equipo: "Club Morrazo Pádel", pj: 3, g: 1, e: 0, p: 2, puntos: 3 },
      { equipo: "Pádel Atlántico", pj: 3, g: 1, e: 0, p: 2, puntos: 3 },
    ],
  },

  noticias: [
    { fecha: "2026-10-04", categoria: "Club", titulo: "Ya puedes reservar pista desde el móvil", resumen: "Elige día, pista y hora, y te llega la confirmación y un recordatorio por WhatsApp. Sin llamadas.", imagen: "img/tarjeta.svg" },
    { fecha: "2026-10-03", categoria: "Liga", titulo: "El Masculino A gana 3-0 y se pone arriba", resumen: "Las tres parejas ganaron en dos sets. Triple empate a puntos en cabeza.", imagen: "img/tarjeta.svg" },
    { fecha: "2026-09-29", categoria: "Torneos", titulo: "Abiertas las inscripciones del Open de outono", resumen: "Categorías masculina, femenina y mixta por niveles. 17 y 18 de octubre en Sárdoma.", imagen: "img/tarjeta.svg" },
    { fecha: "2026-09-22", categoria: "Escuela", titulo: "Nuevos grupos en la escuela Vigopadel-Progede", resumen: "Grupos de iniciación y perfeccionamiento por las tardes. Primera clase de prueba sin compromiso.", imagen: "img/tarjeta.svg" },
  ],

  patrocinadores: ["Tu marca aquí", "Fisioterapia (ejemplo)", "Cafetería del club", "Tienda Vigopadel", "Patrocinador (ejemplo)"],
};
