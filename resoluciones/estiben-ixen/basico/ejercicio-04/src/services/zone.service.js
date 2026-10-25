// Capa de servicios - Battle Royale Safe Zone Logic (ES Modules)
import { HTTP_STATUS, MAPAS_DISPONIBLES, RADIO_MAXIMO, RADIO_MINIMO } from '../utils/constants.js';

/**
 * Retorna la información general del ejercicio
 */
export function obtenerInfoEjercicio() {
  return {
    ok: true,
    message: 'Ejercicio ejecutado correctamente',
    topic: 'modulos ES Modules'
  };
}

/**
 * Lista las zonas de juego seguras activas
 */
export function listarZonasSeguras() {
  return [
    { id: 1, mapa: 'Isla Tormenta', radioMetros: 3500, jugadoresVivos: 64, fase: 1 },
    { id: 2, mapa: 'Canon Desertico', radioMetros: 2200, jugadoresVivos: 38, fase: 2 },
    { id: 3, mapa: 'Tundra', radioMetros: 800, jugadoresVivos: 14, fase: 4 }
  ];
}

/**
 * Reduce el radio del círculo seguro validando límites del mapa
 */
export function reducirZona({ mapa, nuevoRadio }) {
  if (!mapa || typeof mapa !== 'string' || !mapa.trim()) {
    const error = new Error("El campo 'mapa' es obligatorio y debe ser texto válido");
    error.statusCode = HTTP_STATUS.BAD_REQUEST;
    throw error;
  }

  const mapaNormalizado = mapa.trim();
  const mapaValido = MAPAS_DISPONIBLES.find(m => m.toLowerCase() === mapaNormalizado.toLowerCase());
  if (!mapaValido) {
    const error = new Error(`El mapa '${mapa}' no es válido. Opciones: ${MAPAS_DISPONIBLES.join(', ')}`);
    error.statusCode = HTTP_STATUS.BAD_REQUEST;
    throw error;
  }

  const radio = Number(nuevoRadio);
  if (Number.isNaN(radio) || radio < RADIO_MINIMO || radio > RADIO_MAXIMO) {
    const error = new Error(`El radio debe ser un número entre ${RADIO_MINIMO} y ${RADIO_MAXIMO} metros`);
    error.statusCode = HTTP_STATUS.BAD_REQUEST;
    throw error;
  }

  return {
    mapa: mapaValido,
    radioActualMetros: radio,
    danoPorSegundoTormenta: Math.round((5000 / radio) * 5),
    tiempoHastaCierreSegundos: 45,
    timestamp: new Date().toISOString()
  };
}
