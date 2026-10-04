/* Demo para Gimnasio Simón (Vigo), lead nº 1 de gimnasios. Parte del nicho gimnasio con estilo clásico.
 * Datos públicos sacados de buscadores y directorios el 2026-10-04 (ver README.md de esta carpeta).
 * Lo marcado "A confirmar" no está verificado con el gimnasio. Fotos y clips de media/ son de stock
 * (Pexels, licencia libre; origen en README.md) hasta tener material real del gimnasio. */
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
    imagen: "media/fotos/portada.jpg", // stock; cambiar por foto real de la sala o del tatami
    video: "media/clips/portada.mp4",
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

  // Tarjetas con tilt y microvídeo al pasar por encima (clips de stock).
  servicios: [
    { titulo: "Kickboxing y full-contact", texto: "La disciplina de la casa: técnica, combinaciones y sparring controlado, por niveles.", imagen: "media/fotos/kickboxing.jpg", video: "media/clips/kickboxing.mp4" },
    { titulo: "Muay thai", texto: "El arte de las ocho armas: puños, patadas, codos y rodillas con trabajo de clinch.", imagen: "media/fotos/muay-thai.jpg", video: "media/clips/muay-thai.mp4" },
    { titulo: "Boxeo", texto: "Guardia, desplazamientos y saco. Para mejorar la forma física o preparar combate.", imagen: "media/fotos/boxeo.jpg", video: "media/clips/boxeo.mp4" },
    { titulo: "MMA y grappling", texto: "De pie y en el suelo: derribos, control y sumisiones en un mismo entrenamiento.", imagen: "media/fotos/mma.jpg", video: "media/clips/mma.mp4" },
    { titulo: "Jiu-jitsu", texto: "Palancas, estrangulaciones y escapes. Técnica antes que fuerza, a cualquier edad.", imagen: "media/fotos/jiu-jitsu.jpg", video: "media/clips/jiu-jitsu.mp4" },
    { titulo: "Pilates y sala", texto: "Pilates para postura y core, y sala de musculación con sauna y solárium incluidos.", imagen: "media/fotos/sala.jpg", video: "media/clips/sala.mp4" },
  ],

  // Scroll guiado: vendaje de manos antes de entrar al ring, con su historia encima.
  scrollGuiado: {
    titulo: "Desde 1992",
    textos: ["1992. Abrimos en Urzáiz.", "13 veces campeón del mundo.", "Más de 30 años de alumnos.", "Ahora te toca a ti."],
    ruta: "media/secuencia/frame-{n}.jpg",
    frames: 88,
    digitos: 3,
  },

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

  // Stock hasta tener las suyas: tatami, ring, sacos, trofeos, Simón con alumnos
  galeria: [1, 2, 3, 4, 5, 6, 7, 8].map((n) => `media/fotos/galeria-0${n}.jpg`),

  reservas: {
    titulo: "Reserva tu clase de prueba",
    actividades: ["Kickboxing / full-contact", "Muay thai", "Boxeo", "MMA y grappling", "Jiu-jitsu", "Pilates"],
    franjas: ["Mañana (9–14)", "Tarde (17:30–22:30)", "Sábado (11–14)"],
  },

  modelo3d: { titulo: "", modelo: "", colores: [] },

  contacto: {
    // Marcador para que las pruebas no lleguen al gimnasio. Al enviarla: su WhatsApp real.
    whatsapp: "34600000000",
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
