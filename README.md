# The Whitening Lab — Bulletin Board

A tiny, static internal bulletin board. No backend, no build step —
just HTML/CSS/JS. Safe to run locally and deploy straight to Netlify.

## Running it locally

You don't strictly need a server (double-clicking `index.html` mostly
works), but browsers restrict some things when opened via `file://`.
The safest option is a one-line local server:

```bash
cd twl-bulletin-board
python3 -m http.server 8000
```

Then open **http://localhost:8000** in your browser.

## Adding a new bulletin

Open **`bulletins.js`**. Copy this block and paste it into the
`BULLETINS` array (order doesn't matter — the site always sorts
newest-first by date):

```js
{
  id: "unique-slug-no-spaces",
  date: "2026-07-10",          // YYYY-MM-DD
  title: "Short headline for the sidebar",
  body: `
    First paragraph.

    Second paragraph — just leave a blank line between paragraphs.
  `
},
```

Save the file and refresh the page. That's the entire workflow — no
database, no CMS login, no build step.

## How it works

- **`index.html`** — page structure
- **`style.css`** — all styling, matches The Whitening Lab's brand
  (black `#0A0A0A`, off-white `#FBFAF6`, yellow accent `#EBFF00`,
  Inter typeface)
- **`bulletins.js`** — the content, as a plain JS array
- **`script.js`** — renders the list, handles clicking a bulletin,
  and the live search

**Search** filters the left-hand list to bulletins whose title or
body contains the typed word (case-insensitive), and highlights the
match in the full bulletin on the right.

Each bulletin also gets a shareable link, e.g.
`yoursite.com/#square-brevo-sync-update` — useful if you want to
point someone straight at one update.

## Keeping this off search engines

This is set up so it should **not** get indexed by Google or any
other search engine:

1. `<meta name="robots" content="noindex, ...">` in `index.html`
2. `robots.txt` disallows all crawlers
3. `netlify.toml` sends an `X-Robots-Tag: noindex` header on every
   response (this is the one that actually matters most — it works
   even if a crawler ignores the meta tag or robots.txt)

**Important:** none of this makes the page *private* — it only asks
well-behaved search engines not to list it. Anyone with the URL can
still open it. If you want it genuinely restricted to your team,
Netlify's **Password Protection** or **Netlify Identity** (both
under Site settings → Access control, Pro plan or above) are the
right tools — that's a setting you'll need to turn on yourself in
the Netlify dashboard since it involves your account and billing.

## Deploying to Netlify

1. Push this folder to a GitHub repo (or drag-and-drop the folder
   into Netlify's dashboard for a quick manual deploy).
2. In Netlify: **Add new site → Import an existing project** (or
   **Deploy manually** for drag-and-drop).
3. Build command: none. Publish directory: `.` (already set in
   `netlify.toml`).
4. Deploy. Then, if you want it locked to your team, turn on
   Password Protection under Site settings → Access control.
