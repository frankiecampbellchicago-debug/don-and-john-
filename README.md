# Don & John Exterior Cleaning — Website

Static one-page site. Same copy as the live site, restyled after the "Don &
John Redesign — Home with Wipe Effect" concept from Google Stitch: a
squeegee-wipe hero (the hero photo starts under a blurred "dirty" overlay
that a glowing line wipes clean as you scroll), scroll-reveal animation, and
a real photo gallery.

## Structure

```
index.html
css/style.css      <- squeegee wipe / reveal / hover styles (Tailwind via CDN handles the rest)
js/script.js
images/            <- 5 real photos already in place (see images/README.md)
```

Uses the Tailwind CDN build (no build step) — same approach as the reference
design, plain HTML/CSS/JS otherwise.

## Run locally

Just open `index.html` in a browser, or serve it:

```
python -m http.server 8000
```

then visit `http://localhost:8000`.

## Before this goes live

1. **Estimate form** — `index.html`'s `<form id="estimate-form">` posts to a
   placeholder Formspree URL (`YOUR_FORM_ID`). Create a free form at
   [formspree.io](https://formspree.io) and swap the `action` attribute, or
   wire it to whatever backend Don & John already uses. Until it's connected,
   submitting shows a message pointing people to call/email instead.
2. **Hero photo resolution** — `hero-bg.jpg` is capped at 768x512 (source
   limit) so it's a bit soft full-bleed; swap in a higher-res version of the
   same shot if you get one. Details in `images/README.md`.
3. **Favicon** — none set yet; add one if you want a browser-tab icon.

## Deploy to GitHub Pages

```
git remote add origin <your-repo-url>
git add .
git commit -m "Initial site"
git push -u origin main
```

Then in the repo: **Settings → Pages → Deploy from branch → main / (root)**.
