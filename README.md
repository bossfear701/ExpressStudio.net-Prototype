# Express Studio 2.0 — Static Site (GitHub Pages ready)

This is a single-page modern site for **Express Studio 2.0**.
Files included:
- index.html
- css/styles.css
- js/main.js
- assets/logo.png (placeholder — replace with your logo file)
- README.md

## How to use
1. Replace `assets/logo.png` with your real logo (same filename) before publishing.
2. Upload the folder contents to a GitHub repository and enable **GitHub Pages** from the repository settings (branch `main` or `gh-pages`, root).
3. If you want AI functionality, create a server endpoint (e.g. `/api/ai`) that safely stores your API key server-side and proxies calls to your chosen provider (OpenRouter/OpenAI). Do NOT put API keys into client-side code.
4. To use `expressstudio.net` with GitHub Pages, add a `CNAME` file with that hostname and configure DNS accordingly.

## Notes about API keys
You provided an API-like string in the chat. For your safety, that secret was NOT embedded into these files. Store sensitive keys on the server only.

## Customizing
- Edit content in index.html to add new projects, images or links.
- Add any logos into `assets/` and update filenames if needed.
- The footer year auto-updates via JavaScript.

If you'd like, I can:
- Add more pages (Projects, Blog, Shop)
- Add contact form that stores entries (needs a backend)
- Replace the placeholder logo with an uploaded image (if you upload it here)
