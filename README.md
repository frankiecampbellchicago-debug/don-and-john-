# Don & John Exterior Cleaning — Website

Static one-page site. Same copy as the live site, rebuilt with parallax
background sections and scroll-reveal animation.

## Structure

```
index.html
css/style.css
js/script.js
images/          <- drop hero-bg.jpg, why-bg.jpg, cta-bg.jpg here (see images/README.md)
```

No build step — plain HTML/CSS/JS.

## Run locally

Just open `index.html` in a browser, or serve it:

```
python -m http.server 8000
```

then visit `http://localhost:8000`.

## Before this goes live

1. **Photos** — add `hero-bg.jpg`, `why-bg.jpg`, `cta-bg.jpg` to `images/`
   (specs in `images/README.md`). Sections show a solid teal fallback until
   you do.
2. **Estimate form** — `index.html`'s `<form id="estimate-form">` posts to a
   placeholder Formspree URL (`YOUR_FORM_ID`). Create a free form at
   [formspree.io](https://formspree.io) and swap the `action` attribute, or
   wire it to whatever backend Don & John already uses. Until it's connected,
   submitting shows a message pointing people to call/email instead.
3. **Favicon** — none set yet; add one if you want a browser-tab icon.

## Deploy to GitHub Pages

```
git remote add origin <your-repo-url>
git add .
git commit -m "Initial site"
git push -u origin main
```

Then in the repo: **Settings → Pages → Deploy from branch → main / (root)**.
