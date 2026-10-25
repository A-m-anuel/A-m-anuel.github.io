# a-m-anuel.github.io

Personal site of Amanuel Seid, security engineer. Served at https://a-m-anuel.github.io/

Plain HTML, CSS and a little JavaScript. No build step, no frameworks, no trackers.

## Structure

| File | Purpose |
|------|---------|
| `index.html` | Home: about, experience, projects, certifications, writing, contact |
| `blog.html` | Writing index |
| `posts/*.html` | Articles |
| `styles.css` | All styles (colour tokens at the top) |
| `script.js` | Mobile menu and the one-time terminal typing in the hero |
| `404.html` | Not-found page |
| `.nojekyll` | Tells GitHub Pages to serve files as-is |

## Publish

GitHub Pages serves this repository automatically because it is named `<user>.github.io`.
If the site does not appear: **Settings → Pages → Source: Deploy from a branch → `main` / `(root)`**.

## Preview locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Add a post

1. Copy `posts/mcp-config-attack-surface.html` to `posts/<new-slug>.html` and edit the title, meta and body.
2. Add a `<li class="post-row">` entry to `blog.html` (and to the writing section in `index.html` if it should be featured).

## Privacy

No CV PDF, phone number or visa details are published here. The CV is shared on request by email.
