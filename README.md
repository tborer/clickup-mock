# NexusAI — AI-Driven Action Dashboard

A static, front-end-only prototype of an AI copilot dashboard for a customer growth / account
management tool. It's a design mock built to demonstrate how abstract "AI capabilities" can be
translated into concrete, sticky workflows: instead of a chat box, the AI surfaces a morning
brief and a set of recommended actions the user can act on in one click.

The whole thing is three files — `index.html`, `style.css`, and `script.js` — with no build step,
no dependencies, and no backend. All data shown is hard-coded sample content, and all "AI"
behaviour is simulated in the browser.

## Running it

Open `index.html` directly in a browser, or serve the directory:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

Pushes to `main` are deployed to GitHub Pages by `.github/workflows/static.yml`, which uploads the
repository as-is.

## Features

### Layout & navigation
- **Persistent sidebar** with a branded logo, primary nav (Dashboard, Analytics, Settings), an
  "Intelligence" section containing the AI Copilot entry with a live badge, and a user profile
  block at the bottom.
- **Dark glassmorphism theme** driven by CSS custom properties in `:root` — palette, semantic
  colours (alert / success / info / warning), blur, shadows, radii, and transition timings are all
  defined in one place and reused throughout.

### AI morning brief
- **Hero brief panel** with a personalised greeting, date, and an animated pulsing "AI Catalyst
  Report" indicator.
- **Narrative summary** of overnight account activity, with risks and opportunities highlighted
  inline in semantic colours.
- **Brief-level feedback loop** — thumbs up / thumbs down buttons that record a single selection
  and clear the opposing choice.

### Recommended action cards
- **Four card types**, each colour-coded by intent: a risk card (usage drop), an opportunity card
  (upsell signal), a neutral optimisation card (stale manual workflow), and a locked premium card.
- **"Why" explanations** on every card that state the concrete signal behind the recommendation,
  so the recommendation is auditable rather than opaque.
- **One-click actions** — Draft Outreach Email, Adjust Campaign Parameters, Suggest Automation
  Flow — rendered as primary or secondary buttons depending on urgency.
- **Simulated execution states**: clicking an action swaps the button into a spinning "Executing…"
  state, then a green "Complete" confirmation, then restores the original label after a few
  seconds.
- **Per-card feedback** — compact thumbs up / down controls on each recommendation, using the same
  single-selection behaviour as the brief.
- **Filter bar** for All / Risks / Opportunities (presentational in this prototype; the buttons
  render active state but do not yet filter the grid).

### Monetisation flow
- **Locked feature card** ("Deep Competitor Analysis") with a lock indicator and a dimming overlay
  that previews the gated capability instead of hiding it.
- **Upgrade modal** triggered by clicking the locked card: an Enterprise Edition badge, a
  checklist of tier benefits, and Cancel / Contact Sales actions.
- **Modal interaction handling** — closes via the X button, the Cancel button, or a click on the
  backdrop, and locks background scrolling while open.

### Polish
- Inline SVG icons throughout, so there is no icon-font or sprite dependency.
- Inter loaded from Google Fonts with preconnect hints.
- Glow, pulse, and hover animations on the logo, the AI status dot, nav items, and cards.

## Project structure

```
index.html   # Full page markup: sidebar, hero brief, card grid, upgrade modal
style.css    # Design tokens and all styling, including animations
script.js    # Feedback toggles, action-button simulation, modal open/close
.github/workflows/static.yml   # GitHub Pages deployment
```

## Known limitations

This is a UI prototype, not a working product:

- There is no backend, persistence, or real AI — content is static and feedback is only logged to
  the console.
- The Risks / Opportunities filter buttons are styled but not wired up.
- Sidebar nav links are placeholder `#` anchors; there is only one view.
- The stylesheet contains no media queries, so the layout is built for desktop widths and does not
  adapt to small screens.
