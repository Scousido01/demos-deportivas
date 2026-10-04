/* Nicho gimnasio: oscuro y enérgico. Copia este nicho con scripts/nueva-demo.mjs para cada cliente. */
window.DEMO_CONFIG = {
  negocio: { nombre: "Forja Gym", eslogan: "Entrena fuerte, entrena cerca", logo: "", ciudad: "Tu ciudad" },
  colores: { primario: "#ff4d1a", secundario: "#ffd23f", fondo: "#0b0b0d", texto: "#f5f5f5" },
  portada: {
    titulo: "Más fuerte cada semana",
    subtitulo: "Sala de musculación, clases dirigidas y entrenadores que te siguen de verdad. Abierto de 7 a 23.",
    boton: "Prueba gratis un día",
    imagen: "img/portada.svg",
    video: "",
  },
  quienesSomos: {
    titulo: "Un gimnasio de barrio con equipo de élite",
    texto: "Llevamos años ayudando a gente normal a ponerse en forma. Sin postureo, con máquinas buenas y un equipo que se sabe tu nombre.",
    datos: [{ valor: "1.200 m²", etiqueta: "de sala" }, { valor: "40", etiqueta: "clases a la semana" }, { valor: "8", etiqueta: "entrenadores" }],
  },
  servicios: [
    { titulo: "Musculación", texto: "Peso libre, racks y máquinas de última generación.", imagen: "img/tarjeta.svg", video: "" },
    { titulo: "Clases dirigidas", texto: "HIIT, ciclo, funcional y movilidad todos los días.", imagen: "img/tarjeta.svg", video: "" },
    { titulo: "Entrenamiento personal", texto: "Un plan para ti y alguien que te empuja a cumplirlo.", imagen: "img/tarjeta.svg", video: "" },
  ],
  scrollGuiado: { titulo: "Tu primer día", textos: ["Llegas.", "Calientas.", "Lo das todo.", "Vuelves mañana."], ruta: "media/secuencia/frame-{n}.svg", frames: 48, digitos: 3 }, // marcador: cambia por la secuencia real (.jpg)
  horarios: [
    { dia: "Lunes a viernes", horas: "07:00 – 23:00" },
    { dia: "Sábados", horas: "09:00 – 21:00" },
    { dia: "Domingos y festivos", horas: "09:00 – 14:00" },
  ],
  tarifas: [
    { nombre: "Libre", precio: "34 €", periodo: "/mes", incluye: ["Acceso a sala", "Vestuarios y taquilla"] },
    { nombre: "Total", precio: "49 €", periodo: "/mes", incluye: ["Sala y todas las clases", "Plan de inicio", "App de seguimiento"], destacada: true },
    { nombre: "Personal", precio: "120 €", periodo: "/mes", incluye: ["4 sesiones 1 a 1", "Plan de nutrición", "Acceso Total"] },
  ],
  galeria: ["img/galeria.svg", "img/galeria.svg", "img/galeria.svg", "img/galeria.svg", "img/galeria.svg", "img/galeria.svg", "img/galeria.svg", "img/galeria.svg"],
  reservas: {
    titulo: "Reserva tu día de prueba",
    actividades: ["Sala de musculación", "Clase de HIIT", "Clase de ciclo", "Sesión con entrenador"],
    franjas: ["Mañana (7–12)", "Mediodía (12–16)", "Tarde (16–23)"],
  },
  modelo3d: { titulo: "", modelo: "", colores: [] },
  contacto: {
    whatsapp: "34600000000",
    mensajeWhatsapp: "Hola, quiero información sobre el gimnasio.",
    telefono: "+34 600 000 000",
    email: "hola@forjagym.es",
    direccion: "Calle Ejemplo 1, Tu ciudad",
    mapa: "Calle Ejemplo 1, Tu ciudad",
    redes: [{ nombre: "Instagram", url: "https://instagram.com/" }, { nombre: "TikTok", url: "https://tiktok.com/" }],
  },
};
