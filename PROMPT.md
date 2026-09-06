# Prompt used to generate this project

Create a simple, static packing-checklist website, deployable to GitHub Pages
via plain HTML/CSS/JS (no build step, no frameworks, no dependencies).

Requirements:
- Two checklists side by side (stacked on mobile): "Rucksack" and "Case".
- Rucksack items: Work laptop, Pass, Train tickets, Hotel booking,
  iPhone charger, Water, Supper, Headphones.
- Case items: Notepad, Toiletries, Pants + socks, PJ, Office clothes,
  Watch charger, Laptop charger, Book, Breakfast.
- Each item is a checkbox the user can tick off.
- Checked state persists across page reloads (e.g. via localStorage).
- Show a progress count per list (e.g. "3 / 8 packed") and an overall
  progress bar or summary.
- Include a "Reset all" button to uncheck everything.
- Clean, minimal, responsive design that supports both light and dark mode
  (respect prefers-color-scheme).
- No backend, no build tooling — just index.html/style.css/script.js so it
  can be served directly by GitHub Pages from the repo root.
- Add a README explaining what it is and how to enable GitHub Pages for it.
- Initialize the project as a git repository and commit the files so it's
  ready to push to GitHub.
