---
title: About Infobox Design
description: The design for the infoxbox used in the https://rhcjcnews.com/infobox/about/ website.
---

## Overview

The `.sno-infobox-4741` is a custom-designed accordion-style content box used for informational sections. It is styled for clean presentation, strong visual hierarchy, and mobile responsiveness. 

This style is used specifically on [this page](https://rhcjcnews.com/infobox/about/) but can be extended to other SNO blocks or reusable components.

---

## Features

- ✅ Accordion-style collapsible segments  
- ✅ Mobile-optimized design with breakpoints for tablet and phone  
- ✅ Print-friendly layout  
- ✅ WCAG-compliant focus outlines  
- ✅ Highlighted link styles and strong typography  

---


```infobox-styles.css
.sno-infobox-4741 {
  max-width: 100% !important;
  margin: 0;
  background: white;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid #f3f4f6;
}

.sno-infobox-4741 .infobox-segment {
  border: none;
}

.sno-infobox-4741 .infobox-segment-title {
  background: #3a3a3c;
  border-radius: 6px;
  color: white !important;
  padding: 24px;
  cursor: pointer;
  margin: 0;
  width: 100%;
}

.sno-infobox-4741 .infobox-segment-body {
  padding: 32px;
  background: white;
  border-left: 4px solid #ffd046;
  gap: 20px;
}

.sno-infobox-4741 .infobox-segment-title:hover {
  background: linear-gradient(135deg, #1a1a1a 0%, #000000 100%);
}

.sno-infobox-4741 .infobox-segment-title-accordion {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 18px !important;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin: 0;
  gap: 20px;
  padding: 24px;
  width: 100%;
  box-sizing: border-box;
}

.sno-infobox-4741 .infobox-toggle {
  color: #ffd046;
}


.sno-infobox-4741 .infobox-segment-image img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}


.sno-infobox-4741 .infobox-segment-content {
  color: #374151;
  line-height: 1.7;
  font-size: 16px;
}

.sno-infobox-4741 .infobox-segment-content p {
  margin-bottom: 16px;
}

.sno-infobox-4741 .infobox-segment-content p:last-child {
  margin-bottom: 0;
}

.sno-infobox-4741 .infobox-segment-content a {
  color: #d97706;
  text-decoration: underline;
  font-weight: 500;
}

.sno-infobox-4741 .infobox-segment-content a:hover {
  color: #b45309;
}

.sno-infobox-4741 .infobox-segment-content span[data-contrast="auto"] {
  color: inherit;
}

.sno-infobox-4741 .infobox-divider {
  height: 1px;
  background: linear-gradient(90deg, transparent 0%, #f59e0b 50%, transparent 100%);
  margin: 0 32px;
}

.sno-infobox-4741 .clear {
  clear: both;
}

/* Responsive Design */
@media (max-width: 768px) {
  .sno-infobox-4741 {
    margin: 16px;
    border-radius: 12px;
  }
  .sno-infobox-4741 .infobox-segment-title {
    padding: 20px;
  }
  .sno-infobox-4741 .infobox-segment-title-accordion {
    font-size: 16px;
  }
  .sno-infobox-4741 .infobox-segment-body {
    padding: 24px 20px;
  background: white;
  border: none;
  }

  .sno-infobox-4741 .infobox-segment-image-area {
    float: none;
    width: 100%;
    margin-right: 0;
    margin-bottom: 10px;
    text-align: center;
  }
  .sno-infobox-4741 .infobox-segment-image {
    max-width: 250px;
    margin: 0 auto;
  }

  .sno-infobox-4741 .infobox-segment-content {
    font-size: 15px;
  }
  .sno-infobox-4741 .infobox-segment-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    margin: 0;
    padding: 0;
    display: block;
    border-radius: 8px;
  }
  .sno-infobox-4741 .infobox-divider {
    margin: 0 20px;
  }
}

@media (max-width: 480px) {
  .sno-infobox-4741 .infobox-segment-title {
    padding: 16px;
  }
  .sno-infobox-4741 .infobox-segment-title-accordion {
    font-size: 14px ;
  }
  .sno-infobox-4741 .infobox-segment-body {
    padding: 20px 16px;
  }
  .sno-infobox-4741 .infobox-segment-content {
    font-size: 14px;
  }
}

/* Accessibility */
.sno-infobox-4741 .infobox-segment-title:focus,
.sno-infobox-4741 .infobox-toggle:focus {
  outline: 2px solid #f59e0b;
  outline-offset: 2px;
}

/* Print Styles */
@media print {
  .sno-infobox-4741 {
    box-shadow: none;
    border: 1px solid #ccc;
  }
  .sno-infobox-4741 .infobox-segment-title {
    background: #f5f5f5 !important;
    color: #000 !important;
  }
  .sno-infobox-4741 .infobox-toggle {
    display: none;
  }
}

/* Enhanced Typography */
.sno-infobox-4741 .infobox-segment-content em {
  color: #000;
  font-weight: 500;
  font-style: italic;
}
```