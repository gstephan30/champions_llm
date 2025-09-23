# champions_llm

Presentation: LLMs — Chancen und Grenzen

Contents
- `vortrag.qmd` — Quarto reveal.js presentation
- `_site/` — generated HTML site (ignored by .gitignore)

How to render

Requirements:
- Quarto (https://quarto.org) installed
- Node.js / npm (optional)

Render locally:

```powershell
cd C:\Users\Stephan\Documents\coding\champions_ki
quarto render vortrag.qmd
quarto preview  # opens a local server
```

If you see a blank page when opening `_site/vortrag.html` directly in a browser, use `quarto preview` (serves over HTTP) or run a local static server.

License
- Add a license if you want to open-source this repository.
