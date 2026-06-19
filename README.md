# SGAT Frontend

## Sistema de Gestión de Activos Tecnológicos (SGAT)

Aplicación web desarrollada con React para la administración y control de activos tecnológicos dentro de una organización.

## URL de Producción

https://sgat-fsalvador.mooo.com

## Funcionalidades Implementadas

### Autenticación

* Registro de usuarios.
* Inicio de sesión.
* Protección de rutas privadas.
* Persistencia de sesión mediante JWT.

### Gestión de Equipos

* Registro de equipos tecnológicos.
* Consulta de inventario.
* Edición de equipos.
* Eliminación de equipos.
* Visualización de detalles.
* Búsqueda y filtrado de equipos.

### Interfaz de Usuario

* Dashboard principal.
* Diseño responsive.
* Navegación protegida.
* Modales de confirmación.
* Mensajes de retroalimentación al usuario.

## Tecnologías Utilizadas

* React
* React Router DOM
* Context API
* Vite
* CSS Modules
* React Icons

## Variables de Entorno

Archivo `.env.production`

```env
VITE_API_URL=https://api.sgat-fsalvador.mooo.com
```

## Instalación Local

```bash
git clone <repositorio>
cd web_project_SGAT_frontend
npm install
npm run dev
```

## Compilación para Producción

```bash
npm run build
```

## Mejoras Futuras

El proyecto se encuentra diseñado para permitir la incorporación de nuevos módulos en futuras versiones:

* Gestión de incidencias.
* Gestión de mantenimientos.
* Asignación de equipos a usuarios.
* Reportes avanzados.
* Exportación a Excel y PDF.
* Gestión de proveedores.
* Gestión de licencias de software.
* Roles y permisos.
* Bitácora de auditoría.
* Dashboard con métricas avanzadas.

## Autor

Fernando Salvador
