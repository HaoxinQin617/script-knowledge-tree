# BBC GEL — Global Experience Language

**URL**: https://www.bbc.co.uk/gel
**Archetype**: media-forward
**Stack**: HTML/CSS, bbc-grandstand components, vanilla web

---

## 1. Visual Theme & Atmosphere
GEL is the BBC's foundational design language — applied across the world's most visited public broadcaster covering News, Sport, iPlayer, Sounds, Weather, and more. The visual atmosphere is authoritative and editorial: inspired by broadsheet print design, with strong typographic hierarchy, a disciplined color system, and photography as primary content. Trust, clarity, and accessibility are non-negotiable. No decorative flourishes — every element earns its place.

---

## 2. Color Palette & Roles

| Token | Hex | Role |
|---|---|---|
| BBC Black | `#000000` | Primary text, header, masthead |
| BBC White | `#FFFFFF` | Surface, body background |
| BBC Red | `#BB1919` | BBC brand accent (News) |
| Neutral 07 | `#121212` | Dark surface |
| Neutral 06 | `#2E2E2E` | Dark secondary surface |
| Neutral 05 | `#424242` | Metadata text on dark |
| Neutral 03 | `#AFAFAF` | Muted text |
| Neutral 02 | `#DEDEDE` | Dividers |
| Neutral 01 | `#F6F6F6` | Background gray |
| Focus Yellow | `#FFBF47` | Focus ring (govuk-heritage) |
| Sport Orange | `#FF6B00` | BBC Sport accent |
| iPlayer Purple | `#9D28AC` | iPlayer product accent |
| Sounds Teal | `#0F6070` | BBC Sounds accent |
| Weather Teal | `#23887A` | Weather product |

Each BBC product has its own accent within the common neutral/black/white base.

---

## 3. Typography Rules

| Role | Face | Size | Weight |
|---|---|---|---|
| Display / Header | BBC Reith Sans | 2.5rem | 700 |
| Heading 1 | BBC Reith Sans | 2rem | 700 |
| Heading 2 | BBC Reith Sans | 1.5rem | 700 |
| Heading 3 | BBC Reith Sans | 1.125rem | 700 |
| Body | BBC Reith Sans | 1rem / 1.5 | 400 |
| Small | BBC Reith Sans | 0.875rem | 400 |
| Pull Quote | BBC Reith Serif | 1.25rem | 400 italic |
| Timestamp / Meta | BBC Reith Sans | 0.75rem | 400 |

BBC Reith (Sans + Serif) is the BBC's proprietary typeface family. Web fallback: `'Helvetica Neue', Helvetica, Arial, sans-serif`. Reith Serif is used for longform editorial content and pull quotes.

---

## 4. Component Styling

**Promo (Article Card)**
- Core GEL component: image + headline + timestamp + optional summary
- Image: 16:9 aspect ratio, full-width of card
- Headline: 700 weight, links via entire card
- No border radius; square corners on all cards
- Dividers: `1px solid #DEDEDE` between items

**Navigation (Orb)**
- Black bar at top of all BBC pages
- BBC logo (white on black) left-justified
- Service-specific nav links right-justified
- Sign In / Account top right

**Button**
- Primary: BBC black fill, white text, 0px radius
- Secondary: white with black border
- Focus: `3px solid #FFBF47`, 0px offset

**Video / Audio Player Controls**
- Dark surface `#121212`, white controls
- Progress bar with brand accent color

---

## 5. Layout Principles
- **Grid**: 12-column, horizontal scrolling carousels on editorial index pages
- **Content width**: Body text max ~700px (70ch) for readability
- **Gel units**: 8px base; GEL spacing scale: 4/8/16/24/32/48px
- **Article layout**: Single column for long reads; grid for index pages
- **Live event**: Breaking news banner always above all content

---

## 6. Depth & Elevation

GEL is almost entirely flat. Shadows used only for:

| Level | Shadow | Usage |
|---|---|---|
| 0 | none | All standard surfaces |
| 1 | `0 2px 5px rgba(0,0,0,0.1)` | Sticky navigation |
| 2 | `0 4px 12px rgba(0,0,0,0.15)` | Overlays, cookie banners |

No material blur effects. Dark surfaces communicate depth via background color, not shadow.

---

## 7. Do's and Don'ts

**Do**
- Use editorial hierarchy: headline first, everything else secondary
- Use BBC Reith Sans or its fallback font stack
- Make focus rings visible on all interactive elements (yellow `#FFBF47`)
- Follow the 16:9 image aspect ratio for all editorial cards
- Use product accent colors sparingly — black/white/Reith carry the brand

**Don't**
- Use serif type in UI controls (only editorial longform)
- Add rounded corners to cards or buttons
- Use status colors for editorial categories (use section-specific accent instead)
- Hide or deprioritise the BBC Orb header navigation
- Override focus styles

---

## 8. Responsive Behavior

| Breakpoint | Layout |
|---|---|
| < 400px | Single column; simplified nav |
| 400–600px | Single column; full-width cards |
| 600–1008px | Two-column editorial grid |
| 1008–1280px | Three-column |
| ≥ 1280px | Four-column with feature leads |

- Carousels scroll horizontally on mobile; become full grid on desktop
- Live blog: always single column, top-to-bottom chronological
- Video: full-width on mobile, constrained with sidebar on desktop

---

## 9. Agent Prompt Guide

**When generating BBC GEL-style UI:**
> Apply BBC's authoritative editorial aesthetic. Black masthead, white surfaces, product-specific accent (News Red `#BB1919`, Sport Orange `#FF6B00`, iPlayer Purple `#9D28AC`). BBC Reith Sans or Helvetica Neue, 700 weight headlines. Square corners on all components. 16:9 image cards with overlaid headline. 8px spacing grid. Focus rings: `3px solid #FFBF47`. No shadows on content — flat editorial grids. Article body max 700px wide. Promo card: image → headline → timestamp → optional summary.

**Avoid**: Rounded corners, gradient fills, shadows on cards, decorative icons, serif type in UI controls, missing focus states.
