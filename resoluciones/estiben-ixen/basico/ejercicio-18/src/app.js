const express = require('express');
const { HTTP_STATUS } = require('./utils/constants');
const paracaidismoRoutes = require('./routes/paracaidismo.routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/health', (req, res) => res.status(HTTP_STATUS.OK).json({ ok: true, message: 'Servidor Paracaidismo activo' }));
app.use('/basico/ejercicio-18', paracaidismoRoutes);

app.use((req, res) => res.status(404).json({ ok: false, message: `Ruta no encontrada: ${req.originalUrl}` }));
app.use((err, req, res, next) => res.status(err.statusCode || 500).json({ ok: false, message: err.message }));

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => console.log(`Servidor Paracaidismo escuchando en http://localhost:${PORT}`));
}

module.exports = app;
