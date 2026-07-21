# Skyscanner Backpack Design System

**URL**: https://skyscanner.design/
**Archetype**: premium-editorial (travel)
**Stack**: React, React Native, CSS-in-JS

---

## 1. Visual Theme & Atmosphere
Backpack reflects Skyscanner's mission: make travel discovery feel open, adventurous, and effortless. The visual mood is optimistic and sky-inspired — bright blues evoking clear skies, with coral accents for excitement and warmth. Surfaces are clean with room to breathe, prioritising destination photography and scannable price/flight cards. The overall tone is modern, friendly, and globally accessible.

---

## 2. Color Palette & Roles

| Token | Hex | Role |
|---|---|---|
| Sky Blue `bpk-color-sky-blue` | `#0770E3` | Primary interactive, links |
| Sky Blue Shade 01 | `#084EB2` | Hover/active state |
| Sky Blue Tint 01 | `#BAD3F5` | Light backgrounds, selection |
| Sky Blue Tint 02 | `#E8F1FC` | Hover fill bg |
| Coral | `#FF5964` | Feature accent, deals highlight |
| Coral Shade 01 | `#CC3040` | Coral hover |
| Panjin | `#FF7B51` | Warm secondary (sunset) |
| Abisko | `#6B1F7C` | Premium / special actions |
| Midnight | `#111236` | Header backgrounds, dark surfaces |
| Sky Gray | `#444560` | Body text |
| Sky Gray Light | `#8F90A6` | Secondary text, metadata |
| White | `#FFFFFF` | Surface |
| Light Gray | `#F1F2F8` | Background grey surface |

---

## 3. Typography Rules

| Role | Face | Size | Weight |
|---|---|---|---|
| Display | SkySans (custom) | 2.5rem | 700 |
| Heading 1 | SkySans | 2rem | 700 |
| Heading 2 | SkySans | 1.5rem | 600 |
| Heading 3 | SkySans | 1.25rem | 600 |
| Body | SkySans | 1rem / 1.5 | 400 |
| Small | SkySans | 0.875rem | 400 |
| Caption | SkySans | 0.75rem | 400 |

System fallback: `'Helvetica Neue', Helvetica, Arial, sans-serif`. Type scale uses `bpk-font-size-*` tokens. Sentence case for all UI copy except brand name.

---

## 4. Component Styling

**Buttons**
- Primary: `#0770E3` fill, white text, 24px radius (pill-shaped)
- Secondary: white fill, `#0770E3` 1.5px border
- Featured: `#FF5964` coral fill, white text
- Destructive: red variant
- Sizes: sm (32px height) / base (48px) / lg (56px)

**Flight Card**
- Core Skyscanner pattern: airline logo + route + times + duration + price
- White surface, 8px radius, `0 1px 3px rgba(0,0,0,0.1)` shadow
- Price right-aligned, bold, highlighted in blue
- "Best" / "Cheapest" / "Fastest" tags in Sky Blue Tint

**Search Controls (Horizon)**
- Date pickers, airport inputs — signature Backpack component
- Round-trip toggle: pill-toggle control
- Soft shadows, focus: `2px solid #0770E3`

---

## 5. Layout Principles
- **Grid**: Flexible, content-driven; 8px spacing base
- **Container max-width**: 1280px; padding 16px (mobile) → 24px (tablet) → 32px (desktop)
- **Card layouts**: Primary content delivery via cards (flex/grid rows)
- **Photography**: Destination imagery is foundational — large hero + card thumbnails
- **Whitespace**: Generous; flight/hotel listings have breathing room

---

## 6. Depth & Elevation

| Level | Shadow | Usage |
|---|---|---|
| 0 | none | Flat surfaces |
| sm | `0 1px 3px rgba(8,7,41,0.1)` | Cards, inputs |
| md | `0 4px 14px rgba(8,7,41,0.15)` | Modals, popovers |
| lg | `0 8px 24px rgba(8,7,41,0.2)` | Full overlays |

---

## 7. Do's and Don'ts

**Do**
- Use pill buttons (24px+ radius) — signature Backpack shape
- Use destination photography prominently
- Use coral `#FF5964` for highlighting deals and excitement
- Use Sky Blue as the consistent trust/interactive color
- Provide clear price hierarchy: primary = price; secondary = airline/route

**Don't**
- Use Midnight `#111236` for regular text (headline dark surfaces only)
- Mix Abisko purple with coral on the same screen
- Use sharp square corners — it contradicts the brand's openness
- Use dense table layouts for results (cards preferred)
- Remove airline logos from flight cards

---

## 8. Responsive Behavior

| Breakpoint | Layout |
|---|---|
| < 480px | Single column, stacked search controls |
| 480–768px | 2-column cards |
| 768–1280px | 3-column; sidebar filters |
| ≥ 1280px | Full layout; side filter panel + main results |

- Search controls collapse to a compact summary bar on results page
- Flight/hotel cards stack to single column on mobile
- Map view available on tablet+ only

---

## 9. Agent Prompt Guide

**When generating Backpack / Skyscanner-style UI:**
> Apply Skyscanner's sky-inspired travel aesthetic. White surfaces, `#F1F2F8` secondary. Primary blue `#0770E3`, coral accent `#FF5964`. Pill buttons (24px radius). Destination photography in hero cards. SkySans or Helvetica Neue, 1rem body. Flight/hotel cards: white bg, 8px radius, subtle shadow. Price right-aligned in bold blue. 8px spacing base. Generous whitespace. Filter controls on left sidebar; results as card grid.

**Avoid**: Square corners, dense table results, red for errors when coral is in use (distinguish carefully), Midnight for regular text.
