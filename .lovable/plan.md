# One consistent font: Sora

Replace the current two-font setup (Plus Jakarta Sans headings + DM Sans body) with Sora everywhere, so headings, body text, buttons and labels all share one typeface.

## What changes

- Load Sora (weights 300–800) from Google Fonts and drop the DM Sans / Plus Jakarta Sans links.
- Body text, headings, and the `font-display` class all resolve to Sora.
- Visual hierarchy stays intact — it keeps working through size and weight (extrabold headings, regular body), not through a second font.
- No layout, spacing, color, or content changes.

## Technical details

- `index.html`: swap the Google Fonts `<link>` to `family=Sora:wght@300..800`.
- `src/index.css`: set `body` and the `h1,h2,h3,h4,.font-display` rule to `"Sora", system-ui, sans-serif`.
- `font-mono` in the shadcn chart component stays as-is (numeric tabular data).
