# Drop your photos in here

The site expects these three exact filenames. Until they exist, each section
falls back to a solid teal color, so nothing looks broken — just add the
files and refresh.

| Filename       | Used for                              | Recommended size |
|----------------|----------------------------------------|-------------------|
| `hero-bg.jpg`  | Top hero section ("Clean Windows...")  | 1920x1280px, landscape, wide shot of a home exterior or window-washer at work |
| `why-bg.jpg`   | "We treat every home like it's our own" section | 1920x1280px, a photo with the crew or a finished job |
| `cta-bg.jpg`   | Bottom "Let's Get Started" section     | 1920x1280px, another strong exterior/glass shot |

Tips:
- Landscape orientation, at least 1920px wide so it stays sharp on large screens.
- Keep each file under ~400KB (export as JPEG quality ~75-80, or convert to
  `.webp` and update the three `url('images/....jpg')` references in
  `index.html` to `.webp`) — large images will slow the page down.
- Photos with a clear focal subject work best since there's a dark gradient
  overlay on top for text readability — avoid busy/bright-sky-heavy shots
  where the overlay will wash things out.
