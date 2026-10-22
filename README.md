# SAMATHS SOLUTIONS — Website

A React + Vite rebuild of the SAMATHS SOLUTIONS landing page (abacus mental maths tutoring).

## Run it in VS Code

1. **Unzip** this folder and open it in VS Code.
2. Open a terminal in VS Code (`` Ctrl+` ``) and install dependencies:
   ```bash
   npm install
   ```
3. Start the dev server:
   ```bash
   npm run dev
   ```
4. Open the URL it prints (usually `http://localhost:5173`) in your browser.

## Project structure

```
samaths-website/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx      # React entry point
    ├── App.jsx       # All page sections (Header, Hero, About, Program, etc.)
    └── index.css     # All styling — colors, layout, responsive rules
```

## Replacing the placeholder images

I couldn't use the real photos from your reference image, so every photo area is a
gradient box labeled with what should go there (e.g. "Hero photo: smiling student
with abacus"). To swap them in:

1. Put your image files in `public/images/` (create that folder).
2. In `src/App.jsx`, find the `<div className="hero-visual">` (and the other
   `.media-block` / `.g-item` divs), delete the placeholder `<div className="placeholder-label">`,
   and add an `<img src="/images/your-file.jpg" alt="..." />` instead.
3. The CSS already sizes these containers correctly (`aspect-ratio` + `object-fit`
   can be added to the `img` in `index.css` if you want tighter cropping — add
   `object-fit: cover; width: 100%; height: 100%;` to `.hero-visual img`, `.media-block img`,
   and `.g-item img`).

## Editing content

- **Text/copy**: edit directly inside `src/App.jsx` (headings, paragraphs, stats, etc. are
  plain strings or small arrays like `stats`, `whyChoose`, `learnPoints` near the top of the file).
- **Colors**: all colors are CSS variables at the top of `src/index.css` under `:root`
  (`--green-dark`, `--orange`, `--cream`, etc.) — change them once and they update everywhere.
- **Icons**: this project uses [`lucide-react`](https://lucide.dev) for all icons (phone,
  mail, calculator, brain, etc.). Swap any icon by importing a different one from `lucide-react`.
- **Nav links / buttons**: currently point to `#` placeholders — update the `href` values in
  `App.jsx` once you have real pages/sections for Register, About, Contact, etc.

## Building for production

```bash
npm run build
```

This outputs static files to `dist/`, which you can deploy to Netlify, Vercel, GitHub Pages,
or any static host.
