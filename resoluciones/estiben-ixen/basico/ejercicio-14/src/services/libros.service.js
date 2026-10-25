const { HTTP_STATUS } = require('../utils/constants');

const LIBROS_REGISTRADOS = [
  { id: 1, titulo: 'Cien Años de Soledad', autor: 'Gabriel García Márquez', isbn: '978-0307474728', paginas: 417 },
  { id: 2, titulo: 'Don Quijote de la Mancha', autor: 'Miguel de Cervantes', isbn: '978-8424116033', paginas: 863 }
];

function obtenerInfoEjercicio() {
  return {
    ok: true,
    message: 'Ejercicio ejecutado correctamente',
    topic: 'validacion de entrada'
  };
}

function listarLibros() {
  return [...LIBROS_REGISTRADOS];
}

function validarYRegistrarLibro(datos) {
  const { titulo, autor, isbn, paginas } = datos || {};

  if (!titulo || typeof titulo !== 'string' || titulo.trim().length < 2) {
    const err = new Error("El 'titulo' es obligatorio y debe tener al menos 2 caracteres");
    err.statusCode = HTTP_STATUS.BAD_REQUEST;
    throw err;
  }

  if (!autor || typeof autor !== 'string' || autor.trim().length < 3) {
    const err = new Error("El 'autor' es obligatorio y debe tener al menos 3 caracteres");
    err.statusCode = HTTP_STATUS.BAD_REQUEST;
    throw err;
  }

  if (!isbn || typeof isbn !== 'string' || !/^[d-]+$/.test(isbn.trim())) {
    const err = new Error("El 'isbn' es obligatorio y debe tener un formato válido de números y guiones");
    err.statusCode = HTTP_STATUS.BAD_REQUEST;
    throw err;
  }

  const numPaginas = Number(paginas);
  if (!numPaginas || Number.isNaN(numPaginas) || numPaginas <= 0) {
    const err = new Error("El campo 'paginas' debe ser un número entero mayor a 0");
    err.statusCode = HTTP_STATUS.BAD_REQUEST;
    throw err;
  }

  const nuevoLibro = {
    id: LIBROS_REGISTRADOS.length + 1,
    titulo: titulo.trim(),
    autor: autor.trim(),
    isbn: isbn.trim(),
    paginas: Math.round(numPaginas),
    registradoEn: new Date().toISOString()
  };

  LIBROS_REGISTRADOS.push(nuevoLibro);
  return nuevoLibro;
}

module.exports = {
  obtenerInfoEjercicio,
  listarLibros,
  validarYRegistrarLibro
};
