---
title: SMP Category Story Injector
description: Shortcode [smp_category url="..."] is used in SMP Planner pages to automatically pull in recent stories from specific SNO category pages with styled previews.
---

The shortcode `[smp_category url="https://rhcjcnews.com/category/smp-counties/smp-lamar-county/" count="2"]` is used to inject styled previews of the most recent visible stories from any specified SNO category archive page.  
**Version 1.1** | By Rabindra Giri and Kiran Silwal

## 📍 Where It Is Used on the Website

- This plugin is used **inside SMP Planner pages**, where the shortcode is inserted directly into the page content.
- Example usage:
  ```plaintext
  [smp_category url="https://rhcjcnews.com/category/smp-counties/smp-lamar-county/" count="2"]
  ```
- It fetches and displays the most recent story blocks from a specified SNO category, making it easy to keep planner pages updated without manual copy-pasting.
- This ensures each county’s planner page shows live, up-to-date reporting without needing to edit the page every time a new story is published.

## 🛠 Styling and Customization

- The plugin injects default CSS styles automatically with the shortcode output.
- To customize appearance:
  - Use browser developer tools to inspect the `.smp-category-previews` and related class elements.
  - Add custom CSS in your theme or via the **Custom CSS** section in the dashboard.


---

This plugin provides an efficient and scalable way to embed fresh content into SMP pages, streamlining the editorial workflow for showcasing localized coverage.
