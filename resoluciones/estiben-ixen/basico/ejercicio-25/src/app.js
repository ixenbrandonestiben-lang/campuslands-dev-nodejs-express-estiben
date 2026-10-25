const express = require('express');
const { HTTP_STATUS } = require('./utils/constants');
const rpgRoutes = require('./routes/rpg.routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/health', (req, res) => res.status(HTTP_STATUS.OK).json({ ok: true, message: 'Servidor RPG activo' }));
app.use('/basico/ejercicio-25', rpgRoutes);

app.use((req, res) => res.status(404).json({ ok: false, message: `Ruta no encontrada: ${req.originalUrl}` }));
app.use((err, req, res, next) => res.status(err.statusCode || 500).json({ ok: false, message: err.message }));

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => console.log(`Servidor RPG escuchando en http://localhost:${PORT}`));
}

module.exports = app;
