// Capa de servicios - Lógica de negocio y datos para MOBA esports
// Demostración del uso de módulos CommonJS (require y module.exports)

const ROLES_VALIDOS = ["Tanque", "Soporte", "Carry", "Mid", "Jungla"];

const HEROES_MOBA = [
  { id: 1, nombre: "Ares", rol: "Tanque", dificultad: "Baja", ataqueBase: 58, vidaBase: 650 },
  { id: 2, nombre: "Seraphina", rol: "Soporte", dificultad: "Media", ataqueBase: 46, vidaBase: 480 },
  { id: 3, nombre: "Shadowblade", rol: "Carry", dificultad: "Alta", ataqueBase: 68, vidaBase: 520 },
  { id: 4, nombre: "Ignis", rol: "Mid", dificultad: "Alta", ataqueBase: 62, vidaBase: 500 },
  { id: 5, nombre: "Fenrir", rol: "Jungla", dificultad: "Media", ataqueBase: 64, vidaBase: 580 }
];

function obtenerInfoEjercicio() {
  return {
    ok: true,
    message: "Ejercicio ejecutado correctamente",
    topic: "modulos CommonJS"
  };
}

function listarHeroes() {
  return [...HEROES_MOBA];
}

function registrarPick({ equipo, rol, nombreHeroe }) {
  const pick = {
    id: Date.now(),
    equipo: equipo.trim(),
    rol: rol.trim(),
    nombreHeroe: nombreHeroe ? nombreHeroe.trim() : "Heroe Aleatorio",
    oroInicial: 600,
    timestamp: new Date().toISOString()
  };

  return pick;
}

module.exports = {
  ROLES_VALIDOS,
  obtenerInfoEjercicio,
  listarHeroes,
  registrarPick
};
