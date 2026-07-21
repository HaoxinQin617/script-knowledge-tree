# Pinterest Gestalt

**URL**: https://gestalt.pinterest.systems/
**Archetype**: marketplace / visual-discovery
**Stack**: React; Gestalt is Pinterest's internal + open-source component library

---

## 1. Visual Theme & Atmosphere
Pinterest Gestalt is designed around visual discovery — Pin boards, image-first content, and the masonry grid that Pinterest invented. The design language is warm, inspirational, and Pinterest-red driven. Imagery is the dominant content type; UI chrome is minimal and retreating. Clean white cards, tight rounded corners, and red accent create a familiar Pinterest feel. The system also supports Creator, Advertiser, and Merchant dashboards which are more data-dense.

---

## 2. Color Palette & Roles

| Token | Hex | Role |
|---|---|---|
| Pinterest Red | `#E60023` | Primary brand, CTAs, pins |
| Red Dark | `#AD081B` | Hover, active state |
| Red Light | `#FFF0F0` | Selected tint, error tint |
| Midnight | `#111111` | Primary text, headings |
| Dark Gray | `#444444` | Secondary text |
| Medium Gray | `#767676` | Tertiary text, metadata |
| Light Gray | `#EFEFEF` | Borders, dividers |
| Silver | `#F8F8F8` | Page background, alt surface |
| White | `#FFFFFF` | Cards, surfaces |
| Blue | `#4A90D9` | Info, secondary interactive |
| Green | `#07875B` | Success |
| Orange | `#E35B00` | Warning |
| Error Red | `#CC0000` | Form errors |

---

## 3. Typography Rules

| Role | Face | Size | Weight |
|---|---|---|---|
| Billboard | Pinterest Sans | 3rem | 700 |
| H1 | Pinterest Sans | 2rem | 700 |
| H2 | Pinterest Sans | 1.5rem | 700 |
| H3 | Pinterest Sans | 1.25rem | 600 |
| H4 | Pinterest Sans | 1rem | 600 |
| Body (lg) | Pinterest Sans | 1rem | 400 |
| Body (sm / default) | Pinterest Sans | 0.875rem | 400 |
| Label | Pinterest Sans | 0.75rem | 600 |
| Caption | Pinterest Sans | 0.75rem | 400 |

Pinterest Sans (or fallback: `-apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, sans-serif`). No serif. Tight line-height on cards (1.3).

---

## 4. Component Styling

**Pin Card**
- Variable height (masonry), fixed width column
- Image fills card, rounded 16px radius
- Hover: Save button overlay (red, top-right), title bar below
- No visible border; subtle shadow on hover

**Board Card**
- 3-image collage layout or single cover image
- Title + item count below
- Circular creator avatar overlay

**Buttons**
- Primary: Red `#E60023`, white text, 24px radius (pill)
- Secondary: White, dark border `#111111`
- Transparent: Icon-only on dark bg
- Size: sm(32px) / md(40px) / lg(48px) height

**SearchBox**
- Large pill shape, 48px height
- Gray border, gray search icon left
- Pinterest Lens (camera icon) right side
- Full-width on mobile

---

## 5. Layout Principles
- **Masonry grid**: Variable-height columns, fixed-width Pins, gutter 16px
- **Column count**: 2 (mobile) → 3 → 4 → 5 → 6+ (desktop widths)
- **Max-width**: None — responsive fluid masonry
- **Spacing**: 4px base (4, 8, 12, 16, 24, 32, 48)
- **Top navigation**: Fixed, white, 64px; search bar central

---

## 6. Depth & Elevation

| Level | Value | Usage |
|---|---|---|
| Flat | None | Board, pin, page surfaces |
| Card hover | `0 8px 24px rgba(0,0,0,0.15)` | Pin card hover |
| Dropdown | `0 4px 16px rgba(0,0,0,0.18)` | Menu overlays |
| Modal | `0 8px 32px rgba(0,0,0,0.25)` | Pin lightbox |

---

## 7. Do's and Don'ts

**Do**
- Use masonry layout for image-first content — it's Pinterest's core pattern
- Use pill-shaped buttons (24px radius) throughout — it's the Pinterest signature
- Apply 16px radius to all image cards
- Use Pinterest Red sparingly — CTAs and save actions only
- Ensure image contrast with overlaid text (gradient scrim)

**Don't**
- Use rectangular buttons — pill shape is required
- Add heavy chrome around imagery — let images breathe
- Use serif type — Pinterest Sans or system sans only
- Design data tables with the same chrome as admin systems → use condensed styling

---

## 8. Responsive Behavior

| Breakpoint | Pin Columns |
|---|---|
| < 480px | 2 columns |
| 480–736px | 3 columns |
| 736–1024px | 4 columns |
| 1024–1280px | 5 columns |
| ≥ 1280px | 6+ columns |

Mobile bottom nav (Home / Search / + / Inbox / Profile). Desktop: fixed horizontal top nav.

---

## 9. Agent Prompt Guide

**When generating Pinterest Gestalt-style UI:**
> Visual discovery / imagery-first aesthetic. Pinterest Red `#E60023` brand, pill buttons (24px radius). Masonry grid with 16px-radius image cards. White surfaces, gray `#F8F8F8` page bg. Pinterest Sans (or system sans). Save overlay button on card hover. Minimal chrome — let imagery lead. 4px spacing grid. Large search bar (pill). Mobile: 2-column masonry + bottom tab nav.

**Avoid**: Rectangular buttons, serif type, heavy card borders, text-heavy layouts.
