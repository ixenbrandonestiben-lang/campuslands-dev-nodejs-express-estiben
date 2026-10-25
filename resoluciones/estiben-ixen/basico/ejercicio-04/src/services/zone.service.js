import { HTTP_STATUS } from '../utils/constants.js';

export function obtenerInfoEjercicio() {
  return { ok: true, message: 'Ejercicio ejecutado correctamente', topic: 'modulos ES Modules' };
}

export function listarZonasSeguras() {
  return [{ id: 1, mapa: 'Isla Tormenta', radioMetros: 3500 }];
}

export function reducirZona({ mapa, nuevoRadio }) {
  return { mapa, radioActualMetros: nuevoRadio };
}
