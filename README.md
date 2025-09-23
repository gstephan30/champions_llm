# champions_llm


Presentation: LLMs — Chancen und Grenzen

Contents
- `index.html` — presentation entry point (static HTML)
- `pics/` — images used in the slides
- `prompts/` — notes and prompt material

How to view

This repository contains a static presentation (HTML and assets), not a Quarto (`.qmd`) project. To view the slides locally you can either open `index.html` in your browser or serve the folder with a simple static server.

Quick options to view locally:

- Open directly (works for local files):

```powershell
start .\index.html
```

- Serve with Python (recommended if you encounter CORS or relative-path issues):

```powershell
# Python 3.x
cd C:\Users\Stephan\Documents\coding\champions_ki
python -m http.server 8000
# then open http://localhost:8000 in your browser
```

- Serve with Node (http-server) if you prefer npm tools:

```powershell
npm install -g http-server
http-server . -p 8000
# then open http://localhost:8000
```

Notes
- If you previously saw references to `vortrag.qmd` or Quarto in this README, those were incorrect — this repository does not include Quarto sources.

License
- Add a license if you want to open-source this repository.
