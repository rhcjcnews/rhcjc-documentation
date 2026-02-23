---
title: Anniversary Special Design
description: The design for the anniversary event used for the rhcjcnews.com/anniversary-events and on the homepage
---

## Overview

This documents the anniversary event design used on `rhcjcnews.com/anniversary-events` and as a feature banner on the homepage.

---

## Features

- ✅ Mobile-optimized design with breakpoints for tablet and phone
- ✅ Print-friendly layout
- ✅ WCAG-compliant focus outlines
- ✅ Highlighted link styles and strong typography

---

## Markup

### Full hero banner and events grid (homepage)

```html
<section class="rhcjc-anniversary-banner">
<div class="rhcjc-anniversary-pattern-overlay"></div>
<div class="rhcjc-anniversary-animated-border"></div>
<div class="rhcjc-anniversary-celebration-decorations">
<svg class="rhcjc-anniversary-confetti rhcjc-anniversary-confetti-1" width="20" height="20" viewBox="0 0 20 20"><rect x="5" y="5" width="10" height="10" fill="#fad04a" transform="rotate(45 10 10)"/></svg><svg class="rhcjc-anniversary-confetti rhcjc-anniversary-confetti-2" width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="6" fill="#ff6b6b"/></svg><svg class="rhcjc-anniversary-confetti rhcjc-anniversary-confetti-3" width="18" height="18" viewBox="0 0 18 18"><polygon points="9,2 11,7 16,7 12,11 14,16 9,13 4,16 6,11 2,7 7,7" fill="#4ecdc4"/></svg><svg class="rhcjc-anniversary-confetti rhcjc-anniversary-confetti-4" width="14" height="14" viewBox="0 0 14 14"><rect x="3" y="3" width="8" height="8" fill="#fad04a" transform="rotate(30 7 7)"/></svg><svg class="rhcjc-anniversary-confetti rhcjc-anniversary-confetti-5" width="12" height="12" viewBox="0 0 12 12"><circle cx="6" cy="6" r="5" fill="#ff6b6b"/></svg><svg class="rhcjc-anniversary-confetti rhcjc-anniversary-confetti-6" width="15" height="15" viewBox="0 0 15 15"><rect x="4" y="4" width="7" height="7" fill="#4ecdc4" transform="rotate(60 7.5 7.5)"/></svg><svg class="rhcjc-anniversary-confetti rhcjc-anniversary-confetti-7" width="10" height="10" viewBox="0 0 10 10"><circle cx="5" cy="5" r="4" fill="#fad04a"/></svg><svg class="rhcjc-anniversary-confetti rhcjc-anniversary-confetti-8" width="16" height="16" viewBox="0 0 16 16"><polygon points="8,1 10,6 15,6 11,9 13,15 8,11 3,15 5,9 1,6 6,6" fill="#ff6b6b"/></svg><svg class="rhcjc-anniversary-star rhcjc-anniversary-star-1" width="24" height="24" viewBox="0 0 24 24"><polygon points="12,2 15,9 22,9 16,14 18,21 12,17 6,21 8,14 2,9 9,9" fill="#fad04a" stroke="#fad04a" stroke-width="0.5"/></svg><svg class="rhcjc-anniversary-star rhcjc-anniversary-star-2" width="20" height="20" viewBox="0 0 24 24"><polygon points="12,2 15,9 22,9 16,14 18,21 12,17 6,21 8,14 2,9 9,9" fill="#4ecdc4" stroke="#4ecdc4" stroke-width="0.5"/></svg><svg class="rhcjc-anniversary-star rhcjc-anniversary-star-3" width="18" height="18" viewBox="0 0 24 24"><polygon points="12,2 15,9 22,9 16,14 18,21 12,17 6,21 8,14 2,9 9,9" fill="#ff6b6b" stroke="#ff6b6b" stroke-width="0.5"/></svg><svg class="rhcjc-anniversary-star rhcjc-anniversary-star-4" width="22" height="22" viewBox="0 0 24 24"><polygon points="12,2 15,9 22,9 16,14 18,21 12,17 6,21 8,14 2,9 9,9" fill="#fad04a" stroke="#fad04a" stroke-width="0.5"/></svg><svg class="rhcjc-anniversary-star rhcjc-anniversary-star-5" width="16" height="16" viewBox="0 0 24 24"><polygon points="12,2 15,9 22,9 16,14 18,21 12,17 6,21 8,14 2,9 9,9" fill="#4ecdc4" stroke="#4ecdc4" stroke-width="0.5"/></svg><svg class="rhcjc-anniversary-ribbon rhcjc-anniversary-ribbon-1" width="40" height="80" viewBox="0 0 40 80"><path d="M20 0 Q25 20 20 40 Q15 60 20 80" stroke="#fad04a" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M15 0 Q20 20 15 40 Q10 60 15 80" stroke="#ff6b6b" stroke-width="2" fill="none" stroke-linecap="round"/></svg><svg class="rhcjc-anniversary-ribbon rhcjc-anniversary-ribbon-2" width="35" height="70" viewBox="0 0 35 70"><path d="M17 0 Q22 17 17 35 Q12 52 17 70" stroke="#4ecdc4" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M12 0 Q17 17 12 35 Q7 52 12 70" stroke="#fad04a" stroke-width="2" fill="none" stroke-linecap="round"/></svg><svg class="rhcjc-anniversary-sparkle rhcjc-anniversary-sparkle-1" width="20" height="20" viewBox="0 0 20 20"><path d="M10 0 L10 20 M0 10 L20 10 M3 3 L17 17 M17 3 L3 17" stroke="#fad04a" stroke-width="2" stroke-linecap="round"/></svg><svg class="rhcjc-anniversary-sparkle rhcjc-anniversary-sparkle-2" width="16" height="16" viewBox="0 0 20 20"><path d="M10 0 L10 20 M0 10 L20 10 M3 3 L17 17 M17 3 L3 17" stroke="#ff6b6b" stroke-width="2" stroke-linecap="round"/></svg><svg class="rhcjc-anniversary-sparkle rhcjc-anniversary-sparkle-3" width="18" height="18" viewBox="0 0 20 20"><path d="M10 0 L10 20 M0 10 L20 10 M3 3 L17 17 M17 3 L3 17" stroke="#4ecdc4" stroke-width="2" stroke-linecap="round"/></svg><svg class="rhcjc-anniversary-sparkle rhcjc-anniversary-sparkle-4" width="14" height="14" viewBox="0 0 20 20"><path d="M10 0 L10 20 M0 10 L20 10 M3 3 L17 17 M17 3 L3 17" stroke="#fad04a" stroke-width="2" stroke-linecap="round"/></svg><svg class="rhcjc-anniversary-sparkle rhcjc-anniversary-sparkle-5" width="16" height="16" viewBox="0 0 20 20"><path d="M10 0 L10 20 M0 10 L20 10 M3 3 L17 17 M17 3 L3 17" stroke="#ff6b6b" stroke-width="2" stroke-linecap="round"/></svg>
<div class="rhcjc-anniversary-celebration-circles">
<div class="rhcjc-anniversary-circle-decoration rhcjc-anniversary-circle-1"></div>
<div class="rhcjc-anniversary-circle-decoration rhcjc-anniversary-circle-2"></div>
<div class="rhcjc-anniversary-circle-decoration rhcjc-anniversary-circle-3"></div>
</div>
</div>
<div class="rhcjc-anniversary-banner-content">
<div class="rhcjc-anniversary-banner-header">
<div class="rhcjc-anniversary-header-inner">
<div class="rhcjc-anniversary-header-text">
<span class="rhcjc-anniversary-badge">Special Event</span><h2 class="rhcjc-anniversary-banner-title">Anniversary Week</h2><p class="rhcjc-anniversary-banner-subtitle">Feb. 18–20, 2026 &bull; Celebrating journalism that matters</p></div>
<div class="rhcjc-anniversary-logo">RHCJC</div>
</div>
</div>
<div class="rhcjc-anniversary-events-section">
<div class="rhcjc-anniversary-events-grid">
<article class="rhcjc-anniversary-event-card">
<div class="rhcjc-anniversary-day-indicator">
<span class="rhcjc-anniversary-day-label">Day 1</span>
<div class="rhcjc-anniversary-day-line"></div>
<svg class="rhcjc-anniversary-calendar-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg></div>
<h3 class="rhcjc-anniversary-event-title">Truth on Trial</h3><p class="rhcjc-anniversary-event-description">A moderated discussion examining how truth, evidence, and accountability function in journalism and public discourse today.</p>
<div class="rhcjc-anniversary-event-details">
<div class="rhcjc-anniversary-detail-row rhcjc-anniversary-time">
<svg class="rhcjc-anniversary-detail-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg><span><span class="rhcjc-anniversary-date-text">Wednesday, Feb. 18</span> 6:30 to 7:30 p.m.</span></div>
<div class="rhcjc-anniversary-detail-row rhcjc-anniversary-location">
<svg class="rhcjc-anniversary-detail-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg><span>Shelby Freland Thames Polymer Science Research Center, USM</span></div>
</div>
</article><article class="rhcjc-anniversary-event-card">
<div class="rhcjc-anniversary-day-indicator">
<span class="rhcjc-anniversary-day-label">Day 2</span>
<div class="rhcjc-anniversary-day-line"></div>
<svg class="rhcjc-anniversary-calendar-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg></div>
<h3 class="rhcjc-anniversary-event-title">RHCJC Live</h3><p class="rhcjc-anniversary-event-description">A live newsroom-style showcase featuring student reporting, storytelling, and the journalistic process in real time.</p>
<div class="rhcjc-anniversary-event-details">
<div class="rhcjc-anniversary-detail-row rhcjc-anniversary-time">
<svg class="rhcjc-anniversary-detail-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg><span><span class="rhcjc-anniversary-date-text">Thursday, Feb. 19</span> 10 a.m. to 2 p.m.</span></div>
<div class="rhcjc-anniversary-detail-row rhcjc-anniversary-location">
<svg class="rhcjc-anniversary-detail-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg><span>Trent Lott National Center</span></div>
</div>
</article><article class="rhcjc-anniversary-event-card">
<div class="rhcjc-anniversary-day-indicator">
<span class="rhcjc-anniversary-day-label">Day 3</span>
<div class="rhcjc-anniversary-day-line"></div>
<svg class="rhcjc-anniversary-calendar-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg></div>
<h3 class="rhcjc-anniversary-event-title">A Night of Stories That Matter</h3><p class="rhcjc-anniversary-event-speaker">with <span>Rick Cleveland</span></p><p class="rhcjc-anniversary-event-description">An evening of conversation and storytelling focused on the power of meaningful narratives in journalism and culture.</p>
<div class="rhcjc-anniversary-event-details">
<div class="rhcjc-anniversary-detail-row rhcjc-anniversary-time">
<svg class="rhcjc-anniversary-detail-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg><span><span class="rhcjc-anniversary-date-text">Friday, Feb. 20</span> 6 to 7:15 p.m.</span></div>
<div class="rhcjc-anniversary-detail-row rhcjc-anniversary-location">
<svg class="rhcjc-anniversary-detail-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg><span>Joe Paul Theatre, Thad Cochran Center, USM</span></div>
</div>
</article></div>
</div>
</div>
</section>
```

### Compact homepage banner with CTA link

This version is a smaller hero/banner that links directly to the anniversary events page.

```html
<section class="rhcjc-anniversary-banner">
<div class="rhcjc-anniversary-pattern-overlay"></div>
<div class="rhcjc-anniversary-animated-border"></div>
<div class="rhcjc-anniversary-celebration-decorations"><svg class="rhcjc-anniversary-confetti rhcjc-anniversary-confetti-1" width="20" height="20" viewbox="0 0 20 20"><rect x="5" y="5" width="10" height="10" fill="#fad04a" transform="rotate(45 10 10)"/></svg><svg class="rhcjc-anniversary-confetti rhcjc-anniversary-confetti-2" width="16" height="16" viewbox="0 0 16 16"><circle cx="8" cy="8" r="6" fill="#ff6b6b"/></svg><svg class="rhcjc-anniversary-confetti rhcjc-anniversary-confetti-3" width="18" height="18" viewbox="0 0 18 18"><polygon points="9,2 11,7 16,7 12,11 14,16 9,13 4,16 6,11 2,7 7,7" fill="#4ecdc4"/></svg><svg class="rhcjc-anniversary-confetti rhcjc-anniversary-confetti-4" width="14" height="14" viewbox="0 0 14 14"><rect x="3" y="3" width="8" height="8" fill="#fad04a" transform="rotate(30 7 7)"/></svg><svg class="rhcjc-anniversary-confetti rhcjc-anniversary-confetti-5" width="12" height="12" viewbox="0 0 12 12"><circle cx="6" cy="6" r="5" fill="#ff6b6b"/></svg><svg class="rhcjc-anniversary-confetti rhcjc-anniversary-confetti-6" width="15" height="15" viewbox="0 0 15 15"><rect x="4" y="4" width="7" height="7" fill="#4ecdc4" transform="rotate(60 7.5 7.5)"/></svg><svg class="rhcjc-anniversary-confetti rhcjc-anniversary-confetti-7" width="10" height="10" viewbox="0 0 10 10"><circle cx="5" cy="5" r="4" fill="#fad04a"/></svg><svg class="rhcjc-anniversary-confetti rhcjc-anniversary-confetti-8" width="16" height="16" viewbox="0 0 16 16"><polygon points="8,1 10,6 15,6 11,9 13,15 8,11 3,15 5,9 1,6 6,6" fill="#ff6b6b"/></svg><svg class="rhcjc-anniversary-star rhcjc-anniversary-star-1" width="24" height="24" viewbox="0 0 24 24"><polygon points="12,2 15,9 22,9 16,14 18,21 12,17 6,21 8,14 2,9 9,9" fill="#fad04a" stroke="#fad04a" stroke-width="0.5"/></svg><svg class="rhcjc-anniversary-star rhcjc-anniversary-star-2" width="20" height="20" viewbox="0 0 24 24"><polygon points="12,2 15,9 22,9 16,14 18,21 12,17 6,21 8,14 2,9 9,9" fill="#4ecdc4" stroke="#4ecdc4" stroke-width="0.5"/></svg><svg class="rhcjc-anniversary-star rhcjc-anniversary-star-3" width="18" height="18" viewbox="0 0 24 24"><polygon points="12,2 15,9 22,9 16,14 18,21 12,17 6,21 8,14 2,9 9,9" fill="#ff6b6b" stroke="#ff6b6b" stroke-width="0.5"/></svg><svg class="rhcjc-anniversary-star rhcjc-anniversary-star-4" width="22" height="22" viewbox="0 0 24 24"><polygon points="12,2 15,9 22,9 16,14 18,21 12,17 6,21 8,14 2,9 9,9" fill="#fad04a" stroke="#fad04a" stroke-width="0.5"/></svg><svg class="rhcjc-anniversary-star rhcjc-anniversary-star-5" width="16" height="16" viewbox="0 0 24 24"><polygon points="12,2 15,9 22,9 16,14 18,21 12,17 6,21 8,14 2,9 9,9" fill="#4ecdc4" stroke="#4ecdc4" stroke-width="0.5"/></svg><svg class="rhcjc-anniversary-ribbon rhcjc-anniversary-ribbon-1" width="40" height="80" viewbox="0 0 40 80"><path d="M20 0 Q25 20 20 40 Q15 60 20 80" stroke="#fad04a" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M15 0 Q20 20 15 40 Q10 60 15 80" stroke="#ff6b6b" stroke-width="2" fill="none" stroke-linecap="round"/></svg><svg class="rhcjc-anniversary-ribbon rhcjc-anniversary-ribbon-2" width="35" height="70" viewbox="0 0 35 70"><path d="M17 0 Q22 17 17 35 Q12 52 17 70" stroke="#4ecdc4" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M12 0 Q17 17 12 35 Q7 52 12 70" stroke="#fad04a" stroke-width="2" fill="none" stroke-linecap="round"/></svg><svg class="rhcjc-anniversary-sparkle rhcjc-anniversary-sparkle-1" width="20" height="20" viewbox="0 0 20 20"><path d="M10 0 L10 20 M0 10 L20 10 M3 3 L17 17 M17 3 L3 17" stroke="#fad04a" stroke-width="2" stroke-linecap="round"/></svg><svg class="rhcjc-anniversary-sparkle rhcjc-anniversary-sparkle-2" width="16" height="16" viewbox="0 0 20 20"><path d="M10 0 L10 20 M0 10 L20 10 M3 3 L17 17 M17 3 L3 17" stroke="#ff6b6b" stroke-width="2" stroke-linecap="round"/></svg><svg class="rhcjc-anniversary-sparkle rhcjc-anniversary-sparkle-3" width="18" height="18" viewbox="0 0 20 20"><path d="M10 0 L10 20 M0 10 L20 10 M3 3 L17 17 M17 3 L3 17" stroke="#4ecdc4" stroke-width="2" stroke-linecap="round"/></svg><svg class="rhcjc-anniversary-sparkle rhcjc-anniversary-sparkle-4" width="14" height="14" viewbox="0 0 20 20"><path d="M10 0 L10 20 M0 10 L20 10 M3 3 L17 17 M17 3 L3 17" stroke="#fad04a" stroke-width="2" stroke-linecap="round"/></svg><svg class="rhcjc-anniversary-sparkle rhcjc-anniversary-sparkle-5" width="16" height="16" viewbox="0 0 20 20"><path d="M10 0 L10 20 M0 10 L20 10 M3 3 L17 17 M17 3 L3 17" stroke="#ff6b6b" stroke-width="2" stroke-linecap="round"/></svg><div class="rhcjc-anniversary-celebration-circles"><div class="rhcjc-anniversary-circle-decoration rhcjc-anniversary-circle-1"></div><div class="rhcjc-anniversary-circle-decoration rhcjc-anniversary-circle-2"></div><div class="rhcjc-anniversary-circle-decoration rhcjc-anniversary-circle-3"></div></div></div>
<div class="rhcjc-anniversary-banner-content"><div class="rhcjc-anniversary-banner-header"><div class="rhcjc-anniversary-header-inner"><div class="rhcjc-anniversary-header-text"><span class="rhcjc-anniversary-badge">Special Event</span><h2 class="rhcjc-anniversary-banner-title">Anniversary Week</h2><p class="rhcjc-anniversary-banner-subtitle">Feb. 18–20, 2026 • Celebrating community journalism</p></div><div class="rhcjc-anniversary-logo">RHCJC</div></div><div style="display:flex;justify-content:flex-end"><a href="/anniversary-events" style="display:inline-flex;align-items:center;gap:8px;margin-right:30px;margin-bottom:30px;padding:14px 28px;background-color:#fad04a;color:#1a1a1a;font-size:15px;font-weight:600;text-decoration:none;border-radius:6px;box-shadow:0 4px 14px rgba(250,208,74,0.4);transition:all 0.2s ease;">Check out events →</a></div></div></div>
</section>
```

## Styles (CSS)

Include this in your main stylesheet or in a `<style>` block on any page using the anniversary banner.

```css
/* RHCJC Anniversary - Enhanced Banner + Full Popup */
      /* ==================== BANNER TRIGGER ==================== */
      .rhcjc-anniversary-trigger {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1.5rem;
        padding: 1.5rem 2rem;
        background: linear-gradient(
          135deg,
          #0a0a0a 0%,
          #151515 50%,
          #0a0a0a 100%
        );
        border: 1px solid rgba(250, 204, 74, 0.3);
        cursor: pointer;
        transition: all 0.3s ease;
        font-family:
          "Inter",
          -apple-system,
          BlinkMacSystemFont,
          sans-serif;
        overflow: hidden;
      }

      .rhcjc-anniversary-trigger::before {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(
          90deg,
          transparent,
          rgba(250, 204, 74, 0.1),
          transparent
        );
        background-size: 200% 100%;
        animation: banner-shimmer 3s linear infinite;
      }

      @keyframes banner-shimmer {
        0% {
          background-position: -200% 0;
        }
        100% {
          background-position: 200% 0;
        }
      }

      .rhcjc-anniversary-trigger:hover {
        border-color: rgba(250, 204, 74, 0.6);
        box-shadow: 0 8px 32px rgba(250, 204, 74, 0.2);
        transform: translateY(-2px);
      }

      .rhcjc-anniversary-trigger-content {
        position: relative;
        display: flex;
        align-items: center;
        gap: 1.25rem;
        z-index: 1;
      }

      .rhcjc-anniversary-trigger-icon {
        width: 3.5rem;
        height: 3.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(250, 204, 74, 0.15);
        border: 1px solid rgba(250, 204, 74, 0.3);
        border-radius: 50%;
        animation: icon-pulse 2s ease-in-out infinite;
      }

      @keyframes icon-pulse {
        0%,
        100% {
          box-shadow: 0 0 0 0 rgba(250, 204, 74, 0.4);
        }
        50% {
          box-shadow: 0 0 0 10px rgba(250, 204, 74, 0);
        }
      }

      .rhcjc-anniversary-trigger-icon svg {
        width: 1.75rem;
        height: 1.75rem;
        color: #fad04a;
      }

      .rhcjc-anniversary-trigger-badge {
        display: inline-block;
        padding: 0.25rem 0.625rem;
        background: rgba(250, 204, 74, 0.2);
        border: 1px solid rgba(250, 204, 74, 0.5);
        color: #fad04a;
        font-size: 0.625rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.15em;
        margin-bottom: 0.375rem;
        animation: badge-glow 2s ease-in-out infinite;
      }

      @keyframes badge-glow {
        0%,
        100% {
          box-shadow: 0 0 5px rgba(250, 204, 74, 0.3);
        }
        50% {
          box-shadow: 0 0 15px rgba(250, 204, 74, 0.5);
        }
      }

      .rhcjc-anniversary-trigger-text {
        color: #fafafa;
      }

      .rhcjc-anniversary-trigger-title {
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 0.25rem;
        background: linear-gradient(
          90deg,
          #fafafa 0%,
          #fad04a 50%,
          #fafafa 100%
        );
        background-size: 200% auto;
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: title-shimmer 4s linear infinite;
      }

      @keyframes title-shimmer {
        0% {
          background-position: 200% center;
        }
        100% {
          background-position: -200% center;
        }
      }

      .rhcjc-anniversary-trigger-subtitle {
        font-size: 0.875rem;
        color: rgba(250, 250, 250, 0.7);
        font-weight: 500;
      }

      .rhcjc-anniversary-trigger-cta {
        position: relative;
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding: 0.75rem 1.25rem;
        background: rgba(250, 204, 74, 0.15);
        border: 1px solid rgba(250, 204, 74, 0.4);
        color: #fad04a;
        font-size: 0.875rem;
        font-weight: 600;
        white-space: nowrap;
        transition: all 0.3s ease;
        z-index: 1;
      }

      .rhcjc-anniversary-trigger:hover .rhcjc-anniversary-trigger-cta {
        background: #fad04a;
        color: #000;
      }

      .rhcjc-anniversary-trigger-cta svg {
        width: 1.25rem;
        height: 1.25rem;
        transition: transform 0.3s ease;
      }

      .rhcjc-anniversary-trigger:hover .rhcjc-anniversary-trigger-cta svg {
        transform: translateX(4px);
      }

      /* Banner floating stars */
      .rhcjc-anniversary-trigger-star {
        position: absolute;
        opacity: 0.3;
        animation: twinkle 3s ease-in-out infinite;
      }

      .rhcjc-anniversary-trigger-star-1 {
        top: 15%;
        left: 10%;
        animation-delay: 0s;
      }
      .rhcjc-anniversary-trigger-star-2 {
        top: 70%;
        left: 5%;
        animation-delay: 1s;
      }
      .rhcjc-anniversary-trigger-star-3 {
        top: 25%;
        right: 25%;
        animation-delay: 0.5s;
      }
      .rhcjc-anniversary-trigger-star-4 {
        bottom: 20%;
        right: 15%;
        animation-delay: 1.5s;
      }

      @keyframes twinkle {
        0%,
        100% {
          opacity: 0.2;
          transform: scale(1);
        }
        50% {
          opacity: 0.5;
          transform: scale(1.2);
        }
      }

      /* ==================== POPUP OVERLAY ==================== */
      .rhcjc-anniversary-overlay {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.85);
        backdrop-filter: blur(8px);
        opacity: 0;
        visibility: hidden;
        transition:
          opacity 0.3s ease,
          visibility 0.3s ease;
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
      }

      .rhcjc-anniversary-overlay.active {
        opacity: 1;
        visibility: visible;
      }

      /* ==================== POPUP MODAL ==================== */
      .rhcjc-anniversary-popup {
        position: relative;
        width: 100%;
        max-width: 1000px;
        max-height: 90vh;
        background: #0a0a0a;
        border: 1px solid rgba(250, 250, 250, 0.1);
        overflow: hidden;
        transform: scale(0.9) translateY(20px);
        transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
      }

      .rhcjc-anniversary-overlay.active .rhcjc-anniversary-popup {
        transform: scale(1) translateY(0);
      }

      .rhcjc-anniversary-popup-scroll {
        position: relative;
        max-height: 90vh;
        overflow-y: auto;
      }

      /* Close Button */
      .rhcjc-anniversary-close {
        position: absolute;
        top: 1rem;
        right: 1rem;
        width: 2.5rem;
        height: 2.5rem;
        background: rgba(250, 250, 250, 0.1);
        border: 1px solid rgba(250, 250, 250, 0.2);
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s ease;
        z-index: 10;
      }

      .rhcjc-anniversary-close:hover {
        background: rgba(250, 250, 250, 0.2);
        transform: rotate(90deg);
      }

      .rhcjc-anniversary-close svg {
        width: 1.25rem;
        height: 1.25rem;
        color: #fafafa;
      }

      /* ==================== POPUP DECORATIONS ==================== */
      .rhcjc-anniversary-decorations {
        position: absolute;
        inset: 0;
        overflow: hidden;
        pointer-events: none;
      }

      /* Pattern overlay */
      .rhcjc-anniversary-pattern {
        position: absolute;
        inset: 0;
        opacity: 0.03;
        background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
      }

      /* Animated border */
      .rhcjc-anniversary-animated-border {
        position: absolute;
        inset: 0;
        background: linear-gradient(
          90deg,
          transparent,
          #fad04a,
          #ff6b6b,
          #4ecdc4,
          #fad04a,
          transparent
        );
        background-size: 200% 100%;
        animation: shimmer 8s linear infinite;
        opacity: 0.05;
      }

      @keyframes shimmer {
        0% {
          background-position: -200% 0;
        }
        100% {
          background-position: 200% 0;
        }
      }

      /* Confetti */
      .rhcjc-anniversary-confetti {
        position: absolute;
        opacity: 0.3;
      }

      .rhcjc-anniversary-confetti-1 {
        top: 10%;
        left: 5%;
        animation: float 6s ease-in-out infinite;
      }
      .rhcjc-anniversary-confetti-2 {
        top: 20%;
        right: 8%;
        animation: float 8s ease-in-out infinite 1s;
      }
      .rhcjc-anniversary-confetti-3 {
        top: 60%;
        left: 3%;
        animation: float 7s ease-in-out infinite 0.5s;
      }
      .rhcjc-anniversary-confetti-4 {
        top: 75%;
        right: 5%;
        animation: float 5s ease-in-out infinite 2s;
      }
      .rhcjc-anniversary-confetti-5 {
        top: 40%;
        left: 8%;
        animation: float 9s ease-in-out infinite 1.5s;
      }
      .rhcjc-anniversary-confetti-6 {
        top: 85%;
        left: 12%;
        animation: float 6s ease-in-out infinite 0.8s;
      }
      .rhcjc-anniversary-confetti-7 {
        top: 15%;
        right: 15%;
        animation: float 7s ease-in-out infinite 2.5s;
      }
      .rhcjc-anniversary-confetti-8 {
        top: 50%;
        right: 3%;
        animation: float 8s ease-in-out infinite 1.2s;
      }

      @keyframes float {
        0%,
        100% {
          transform: translateY(0) rotate(0deg);
        }
        50% {
          transform: translateY(-20px) rotate(10deg);
        }
      }

      /* Stars */
      .rhcjc-anniversary-star {
        position: absolute;
        opacity: 0.25;
      }

      .rhcjc-anniversary-star-1 {
        top: 8%;
        left: 15%;
        animation: star-twinkle 3s ease-in-out infinite;
      }
      .rhcjc-anniversary-star-2 {
        top: 25%;
        right: 20%;
        animation: star-twinkle 4s ease-in-out infinite 1s;
      }
      .rhcjc-anniversary-star-3 {
        top: 70%;
        left: 20%;
        animation: star-twinkle 3.5s ease-in-out infinite 0.5s;
      }
      .rhcjc-anniversary-star-4 {
        top: 45%;
        right: 12%;
        animation: star-twinkle 4.5s ease-in-out infinite 2s;
      }
      .rhcjc-anniversary-star-5 {
        top: 90%;
        right: 25%;
        animation: star-twinkle 3s ease-in-out infinite 1.5s;
      }

      @keyframes star-twinkle {
        0%,
        100% {
          opacity: 0.15;
          transform: scale(1);
        }
        50% {
          opacity: 0.4;
          transform: scale(1.2);
        }
      }

      /* Ribbons */
      .rhcjc-anniversary-ribbon {
        position: absolute;
        opacity: 0.2;
        transform-origin: top center;
      }

      .rhcjc-anniversary-ribbon-1 {
        top: 5%;
        right: 30%;
        animation: sway 5s ease-in-out infinite;
      }
      .rhcjc-anniversary-ribbon-2 {
        bottom: 10%;
        left: 25%;
        animation: sway 6s ease-in-out infinite 1s;
      }

      @keyframes sway {
        0%,
        100% {
          transform: rotate(-5deg);
        }
        50% {
          transform: rotate(5deg);
        }
      }

      /* Sparkles */
      .rhcjc-anniversary-sparkle {
        position: absolute;
        opacity: 0;
        animation: sparkle 2s ease-in-out infinite;
      }

      .rhcjc-anniversary-sparkle-1 {
        top: 12%;
        left: 40%;
        animation-delay: 0s;
      }
      .rhcjc-anniversary-sparkle-2 {
        top: 35%;
        right: 35%;
        animation-delay: 0.5s;
      }
      .rhcjc-anniversary-sparkle-3 {
        top: 65%;
        left: 45%;
        animation-delay: 1s;
      }
      .rhcjc-anniversary-sparkle-4 {
        top: 80%;
        right: 40%;
        animation-delay: 1.5s;
      }
      .rhcjc-anniversary-sparkle-5 {
        top: 55%;
        left: 60%;
        animation-delay: 0.3s;
      }

      @keyframes sparkle {
        0%,
        100% {
          opacity: 0;
          transform: scale(0.5) rotate(0deg);
        }
        50% {
          opacity: 0.5;
          transform: scale(1) rotate(180deg);
        }
      }

      /* Circles */
      .rhcjc-anniversary-circles {
        position: absolute;
        inset: 0;
        pointer-events: none;
      }

      .rhcjc-anniversary-circle {
        position: absolute;
        border-radius: 50%;
        border: 1px solid;
        opacity: 0.05;
      }

      .rhcjc-anniversary-circle-1 {
        width: 300px;
        height: 300px;
        top: -100px;
        right: -100px;
        border-color: #fad04a;
        animation: rotate 20s linear infinite;
      }

      .rhcjc-anniversary-circle-2 {
        width: 200px;
        height: 200px;
        bottom: -50px;
        left: -50px;
        border-color: #4ecdc4;
        animation: rotate 15s linear infinite reverse;
      }

      .rhcjc-anniversary-circle-3 {
        width: 150px;
        height: 150px;
        top: 30%;
        right: 10%;
        border-color: #ff6b6b;
        animation: rotate 25s linear infinite;
      }

      @keyframes rotate {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }

      /* ==================== POPUP HEADER ==================== */
      .rhcjc-anniversary-popup-header {
        position: relative;
        padding: 2.5rem 2rem 2rem;
        border-bottom: 1px solid rgba(250, 250, 250, 0.1);
        text-align: center;
      }

      .rhcjc-anniversary-popup-badge {
        display: inline-block;
        padding: 0.25rem 0.75rem;
        background: rgba(250, 204, 74, 0.1);
        border: 1px solid rgba(250, 204, 74, 0.5);
        color: #fad04a;
        font-size: 0.75rem;
        font-weight: 500;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        margin-bottom: 0.75rem;
        animation: pulse-glow 3s ease-in-out infinite;
      }

      @keyframes pulse-glow {
        0%,
        100% {
          box-shadow: 0 0 5px rgba(250, 204, 74, 0.3);
        }
        50% {
          box-shadow: 0 0 20px rgba(250, 204, 74, 0.6);
        }
      }

      .rhcjc-anniversary-popup-title {
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
        background: linear-gradient(
          90deg,
          #fafafa 0%,
          #fad04a 25%,
          #fafafa 50%,
          #fad04a 75%,
          #fafafa 100%
        );
        background-size: 200% auto;
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: text-shimmer 5s linear infinite;
      }

      @keyframes text-shimmer {
        0% {
          background-position: 200% center;
        }
        100% {
          background-position: -200% center;
        }
      }

      .rhcjc-anniversary-popup-subtitle {
        color: rgba(250, 250, 250, 0.6);
        font-size: 1.125rem;
      }

      .rhcjc-anniversary-logo {
        position: absolute;
        top: 1.5rem;
        left: 2rem;
        font-size: 1.5rem;
        font-weight: 700;
        color: #fad04a;
        text-shadow: 0 0 20px rgba(250, 204, 74, 0.4);
        animation: logo-glow 3s ease-in-out infinite;
      }

      @keyframes logo-glow {
        0%,
        100% {
          text-shadow: 0 0 20px rgba(250, 204, 74, 0.4);
        }
        50% {
          text-shadow: 0 0 40px rgba(250, 204, 74, 0.7);
        }
      }

      /* ==================== POPUP EVENTS ==================== */
      .rhcjc-anniversary-popup-events {
        position: relative;
        padding: 2rem;
      }

      .rhcjc-anniversary-popup-grid {
        display: grid;
        gap: 1rem;
      }

      @media (min-width: 640px) {
        .rhcjc-anniversary-popup-grid {
          grid-template-columns: repeat(3, 1fr);
        }
      }

      /* Event Card */
      .rhcjc-anniversary-popup-card {
        position: relative;
        padding: 1.5rem;
        background: rgba(250, 250, 250, 0.03);
        border: 1px solid rgba(250, 250, 250, 0.08);
        transition: all 0.3s ease;
      }

      .rhcjc-anniversary-popup-card::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 3px;
        background: linear-gradient(90deg, #fad04a, #ff6b6b, #4ecdc4);
        transform: scaleX(0);
        transition: transform 0.3s ease;
      }

      .rhcjc-anniversary-popup-card:hover {
        background: rgba(250, 250, 250, 0.06);
        border-color: rgba(250, 250, 250, 0.15);
        transform: translateY(-4px);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
      }

      .rhcjc-anniversary-popup-card:hover::before {
        transform: scaleX(1);
      }

      .rhcjc-anniversary-popup-day {
        font-size: 0.6875rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        color: #fad04a;
        margin-bottom: 0.75rem;
      }

      .rhcjc-anniversary-popup-event-title {
        font-size: 1.125rem;
        font-weight: 700;
        color: #fafafa;
        margin-bottom: 0.375rem;
      }

      .rhcjc-anniversary-popup-speaker {
        font-size: 0.8125rem;
        color: rgba(250, 250, 250, 0.7);
        margin-bottom: 0.5rem;
      }

      .rhcjc-anniversary-popup-speaker span {
        color: rgba(250, 250, 250, 0.9);
        font-weight: 600;
      }

      .rhcjc-anniversary-popup-description {
        font-size: 0.8125rem;
        color: rgba(250, 250, 250, 0.5);
        line-height: 1.6;
        margin-bottom: 1rem;
      }

      .rhcjc-anniversary-popup-details {
        padding-top: 1rem;
        border-top: 1px solid rgba(250, 250, 250, 0.08);
        font-size: 0.8125rem;
      }

      .rhcjc-anniversary-popup-detail {
        display: flex;
        align-items: flex-start;
        gap: 0.5rem;
        margin-bottom: 0.5rem;
      }

      .rhcjc-anniversary-popup-detail svg {
        width: 1rem;
        height: 1rem;
        flex-shrink: 0;
        margin-top: 0.125rem;
      }

      .rhcjc-anniversary-popup-detail.time {
        color: rgba(250, 250, 250, 0.8);
      }

      .rhcjc-anniversary-popup-detail.time .date {
        display: block;
        font-weight: 600;
        color: #fafafa;
      }

      .rhcjc-anniversary-popup-detail.location {
        color: rgba(250, 250, 250, 0.5);
      }

      /* ==================== POPUP CTA ==================== */
      .rhcjc-anniversary-popup-cta {
        position: relative;
        padding: 1.5rem 2rem;
        border-top: 1px solid rgba(250, 250, 250, 0.1);
        display: flex;
        justify-content: center;
      }

      .rhcjc-anniversary-popup-btn {
        padding: 1rem 2.5rem;
        background: #fad04a;
        border: none;
        color: #000;
        font-size: 0.875rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        cursor: pointer;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        gap: 0.75rem;
      }

      .rhcjc-anniversary-popup-btn:hover {
        background: #e5be3d;
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(250, 204, 74, 0.4);
      }

      .rhcjc-anniversary-popup-btn svg {
        width: 1.25rem;
        height: 1.25rem;
        transition: transform 0.3s ease;
      }

      .rhcjc-anniversary-popup-btn:hover svg {
      transform: translateX(4px);
      }

      /* ==================== RESPONSIVE ==================== */
      @media (max-width: 640px) {
        .rhcjc-anniversary-trigger {
          flex-direction: column;
          align-items: flex-start;
          gap: 1rem;
          padding: 1.25rem;
        }

        .rhcjc-anniversary-trigger-title {
          font-size: 1.25rem;
        }

        .rhcjc-anniversary-trigger-cta {
          width: 100%;
          justify-content: center;
        }

        .rhcjc-anniversary-popup-title {
          font-size: 1.75rem;
        }

        .rhcjc-anniversary-logo {
          display: none;
        }
      }
```

## Usage

- **Homepage hero**: Use the **full hero banner and events grid** markup for the `/anniversary-events` page or a primary landing page.
- **Compact banner**: Use the **compact homepage banner with CTA** at the top of the homepage or other high-traffic pages and point the link to `/anniversary-events`.
- **Styles**: Include the CSS block in your global stylesheet or in a template `<style>` block that is loaded on every page where either banner variant appears.
