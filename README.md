# AI-Native TPM Roadmap

An interactive 10-week learning roadmap for an AI-native technical project manager. The app is a static Vite, React, and TypeScript site. It saves checklist progress in the visitor's browser with `localStorage`.

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

1. Push this folder to a Git repository on GitHub or GitLab.
2. In Cloudflare, open **Workers & Pages**, choose **Create**, then **Pages** and **Import an existing Git repository**.
3. Select the repository. If this app is inside a larger repository, set the root directory to this folder.
4. Use these build settings:

| Setting | Value |
| --- | --- |
| Framework preset | Vite |
| Build command | `npm run build` |
| Build output directory | `dist` |

5. Save and deploy. No environment variables are required.

Cloudflare will rebuild the site after each push to the configured production branch. Checklist progress stays on each visitor's device and does not sync across browsers.

## Curriculum sources

The roadmap combines the selected Master.dev courses with official GitHub, Google SRE, DORA, NIST, OWASP, Microsoft Learn, and Atlassian resources. Selected roadmap.sh maps provide visual references for Git and GitHub, prompt engineering, AI agents, and AI red teaming. The curriculum uses only the sections relevant to a technical project manager, not the full developer-focused paths.
