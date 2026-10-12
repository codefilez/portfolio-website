# portfolio-website

Paul Robson's personal portfolio site: a React + TypeScript single-page app built with Vite. Progress is tracked in Jira (project PW, linked from the README).

## Stack

- React 19, React Router 7 (`BrowserRouter`), TypeScript (strict)
- UI: MUI (`@mui/material`) with a custom dark theme; Emotion and styled-components for component styles
- Vite 8 (build output goes to `build/`, not `dist/`)
- Vitest + Testing Library + jsdom; ESLint 9 (flat config) with `jsx-a11y` and `react-hooks`
- **pnpm** (version pinned in `packageManager`) and Node from `.nvmrc`. Don't use npm or yarn, and don't commit a `package-lock.json`.

## Commands

```sh
pnpm install --frozen-lockfile   # install
pnpm dev                         # dev server on http://localhost:5173
pnpm test                        # vitest, single run (test:watch for watch mode)
pnpm lint                        # eslint .
pnpm check                       # lint + test; this is what CI runs
pnpm build                       # tsc type-check, then vite build
pnpm preview                     # serve the production build
```

Run `pnpm check` and `pnpm build` before pushing. CI runs both on every non-`main` branch.

## Layout

```
src/
  index.tsx            entry point
  components/          shared UI: App (theme + router), NavBar, Footer
  routes/              one folder per page: welcome, books, blog
  api/BlogApi.tsx      fetches posts from https://blog-api.run3wide.com
  utilty/              helpers (the folder name is misspelled; leave it)
  Types.tsx            shared types
  setupTests.ts        loads jest-dom matchers
```

Each component folder has an `index.ts` barrel that re-exports the component (`export * from "./navBar"`). Import components via the folder. Routes are registered in `src/components/App/app.tsx`. The theme (palette, typography, MUI overrides) is also defined there.

The books and blog pages use local data (`bookData.ts`, `mockBlogPosts.ts`) in addition to or instead of the API. Check which one a page actually uses before changing it.

## Conventions

- Match the style of the surrounding code. Existing source uses double quotes, 2-space indentation and semicolons.
- Note that `prettierrc.json` has **no leading dot**, so Prettier doesn't pick it up. It also disagrees with the existing code (single quotes, 4-space tabs). Don't run `pnpm format` across the repo, because it would reformat nearly every file. Format only the files you touch, and only once the config issue is sorted out.
- Test files live next to the code they cover as `*.test.js` or `*.test.tsx`. `globals: true` is on, so `test`/`expect` need no import. Prefer new tests in TypeScript.
- Keep accessibility lint clean (`jsx-a11y`). Prefix intentionally unused args with `_`.

## Known issues

- `.github/workflows/main.yml` (deploys to S3 on push to `main`) is stale. It still uses `npm ci` with Node 20, but the project moved to pnpm and Node 22. It needs updating to match `feature.yml` before the deploy can work.
- `.env` is tracked in git and holds only `SKIP_PREFLIGHT_CHECK`, a leftover from Create React App. Never put real secrets in it. Use `.env.local` (gitignored) for local values.
- `src/simpleTest.test.js` is a placeholder test that asserts nothing.

## Deployment

Pushes to `main` build the site and sync `build/` to an S3 bucket using AWS credentials stored as GitHub Actions secrets. Never commit credentials. Merging to `main` deploys to production, so be careful there.

## Git

Commit messages follow Conventional Commits (`feat:`, `fix:`, `build:`, `docs:`, `ci:`, `refactor:`), usually with the PR number appended. Work on a branch and open a PR. Don't push directly to `main`.
