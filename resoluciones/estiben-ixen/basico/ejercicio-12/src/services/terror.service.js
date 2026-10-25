const { HTTP_STATUS } = require('../utils/constants');

const PELICULAS_TERROR = [
  { id: 1, titulo: 'El Conjuro', director: 'James Wan', anio: 2013, calificacionMiedo: 9.1 },
  { id: 2, titulo: 'Hereditary', director: 'Ari Aster', anio: 2018, calificacionMiedo: 9.4 },
  { id: 3, titulo: 'It (Eso)', director: 'Andy Muschietti', anio: 2017, calificacionMiedo: 8.5 },
  { id: 4, titulo: 'El Resplandor', director: 'Stanley Kubrick', anio: 1980, calificacionMiedo: 9.7 }
];

function obtenerInfoEjercicio() {
  return {
    ok: true,
    message: 'Ejercicio ejecutado correctamente',
    topic: 'async await'
  };
}

const esperar = ms => new Promise(r => setTimeout(r, ms));

async function obtenerPeliculas(minCalificacion) {
  await esperar(10);
  if (minCalificacion) {
    const nota = parseFloat(minCalificacion);
    if (Number.isNaN(nota) || nota < 0 || nota > 10) {
      const err = new Error("La calificación debe ser un valor decimal entre 0 y 10");
      err.statusCode = HTTP_STATUS.BAD_REQUEST;
      throw err;
    }
    return PELICULAS_TERROR.filter(p => p.calificacionMiedo >= nota);
  }
  return [...PELICULAS_TERROR];
}

async function obtenerEstadisticasTerror() {
  const peliculas = await obtenerPeliculas();
  const promedioMiedo = (peliculas.reduce((acc, p) => acc + p.calificacionMiedo, 0) / peliculas.length).toFixed(1);
  return {
    totalPeliculas: peliculas.length,
    promedioMiedo: Number(promedioMiedo),
    peliculaMasAterradora: peliculas.reduce((max, p) => p.calificacionMiedo > max.calificacionMiedo ? p : max)
  };
}

module.exports = {
  obtenerInfoEjercicio,
  obtenerPeliculas,
  obtenerEstadisticasTerror
};
