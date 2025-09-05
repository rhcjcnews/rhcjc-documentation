---
title: Republication Tracker Tool
description: Adds a widget that allows readers to easily embed Creative Commons–licensed articles. Includes usage tracking similar to ProPublica’s PixelPing. Built by INN Labs.
---

The **Republication Tracker Tool** is a WordPress plugin that allows readers to easily copy and embed Creative Commons–licensed HTML of articles. It also includes a tracking mechanism similar to ProPublica’s PixelPing. This plugin is built and maintained by **INN Labs**.

## Where It Is Used on the Website

- The widget appears under **Unused Widgets** in the **SNO Dashboard** > **Widget Control Panel**.
- It is embedded through the **Ad Insertion** area and is intended to be used with only one plugin: the *Super Cool Ad Inserter Plugin*.
- If the tool is not functioning, first check:
  - Whether the plugin is active.
  - If it is correctly placed in the **Inserted Ad Position 1** section.

## Changing the Styling of the Tool

- The plugin comes with built-in default styles.
- You can inspect elements using your browser’s developer tools to adjust placement or appearance.
- **Custom styles** can be added to the **Custom CSS** section.
- ⚠️ *Do not edit styles that begin with `.sno-*` unless you are sure of what you’re doing.*

## Plugin Dependencies

- **Super Cool Ad Inserter Plugin**  
  This plugin is required for the Republication Tracker Tool to work correctly.  
  GitHub Repository: [Super Cool Ad Inserter Plugin](https://github.com/Automattic/super-cool-ad-inserter-plugin/tree/trunk/docs)

## Known Issues & Fixes

- **July 8, 2025**: The **Republication Tracker Tool** was automatically removed from the **Ad Insertion** area, causing it to stop displaying on the site.  
  ✅ *Fix*: The issue was resolved by manually re-adding the plugin to the **Ad Insertion** section via the **SNO Dashboard** > **Widget Control Panel**. Once restored, the tool worked as expected.


Make sure any changes or troubleshooting steps consider the dependency between these two plugins.
