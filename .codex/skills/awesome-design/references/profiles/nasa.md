# NASA Design System

**URL**: https://designsystem.nasa.gov/
**Archetype**: civic-accessible / mission-driven
**Stack**: USWDS-based; HTML/CSS/JS components with NASA branding overlays

---

## 1. Visual Theme & Atmosphere
NASA's design system merges federal accessibility standards with iconic aerospace branding. It must serve educational audiences, researchers, and the general public while preserving trust and scientific credibility. The visual language is bold, space-forward, and information-rich: deep NASA blue, white text on dark imagery, and mission accent reds. The system balances inspiration with strict public-sector clarity.

---

## 2. Color Palette & Roles

| Token | Hex | Role |
|---|---|---|
| NASA Blue | `#0B3D91` | Primary brand, header, nav |
| NASA Red | `#FC3D21` | Accent, CTA, mission highlights |
| Space Black | `#000000` | Dark backgrounds, media overlays |
| White | `#FFFFFF` | Text on dark, surfaces |
| Sky Blue | `#1E90FF` | Secondary links/info |
| Success Green | `#2E8540` | Confirmation |
| Warning Orange | `#F39200` | Warning |
| Error Red | `#D83933` | Error state |
| Gray 90 | `#1B1B1B` | Primary text light mode |
| Gray 60 | `#757575` | Secondary text |
| Gray 20 | `#C9C9C9` | Borders |
| Gray 5 | `#F0F0F0` | Light section background |
| Focus Yellow | `#FFBE2E` | Keyboard focus ring |

---

## 3. Typography Rules

| Role | Face | Size | Weight |
|---|---|---|---|
| Display | Public Sans | 3rem | 700 |
| H1 | Public Sans | 2.25rem | 700 |
| H2 | Public Sans | 1.75rem | 700 |
| H3 | Public Sans | 1.375rem | 600 |
| H4 | Public Sans | 1.125rem | 600 |
| Body | Public Sans | 1rem | 400 |
| Small | Public Sans | 0.875rem | 400 |
| Caption | Public Sans | 0.75rem | 400 |
| Code/Technical | Roboto Mono | 0.875rem | 400 |

USWDS typography defaults are retained for federal consistency and accessibility.

---

## 4. Component Styling

**Mission Hero**
- Full-width astronomy/mission image with dark gradient overlay
- Large headline in white
- CTA in NASA red

**News Card**
- Image top, title, summary, metadata date/source
- 8px radius card with subtle border

**Alert Banner**
- Color-coded alert blocks (info/warning/error/success)
- Icon + title + plain language body

**Data Table**
- Clear column headers, sortable controls
- Sticky header for long datasets
- High-contrast row separators

---

## 5. Layout Principles
- **Grid**: USWDS responsive grid (12-column)
- **Spacing**: 8px base with USWDS scale tokens
- **Content max-width**: 1200px standard; full-bleed for hero/media sections
- **Section rhythm**: Alternating dark media sections and light content sections
- **Navigation**: Persistent top bar with mission taxonomy

---

## 6. Depth & Elevation

| Level | Value | Usage |
|---|---|---|
| Flat | Border-led separation | Content and data sections |
| Card | `0 2px 8px rgba(0,0,0,0.12)` | News cards |
| Dropdown | `0 4px 16px rgba(0,0,0,0.18)` | Menus |
| Modal | `0 8px 24px rgba(0,0,0,0.28)` | Dialogs |

---

## 7. Do's and Don'ts

**Do**
- Follow USWDS accessibility and component semantics
- Use NASA Red sparingly for mission-critical emphasis
- Maintain high contrast on imagery overlays
- Write plain-language scientific summaries for public audiences
- Provide descriptive alt text for mission imagery

**Don't**
- Over-style federal UI components outside accessibility-safe patterns
- Use decorative low-contrast text on cosmic backgrounds
- Replace standard keyboard focus indicators
- Hide critical data behind hover-only interactions

---

## 8. Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| < 640px | Single-column cards, simplified nav |
| 640–1024px | Two-column media/content sections |
| ≥ 1024px | Full mission portal layout with side context |
| ≥ 1280px | Expanded media grids and data panels |

---

## 9. Agent Prompt Guide

**When generating NASA-style UI:**
> Federal-accessible mission portal aesthetic. NASA Blue `#0B3D91` primary, NASA Red `#FC3D21` accents. Public Sans typography, high-contrast overlays on space imagery. USWDS-compatible grid and components. Clear data tables, alert banners, and plain-language summaries. Alternating dark media and light content sections.

**Avoid**: low-contrast text on imagery, decorative-only interactions, divergence from accessibility-first federal patterns.
