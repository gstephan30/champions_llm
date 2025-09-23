# champions_llm

Static HTML presentation: "LLMs — Chancen und Grenzen" by Stephan Gloeckner.

## What’s here

- `index.html` — presentation entry point (static HTML + JS)
- `slides.html` — slide content (sections injected into the viewport)
- `app.js`, `app.css` — presentation logic and styling
- `pics/` — images used in the slides
- `prompts/` — notes and prompt material

## Quick preview (Windows / PowerShell)

1) Open directly (quick, may fail if your browser blocks file:// fetches):

```powershell
start .\index.html
```

2) Recommended: serve a simple local HTTP server (avoids fetch/CORS problems):

```powershell
# from the project folder
cd C:\Users\Stephan\Documents\coding\champions_ki
# Python 3 (built-in)
python -m http.server 8000
# then open http://localhost:8000 in your browser
```

3) Alternative (Node):

```powershell
# install once if you need it
npm install -g http-server
http-server . -p 8000
# then open http://localhost:8000
```

## How to navigate the slides

- Right / Left arrow or Space to advance / go back
- Click right/left half of the screen to navigate
- Press `f` to toggle fullscreen
- The URL hash reflects the slide number (e.g. `#3`) so you can link to a specific slide

## Editing notes

- Slide content is in `slides.html`. Each slide is a `<section class="slide">`.
- Per-slide behavior is controlled with data-attributes (examples in `slides.html`):
  - `data-appear="instant"` (show everything), `data-appear="by-bullet"` (default stepping),
  - `data-title`, `data-layout`, `data-theme`, etc.
- Images live in `pics/`; prompts and speaker notes are in `prompts/`.

## Troubleshooting

- If slides show a loading error, confirm `slides.html` is next to `index.html` and you're serving files over HTTP (see recommended Python server).
- If images don't display, check `pics/` and relative paths.
- Use Ctrl+F5 (or equivalent) to bypass caching while developing.

## License

This repository currently has no license. Add a license file (e.g. `LICENSE` with MIT) if you plan to publish or share.

## Problems or improvements

- Want keyboard shortcuts, print/export, or PDF export? I can add a small export script or a printable stylesheet.
