# Packing Checklist

A tiny static website with two packing checklists — **Rucksack** and **Case** —
so you can tick items off as you pack. No build step, no dependencies: just
`index.html`, `style.css`, and `script.js`. Checked state is saved in the
browser (`localStorage`), and it supports light/dark mode automatically.

See [`PROMPT.md`](./PROMPT.md) for the prompt this project was generated from.

## Running locally

Just open `index.html` in a browser, or serve the folder with any static
server, e.g.:

```
npx serve .
```

## Deploying to GitHub Pages

1. Create a new GitHub repository (or use an existing one) and push this
   project to it:

   ```
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git branch -M main
   git push -u origin main
   ```

2. On GitHub, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to `Deploy from a branch`.
4. Set **Branch** to `main` and folder to `/ (root)`, then **Save**.
5. After a minute or two, your site will be live at:

   ```
   https://<your-username>.github.io/<your-repo>/
   ```

## Editing the items

Update the `LISTS` object at the top of `script.js` to change what's on
each list.
