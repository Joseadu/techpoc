# Plan de Arquitectura e Implementación: SPA Angular

## Arquitectura Guiada por Dominio (Screaming Architecture)

La estructura principal del frontend no se divide en carpetas puramente técnicas, sino por dominio.

**Estructura Base:**

```
frontend/src/app/
 ├── core/
 │   ├── auth/ (guardias, interceptores, estado local del usuario)
 │   └── i18n/ (configuración de ngx-translate o Transloco)
 ├── features/
 │   ├── auth/ (componentes de Login: login.component.ts)
 │   └── posts/
 │       ├── components/ (componentes presentacionales: tarjetas de post, caja de comentarios)
 │       ├── pages/ (componentes enrutables: listado, detalle, formulario)
 │       └── services/ (lógica del dominio, llamadas al CRUD)
 └── shared/
     └── ui/ (elementos reutilizables: botones, inputs en Tailwind)
```

## Stack Técnico Elegido

- **Angular:** Última versión (standalone, señales, forms basados en señales).
- **Rendimiento:** Zoneless habilitado, HTTP Resource y carga `@defer` en comentarios.
- **Estilos:** TailwindCSS siguiendo diseño Mobile First.
- **Testing:** Vitest para unitarios, Playwright para E2E.
- **QA:** ESLint, Prettier, Husky, Lint-Staged.
