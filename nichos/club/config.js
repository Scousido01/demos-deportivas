/* Nicho club deportivo: colores del club, escuela, equipos y noticias. */
window.DEMO_CONFIG = {
  negocio: { nombre: "CD Ribera", eslogan: "Cantera, equipo y afición desde 1978", logo: "", ciudad: "Tu ciudad" },
  colores: { primario: "#1d4ed8", secundario: "#facc15", fondo: "#0f1b33", texto: "#f8fafc" },
  portada: {
    titulo: "Somos el club de tu barrio",
    subtitulo: "Escuela de fútbol desde los 4 años, equipos federados y un campo abierto a todo el mundo.",
    boton: "Apunta a tu hijo o hija",
    imagen: "img/portada.svg",
    video: "",
  },
  quienesSomos: {
    titulo: "Más de 40 años formando deportistas",
    texto: "El CD Ribera nació de un grupo de vecinos. Hoy somos una escuela con entrenadores titulados y valores que van más allá del resultado.",
    datos: [{ valor: "1978", etiqueta: "fundación" }, { valor: "22", etiqueta: "equipos" }, { valor: "350", etiqueta: "jugadores" }],
  },
  servicios: [
    { titulo: "Escuela", texto: "De 4 a 12 años, aprender jugando con entrenadores titulados.", imagen: "img/tarjeta.svg", video: "" },
    { titulo: "Equipos federados", texto: "Categorías de alevín a senior, masculino y femenino.", imagen: "img/tarjeta.svg", video: "" },
    { titulo: "Campus de verano", texto: "Julio en el campo: fútbol, piscina y amigos.", imagen: "img/tarjeta.svg", video: "" },
  ],
  scrollGuiado: { titulo: "Un partido en casa", textos: ["Vestuario.", "Calentamiento.", "Pitido inicial.", "¡Gol!"], ruta: "media/secuencia/frame-{n}.jpg", frames: 0, digitos: 3 },
  horarios: [
    { dia: "Entrenamientos escuela", horas: "L y X · 17:30 – 19:00" },
    { dia: "Equipos federados", horas: "L a J · 19:00 – 22:30" },
    { dia: "Partidos", horas: "Sábados y domingos" },
    { dia: "Oficina del club", horas: "L a V · 18:00 – 20:30" },
  ],
  tarifas: [
    { nombre: "Escuela", precio: "35 €", periodo: "/mes", incluye: ["2 entrenamientos semanales", "Equipación incluida"] },
    { nombre: "Federado", precio: "45 €", periodo: "/mes", incluye: ["Ficha y seguro", "3 entrenamientos semanales", "Liga y torneos"], destacada: true },
    { nombre: "Socio", precio: "60 €", periodo: "/temporada", incluye: ["Entrada a todos los partidos", "Descuento en tienda", "Voto en asamblea"] },
  ],
  galeria: ["img/galeria.svg", "img/galeria.svg", "img/galeria.svg", "img/galeria.svg", "img/galeria.svg", "img/galeria.svg", "img/galeria.svg", "img/galeria.svg"],
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
    email: "secretaria@cdribera.es",
    direccion: "Campo Municipal, Tu ciudad",
    mapa: "Campo Municipal, Tu ciudad",
    redes: [{ nombre: "Instagram", url: "https://instagram.com/" }, { nombre: "Facebook", url: "https://facebook.com/" }],
  },
};
