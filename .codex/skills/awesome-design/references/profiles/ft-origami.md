# Financial Times Origami Design System

**URL**: https://origami.ft.com/
**Archetype**: media-forward (financial journalism)
**Stack**: HTML/CSS (custom elements), Vanilla JS components, Sass

---

## 1. Visual Theme & Atmosphere
Origami is the Financial Times' design system — powering ft.com, FT Weekend, and the FT app. The visual atmosphere is distinctly premium editorial: the iconic salmon/nude background is immediately recognisable worldwide, evocative of the FT's broadsheet print heritage. Typography is demanding and authoritative; data density is high for financial content. The overall feel is establishment sophistication — trusted by CFOs, institutional investors, and financial journalists. Every pixel carries weight.

---

## 2. Color Palette & Roles

| Token | Hex | Role |
|---|---|---|
| FT Weekend Cream | `#FFF1E5` | Primary page background (iconic) |
| FT Claret | `#990F3D` | Masthead, brand, primary CTAs |
| FT Pink | `#F2DFCE` | Warm content surfaces |
| FT Blue | `#0D7680` | Interactive links, digital elements |
| Teal | `#0D7680` | Same as digital blue |
| Black | `#000000` | Headline text |
| Dark Charcoal | `#33302E` | Body text |
| FT Gray | `#807973` | Metadata, captions |
| Warm Gray Light | `#CCC1BA` | Borders, dividers |
| White | `#FFFFFF` | Card surfaces, article body |
| Section Blue | `#243757` | The section colors (Deep Blue - Big Read) |
| Section Lime | `#96CC28` | Special reports accent |
| Mandarin | `#FF8833` | Subscriber exclusive |
| Gold | `#FFCF00` | FT Weekend magazine |

---

## 3. Typography Rules

| Role | Face | Size | Weight |
|---|---|---|---|
| Masthead | Financier Display | 4rem+ | 700 |
| Editorial H1 | Financier Display | 2.25rem | 700 |
| Article H2 | Metric | 1.5rem | 600 |
| Standfirst | Metric | 1.125rem | 400 italic |
| Body Article | Georgia / Financier Text | 1.0625rem / 1.7 | 400 |
| UI Label | Metric | 0.875rem | 400 |
| Caption | Metric | 0.75rem | 400 |
| Data Table | Metric | 0.8125rem | 400 |

**Financier** (display + text): FT's proprietary serif family — classical proportions, modern rendering. Used for editorial headlines and article body. **Metric**: FT's proprietary sans — used for all UI chrome, captions, labels. Web fallbacks: `Georgia, serif` for display/editorial; `'Helvetica Neue', Arial, sans-serif` for UI.

---

## 4. Component Styling

**Buttons**
- Primary CTA: `#990F3D` Claret fill, white text, 4px radius
- Secondary: white fill, Claret border
- Subscription CTA: Heavy weight; Claret; uppercase label
- Ghost (on dark): transparent, white border, white text

**Article Card (Teaser)**
- Core content unit: headline + standfirst + timestamp + author
- Background: `#FFF1E5` salmon
- No image border radius; full photographic bleed on image teasers
- Live stories: animated red dot indicator

**Data Tables (FT Charts)**
- FT Metric Semibold column headers
- Alternating row `#F2DFCE` / `#FFFFFF`
- Right-aligned numeric columns
- Source attribution always below table

**Paywall / Subscription CTA**
- Gradient fade into FT salmon followed by subscription prompt
- Located at article midpoint for non-subscribers

---

## 5. Layout Principles
- **Grid**: 12-column; 10px gutter on mobile → 20px on desktop
- **Max width**: 1220px (article pages: single column ~680px)
- **Article body**: ~65ch line length — print-inspired readability
- **Section headers**: Bold masthead treatment for each FT section
- **Ad placement**: Takes priority in layout — above fold, stickies
- **Data widgets**: Inline charts, ticker tables; data is a first-class content type

---

## 6. Depth & Elevation

Origami is predominantly flat with print-heritage dividers:

| Level | Treatment | Usage |
|---|---|---|
| 0 | None | Flat editorial surfaces |
| Divider | `1px solid #CCC1BA` | Between articles |
| Card border | `1px solid #CCC1BA` | Teaser borders |
| Sticky bar | `0 2px 4px rgba(0,0,0,0.1)` | Sticky navigation |
| Modals | `0 4px 16px rgba(0,0,0,0.2)` | Cookie consent, subscription |

No decorative shadows. Depth conveyed by typography scale and the distinctive warm palette contrast.

---

## 7. Do's and Don'ts

**Do**
- Use `#FFF1E5` as the page background — the salmon is non-negotiable brand identity
- Use Financier for all headlines and bylines; Metric for UI chrome
- Right-align all numeric data in tables
- Use FT Claret `#990F3D` exclusively for primary interactive actions
- Include source attributions below all data tables and charts

**Don't**
- Use white page backgrounds on editorial pages (only on article text body for readability)
- Use blue for primary CTA (reserve for links and digital product elements)
- Apply to contexts outside financial news/editorial — the salmon bg is highly specific
- Use system sans for editorial headlines
- Apply gradient fills anywhere (flat + print-inspired only)

---

## 8. Responsive Behavior

| Breakpoint | Layout |
|---|---|
| < 740px | Single column; article full-width; compact nav |
| 740–980px | Two-column article grid |
| 980–1220px | Three-column standard layout |
| ≥ 1220px | Full FT layout; side columns; big read featured |

- Article body: always single column regardless of page width, max ~680px
- Charts/tables: scroll horizontally on small screens with `overflow-x: auto`
- Print styles: FT includes print media queries (articles are printed frequently)

---

## 9. Agent Prompt Guide

**When generating FT Origami-style UI:**
> Apply the Financial Times premium-editorial aesthetic. Salmon background `#FFF1E5`, Financier Display (or Georgia fallback) for headlines at 700 weight. Metric (or Helvetica Neue fallback) for UI labels. FT Claret `#990F3D` for all primary actions. FT Blue `#0D7680` for links. Article body: max 680px wide, 1.7 line-height, `#33302E` text on white. Flat surfaces, `1px solid #CCC1BA` dividers. Data tables: right-aligned numbers, alternating `#F2DFCE` / `#FFFFFF` rows.

**Avoid**: White page backgrounds on editorial, gradient fills, rounded pill buttons, blue for CTAs, system sans for headlines.
