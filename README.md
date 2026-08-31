# Hoardodile Website

Static marketing site for
[Hoardodile](https://github.com/hoardodile/hoardodile), built with
[Next.js](https://nextjs.org) (`output: "export"`) on top of the published
[`@hoardodile/ui`](https://www.npmjs.com/package/@hoardodile/ui) design
system, following `DESIGN.md` in the hoardodile repository. The default
theme is the **hoardodile palette, dark** (`html.dark.theme-hoardodile`).

## Develop

```bash
pnpm install
pnpm dev          # http://localhost:3000
```

## Build

```bash
pnpm build        # static output in ./out
pnpm preview      # serve ./out at http://localhost:4173
```

Serve `./out` with any static file server (or `pnpm preview`).

## Notes

- The site sits **outside** the hoardodile monorepo (this folder is a
  sibling), so it depends on the published `@hoardodile/ui` npm package,
  not the workspace source. Pin `@hoardodile/ui`/`@hoardodile/i18n` to the
  same release as hoardodile.
- UI components come from a client-only library; the page and its sections
  declare a client boundary so the published `dist` (which omits
  `"use client"`) stays usable.
- **Bilingual** (English / 中文) via `@hoardodile/i18n`; the site copy lives
  in `app/locales/site.{en,zh}.json` under the `site` namespace, plus the
  `ui` namespace from `@hoardodile/i18n/catalogs/ui`. Routes: `/` (English,
  canonical) and `/zh/` (Chinese), with `hreflang` alternates.
- **Version is fetched, never hardcoded.** `scripts/fetch-release.mjs`
  (run via `prebuild`/`predev`) reads the latest GitHub release and writes
  `lib/release.generated.ts` (git-ignored). The download buttons show
  `Download <version>` and the asset URLs are derived from it; a fallback
  keeps the build working offline.
- **Download panel**: the header / hero / CTA `Download` buttons open an
  in-page dialog offering direct per-platform installers (Windows NSIS,
  macOS dmg, Linux AppImage) plus the secondary archives, with a
  "view all releases" fallback.
- **Demo screenshots**: `pnpm seed:screenshots -- --lang en,zh --skip-download`
  captures app screenshots; `scripts/optimize-screenshots.mjs` (sharp, a dev
  dependency) converts them to AVIF under `public/screenshots/<lang>/`,
  shown in the **Screenshots** section with click-to-preview. Original PNGs
  live only in the (git-ignored) `tmp-shots/` output — the repo keeps AVIF.
- **Icons & manifest**: multi-size icons copied from `apps/web/public/`
  (`favicon-16/32`, `apple-touch-icon`, `android-chrome-192/512`), a
  `app/manifest.ts` webmanifest, and `theme-color #272822`.
- `next.config.mjs` sets `output.hashFunction = "sha256"`: webpack's WASM
  xxhash64 hash crashes on Node 24 for some module inputs
  ("Cannot read properties of undefined (reading 'length')"); the JS hash
  keeps static export stable.
