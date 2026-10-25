# Ejercicio 02 - npm scripts y package.json

## Tematica
Shooters Competitivos (Tactical Shooters)

## Descripcion
Configuracion profesional de `package.json` y scripts de ejecucion para un servidor Express con catalogo de loadouts y armas tacticas.

## Endpoint Principal
`GET /basico/ejercicio-02`

### Respuesta esperada
```json
{
  "ok": true,
  "message": "Ejercicio ejecutado correctamente",
  "topic": "npm scripts y package.json"
}
```

## Endpoints Adicionales
- `GET /basico/ejercicio-02/loadouts` : Lista loadouts disponibles
- `GET /basico/ejercicio-02/loadouts/:id` : Busca un loadout por ID
- `POST /basico/ejercicio-02/loadouts` : Registra un nuevo loadout tactico

## Ejecucion
```bash
npm start
```
