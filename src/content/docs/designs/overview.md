---
title: Design Overview
description: Overview of the design structure implemented in the RHCJC for the replication purposes or jsut to fix something if there is an error.
---

The Design Overview documents the visual system used across RHCJC properties so it can be replicated, maintained, and debugged consistently.

## Purpose

- Provide a single source of truth for visual styles and patterns.
- Help developers and editors replicate components on SNO/WordPress.
- Reduce regressions by describing intended behavior across breakpoints and themes.

## Brand and Assets

- Primary imagery: `houston.webp` (see homepage hero).
- Favicon: `public/favicon.svg` (dark/light aware via `prefers-color-scheme`).
- Typography: use strong hierarchy, clear contrast, and accessible sizes (16px base minimum on body). Prefer system fonts or theme defaults unless a component specifies otherwise.

## Color and Contrast

- Aim for WCAG AA contrast or better on text and interactive elements.
- Example component colors (from Infobox):
  - Accent: #ffd046 (borders/highlights)
  - Dark headers: #3a3a3c → hover gradient to #1a1a1a/#000000
  - Body text: #374151
  - Link color: #d97706 (hover #b45309)

These can be adapted to theme variables as needed, but maintain contrast requirements.

## Spacing and Layout

- Use generous spacing to separate sections (24–32px typical paddings on components).
- Rounded corners: 8–16px on cards/boxes to match existing components.
- Grid: prefer single-column layouts on mobile, expanding to multi-column only where legibility is preserved.

## Components

### Infobox (Accordion) — About Page

Reference: [About Infobox Design](./About.md)

- Selector: `.sno-infobox-4741`
- Purpose: Multi-section accordion for dense informational content.
- Characteristics:
  - Collapsible segments with clear titles and focus styles.
  - Mobile-first with refined tablet/phone breakpoints.
  - Print-friendly adjustments.
- Implementation notes:
  - Keep headings concise and use uppercase for segment titles for scanability.
  - Maintain the accent border on the body (`border-left` or equivalent) for visual alignment.
  - Ensure the toggle area has sufficient hit target size on touch devices.

### Summary List (AI Summary Generator)

Reference: [AI Summary Generator](/plugins/aisummarygenerator)

- Output structure: a single `<ul>` containing 4–5 `<li>` items, no extra wrappers.
- Usage: display as-is or with light utility classes; avoid heavy decoration that reduces readability.
- Accessibility: list items should be full sentences; keep line length reasonable.

### SMP Category Story Previews

Reference: [SMP Category Story Injector](/plugins/smpcategorystoryinjector)

- Purpose: Injects recent story previews from a SNO category archive.
- Styling: ships with defaults; override with site Custom CSS if needed.
- Guidance: keep preview blocks consistent in spacing/typography with article lists.

## Accessibility

- Keyboard: all interactive elements must be reachable via keyboard and show visible focus.
- Color: avoid conveying meaning by color alone; pair with text/icons where helpful.
- Motion: avoid gratuitous animation; ensure reduced-motion preferences are respected if animations are added later.
- Print: where components may be printed, provide simplified backgrounds and visible text.

## Authoring Guidance (SNO/WordPress)

- When adding custom CSS in SNO, avoid overriding `.sno-*` classes unless you fully understand the impact.
- Prefer component-scoped classes to prevent global collisions.
- Test changes at common breakpoints: 480px, 768px, and a wide desktop (≥1200px).

## Related Documents

- About Infobox Design: [Design → About](./About.md)
- Plugins → AI Summary Generator: [/plugins/aisummarygenerator](/plugins/aisummarygenerator)
- Plugins → SMP Category Story Injector: [/plugins/smpcategorystoryinjector](/plugins/smpcategorystoryinjector)
