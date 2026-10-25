// Servidor principal Express - Módulos CommonJS
const express = require("express");
const { HTTP_STATUS } = require("./utils/constants");
const mobaRoutes = require("./routes/moba.routes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Endpoint de verificación de estado del servidor
app.get("/health", (req, res) => {
  return res.status(HTTP_STATUS.OK).json({
    ok: true,
    message: "Servidor MOBA Esports funcionando correctamente"
  });
});

// Enrutador del ejercicio montado bajo /basico/ejercicio-03
app.use("/basico/ejercicio-03", mobaRoutes);

// Middleware para manejo de rutas inexistentes (404)
app.use((req, res) => {
  return res.status(HTTP_STATUS.NOT_FOUND).json({
    ok: false,
    message: `Ruta no encontrada: ${req.method} ${req.originalUrl}`
  });
});

// Middleware global para manejo de excepciones no capturadas (500)
app.use((err, req, res, next) => {
  console.error("Error no controlado en la aplicación:", err.message);
  return res.status(err.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
    ok: false,
    message: err.message || "Error interno del servidor"
  });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Servidor MOBA Esports escuchando en http://localhost:${PORT}`);
  });
}

module.exports = app;
