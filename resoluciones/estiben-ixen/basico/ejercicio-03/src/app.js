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

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Servidor MOBA Esports escuchando en http://localhost:${PORT}`);
  });
}

module.exports = app;
