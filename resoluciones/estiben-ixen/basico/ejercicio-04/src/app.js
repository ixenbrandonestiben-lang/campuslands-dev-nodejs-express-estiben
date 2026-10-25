// Servidor principal Express - ES Modules
import express from 'express';
import { HTTP_STATUS } from './utils/constants.js';
import zoneRoutes from './routes/zone.routes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/health', (req, res) => {
  return res.status(HTTP_STATUS.OK).json({
    ok: true,
    message: 'Servidor Battle Royale funcionando correctamente'
  });
});

app.use('/basico/ejercicio-04', zoneRoutes);

app.use((req, res) => {
  return res.status(HTTP_STATUS.NOT_FOUND).json({
    ok: false,
    message: `Ruta no encontrada: ${req.method} ${req.originalUrl}`
  });
});

app.use((err, req, res, next) => {
  console.error('Error no controlado:', err.message);
  return res.status(err.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
    ok: false,
    message: err.message || 'Error interno del servidor'
  });
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Servidor Battle Royale escuchando en http://localhost:${PORT}`);
  });
}

export default app;
