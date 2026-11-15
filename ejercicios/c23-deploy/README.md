# Proyecto Librería - Desarrollo de Software 2026

## Deploy en Producción 🚀

La aplicación se encuentra desplegada y funcionando en la nube utilizando la siguiente arquitectura:

- **Frontend:** [https://ds2026-actividades-8afx.onrender.com](https://ds2026-actividades-8afx.onrender.com)
- **Backend:** [https://libreria-backend-lo4e.onrender.com](https://libreria-backend-lo4e.onrender.com)

### Servicios Utilizados
- **Frontend:** Render (Static Site)
- **Backend:** Render (Web Service con Docker)
- **Base de Datos:** Neon (PostgreSQL)

---

## Variables de Entorno

Para correr este proyecto, es necesario configurar las siguientes variables de entorno (por seguridad, no incluyo los valores):

**Backend** (`backend/.env` o en el panel de Render):
- `PORT`: Puerto donde corre la API (ej. 3000).
- `DATABASE_URL`: String de conexión directa a la base de datos Postgres (Neon).
- `JWT_SECRET`: Clave secreta para firmar los tokens de autenticación.
- `FRONTEND_URL`: URL del frontend para habilitar las peticiones CORS.

**Frontend** (`frontend/.env` o en el panel de Render):
- `VITE_API_URL`: URL base donde responde la API del backend (ej. `https://mi-backend.onrender.com/api`).

---

## Migraciones y Carga de Datos (Seed)

El backend utiliza **Prisma** como ORM.

**En producción:**
Las migraciones se ejecutan automáticamente cada vez que el contenedor de Render arranca, gracias al comando `npx prisma migrate deploy` configurado en el `Dockerfile.prod`.

**Carga de datos de prueba:**
Para popular la base de datos por primera vez (ya sea local o en la nube apuntando a Neon), posicionarse en la carpeta `backend` y ejecutar:

```bash
npx prisma db seed