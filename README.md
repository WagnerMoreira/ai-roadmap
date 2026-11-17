# AI-Native TPM Roadmap

An interactive 10-week learning roadmap for an AI-native technical project manager. The app is a static Vite, React, and TypeScript site. It saves checklist progress in the visitor's browser with `localStorage`.

Live site: https://ai-roadmap-21r.pages.dev

## Edit the curriculum

All weeks, goals, tasks, links, and the optional side quest live in:

```text
src/data/roadmap.ts
```

The data shape is defined in `src/types.ts`. Each task needs a unique `id` because that value stores its completion state.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Build

```bash
npm run build
```

The deployable static site is written to `dist/`.

## Deploy to Cloudflare Pages

Wrangler is installed as a project dependency. After committing and pushing a change, deploy the production branch with:

```bash
npm run deploy:pages -- --branch main
```

The command builds the app and uploads `dist/` to the existing `ai-roadmap` Cloudflare project. No environment variables are required. Checklist progress stays on each visitor's device and does not sync across browsers.

## Curriculum sources

The roadmap combines the selected Master.dev courses with official GitHub, Google SRE, DORA, NIST, OWASP, Microsoft Learn, and Atlassian resources. Selected roadmap.sh maps provide visual references for Git and GitHub, prompt engineering, AI agents, and AI red teaming. The curriculum uses only the sections relevant to a technical project manager, not the full developer-focused paths.
