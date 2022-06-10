# DOCUMENTATION

Esta es una aplicación que hice rápido para la prueba de React TypeScript Developer de la UNPHU. Hice algo simple, este proyecto se puede seguir mejorando y optimizando. Resaltar que cualquiera puede ver el listado de usuarios, pero eso se puede solucionar usando reglas de seguridad.

**Hice este proyecto utilizando:**

- React TypeScript con Vite.
- Chakra UI y Sass para la UI.
- Redux y Context para el manejo de estados. (aclarar que en un proyecto pequeño como este no es necesario usar los 2, solo con Context API se hacer pero yo hice usando ambas para mostrar mis conocimientos)
- Firebase para el auth, base de datos y hosting. (Backend As a Service)

También, aclarar que deje la credenciales de Firebase dentro del código para que se pueda probar el proyecto. Aunque en un ambiente real lo ideal es extraerlas en un archivo `.env`.

Las rutas de la aplicación están divididas en publicas y privadas. Y son las siguientes:

- Publicas: (cualquiera puede ver estas rutas)
  - `/login`
  - `/signin`
- Privadas: (se necesita que el usuario este logueado para ver estas rutas)
  - `/dashboard`
  - `/dashboard/add`
- Redirect: si hay usuario logueado hace redirect a `/dashboard`, si no a `/login`

**Para el login puedes usar la siguientes credenciales:**

```
Email: testuser@adonys.me
Password: 12345678
```

Aunque también puedes crear tu propio usuario con un correo y contraseña.
