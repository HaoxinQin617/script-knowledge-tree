# Astro UXDS — Aerospace / Defense UX Design System

**URL**: https://astrouxds.com/
**Archetype**: enterprise-data (aerospace / mission-critical HMI)
**Stack**: Web Components, React, Vue adaptations

---

## 1. Visual Theme & Atmosphere
Astro UXDS is purpose-built for aerospace, defense, and satellite operations — ground control stations, mission monitoring dashboards, and situational awareness systems. The visual atmosphere is dark-mode-first with high contrast: deep navy surfaces, precise cyan and amber accents, and tightly controlled color semantics for status. Nothing is decorative. Every visual element carries operational meaning. The interface must be legible under varied lighting conditions (control rooms, outdoor, high-glare screens).

---

## 2. Color Palette & Roles

| Token | Hex | Role |
|---|---|---|
| Primary Dark | `#101923` | Primary surface (darkest) |
| Secondary Dark | `#1B2A45` | Panel backgrounds |
| Tertiary Dark | `#243854` | Hover surfaces |
| Interactive | `#4DACFF` | Primary interactive, links |
| Interactive Hover | `#7ECBFF` | Hover state |
| Text Primary | `#FFFFFF` | Primary text on dark |
| Text Secondary | `rgba(255,255,255,0.6)` | Secondary labels |
| Caution | `#FCB516` | Caution status |
| Critical | `#FF3838` | Critical alert |
| Serious | `#FFB427` | Serious alert |
| Normal | `#56F000` | Normal / nominal status |
| Standby | `#2DCCFF` | Standby status |
| Off | `#9EA7AE` | Inactive/off status |

Status colors (Critical / Serious / Caution / Normal / Standby / Off) are standardized across aerospace industry conventions (CCSDS). Never use status colors for non-status elements.

---

## 3. Typography Rules

| Role | Face | Size | Weight |
|---|---|---|---|
| Display | Roboto | 1.75rem | 300 |
| Heading 1 | Roboto | 1.5rem | 400 |
| Heading 2 | Roboto | 1.375rem | 400 |
| Heading 3 | Roboto | 1.25rem | 400 |
| Body 1 | Roboto | 1rem | 400 |
| Body 2 | Roboto | 0.875rem | 400 |
| Caption | Roboto | 0.75rem | 400 |
| Mono (telemetry values) | Roboto Mono | 0.875rem | 400 |

Roboto at 400 weight provides neutral, legible text under stress conditions. Monospace for telemetry data, timestamps, and numeric values ensures column alignment and machine-readability semantics.

---

## 4. Component Styling

**Buttons**
- Primary: `#4DACFF` border, transparent fill, white text, 3px radius (outline style)
- Hover: `#4DACFF` fill, dark text
- Secondary: no border, transparent, text with hover fill
- Borderless: text-only for low-priority actions
- Caution/Critical variants: matching status colors

**Status Symbol**
- Unique Astro pattern: colored dot (6–16px) with mandatory label
- Shape encoding for color-blind accessibility: ● (normal), ■ (standby), ▲ (caution), ✕ (critical)
- Never use color alone for status

**Charts / Data Viz**
- Timeline component for mission schedules
- Line charts for telemetry trends
- Status matrix for multi-satellite views
- All chart axes use Roboto Mono

**Classification Banners**
- Mandatory top/bottom bars for secure systems: "UNCLASSIFIED" / "SECRET" etc.
- Specific colors per DoD classification level

---

## 5. Layout Principles
- **Grid**: Flexible, content-driven; no fixed column count
- **Spacing**: 8px base unit; steps: 4/8/16/24/32/48px
- **App shell**: Top nav + left panel (monitoring tree) + main visualization + right status pane
- **Dense layout**: Fit maximum operational data on screen — users cannot scroll during critical events
- **Panel priority**: Critical alerts and status visible without scrolling at all times

---

## 6. Depth & Elevation

No blurs or vibrancy. Elevation via border and background lightness:

| Level | Background | Border | Usage |
|---|---|---|---|
| 0 | `#101923` | None | Base canvas |
| 1 | `#1B2A45` | None | Primary panels |
| 2 | `#243854` | `1px solid rgba(255,255,255,0.1)` | Sub-panels, cards |
| 3 | `#2F4666` | `1px solid rgba(255,255,255,0.2)` | Popovers, tooltips |

---

## 7. Do's and Don'ts

**Do**
- Dark mode only — no light mode for mission-critical interfaces
- Use Astro's six-status color system exactly; do not add custom statuses
- Use shape + color + label for all status elements (accessibility)
- Include classification banners if deploying on classified networks
- Display telemetry values in Roboto Mono for alignment

**Don't**
- Use gradients, shadows, or texture
- Use status colors for non-status purposes
- Create custom alert/notification patterns that bypass the status system
- Use animations except for meaningful state transitions (avoid distraction)
- Surface bright colors outside the status system — they will be mistaken for alerts

---

## 8. Responsive Behavior

Astro UXDS is primarily designed for large desktop monitors (1920×1080+) in control room environments. Mobile is not a primary target. Touch support on tactical tablets is a secondary use case.

| Context | Behavior |
|---|---|
| 1920px+ | Multi-panel with full data density |
| 1440px | Condensed panels; scrollable inner regions |
| 1280px | Panels collapse; some data hidden behind toggles |
| Tablet (tactical) | Simplified view; larger touch targets (44px) |

---

## 9. Agent Prompt Guide

**When generating Astro UXDS-style UI:**
> Apply Astro's dark aerospace HMI aesthetic. Base surface `#101923`, panels `#1B2A45`. Interactive cyan `#4DACFF`. Roboto 400 for all text, Roboto Mono for data values. Outline-style buttons (cyan border, transparent fill). 3px radius. Use the six-status system strictly: Critical `#FF3838` / Serious `#FFB427` / Caution `#FCB516` / Normal `#56F000` / Standby `#2DCCFF` / Off `#9EA7AE`. Never use status colors decoratively. Dense multi-panel layout optimised for 1920px desktop. No gradients, no shadows, no animations beyond state transitions.

**Avoid**: Light mode, decorative colors, gradients, custom statuses outside the six-tier system, mobile-first patterns.
