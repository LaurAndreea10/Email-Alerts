# Juniper Email Journey Studio 3.0

An accessible, bilingual email campaign production studio created from the **CodePen August 2026 Email Challenge** and expanded into a portfolio-ready CRM / lifecycle communication product concept.

## Live demo

https://laurandreea10.github.io/Email-Alerts/

## What it is

**Juniper Email Journey Studio** turns a connected event-email sequence into an interactive workspace for campaign design, accessibility, previewing, testing, personalization and simulated CRM delivery.

The campaign follows four lifecycle moments:

1. **Confirmation**
2. **Reminder**
3. **Event day**
4. **Thank-you / Follow-up**

All stages support **English and Romanian**.

## 3.0 highlights

### Email Client Lab

Preview the active campaign inside three distinct inbox environments:

- Gmail-style
- Outlook-style
- Apple Mail-style

The selected client is remembered locally and mirrors the current subject, preview text and active email content.

### Visual Block Editor

The email structure can be reordered through:

- pointer drag-and-drop
- keyboard-friendly Up / Down controls
- locally saved block order
- reset-to-default action

Editable structure:

- status badge
- headline and introduction
- event ticket
- creator perk
- primary CTA

### CRM Campaign Desk

A simulated audience workspace includes:

- contact records
- segments
- RSVP states
- lifecycle journey states
- audience search
- filtering by VIP, Creator and Pending RSVP
- delivered / opened / clicked KPIs
- campaign-run simulation

No real messages are sent; the feature is intentionally a front-end CRM simulation.

## Core 2.0 features retained

- RO / EN UI and email copy
- light and dark themes
- browser-language detection
- saved preferences with `localStorage`
- Desktop / Tablet / Mobile email previews
- inbox simulator
- four-stage campaign journey
- live guest, date, location, promo-code and RSVP personalization
- A/B/C creative variants
- campaign analytics demo
- delivery states
- Low Vision profile
- Dyslexia-friendly / Readable profile
- Keyboard-first profile
- high contrast
- reduced motion
- adjustable text size
- font and spacing controls
- skip link
- visible keyboard focus
- ARIA live announcements
- semantic preview
- accessibility inspector
- command palette
- keyboard shortcuts
- shareable URL configuration
- copy / download HTML
- JSON campaign export
- accessibility report export
- PWA installation
- offline service-worker cache
- responsive, dependency-free front end

## Accessibility

Accessibility is part of the product architecture rather than a separate presentation layer.

The studio includes semantic HTML, focus-visible states, keyboard-operable controls, screen-reader announcements, reduced-motion support, configurable reading profiles, responsive touch targets and an accessibility inspector.

The 3.0 Visual Block Editor also provides explicit Up / Down buttons so reordering does not depend on drag-and-drop alone.

## Version history

The project keeps its evolution visible instead of replacing previous milestones.

| Version | Date | Stage |
| --- | --- | --- |
| **3.0** | 14 Aug 2026 | Campaign Production Studio — client previews, block editor, CRM simulation |
| **2.0** | 14 Aug 2026 | Accessible Journey Studio — personalization, analytics, exports, PWA |
| **1.0** | 14 Aug 2026 | Accessible Email Journey — RO/EN, dark mode, accessibility |
| **0.x** | 13 Aug 2026 | Original MJML Creator Social concept |

Full details are available in [`CHANGELOG.md`](CHANGELOG.md).

Milestone commits:

- **2.0:** `d4acc46ff84c1299beae812926f05c3728e73535`
- **1.0:** `5c6e6a42f15903e7b9930d4afad6d8f493ffc3d9`

The live application also contains an in-product **Version History** section.

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
| `V` | Jump to Version History |
| `Ctrl/Cmd + K` | Command palette |
| `Esc` | Close dialogs / command palette |

## Project structure

```text
Email-Alerts/
├── index.html
├── style.css
├── app.js
├── v3.css
├── v3.js
├── manifest.webmanifest
├── sw.js
├── icon.svg
├── CHANGELOG.md
└── README.md
```

`style.css` and `app.js` contain the 2.0 foundation. `v3.css` and `v3.js` layer the 3.0 production-studio functionality on top, making the evolution easier to inspect.

## Tech stack

- HTML5
- CSS3
- Vanilla JavaScript
- CSS Custom Properties
- Web Storage API
- Clipboard API
- Blob / Object URL exports
- URLSearchParams
- MutationObserver
- HTML Drag and Drop API
- Web App Manifest
- Service Worker / Cache API
- GitHub Pages

## Progressive enhancement

The project intentionally avoids frameworks and external runtime dependencies. Core content remains standard HTML, while enhanced behaviors are added with native browser APIs.

## Local development

Run the repository through a local server so PWA and Service Worker behavior can be tested correctly.

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Design direction

The visual identity uses botanical greens, warm neutrals, editorial serif typography and restrained interaction. Dark mode and high-contrast mode adapt the same system rather than creating a disconnected accessibility theme.

## Purpose

The project demonstrates the intersection of:

- front-end development
- CRM / lifecycle communication
- email UX
- accessibility
- campaign personalization
- A/B testing concepts
- interaction design
- responsive UI
- product thinking

## Author

**Laura Andreea**

GitHub: https://github.com/LaurAndreea10

---

Started as an MJML email challenge concept and evolved into **Juniper Email Journey Studio 3.0**. Earlier milestones remain documented in the repository history and `CHANGELOG.md`.
