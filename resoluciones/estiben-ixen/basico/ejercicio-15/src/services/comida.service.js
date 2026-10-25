const { HTTP_STATUS } = require('../utils/constants');

const MENU_URBANO = [
  { id: 1, plato: 'Smash Burger Doble Queso', categoria: 'Hamburguesas', precio: 22000, disponible: true },
  { id: 2, plato: 'Tacos al Pastor x3', categoria: 'Tacos', precio: 18000, disponible: true },
  { id: 3, plato: 'Perro Caliente Especial Tocino', categoria: 'Hot Dogs', precio: 19500, disponible: true },
  { id: 4, plato: 'Papas Rústicas Cheddar', categoria: 'Acompañamientos', precio: 12000, disponible: true }
];

function obtenerInfoEjercicio() {
  return {
    ok: true,
    message: 'Ejercicio ejecutado correctamente',
    topic: 'mini API HTTP nativa'
  };
}

function listarMenu(categoria) {
  if (categoria) {
    return MENU_URBANO.filter(m => m.categoria.toLowerCase() === categoria.trim().toLowerCase());
  }
  return [...MENU_URBANO];
}

function ordenarPlato({ platoId, cantidad }) {
  const id = Number(platoId);
  const cant = Number(cantidad) || 1;

  if (!id || cant <= 0) {
    const err = new Error("Debe especificar un 'platoId' válido y 'cantidad' positiva");
    err.statusCode = HTTP_STATUS.BAD_REQUEST;
    throw err;
  }

  const item = MENU_URBANO.find(p => p.id === id);
  if (!item) {
    const err = new Error(`El plato con ID ${id} no existe en el menú`);
    err.statusCode = HTTP_STATUS.NOT_FOUND;
    throw err;
  }

  return {
    numeroOrden: Math.floor(Math.random() * 9000) + 1000,
    plato: item.plato,
    cantidad: cant,
    totalPagar: item.precio * cant,
    estado: 'En preparación'
  };
}

module.exports = {
  obtenerInfoEjercicio,
  listarMenu,
  ordenarPlato
};
