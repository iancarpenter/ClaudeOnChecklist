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

## Editing the items

Update the `LISTS` object at the top of `script.js` to change what's on
each list.
