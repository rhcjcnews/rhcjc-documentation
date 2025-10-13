---
title: Custom Republication Tracker Tool
description: Adds a widget that lets readers easily embed Creative Commons–licensed articles, with usage tracking similar to ProPublica’s PixelPing. This modified version of INN Labs’ tracker supports SNO and safely preserves images by handling WordPress caption shortcodes while still stripping unsafe shortcodes.
---

The **Custom Republication Tracker Tool** is a modified version of INN Labs’ WordPress plugin tailored for SNO-powered sites. It lets readers easily copy and embed Creative Commons–licensed HTML of articles and includes a lightweight usage-tracking mechanism similar to ProPublica’s PixelPing. This build is adjusted to work cleanly within SNO’s Ad Insertion workflow and, importantly, fixes an issue where images wrapped in WordPress caption shortcodes/classes (e.g., `wp-caption`) were being removed by class/shortcode stripping.

## Where It Is Used on the Website

- The widget appears under **Unused Widgets** in the **SNO Dashboard** > **Widget Control Panel**.
- It is embedded through the **Ad Insertion** area and is intended to be used with only one plugin: the _Super Cool Ad Inserter Plugin_.
- If the tool is not functioning, first check:
  - Whether the plugin is active.
  - If it is correctly placed in the **Inserted Ad Position 1** section.
  - Note: In SNO, articles are called **Stories**. The tracker is intended to be used on Story pages.

## Changing the Styling of the Tool

- This custom plugin ships with safe default styles.
- You can inspect elements using your browser’s developer tools to adjust placement or appearance.
- **Custom styles** can be added to the **Custom CSS** section.
- ⚠️ _Do not edit styles that begin with `.sno-*` unless you are sure of what you’re doing._ These classes are used by SNO and changing them can cause layout issues.

## Key customization: preserve wp-caption images

Previously, images in SNO Stories were sometimes missing in the copied/embed HTML because the tracker’s class/shortcode removal was too aggressive and impacted WordPress caption markup (the `[caption]` shortcode and `wp-caption` wrappers).

This custom build adds a safe navigation/whitelist so that:

- The `[caption]` shortcode and `wp-caption` wrappers are detected and preserved appropriately.
- The inner `<img>` remains intact so images appear in the embed.
- Other shortcodes and unsafe classes are still stripped for safety, keeping the embed clean and portable.

Result: images now reliably show up in the tracker’s copied HTML, while security and cleanliness are maintained.

## Plugin Dependencies

- **Super Cool Ad Inserter Plugin**  
  This plugin is required for the Custom Republication Tracker Tool to work correctly within SNO’s Ad Insertion workflow.  
  GitHub Repository: [Super Cool Ad Inserter Plugin](https://github.com/Automattic/super-cool-ad-inserter-plugin/tree/trunk/docs)

## Known Issues & Fixes

- If images are missing in the embed output:
  - Ensure you’re using this custom build that preserves the WordPress `[caption]`/`wp-caption` markup.
  - Verify that site CSS is not hiding `.wp-caption` or `figure` elements within the embed container.
  - If the issue persists, confirm that no additional filters are stripping tags/classes beyond the tracker’s defaults.

## Notes About This Custom Build

- Based on the INN Labs tracker, adapted for SNO compatibility.
- Addresses the prior issue where `wp-caption` (caption shortcode wrappers) caused images to be removed by class/shortcode stripping.
- Keeps the feature set focused: easy copy/embed of Creative Commons–licensed content plus usage tracking similar to PixelPing.

Make sure any changes or troubleshooting steps consider the dependency between this tool and the Super Cool Ad Inserter Plugin.

## Results

- Ensuring images appear in the copied HTML reduced partner republishing time from roughly 30 minutes to a few seconds.
