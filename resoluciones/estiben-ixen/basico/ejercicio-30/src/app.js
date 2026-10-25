const express = require('express');
const { HTTP_STATUS } = require('./utils/constants');
const tallerRoutes = require('./routes/taller.routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Middleware de telemetría y logging
app.use((req, res, next) => {
  const inicio = Date.now();
  res.on('finish', () => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl} ${res.statusCode} - ${Date.now() - inicio}ms`);
  });
  next();
});

app.get('/health', (req, res) => res.status(HTTP_STATUS.OK).json({ ok: true, message: 'Proyecto Integrador Motos activo' }));
app.use('/basico/ejercicio-30', tallerRoutes);

app.use((req, res) => res.status(404).json({ ok: false, message: `Ruta no encontrada: ${req.originalUrl}` }));
app.use((err, req, res, next) => res.status(err.statusCode || 500).json({ ok: false, message: err.message }));

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => console.log(`Servidor Proyecto Integrador escuchando en http://localhost:${PORT}`));
}

module.exports = app;
