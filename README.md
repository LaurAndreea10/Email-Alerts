# Email Alerts — Juniper's Tea Room

A bilingual, accessible and responsive email-experience showcase built for the **CodePen August 2026 Email Challenge**.

The project presents a complete **Creator Social** communication journey for *Juniper's Tea Room*, covering three connected email moments:

1. **Confirmation**
2. **Reminder**
3. **Thank-you / Follow-up**

## Live Demo

https://laurandreea10.github.io/Email-Alerts/

## Overview

Email Alerts started as a premium email concept and evolved into a browser-ready interactive showcase. The current version combines polished editorial visuals with bilingual content, accessibility controls and theme customization.

The experience is designed to demonstrate how transactional and event-related emails can feel cohesive, elegant and inclusive rather than purely functional.

## Features

- **English / Romanian language switcher**
- **Light and Dark Mode**
- Preference persistence with `localStorage`
- Automatic system-theme detection
- Responsive layout for desktop, tablet and mobile
- Confirmation, reminder and thank-you stages in one visual journey
- Premium editorial styling inspired by tea-room and botanical aesthetics
- Accessible keyboard navigation
- Visible focus states
- Skip-to-content link
- High-contrast mode
- Larger-text mode
- Reduced-motion mode
- Native `prefers-reduced-motion` support
- Semantic HTML structure
- ARIA labels and live announcements for interface changes
- Accessible buttons and controls
- Improved color contrast across light and dark themes

## Accessibility

Accessibility is treated as a core part of the interface rather than an optional add-on.

The project includes dedicated controls for users who may benefit from:

- increased text size;
- stronger color contrast;
- reduced animation and motion;
- keyboard-only navigation;
- clearer focus indication;
- screen-reader-friendly status updates.

The interface also respects the operating system's `prefers-reduced-motion` preference.

## Dark Mode

The theme can be changed directly from the interface.

The selected mode is stored locally so the preferred appearance is restored on future visits. If no preference has been saved, the page can use the user's system color-scheme preference.

## Languages

The interface is available in:

- **English**
- **Română**

Language selection is preserved locally between visits.

## Email Journey

### 01 — Confirmation

Confirms the Creator Social registration and introduces the event details, visual identity and primary call to action.

### 02 — Reminder

Re-engages the attendee shortly before the event with the key information they need to arrive prepared.

### 03 — Thank-you

Completes the communication cycle with a warm follow-up after the event and creates an opportunity for continued engagement.

## Design Direction

The visual system combines:

- botanical motifs;
- soft green tones;
- warm neutral surfaces;
- editorial serif typography;
- subtle depth and shadows;
- ticket-inspired event details;
- restrained micro-interactions.

Animations are intentionally decorative and can be disabled through reduced-motion preferences or the accessibility controls.

## Technology

- HTML5
- CSS3
- Vanilla JavaScript
- CSS custom properties
- Local Storage
- GitHub Pages

No framework or build step is required for the published version.

## Project Structure

```text
Email-Alerts/
├── index.html
└── README.md
```

The application is intentionally delivered as a compact single-page project, making it easy to preview, fork and deploy.

## Run Locally

Clone the repository:

```bash
git clone https://github.com/LaurAndreea10/Email-Alerts.git
```

Open the project folder and launch `index.html` in a browser.

You can also use any local development server, for example VS Code Live Server.

## GitHub Pages

The project is deployed from the `main` branch using GitHub Pages.

Live version:

https://laurandreea10.github.io/Email-Alerts/

## Goals of the Project

This project explores how a small email campaign can work as a connected product experience rather than three unrelated templates.

The main goals are to:

- maintain a consistent visual language across the full communication journey;
- provide useful event information without overwhelming the reader;
- combine polished UI effects with accessibility safeguards;
- support multiple languages without duplicating the entire interface;
- demonstrate progressive enhancement with plain HTML, CSS and JavaScript.

## Future Ideas

Possible extensions include:

- automatic theme selection per email preview;
- email-client compatibility previews;
- printable event ticket mode;
- calendar-file export;
- configurable event data;
- additional accessibility presets;
- email template export;
- MJML source variants for production email workflows.

## Author

**Laura Andreea**

- GitHub: https://github.com/LaurAndreea10
- Portfolio: https://laurandreea10.github.io/codepen-portfolio/

## License

This project is currently shared as a personal portfolio and CodePen Challenge project. No separate open-source license has been added yet.
