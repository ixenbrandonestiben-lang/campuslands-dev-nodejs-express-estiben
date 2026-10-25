const express = require('express');
const { HTTP_STATUS } = require('./utils/constants');
const soldaduraRoutes = require('./routes/soldadura.routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/health', (req, res) => res.status(HTTP_STATUS.OK).json({ ok: true, message: 'Servidor Soldadura activo' }));
app.use('/basico/ejercicio-23', soldaduraRoutes);

app.use((req, res) => res.status(404).json({ ok: false, message: `Ruta no encontrada: ${req.originalUrl}` }));
app.use((err, req, res, next) => res.status(err.statusCode || 500).json({ ok: false, message: err.message }));

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => console.log(`Servidor Soldadura escuchando en http://localhost:${PORT}`));
}

module.exports = app;
