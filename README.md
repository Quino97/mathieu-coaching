# Mathieu Coaching

Static SvelteKit starter for Mathieu's running-coaching site. It is intentionally separated from the Aerias shop and exports to `build/` for GitHub Pages.

## Run it

```powershell
npm install
npm run dev
npm run check
npm run build
```

## Edit content

- Copy, packages, athlete examples and the coaching philosophy start in `src/lib/content.ts`.
- `/admin` is a basic browser-local editor. The demo passcode is `MATHIEU`; this is not security. It saves to `localStorage` and can export JSON. Replace it with Supabase Auth and database storage before allowing anyone else to administer the site.
- Photos/logos supplied for the concept live in `static/assets/`.

## GitHub Pages

The included Actions workflow builds and deploys after pushing to `main`. In GitHub repository settings, select **Pages → Source → GitHub Actions**. During the GitHub build, the site detects its repository name and serves links/assets beneath the correct project-site subpath automatically.
