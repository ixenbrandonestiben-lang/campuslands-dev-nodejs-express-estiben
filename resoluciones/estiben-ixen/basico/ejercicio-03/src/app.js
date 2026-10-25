// Servidor principal Express - Módulos CommonJS
const express = require("express");
const mobaRoutes = require("./routes/moba.routes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Endpoint de verificación de estado
app.get("/health", (req, res) => {
  return res.status(200).json({
    ok: true,
    message: "Servidor MOBA Esports funcionando correctamente"
  });
});

// Enrutador del ejercicio montado bajo /basico/ejercicio-03
app.use("/basico/ejercicio-03", mobaRoutes);

// Middleware para manejo de rutas inexistentes (404)
app.use((req, res) => {
  return res.status(404).json({
    ok: false,
    message: `Ruta no encontrada: ${req.method} ${req.originalUrl}`
  });
});

// Middleware global para manejo de excepciones no capturadas (500)
app.use((err, req, res, next) => {
  console.error("Error no controlado en la aplicación:", err.message);
  return res.status(err.statusCode || 500).json({
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
