const express = require('express');
const { HTTP_STATUS } = require('./utils/constants');
const futbolRoutes = require('./routes/futbol.routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/health', (req, res) => res.status(HTTP_STATUS.OK).json({ ok: true, message: 'Servidor Futbol Sala activo' }));
app.use('/basico/ejercicio-05', futbolRoutes);

app.use((req, res) => res.status(HTTP_STATUS.NOT_FOUND).json({ ok: false, message: `Ruta no encontrada: ${req.originalUrl}` }));
app.use((err, req, res, next) => res.status(err.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ ok: false, message: err.message }));

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => console.log(`Servidor Fútbol Sala escuchando en http://localhost:${PORT}`));
}

module.exports = app;
