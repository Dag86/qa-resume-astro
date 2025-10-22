![CI](https://img.shields.io/github/actions/workflow/status/Dag86/qa-resume-astro/ci.yml?branch=main)



# QA Engineer Resume Site

This is an interactive resume website for a QA/Automation Engineer, built with [Astro](https://astro.build/) and TypeScript. It features a responsive single-page layout with sections like Experience, Projects, and Skills, all loaded from a JSON resume file. The site is optimized for performance (minimal JS, excellent Core Web Vitals) and accessibility (keyboard navigation, screen reader support).

## Running Locally

- **Development:** Run `npm install` then `npm run dev` to start a local dev server with hot reload.
- **Production Build:** Run `npm run build` (output in `dist/`).
- **Preview Build:** Run `npm run preview` to serve the `dist/` build locally for testing.

## Deployment

This site is fully static and can be deployed to any static host. Common options:

### Cloudflare Pages

1. Push your code to a GitHub or GitLab repository.
2. In Cloudflare Pages, create a new project and connect your repo.
3. Set the **Build command** to `npm run build` and **Output directory** to `dist`.
4. Cloudflare will handle dependencies, build, and deploy with free SSL and CDN.

### Vercel

1. Import the repo on [Vercel](https://vercel.com/). Vercel auto-detects Astro.
2. Ensure the build command is `npm run build` and output is `dist`.
3. Deploy. Vercel provides preview URLs, production deployment, SSL, and CDN.

*You can also deploy to Netlify or any static host by uploading the `dist/` folder.*

## Design & Performance

- **Minimal JS:** Uses Astro’s islands architecture to ship almost no JavaScript except for a small interactive widget and theme toggle (~5KB custom JS). No large client frameworks; content is pre-rendered to static HTML. JS bundle stays under 60KB gzip (enforced by CI).
- **Performance:** Critical CSS is small and can be inlined. The single web font (`Montserrat`) is preloaded with `font-display: swap`. Images use `loading="lazy"` where needed, but most assets are SVGs/icons. Fast LCP and negligible CLS due to static content and stable layout.
- **Accessibility:** Includes a visible “skip to content” link. All interactive elements are keyboard-navigable with clear focus states and ARIA attributes. The SVG diagram uses `<title>` for tooltips and descriptions, ensuring screen reader support. Headings are structured logically for assistive tech.
- **SEO & Metadata:** Pages include `<title>`, `<meta name="description">`, Open Graph tags, and a JSON-LD **Person** schema for search engines. The Astro config’s `site` field sets canonical URLs.
- **Continuous Quality:** Playwright tests catch regressions. GitHub Actions runs these tests and Lighthouse CI to enforce performance budgets (e.g., LCP < 2.5s, CLS < 0.05). CI blocks merges that degrade speed or accessibility.

## Summary

This site is designed for speed, accessibility, and reliability:

- **Static-first:** Most content is pre-rendered HTML; minimal JS for enhancements.
- **Performance:** Small JS/CSS, optimized fonts, and stable layout for fast loads.
- **Accessibility:** Keyboard and screen reader friendly, semantic HTML, high contrast.
- **Progressive Enhancement:** Fully usable without JS; enhancements load if available.
- **Continuous Monitoring:** Automated tests and CI enforce quality and performance.

These choices ensure a fast, accessible, and professional resume site that highlights the QA engineer’s skills and experience.
