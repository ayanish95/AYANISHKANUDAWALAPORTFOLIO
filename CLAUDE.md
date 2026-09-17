# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Ayanish Kanudawala's personal portfolio site, built with Angular 19 (standalone components) and Ionic Angular components/icons for UI elements.

## Commands

- `npm start` / `ng serve` — dev server at `http://localhost:4200/`, auto-reloads on change.
- `npm run build` / `ng build` — production build, output to `dist/ayanishkanudawalaportfolio/browser`.
- `npm run watch` — dev-mode build with `--watch`.
- `npm test` / `ng test` — unit tests via Karma/Jasmine.
- Run a single test file: use Karma's `--include` or narrow via the browser test runner UI (`ng test` opens Chrome and re-runs on save); there is no dedicated single-file CLI flag configured.
- `ng generate component page/<name>` — scaffold a new page component (project uses `@ionic/angular-toolkit` schematics, which default new components/pages to `.scss` styles — existing components use `.css`, keep that consistent when generating).

## Architecture

- **Routing is flat and page-based.** `src/app/app.routes.ts` maps top-level paths (`home`, `about`, `experience`, `skills`, `portfolio`, `certifications`, `contact`) directly to standalone page components under `src/app/page/<name>/`. There is no lazy loading or nested routing — all routes eagerly import their component.
- **Every page/component is a standalone Angular component** (no NgModules). Each declares its own `imports` array in the `@Component` decorator, pulling in only what it needs (`CommonModule`, `RouterLink`, specific `IonIcon`/Ionic pieces, etc.).
- **Layout shell**: `AppComponent` (`src/app/app.component.ts`) renders `HeaderComponent` + `<router-outlet>` + `FooterComponent` around every routed page. It also registers the global Ionicons icon set via `addIcons(...)` from `ionicons/icons` — new icons used anywhere in the app must be added to this call (Ionicons are tree-shaken; unregistered icons render blank).
- **Ionic is used standalone/headless**, not as a full app shell: `provideIonicAngular({})` is registered in `src/app/app.config.ts`, and components import individual Ionic pieces like `IonIcon` from `@ionic/angular/standalone` rather than the full `IonicModule`.
- **Global styles are assembled in `angular.json`**, not just `src/styles.css`: the `styles` array also pulls in `src/assets/css/require.css`, `src/assets/css/main.css`, page-specific CSS under `src/assets/css/pages/`, several individual Ionic core CSS files, and `src/theme/variables.css`. When adding page-level global styles, follow this existing pattern (a `pages/<name>.css` file registered in `angular.json`) rather than relying on component-scoped styles alone.
- **Static assets** (résumé PDFs, images) live under `src/assets/` and are served as-is (configured via the `assets` build option).

## Deployment

- `.github/workflows/deploy-pages.yml` builds and deploys to GitHub Pages on every push to `main`. It builds with `--base-href /AYANISHKANUDAWALAPORTFOLIO/` and copies `index.html` to `404.html` for SPA routing fallback — keep the repo name and base-href in sync if the repo is ever renamed.
