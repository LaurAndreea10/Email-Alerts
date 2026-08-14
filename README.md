# Juniper Email Journey Studio 2.0

An accessible, bilingual email campaign experience builder created for the **CodePen August 2026 Email Challenge** and expanded into a portfolio-ready mini product.

## Live demo

https://laurandreea10.github.io/Email-Alerts/

## What it is

**Juniper Email Journey Studio** turns a simple set of event emails into an interactive campaign workspace. It combines email previewing, personalization, accessibility controls, simulated campaign analytics, A/B variants, export tools and PWA support in one dependency-free front-end experience.

The campaign follows four moments:

1. **Confirmation**
2. **Reminder**
3. **Event day**
4. **Thank-you / Follow-up**

All stages are available in **English and Romanian**.

## Highlights

- RO / EN interface and email copy
- Light and dark themes
- Browser-language detection
- Saved preferences with `localStorage`
- Desktop, tablet and mobile email previews
- Inbox simulator with subject and preview text
- Interactive campaign journey timeline
- Live personalization for guest name, date, location, promo code and RSVP status
- Three A/B-style content variants: Elegant, Concise and Friendly
- Demo analytics for open rate, CTA clicks and RSVP rate
- Delivery-state indicators
- Accessibility onboarding
- Low-vision preset
- Dyslexia-friendly / readable preset
- Keyboard-first preset
- High-contrast mode
- Reduced-motion mode
- Adjustable text size
- Selectable font mode
- Increased spacing / line-height option
- Skip link and semantic landmarks
- Visible keyboard focus
- ARIA live announcements
- Semantic structure preview
- Accessibility inspector
- Keyboard shortcuts
- Command palette with `Ctrl/Cmd + K`
- Shareable URL configuration
- Copy subject and preview text
- Copy generated email HTML
- Download standalone HTML email
- Download campaign JSON
- Copy accessibility report
- Installable PWA support
- Offline cache through a service worker
- Responsive layout
- No external JavaScript libraries

## Accessibility

Accessibility is treated as a core product feature rather than an add-on.

The interface includes semantic HTML, focus-visible states, keyboard-operable controls, screen-reader announcements, reduced-motion support, responsive touch targets and configurable reading profiles.

The **Accessibility Inspector** provides a lightweight in-product checklist for:

- semantic landmarks
- keyboard navigation
- visible focus
- reduced-motion support
- document language
- touch target sizing

The **Semantic Preview** also exposes a simplified representation of the current email structure so the hierarchy can be understood independently of its visual design.

## Keyboard shortcuts

| Shortcut | Action |
| --- | --- |
| `1` | Confirmation |
| `2` | Reminder |
| `3` | Event day |
| `4` | Thank-you |
| `D` | Toggle dark mode |
| `L` | Change language |
| `+` | Increase text size |
| `-` | Decrease text size |
| `Ctrl/Cmd + K` | Open command palette |
| `Esc` | Close dialogs / command palette |

## Personalization

The left campaign panel can update the preview in real time using:

- guest name
- event date
- location
- promotional code
- RSVP state

These values are reflected directly inside the active email preview.

## A/B variants

Three simulated creative variants are available:

- **A — Elegant**
- **B — Concise**
- **C — Friendly**

Changing the variant also updates the demo engagement metrics to illustrate how a campaign experimentation workflow could be represented.

## Export tools

The studio can:

- copy the active subject line
- copy preview text
- copy generated HTML
- download a standalone HTML email
- export the campaign configuration as JSON
- copy an accessibility report

These tools make the project feel closer to an email campaign product than a static visual challenge.

## PWA / offline support

The project includes:

- `manifest.webmanifest`
- custom SVG app icon
- service worker
- install prompt support where the browser allows it
- offline caching for core project assets

## Project structure

```text
Email-Alerts/
├── index.html
├── style.css
├── app.js
├── manifest.webmanifest
├── sw.js
├── icon.svg
└── README.md
```

## Tech stack

- HTML5
- CSS3
- Vanilla JavaScript
- CSS custom properties
- Web Storage API
- Clipboard API
- Blob / Object URL exports
- URLSearchParams
- Web App Manifest
- Service Worker / Cache API
- GitHub Pages

## Progressive enhancement

The project intentionally avoids frameworks and external runtime dependencies. The visual interface is built with standard browser technologies, while enhanced capabilities such as clipboard access, installation and offline behavior use native Web APIs when supported.

## Local development

Clone the repository and serve the folder through a local web server. A local server is recommended because service workers do not run normally from a plain `file://` URL.

For example:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Design direction

The visual system is inspired by a calm editorial tea-room identity: botanical greens, warm neutrals, serif display typography, spacious surfaces and restrained motion. Dark mode and high-contrast mode adapt that identity without making accessibility feel separate from the core design.

## Purpose

This project demonstrates the intersection of:

- front-end development
- CRM / lifecycle communication
- email UX
- accessibility
- campaign personalization
- interaction design
- responsive UI
- lightweight product thinking

## Author

**Laura Andreea**

GitHub: https://github.com/LaurAndreea10

---

Built as a CodePen challenge concept and expanded into **Juniper Email Journey Studio 2.0**.
