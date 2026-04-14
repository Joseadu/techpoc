# Backlog y Seguimiento de Tareas (Agile)

**Leyenda:**

- `[ ]` To Do (Pendiente)
- `[/]` In Progress (En progreso)
- `[x]` Done (Completado)

## Sprint 1: Setup y Base del Proyecto

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

## Sprint 2: Core y Autenticación

- `[x]` **TSK-201: Configuración Global e Internacionalización (i18n)** _(Estimación: 1.5h)_  
  Adecuación global habilitando `zoneless`, proveyendo `withFetch` e instalando un sistema de idiomas multi-estado (es/en) usando Transloco o NgxTranslate.
- `[x]` **TSK-202: Servicio de Autenticación de Negocio** _(Estimación: 2h)_  
  Confeccionar lógica (con Signals) en `AuthService` para leer del mock (`/users`) usando `name` local validado con password, emitiendo un estado y guardando la sesión falsa en localStorage.
- `[ ]` **TSK-203: Pantalla e Interfaz de Login** _(Estimación: 3h)_  
  Desarrollo maquetado mobile-first usando Figma y desarrollo técnico de formulario de login a partir de nuevas APIs (Signal Forms) con estado interactivo.
- `[ ]` **TSK-204: Middleware de Seguridad (Guards/Interceptors)** _(Estimación: 1.5h)_  
  Crear un interceptor funcional que añada inhabilitación global sin sesión y un Token inventado, acompañado de Guardias para ocultar paneles internos de la App.

## Sprint 3: Gestión de Posts (Listado y Flujo)

- `[ ]` **TSK-301: Layout "Shell" de Navegación** _(Estimación: 2h)_  
  Programar el marco estructural de navegación superior persistente (App Header) con un cambio en caliente de idiomas (runtime locale swap).
- `[ ]` **TSK-302: Pipeline de Datos para Posts** _(Estimación: 2h)_  
  Preparar el `PostService` comunicándose con `json-server` con sus queries adaptadas para paginación, metadatos y búsqueda de texto embebida.
- `[ ]` **TSK-303: Pantalla e Interfaz de Listados Visuales** _(Estimación: 4h)_  
  Mostrar las cuadrículas de datos usando la lógica de `@for`, construyendo interfaces atómicas en caso de estados `loading`, `empty` (sin datos) y `error` usando nuevo control flow.

## Sprint 4: Detalles, Comentarios y Propiedad

- `[ ]` **TSK-401: Detalle Asíncrono de un Único Post** _(Estimación: 2h)_  
  Ruteo para páginas dinámicas (ruta `/:id`) recuperando el objeto completo mediante resolvers o inputs funcionales.
- `[ ]` **TSK-402: Comentarios mediante Lazy Block (`@defer`)** _(Estimación: 2.5h)_  
  Peticiones de comentarios aplazadas usando la directiva `@defer { on viewport }` de Angular para no saturar memoria en la lectura parcial del visitante.
- `[ ]` **TSK-403: Formularios Seguros y Permisos Visuales** _(Estimación: 3h)_  
  Desarrollar form reactivo con Signal Forms para CRUD de Posts/Comentarios, habilitando solo los botones de mutación/borrado (Ownership) al identificador local validado.

## Sprint 5: Aseguramiento de Calidad Final y Pull Request

- `[ ]` **TSK-501: Testing Unitario de Integridad** _(Estimación: 2h)_  
  Validar unitariamente que un usuario invitado salte en el guard y de igual modo comprobar en pruebas la incapacidad de sobreescritura de metadatos ajenos vía componentes.
- `[ ]` **TSK-502: Test End to End en Playwright** _(Estimación: 3h)_  
  Automatización de navegación total sin simulaciones: Inicia en `/login`, valida éxito, lee el feed, crea un post, verifica éxito de escritura real en la base mock y cierra sesión.
- `[ ]` **TSK-503: Documentación y Argumentos** _(Estimación: 1h)_  
  Escritura final del README explicando los tradeoffs de Signals y Zoneless respecto a un estándar viejo de Angular, empaquetado para su aprobación por el equipo técnico.
