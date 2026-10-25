// Punto de entrada de la aplicación - Inicialización del servidor
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

module.exports = app;
