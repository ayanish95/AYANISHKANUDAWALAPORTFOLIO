# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Ayanish Kanudawala's personal portfolio site, built with Angular 21 (standalone components). No UI framework dependency — icons are inline SVGs via a shared `IconComponent`.

## Commands

- `npm start` / `ng serve` — dev server at `http://localhost:4200/`, auto-reloads on change.
- `npm run build` / `ng build` — production build, output to `dist/ayanishkanudawalaportfolio/browser`.
- `npm run watch` — dev-mode build with `--watch`.
- `npm test` / `ng test` — unit tests via Karma/Jasmine.
- Run a single test file: use Karma's `--include` or narrow via the browser test runner UI (`ng test` opens Chrome and re-runs on save); there is no dedicated single-file CLI flag configured.
- `ng generate component page/<name>` — scaffold a new page component.
- Node: use the version in `.nvmrc` (22) — matches Angular 21's CLI engines requirement and CI.

## Architecture

- **4 real pages, flat routing.** `src/app/app.routes.ts` maps `home`, `work`, `skills`, `contact` to standalone page components under `src/app/page/<name>/`. `about`, `experience`, `portfolio`, `certifications` are kept only as redirects (to `skills`/`work`) so old bookmarks/search results don't 404 — there are no components behind them anymore. No lazy loading — all routes eagerly import their component (the whole app is ~280kB, not worth splitting).
- **Every component is standalone** (no NgModules), each declaring its own `imports` array in the `@Component` decorator.
- **Layout shell**: `AppComponent` renders `HeaderComponent` + `<router-outlet>` + `FooterComponent` around every routed page.
- **Icons**: `src/app/shared/icon/icon.component.ts` is a single `<app-icon name="...">` component rendering inline SVGs for the handful of icons the site uses (mail, linkedin, github, call, menu). There is no icon library dependency — add new icons by adding a `@case` to its template.
- **Shared profile data**: `src/app/shared/profile.ts` is the single source of truth for email/phone/LinkedIn/GitHub, consumed by both the Contact page and the footer.
- **Global styles are assembled in `angular.json`**, not just `src/styles.css`: the `styles` array also pulls in `src/assets/css/require.css` (design tokens, reset, typography scale, header/footer/preloader), `src/assets/css/main.css` (the actual page/section/card/timeline design system + hero), and `src/assets/css/pages/contact.css`. All page components have empty `.css` files — styling comes entirely from these global sheets via shared class names (`.section`, `.split-section`, `.project-card`, `.skill-card`, `.experience-list`, `.tag-list`, etc.), not component-scoped styles.
- **Design tokens** live in `require.css`'s single `:root`: the hex palette (`--ink`/`--muted`/`--paper`/`--line`/`--accent`/`--deep`) drives page backgrounds/text/borders; the older HSL tokens (`--jet`/`--orange-red`/`--maximum-yellow-red`/`--white*`) remain in active use for header/navbar/preloader/gold-accent moments (experience-year, contact icons). Don't reintroduce a second competing `:root` block — that was the exact mess this codebase was cleaned up from.
- **Static assets** (résumé PDF) live under `src/assets/` and are served as-is. There is no `images/` directory — nothing in the app renders an image; the header logo is text ("AK").

## Deployment

- `.github/workflows/deploy-pages.yml` builds and deploys to GitHub Pages on every push to `main`. It builds with `--base-href /AYANISHKANUDAWALAPORTFOLIO/` and copies `index.html` to `404.html` for SPA routing fallback — keep the repo name and base-href in sync if the repo is ever renamed.
- On Windows/Git Bash, verifying `--base-href /AYANISHKANUDAWALAPORTFOLIO/` locally needs `MSYS_NO_PATHCONV=1` prefixed to the command, otherwise Git Bash mangles the leading `/` into a filesystem path. This is a local-shell-only quirk — CI (`ubuntu-latest`) is unaffected.
