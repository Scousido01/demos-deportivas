/* Nicho entrenador personal: limpio, claro y cercano. */
window.DEMO_CONFIG = {
  negocio: { nombre: "Laura Martín", eslogan: "Entrenadora personal", logo: "", ciudad: "Tu ciudad" },
  colores: { primario: "#0f766e", secundario: "#f59e0b", fondo: "#fafaf7", texto: "#1c1917" },
  portada: {
    titulo: "Entrena con un plan hecho para ti",
    subtitulo: "Sesiones 1 a 1, en grupo reducido u online. Te ayudo a ganar fuerza, perder peso o volver a moverte sin dolor.",
    boton: "Reserva una valoración gratis",
    imagen: "img/portada.svg",
    video: "",
  },
  quienesSomos: {
    titulo: "Hola, soy Laura",
    texto: "Graduada en Ciencias del Deporte y especializada en fuerza y readaptación. Trabajo con pocas personas para poder seguir a cada una de cerca.",
    datos: [{ valor: "9", etiqueta: "años entrenando" }, { valor: "300+", etiqueta: "alumnos" }, { valor: "4,9★", etiqueta: "en Google" }],
  },
  servicios: [
    { titulo: "Entrenamiento 1 a 1", texto: "Toda mi atención en cada sesión.", imagen: "img/tarjeta.svg", video: "" },
    { titulo: "Grupo reducido", texto: "Máximo 4 personas, mismo seguimiento.", imagen: "img/tarjeta.svg", video: "" },
    { titulo: "Online", texto: "Plan en la app y revisión semanal por vídeo.", imagen: "img/tarjeta.svg", video: "" },
  ],
  scrollGuiado: { titulo: "Así trabajamos", textos: ["Valoración.", "Plan.", "Sesiones.", "Resultados."], ruta: "media/secuencia/frame-{n}.jpg", frames: 0, digitos: 3 },
  horarios: [
    { dia: "Lunes a viernes", horas: "07:00 – 21:00 con cita" },
    { dia: "Sábados", horas: "09:00 – 13:00 con cita" },
  ],
  tarifas: [
    { nombre: "Online", precio: "59 €", periodo: "/mes", incluye: ["Plan personalizado", "Revisión semanal"] },
    { nombre: "Grupo reducido", precio: "89 €", periodo: "/mes", incluye: ["2 sesiones semanales", "Máximo 4 personas", "Plan para casa"], destacada: true },
    { nombre: "1 a 1", precio: "40 €", periodo: "/sesión", incluye: ["Bonos de 5 y 10", "Valoración incluida"] },
  ],
  galeria: ["img/galeria.svg", "img/galeria.svg", "img/galeria.svg", "img/galeria.svg"],
  reservas: {
    titulo: "Reserva tu valoración gratuita",
    actividades: ["Entrenamiento 1 a 1", "Grupo reducido", "Online", "Aún no lo sé"],
    franjas: ["Mañana", "Mediodía", "Tarde"],
  },
  modelo3d: { titulo: "", modelo: "", colores: [] },
  contacto: {
    whatsapp: "34600000000",
    mensajeWhatsapp: "Hola Laura, quiero información sobre tus entrenamientos.",
    telefono: "+34 600 000 000",
    email: "hola@lauramartin.es",
    direccion: "Estudio en Calle Ejemplo 1, Tu ciudad",
    mapa: "Calle Ejemplo 1, Tu ciudad",
    redes: [{ nombre: "Instagram", url: "https://instagram.com/" }],
  },
};
