/**
 * Modulo principal de inicializacion y exportacion de la aplicacion Express
 * Ejercicio 02 - Nivel Basico (Shooters Competitivos)
 */
const express = require("express");
const shooterRoutes = require("./routes/shooter.routes");

const app = express();
app.use(express.json());
app.use("/basico/ejercicio-02", shooterRoutes);

const PORT = process.env.PORT || 3000;
let server;
if (process.env.NODE_ENV !== "test") {
  server = app.listen(PORT, () => {
    console.log(`Servidor ejercicio 02 activo en puerto ${PORT}`);
  });
}

module.exports = { app, server };
