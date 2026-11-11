# Hyperion Website

A one-page business website for Hyperion, built with HTML, CSS and
object-oriented JavaScript (ES6 classes). No build tools or server needed:
open `index.html` in any modern browser.

## Structure

```
hyperion-website/
├── index.html
├── README.md
├── assets/
│   └── logo.webp
├── css/
│   └── styles.css
└── js/
    ├── content.js            All text on the site (edit here)
    ├── main.js               Starts the app
    └── classes/
        ├── Component.js      Abstract base class
        ├── Navbar.js         extends Component
        ├── Hero.js           extends Component
        ├── MottoSection.js   extends Component
        ├── ValueSection.js   extends Component
        ├── PhilosophySection.js  extends Component
        ├── ContactSection.js extends Component
        ├── Footer.js         extends Component
        ├── ScrollSpy.js      Highlights the current nav link
        └── App.js            Creates and renders every component
```

## Sections (named from the structure blueprint)

| Scroll section | Label | Content |
|---|---|---|
| Top banner | Home | Consistency. Persistence. Responsibility. |
| 3-column grid | Core Pillars | The three pillars explained |
| Feature banner | Core Value | Spotlight on Discipline |
| 3-point list | Our Philosophy | Your three reflection paragraphs, lightly corrected |

## Editing

- Change wording in `js/content.js`.
- Colors and fonts are CSS variables at the top of `css/styles.css`.
- Headings use Google Fonts (Barlow). Offline, the page falls back to Arial.
