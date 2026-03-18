# AGENTS.md

## Cursor Cloud specific instructions

### Overview

This is a static HTML/CSS/JavaScript website for an online book library storefront called "Library". There is no build system, package manager, or backend — just plain HTML, CSS, and JS files served as static assets.

### Running the dev server

Serve the site from the repository root using Python's built-in HTTP server:

```
python3 -m http.server 5502
```

Then open `http://localhost:5502/` in a browser. Port 5502 matches the VS Code Live Server config in `library/.vscode/settings.json`.

### Key files

- `index.html` — main (and only) page; links `styles.css` and `index.js`
- `styles.css` — primary stylesheet (linked from HTML); contains some intentional CSS bugs as part of the learning exercise
- `style.css` — alternative/cleaned-up stylesheet (not linked by default)
- `index.js` — vanilla JS for mobile hamburger menu open/close
- `assets/` — static images (book covers, SVGs)

### Notes

- There are no automated tests, no linter config, and no build step in this repo.
- The `index.js` file contains a CSS media query block that is invalid JavaScript — this is part of the original exercise code.
- `styles.css` has several intentional CSS issues (e.g., invalid `transparent(red, green, blue, alpha)`, `background color:` missing hyphen). These are part of the learning exercise and should not be "fixed" unless explicitly requested.
- External CDN dependencies (Font Awesome, Google Fonts) require internet access; the site still renders without them but will be missing icons and custom fonts.
