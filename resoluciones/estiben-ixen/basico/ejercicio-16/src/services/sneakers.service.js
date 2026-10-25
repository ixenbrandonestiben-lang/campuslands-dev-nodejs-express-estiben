const { HTTP_STATUS } = require('../utils/constants');

const SNEAKER_DROPS = [
  { id: 1, modelo: 'Air Jordan 1 High OG Chicago', marca: 'Nike', precioUsd: 180, stock: 15 },
  { id: 2, modelo: 'Yeezy Boost 350 V2 Zebra', marca: 'Adidas', precioUsd: 230, stock: 8 },
  { id: 3, modelo: 'New Balance 990v6 Grey', marca: 'New Balance', precioUsd: 200, stock: 22 }
];

function obtenerInfoEjercicio() {
  return {
    ok: true,
    message: 'Ejercicio ejecutado correctamente',
    topic: 'primer servidor Express'
  };
}

function listarDrops() {
  return [...SNEAKER_DROPS];
}

module.exports = {
  obtenerInfoEjercicio,
  listarDrops
};
