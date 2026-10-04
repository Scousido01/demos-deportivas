/*
 * Nicho club amateur: colores del club, escudo, noticias y calendario.
 * Mismos campos que base/config.js, más los propios del club (al final del archivo),
 * que pinta nicho.js: partidos, clasificacion, noticias y patrocinadores.
 * Las imágenes son marcadores de base/img; las fotos reales van en recursos/club/ o en img/.
 */
window.DEMO_CONFIG = {
  negocio: { nombre: "CD Atlético Ribera", nombreCorto: "Atl. Ribera", eslogan: "Cantera, barrio y pasión desde 1978", logo: "img/escudo.svg", ciudad: "Ribera del Ebro" },
  colores: { primario: "#0b5d1e", secundario: "#f2c230", fondo: "#f4f6f1", texto: "#14201a" },
  portada: {
    titulo: "Somos el Ribera",
    subtitulo: "Escuela desde los 4 años, 18 equipos federados y un campo abierto a todo el barrio.",
    boton: "Apunta a tu hijo o hija",
    imagen: "img/portada.svg",
    video: "",
  },
  quienesSomos: {
    titulo: "Más de 40 años formando deportistas",
    texto: "El Atlético Ribera nació de un grupo de vecinos. Hoy somos una escuela con entrenadores titulados y valores que van más allá del resultado.",
    datos: [{ valor: "1978", etiqueta: "fundación" }, { valor: "18", etiqueta: "equipos" }, { valor: "320", etiqueta: "jugadores" }, { valor: "450", etiqueta: "socios" }],
  },
  servicios: [
    { titulo: "Escuela", texto: "De 4 a 12 años, aprender jugando con entrenadores titulados.", imagen: "img/tarjeta.svg", video: "" },
    { titulo: "Equipos federados", texto: "De alevín a senior, masculino y femenino.", imagen: "img/tarjeta.svg", video: "" },
    { titulo: "Campus de verano", texto: "Julio en el campo: fútbol, piscina y amigos.", imagen: "img/tarjeta.svg", video: "" },
  ],
  scrollGuiado: { titulo: "Un partido en casa", textos: ["Vestuario.", "Calentamiento.", "Pitido inicial.", "¡Gol!"], ruta: "media/secuencia/frame-{n}.jpg", frames: 0, digitos: 3 },
  horarios: [
    { dia: "Escuela", horas: "L y X · 17:30 – 19:00" },
    { dia: "Equipos federados", horas: "L a J · 19:00 – 22:30" },
    { dia: "Partidos", horas: "Sábados y domingos" },
    { dia: "Oficina del club", horas: "L a V · 18:00 – 20:30" },
  ],
  tarifas: [
    { nombre: "Socio", precio: "40 €", periodo: "/temporada", incluye: ["Entrada a todos los partidos en casa", "Descuento en la tienda", "Voto en la asamblea"] },
    { nombre: "Familia", precio: "75 €", periodo: "/temporada", incluye: ["Hasta 2 adultos y 3 menores", "Todo lo del socio", "Bufanda de regalo"], destacada: true },
    { nombre: "Escuela", precio: "30 €", periodo: "/mes", incluye: ["2 entrenamientos por semana", "Equipación incluida", "Seguro deportivo"] },
  ],
  galeria: ["img/galeria.svg", "img/galeria.svg", "img/galeria.svg", "img/galeria.svg"],
  reservas: {
    titulo: "Pide un entrenamiento de prueba",
    actividades: ["Escuela (4–12 años)", "Equipo federado", "Campus de verano", "Hacerme socio"],
    franjas: ["Lunes", "Miércoles", "Viernes"],
  },
  modelo3d: { titulo: "", modelo: "", colores: [] },
  contacto: {
    whatsapp: "34600000000",
    mensajeWhatsapp: "Hola, quiero información sobre el club.",
    telefono: "+34 600 000 000",
    email: "info@atleticoribera.es",
    direccion: "Campo Municipal La Ribera, Av. del Río 12",
    mapa: "Campo Municipal, Zaragoza",
    redes: [{ nombre: "Instagram", url: "https://instagram.com/" }, { nombre: "Facebook", url: "https://facebook.com/" }],
  },

  /* ---- Campos propios del club (los pinta nicho.js) ---- */

  // Fecha que la demo toma como "hoy" para el próximo partido y la cuenta atrás.
  // Déjala vacía ("") para usar la fecha real; fíjala para que la demo no envejezca.
  fechaDemo: "",

  // Partidos de la temporada. "local: true" si jugamos en casa.
  // Con resultado salen en "Últimos resultados"; el primero pendiente del primer equipo es el "Próximo partido".
  equipoPrincipal: "Primer equipo",
  partidos: [
    { fecha: "2026-09-13T18:00", equipo: "Primer equipo", rival: "UD Valdemar", local: true, competicion: "Liga", resultado: "3-1" },
    { fecha: "2026-09-20T17:00", equipo: "Primer equipo", rival: "CF Puente Alto", local: false, competicion: "Liga", resultado: "1-1" },
    { fecha: "2026-09-27T18:00", equipo: "Primer equipo", rival: "SD Los Pinos", local: true, competicion: "Liga", resultado: "2-0" },
    { fecha: "2026-09-27T11:00", equipo: "Femenino", rival: "CD Arenal", local: true, competicion: "Liga", resultado: "4-2" },
    { fecha: "2026-10-03T10:00", equipo: "Juvenil A", rival: "Racing Norte", local: false, competicion: "Liga", resultado: "0-2" },
    { fecha: "2026-10-04T18:00", equipo: "Primer equipo", rival: "Atlético Sotillo", local: false, competicion: "Liga" },
    { fecha: "2026-10-10T10:00", equipo: "Juvenil A", rival: "CD San Roque", local: true, competicion: "Liga" },
    { fecha: "2026-10-11T12:00", equipo: "Femenino", rival: "Unión Vega", local: false, competicion: "Liga" },
    { fecha: "2026-10-11T18:00", equipo: "Primer equipo", rival: "CD Mirador", local: true, competicion: "Liga" },
    { fecha: "2026-10-14T20:30", equipo: "Primer equipo", rival: "UD Las Eras", local: true, competicion: "Copa Federación" },
    { fecha: "2026-10-18T17:00", equipo: "Primer equipo", rival: "Real Olivar", local: false, competicion: "Liga" },
    { fecha: "2026-10-18T11:00", equipo: "Femenino", rival: "CF Ribazo", local: true, competicion: "Liga" },
    { fecha: "2026-10-24T10:00", equipo: "Juvenil A", rival: "Atlético Sotillo", local: false, competicion: "Liga" },
    { fecha: "2026-10-25T18:00", equipo: "Primer equipo", rival: "SD Fuentefría", local: true, competicion: "Liga" },
  ],

  clasificacion: {
    titulo: "Primera Regional · Grupo 2",
    actualizada: "2026-09-28",
    filas: [
      { equipo: "CD Atlético Ribera", pj: 3, g: 2, e: 1, p: 0, puntos: 7, nosotros: true },
      { equipo: "Real Olivar", pj: 3, g: 2, e: 0, p: 1, puntos: 6 },
      { equipo: "CF Puente Alto", pj: 3, g: 1, e: 2, p: 0, puntos: 5 },
      { equipo: "CD Mirador", pj: 3, g: 1, e: 1, p: 1, puntos: 4 },
      { equipo: "Atlético Sotillo", pj: 3, g: 1, e: 0, p: 2, puntos: 3 },
      { equipo: "UD Valdemar", pj: 3, g: 0, e: 1, p: 2, puntos: 1 },
    ],
  },

  noticias: [
    {
      fecha: "2026-09-28",
      categoria: "Primer equipo",
      titulo: "Tercera victoria seguida y líderes en solitario",
      resumen: "Dos goles en la segunda parte ante Los Pinos dejan al equipo arriba tras tres jornadas.",
      imagen: "img/tarjeta.svg",
    },
    {
      fecha: "2026-09-24",
      categoria: "Escuela",
      titulo: "Abiertas las inscripciones de la escuela 2026-27",
      resumen: "Plazas para niños y niñas de 4 a 12 años. Primer entrenamiento de prueba gratis.",
      imagen: "img/tarjeta.svg",
    },
    {
      fecha: "2026-09-18",
      categoria: "Femenino",
      titulo: "El femenino estrena equipación y patrocinador",
      resumen: "Panadería La Espiga se une al proyecto del primer equipo femenino del club.",
      imagen: "img/tarjeta.svg",
    },
    {
      fecha: "2026-09-10",
      categoria: "Club",
      titulo: "Fiesta de presentación de todos los equipos",
      resumen: "Más de 600 personas llenaron el campo municipal para conocer las plantillas de la temporada.",
      imagen: "img/tarjeta.svg",
    },
  ],

  patrocinadores: ["Panadería La Espiga", "Talleres Ebro", "Farmacia Plaza", "Bar El Rincón", "Seguros Ribera"],
};
