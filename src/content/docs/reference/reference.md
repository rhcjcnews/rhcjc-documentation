---
title: Plugin Reference
description: A simple list of plugins used on the RHCJC WordPress site.
---

This page summarizes the plugins used on the RHCJC WordPress site. Follow the links to each plugin’s full documentation for setup and troubleshooting.

## AI Summary Generator

- Purpose: Adds a Generate Summary button in the SNO/WordPress Story editor. Sends the story body to OpenAI and returns a concise, factual HTML bullet summary.
- Where it appears: In the Story editor (SNO calls posts “Stories”).
- Requirements: OpenAI API key, API URL (https://api.openai.com/v1/chat/completions), model (e.g., gpt-4.1 or gpt-4o-mini), and a strict prompt.
- Docs: See AI Summary Generator → ../plugins/aisummarygenerator.md

## Republication Tracker Tool (INN Labs)

- Purpose: Lets readers copy/embed Creative Commons–licensed article HTML; includes usage tracking similar to ProPublica’s PixelPing.
- Where it appears: SNO Dashboard → Widget Control Panel → embed via Ad Insertion (Inserted Ad Position 1).
- Dependency: Super Cool Ad Inserter Plugin.
- Known issue: On July 8, 2025, it was removed from Ad Insertion automatically; fix by re-adding it in the Widget Control Panel.
- Docs: See Republication Tracker Tool → ../plugins/republicationtracker.md

## Custom Republication Tracker Tool (SNO-tailored)

- Purpose: Modified version of INN Labs’ tracker for SNO. Preserves WordPress caption markup (`[caption]`, `wp-caption`) so images aren’t stripped, while still removing unsafe shortcodes/classes.
- Where it appears: SNO Dashboard → Widget Control Panel → embed via Ad Insertion (Inserted Ad Position 1).
- Dependency: Super Cool Ad Inserter Plugin.
- Notes: Whitelists caption wrappers so images remain in the copied/embed HTML.
- Docs: See Custom Republication Tracker Tool → ../plugins/customrepublicationtracker.md

## SMP Category Story Injector

- Purpose: Provides a shortcode to inject the most recent visible stories from a SNO category archive with styled previews.
- Usage example: `[smp_category url="https://rhcjcnews.com/category/smp-counties/smp-lamar-county/" count="2"]`
- Where it appears: Inside SMP Planner pages (shortcode placed in page content).
- Styling: Default CSS is injected; customize via site/theme Custom CSS.
- Docs: See SMP Category Story Injector → ../plugins/smpcategorystoryinjector.md
