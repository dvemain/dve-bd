# DVE Building and Development

Rebuild of dvebd.com (Kingsley, MI general contractor — part of The DVE Project) as a React (Vite) multi-page site, deployed on Netlify from GitHub.

- Pages: Home, About, Services, Partners, Contact Us (react-router). Copy lives in `src/data/content.js`; images in `public/img/` (pulled from the 2023 archive of the original site).
- Contact form posts to Netlify Forms (form name `contact`).
- Run locally: double-click `start.bat` (installs deps on first run) → http://localhost:5178
- Build: `npm run build` → `dist/`. `netlify.toml` sets build/publish/SPA redirect.
