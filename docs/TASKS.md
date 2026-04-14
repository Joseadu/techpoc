# Backlog y Seguimiento de Tareas (Agile)

**Leyenda:**

- `[ ]` To Do (Pendiente)
- `[/]` In Progress (En progreso)
- `[x]` Done (Completado)

## Bloque 1: Setup y Base del Proyecto

- `[x]` **TSK-101: Scaffold Inicial del Proyecto Angular** _(Estimación: 30m)_  
  Generar proyecto inicial en v21 en modo standalone con Angular CLI.
- `[x]` **TSK-102: Configuración del Sistema de Estilos** _(Estimación: 30m)_  
  Incorporar Tailwind CSS desde la instalación base para utilidades de diseño atómico.
- `[x]` **TSK-103: Integración de Calidad de Código (QA)** _(Estimación: 1h)_  
  Instalar y configurar ESLint, Prettier y ganchos pre-commit (Husky y lint-staged) para forzar revisión y formato automáticos en todo el equipo.
- `[x]` **TSK-104: Entorno de Desarrollo Concurrente** _(Estimación: 1h)_  
  Crear scripts (`concurrently` o `npm-run-all`) en `package.json` para levantar de manera simultánea el servidor frontend mock (`json-server`) y la aplicación Angular con un solo comando.
- `[x]` **TSK-105: Reestructuración de Testing** _(Estimación: 1.5h)_  
  Desinstalar Jasmine/Karma por completo y reemplazarlo por la configuración nativa de Vitest usando entornos asíncronos rápidos de Node.

## Bloque 2: Core y Autenticación

- `[x]` **TSK-201: Configuración Global e Internacionalización (i18n)** _(Estimación: 1.5h)_  
  Adecuación global habilitando `zoneless`, proveyendo `withFetch` e instalando un sistema de idiomas multi-estado (es/en) usando Transloco o NgxTranslate.
- `[x]` **TSK-202: Servicio de Autenticación de Negocio** _(Estimación: 2h)_  
  Confeccionar lógica (con Signals) en `AuthService` para leer del mock (`/users`) usando `name` local validado con password, emitiendo un estado y guardando la sesión falsa en localStorage.
- `[ ]` **TSK-203: Pantalla e Interfaz de Login** _(Estimación: 3h)_  
  Desarrollo maquetado mobile-first usando Figma y desarrollo técnico de formulario de login a partir de nuevas APIs (Signal Forms) con estado interactivo.
- `[ ]` **TSK-204: Middleware de Seguridad (Guards/Interceptors)** _(Estimación: 1.5h)_  
  Crear un interceptor funcional que añada inhabilitación global sin sesión y un Token inventado, acompañado de Guardias para ocultar paneles internos de la App.
