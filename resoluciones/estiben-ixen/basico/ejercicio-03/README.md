# Básico 03 — Módulos CommonJS (MOBA Esports)

Proyecto de Node.js y Express enfocado en el dominio del sistema de módulos **CommonJS**, desarrollado como parte de los ejercicios de nivel básico de Campuslands.

- **Ruta de la solución:** `resoluciones/estiben-ixen/basico/ejercicio-03/`
- **Temática:** MOBA esports (gestión de héroes, roles competitivos y picks de partida)
- **Tema técnico central:** Módulos CommonJS (`require` y `module.exports`)

---

## 1. Razonamiento (cómo entendí el problema)

El objetivo de este ejercicio es dominar el sistema tradicional de módulos de Node.js (**CommonJS**), organizando una API en capas desacopladas sin recurrir a archivos monolíticos.

Puntos clave identificados:
- **CommonJS nativo:** En Node.js, cada archivo es un módulo independiente que encapsula su alcance (scope). Para compartir funcionalidad se exporta explícitamente mediante `module.exports` y se consume en otros archivos a través de `require()`.
- **Arquitectura en capas desacopladas:**
  - `routes`: Define las URLs y métodos HTTP. No contiene lógica de negocio ni manipula datos.
  - `controllers`: Orquesta la interacción HTTP, extrae parámetros (`req.params`, `req.query`, `req.body`) y decide los códigos de estado HTTP (`200`, `201`, `400`, `404`, `500`).
  - `services`: Contiene la lógica de negocio pura y la manipulación del catálogo de héroes y picks. Es agnóstico a Express y HTTP.
  - `utils`: Centraliza constantes y definiciones inmutables como códigos de estado HTTP y roles válidos.
- **Validaciones sólidas:** No basta con responder a peticiones válidas; es fundamental validar tipos de datos, valores requeridos y manejar excepciones controladas ante entradas erróneas.

---

## 2. Planteamiento de la solución

La solución implementa un servidor Express modular con los siguientes endpoints:

| Método | Endpoint | Descripción | Códigos HTTP |
|---|---|---|---|
| `GET` | `/health` | Verificación de estado del servidor | `200` |
| `GET` | `/basico/ejercicio-03` | **Endpoint requerido por el ejercicio** | `200` |
| `GET` | `/basico/ejercicio-03/heroes` | Lista todos los héroes (admite `?rol=Mid`) | `200`, `400` |
| `GET` | `/basico/ejercicio-03/heroes/:id` | Obtiene un héroe por su ID | `200`, `400`, `404` |
| `POST` | `/basico/ejercicio-03/picks` | Registra un pick de héroe para un equipo | `201`, `400` |

Además, se integran middlewares para:
- Parseo automático de payloads JSON (`express.json()`).
- Manejo centralizado de rutas inexistentes (`404 Not Found`).
- Manejador global de excepciones para errores no controlados (`500 Internal Server Error`).

---

## 3. Guía de Ejecución y Pruebas Paso a Paso

### Requisitos previos
- Node.js versión 20 o superior instalado (`node -v`).
- npm versión 9 o superior (`npm -v`).

### Pasos para levantar la aplicación

1. **Abrir la terminal y navegar hasta el directorio del ejercicio:**
   ```bash
   cd resoluciones/estiben-ixen/basico/ejercicio-03
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Iniciar el servidor:**
   ```bash
   npm start
   ```
   *Para modo desarrollo con recarga automática:*
   ```bash
   npm run dev
   ```

   El servidor indicará en consola:
   ```text
   Servidor MOBA Esports escuchando en http://localhost:3000
   ```

---

## 4. Ejemplos de Pruebas con cURL

En una segunda terminal, puedes ejecutar los siguientes comandos para probar cada endpoint:

### 1. Endpoint principal del ejercicio (Requerimiento oficial)
```bash
curl http://localhost:3000/basico/ejercicio-03
```
**Respuesta esperada:**
```json
{
  "ok": true,
  "message": "Ejercicio ejecutado correctamente",
  "topic": "modulos CommonJS"
}
```

### 2. Verificar estado de salud (Health Check)
```bash
curl http://localhost:3000/health
```

### 3. Listar todos los héroes MOBA
```bash
curl http://localhost:3000/basico/ejercicio-03/heroes
```

### 4. Filtrar héroes por rol
```bash
curl "http://localhost:3000/basico/ejercicio-03/heroes?rol=Carry"
```

### 5. Buscar héroe por ID válido
```bash
curl http://localhost:3000/basico/ejercicio-03/heroes/1
```

### 6. Buscar héroe con ID inexistente (Prueba de error 404)
```bash
curl http://localhost:3000/basico/ejercicio-03/heroes/99
```

### 7. Registrar un pick competitivo válido (POST)
```bash
curl -X POST http://localhost:3000/basico/ejercicio-03/picks \
  -H "Content-Type: application/json" \
  -d "{\"equipo\":\"Team Spirit\",\"rol\":\"Mid\",\"nombreHeroe\":\"Ignis\"}"
```

### 8. Registrar pick con datos inválidos (Prueba de error 400)
```bash
curl -X POST http://localhost:3000/basico/ejercicio-03/picks \
  -H "Content-Type: application/json" \
  -d "{\"equipo\":\"\",\"rol\":\"Arquero\"}"
```

---

## 5. Estructura del Proyecto

```text
resoluciones/estiben-ixen/basico/ejercicio-03/
├── .gitignore
├── package.json
├── README.md
└── src/
    ├── app.js                         # Configuración y arranque del servidor Express
    ├── routes/
    │   └── moba.routes.js             # Mapeo de rutas HTTP a controladores
    ├── controllers/
    │   └── moba.controller.js         # Orquestación de peticiones/respuestas HTTP
    ├── services/
    │   └── moba.service.js            # Lógica de negocio y catálogo MOBA
    └── utils/
        └── constants.js               # Constantes inmutables y códigos HTTP
```

---

## 6. Conclusiones

- **Modularidad en CommonJS:** La combinación de `module.exports` y `require` permite construir bases de código limpias, escalables y fáciles de testear unitariamente.
- **Separación de responsabilidades:** Al aislar la lógica de negocio en el servicio, este puede evolucionar independientemente de cómo se exponga (sea una API REST con Express, una herramienta de consola CLI, o un proceso batch).
- **Control de errores coherente:** El uso de códigos de estado HTTP estándares (`200`, `201`, `400`, `404`) proporciona una interfaz predecible y profesional para clientes frontend o integraciones de terceros.
