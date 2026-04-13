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

## Uso de Herramientas de IA

> En respuesta a los requisitos de la prueba, he utilizado herramientas de IA (Gemini v3.1) adoptando un rol de **colaboración interactiva y mentoría técnica** (Pair Programming) para abordar el proyecto con las mejores prácticas de Angular moderno.

El uso de la IA me ha servido como apoyo consultivo y acelerador en tres puntos clave:

1. **Guía de Arquitectura y Buenas Prácticas:** Me he apoyado en la IA para investigar, entender y aplicar correctamente el patrón de _Screaming Architecture_ exigido en el guion, así como para aprender a estructurar las nuevas directivas de Angular (como Signals y Zoneless). La he usado como un faro técnico para no desviarme del estándar.
2. **Setup y Scaffolding:** Agilizar la escritura de configuraciones largas y repetitivas (_boilerplate_) para herramientas como ESLint, Git hooks (Husky) o el arranque concurrente, ahorrándome la configuración plana para centrarme en el flujo la aplicación.
3. **Desarrollo Guiado:** Funcionar como un compañero para rebotar ideas, resolver dudas sobre sintaxis y redactar de manera estructurada este `PLAN.md` de seguimiento.

**Supervisión y Ejecución:**
Aunque la IA me ha guiado proporcionándome los cimientos estructurales o la propuesta de carpetas para resolver la prueba de forma escalable, he mantenido el control total de la ejecución. Ningún código se ha lanzado de forma automatizada; he ido ejecutando, asimilando y validando manualmente cada comando y configuración en mi entorno para asegurarme de comprender a fondo cada paso que dábamos.
