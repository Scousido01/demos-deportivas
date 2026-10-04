/* Demo para Gimnasio Simón (Vigo), lead nº 1 de gimnasios. Parte del nicho gimnasio con estilo clásico.
 * Datos públicos sacados de buscadores y directorios el 2026-10-04 (ver README.md de esta carpeta).
 * Lo marcado "A confirmar" no está verificado con el gimnasio. Las imágenes img/*.svg son marcadores
 * propios de esta demo: cámbialos por sus fotos reales cuando las tengamos. */
window.DEMO_CONFIG = {
  negocio: {
    nombre: "Gimnasio Simón",
    eslogan: "Artes marciales y fitness en el centro de Vigo desde 1992",
    logo: "img/logo.svg", // provisional; pedir su logo en vectorial
    ciudad: "Vigo",
  },

  colores: {
    primario: "#b3262d", // rojo de esquina de ring: botones, precios
    secundario: "#c9a24a", // dorado de cinturón: cifras, detalles
    fondo: "#16120f",
    texto: "#f2e9d8", // crema
  },

  portada: {
    titulo: "Más de 30 años formando luchadores en Vigo",
    subtitulo: "Kickboxing, muay thai, boxeo, MMA, jiu-jitsu y pilates en Urzáiz 92. Un gimnasio fundado y dirigido por Simón González, 13 veces campeón del mundo de kickboxing.",
    boton: "Reserva tu clase de prueba",
    imagen: "img/portada.svg", // → img/portada.jpg (foto real de la sala o del tatami)
    video: "",
  },

  quienesSomos: {
    titulo: "Un gimnasio con historia",
    texto: "Abrimos en 1992 y desde entonces han pasado por nuestro tatami varias generaciones de vigueses, desde quien busca ponerse en forma hasta quien sube a competir. Clases dirigidas por técnicos con años de ring, sala de musculación, sauna y solárium en pleno centro.",
    datos: [
      { valor: "1992", etiqueta: "año de apertura" },
      { valor: "13", etiqueta: "títulos mundiales de kickboxing de Simón González" },
      { valor: "4,7★", etiqueta: "más de 110 reseñas en Google" },
    ],
  },

  // Tarjetas con tilt. Sin microvídeo hasta tener clips suyos.
  servicios: [
    { titulo: "Kickboxing y full-contact", texto: "La disciplina de la casa: técnica, combinaciones y sparring controlado, por niveles.", imagen: "img/tarjeta.svg", video: "" },
    { titulo: "Muay thai", texto: "El arte de las ocho armas: puños, patadas, codos y rodillas con trabajo de clinch.", imagen: "img/tarjeta.svg", video: "" },
    { titulo: "Boxeo", texto: "Guardia, desplazamientos y saco. Para mejorar la forma física o preparar combate.", imagen: "img/tarjeta.svg", video: "" },
    { titulo: "MMA y grappling", texto: "De pie y en el suelo: derribos, control y sumisiones en un mismo entrenamiento.", imagen: "img/tarjeta.svg", video: "" },
    { titulo: "Jiu-jitsu", texto: "Palancas, estrangulaciones y escapes. Técnica antes que fuerza, a cualquier edad.", imagen: "img/tarjeta.svg", video: "" },
    { titulo: "Pilates y sala", texto: "Pilates para postura y core, y sala de musculación con sauna y solárium incluidos.", imagen: "img/tarjeta.svg", video: "" },
  ],

  // Fuera: la secuencia del nicho es de Forja Box. Volver a activar con una secuencia propia.
  scrollGuiado: { titulo: "", textos: [], ruta: "", frames: 0, digitos: 3 },

  // A confirmar: Páxinas Galegas da estas horas; otro directorio dice que abre a las 7:30.
  horarios: [
    { dia: "Lunes a viernes", horas: "09:00 – 14:00 · 17:30 – 22:30" },
    { dia: "Sábados", horas: "11:00 – 14:00" },
    { dia: "Domingos", horas: "Cerrado" },
  ],

  // A confirmar: precios de ejemplo, no son los suyos.
  tarifas: [
    { nombre: "Sala", precio: "35 €", periodo: "/mes", incluye: ["Sala de musculación", "Sauna y solárium", "Descuento si pagas por adelantado"] },
    { nombre: "Artes marciales", precio: "45 €", periodo: "/mes", incluye: ["Kickboxing, muay thai, boxeo, MMA y jiu-jitsu", "Sala de musculación", "Sauna y solárium"], destacada: true },
    { nombre: "Pilates", precio: "40 €", periodo: "/mes", incluye: ["2 clases a la semana", "Grupos reducidos", "Sauna y solárium"] },
  ],

  // → img/galeria-01.jpg … galeria-08.jpg (fotos reales: tatami, ring, sacos, trofeos, Simón con alumnos)
  galeria: ["img/galeria.svg", "img/galeria.svg", "img/galeria.svg", "img/galeria.svg", "img/galeria.svg", "img/galeria.svg", "img/galeria.svg", "img/galeria.svg"],

  reservas: {
    titulo: "Reserva tu clase de prueba",
    actividades: ["Kickboxing / full-contact", "Muay thai", "Boxeo", "MMA y grappling", "Jiu-jitsu", "Pilates"],
    franjas: ["Mañana (9–14)", "Tarde (17:30–22:30)", "Sábado (11–14)"],
  },

  modelo3d: { titulo: "", modelo: "", colores: [] },

  contacto: {
    // A confirmar: es su fijo; comprobar si tienen WhatsApp Business en él o un móvil para WhatsApp.
    whatsapp: "34986420867",
    mensajeWhatsapp: "Hola, quiero probar una clase en Gimnasio Simón.",
    telefono: "986 420 867",
    email: "gymsimon@mundo-r.com",
    direccion: "Rúa de Urzáiz 92, bajo · 36204 Vigo. Socios: 60 % de descuento en el parking de Fernando Católico.",
    mapa: "Rúa de Urzáiz 92, 36204 Vigo",
    redes: [
      { nombre: "Facebook", url: "https://www.facebook.com/gimnasiosimonvigo" },
      { nombre: "YouTube", url: "https://www.youtube.com/user/gymsimonvigo" },
    ],
  },
};
