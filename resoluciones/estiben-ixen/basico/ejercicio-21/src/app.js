const express = require('express');
const { HTTP_STATUS } = require('./utils/constants');
const animacionRoutes = require('./routes/animacion.routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/health', (req, res) => res.status(HTTP_STATUS.OK).json({ ok: true, message: 'Servidor Animación 3D activo' }));
app.use('/basico/ejercicio-21', animacionRoutes);

app.use((req, res) => res.status(404).json({ ok: false, message: `Ruta no encontrada: ${req.originalUrl}` }));
app.use((err, req, res, next) => res.status(err.statusCode || 500).json({ ok: false, message: err.message }));

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => console.log(`Servidor Animación 3D escuchando en http://localhost:${PORT}`));
}

module.exports = app;
