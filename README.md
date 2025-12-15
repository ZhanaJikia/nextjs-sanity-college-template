# Next.js + Sanity college template

This repo has two parts:
- `web/`: Next.js 16 app that renders school-branded pages from Sanity content.
- `my-sanity-project/`: Sanity Studio (v4) for editing schools and pages.

## Requirements
- Node 20+
- npm (bundled with Node)

## Setup
1) Install deps:
   - `cd web && npm install`
   - `cd ../my-sanity-project && npm install`

2) Environment variables:
   - `web/.env.local`
     ```
     NEXT_PUBLIC_SANITY_PROJECT_ID=<your-project-id>
     NEXT_PUBLIC_SANITY_DATASET=<your-dataset>
     NEXT_PUBLIC_SANITY_API_VERSION=2025-12-15
     ```
   - `my-sanity-project/.env.local`
     ```
     SANITY_STUDIO_PROJECT_ID=<your-project-id>
     SANITY_STUDIO_DATASET=<your-dataset>
     ```
   Use the same project/dataset in both files.

## Run
- Start Studio (for content):
  ```
  cd my-sanity-project
  npm run dev -- --port 3333
  ```
- Start web app:
  ```
  cd web
  npm run dev
  ```

## Content model (Studio)
- `school`: title, slug, theme (`navy|emerald|crimson|violet`).
- `page`: reference to `school`, pageType (`home|about|faq`), hero, body, FAQ items.

## Expected data for a school slug (e.g., `uw`)
- A published `school` doc with `slug.current = "uw"`.
- Published `page` docs for that school for `home`, `about`, and `faq`.
If any page is missing, the corresponding route will return 404.

## Lint / typecheck
- `cd web && npm run lint`
- `cd my-sanity-project && npx tsc --noEmit`

## Notes
- The `[school]` directory in `web/app/` handles all school slugs dynamically.
- The “N” badge in the corner appears only in development (Next.js dev indicator).