# Mozilla Protocol

**URL**: https://protocol.mozilla.org/
**Archetype**: marketing / editorial
**Stack**: SCSS; HTML; used with Bedrock (Python/Django) for mozilla.org

---

## 1. Visual Theme & Atmosphere
Mozilla Protocol is the design system for mozilla.org and related marketing pages. It blends open-web activist energy with clean, accessible editorial design. Zilla Slab — a custom geometric slab-serif — functions as the distinctive typographic voice. The aesthetic is bold, inclusive, and slightly counter-corporate: vibrant color splashes on white grounds, strong typographic hierarchy, and accessible focus on the open web's values.

---

## 2. Color Palette & Roles

| Token | Hex | Role |
|---|---|---|
| Mozilla Red | `#FF4F5E` | CTAs, brand highlight |
| Mozilla Blue | `#0060DF` | Links, interactive |
| Firefox Orange | `#FF9400` | Firefox product branding |
| Firefox Yellow | `#FFEA2E` | Highlight, badge |
| Neon Green | `#54FFBD` | Accent, MDN/developer pages |
| Purple | `#7542E5` | Accent, experimental features |
| Violet | `#952BB9` | Secondary campaign accent |
| Dark Violet | `#20123A` | Dark section background |
| Ink | `#000000` | Primary text |
| Dark Gray | `#15141A` | Heading text |
| Mid Gray | `#5B5B66` | Body secondary text |
| Light Gray | `#F9F9FB` | Page background sections |
| White | `#FFFFFF` | Page background |
| Coral | `#FF9AA2` | Friendly accent |

---

## 3. Typography Rules

| Role | Face | Size | Weight |
|---|---|---|---|
| Hero | Zilla Slab | 3.5rem | 700 |
| H1 | Zilla Slab | 2.25rem | 700 |
| H2 | Zilla Slab | 1.75rem | 700 |
| H3 | Zilla Slab | 1.25rem | 600 |
| Body | Inter | 1rem | 400 |
| Body Lead | Inter | 1.125rem | 400 |
| Small | Inter | 0.875rem | 400 |
| Caption | Inter | 0.75rem | 400 |
| Content width | — | max 800px | — |

Zilla Slab for **all headings** everywhere. Inter (or system sans) for body. Line-height 1.5 for body, 1.2 for display.

---

## 4. Component Styling

**Callout (CTA sections)**
- Full-width band: dark violet `#20123A` background, Zilla Slab headline, white text
- Primary button: Mozilla Red `#FF4F5E` fill, white label, 4px radius
- Secondary: white outline, white text

**Cards**
- No border, subtle `box-shadow: 0 2px 8px rgba(0,0,0,0.1)`
- Flat image top; title (Zilla Slab) + excerpt (Inter)
- Product cards: icon + colored left accent line per product

**Download Buttons**
- Large pill shape (24px radius) for Firefox CTA
- Firefox Orange `#FF9400` or product gradient
- Platform suffix text below button: "Free Download · macOS"

**Navigation**
- Horizontal top nav; product menu in mega-dropdown
- Hamburger at ≤ 992px
- Focus indicator: 2px solid `#0060DF` with 2px offset

---

## 5. Layout Principles
- **Grid**: 12 columns, 1200px max-width, 24px gutters
- **Section pattern**: Alternate light/dark bands for landing pages
- **Spacing scale**: 8px base (8, 16, 24, 32, 48, 64, 80, 120)
- **Hero**: Centered text + product screenshot; full-width colored band
- **Articles**: Single column, 800px max-width, generous line-spacing

---

## 6. Depth & Elevation

| Level | Value | Usage |
|---|---|---|
| Flat | None | Page sections, in-content |
| Card | `0 2px 8px rgba(0,0,0,0.1)` | Content cards |
| Sticky nav | `0 0 8px rgba(0,0,0,0.1)` | Header on scroll |
| Modal | `0 4px 24px rgba(0,0,0,0.3)` | Dialogs |

---

## 7. Do's and Don'ts

**Do**
- Use Zilla Slab for all headings — it's the heart of Mozilla's voice
- Alternate light/dark section bands for visual rhythm on landing pages
- Apply Firefox/product-specific accent colors per product feature section
- Use `#0060DF` for all text links at body level (AAA contrast on white)
- Ensure WCAG 2.1 AA minimum — accessibility is a core Mozilla value

**Don't**
- Use a generic sans-serif for headings — Zilla Slab is essential
- Make CTAs passive with outline-only buttons on white backgrounds
- Use more than 1 primary CTA above the fold
- Use dark violet backgrounds for long-form text (readability)

---

## 8. Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| < 576px | Single column, hamburger nav, mobile hero with smaller Zilla Slab |
| 576–992px | Two-column cards, collapsible nav |
| ≥ 992px | Full horizontal nav, three-column card grids |
| ≥ 1200px | Max container width reached, centered layout |

---

## 9. Agent Prompt Guide

**When generating Mozilla Protocol-style UI:**
> Open-web activist marketing pages. Zilla Slab 700 for all headings, Inter for body. Mozilla Red `#FF4F5E` CTAs. Blue `#0060DF` links. Alternate white/dark-violet `#20123A` section bands. Product cards with icon + Zilla Slab title + Inter excerpt. Large pill-shaped download buttons. 8px spacing base. 12-column 1200px grid. Flat brand feel with editorial confidence.

**Avoid**: Generic heading fonts, same-color section stacking, muted CTA colors.
