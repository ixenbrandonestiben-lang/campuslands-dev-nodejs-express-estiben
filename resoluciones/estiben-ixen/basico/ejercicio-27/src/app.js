const express = require('express');
const { HTTP_STATUS } = require('./utils/constants');
const mobaRoutes = require('./routes/mobalogs.routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Middleware de logging simple
app.use((req, res, next) => {
  const inicio = Date.now();
  res.on('finish', () => {
    const duracion = Date.now() - inicio;
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl} -> Status: ${res.statusCode} (${duracion}ms)`);
  });
  next();
});

app.get('/health', (req, res) => res.status(HTTP_STATUS.OK).json({ ok: true, message: 'Servidor MOBA Logs activo' }));
app.use('/basico/ejercicio-27', mobaRoutes);

app.use((req, res) => res.status(404).json({ ok: false, message: `Ruta no encontrada: ${req.originalUrl}` }));
app.use((err, req, res, next) => res.status(err.statusCode || 500).json({ ok: false, message: err.message }));

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => console.log(`Servidor MOBA Logs escuchando en http://localhost:${PORT}`));
}

module.exports = app;
