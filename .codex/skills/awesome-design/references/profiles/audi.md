# Audi UI Design System

**URL**: https://www.audi.com/ci/en/guides/user-interface/
**Archetype**: premium-editorial (automotive luxury)
**Stack**: Web, iOS, Android; Audi UI Kit (Figma)

---

## 1. Visual Theme & Atmosphere
Audi's digital design language is an extension of the brand's "Vorsprung durch Technik" (Advancement through Technology) identity — precise, restrained, and supremely self-confident. Surfaces are architectural: white or black, large photography dominates, and typography does heavy lifting. Color is used sparingly as a precision accent, not decoration. The overall atmosphere is luxury German engineering applied to screen — clean geometry, controlled tension, no unnecessary elements.

---

## 2. Color Palette & Roles

| Token | Hex | Role |
|---|---|---|
| Progressive Red | `#BB0A30` | Primary brand accent, CTAs, highlights |
| Audi Black | `#000000` | Surface (dark mode), primary text |
| Audi White | `#FFFFFF` | Surface (light mode), primary text on dark |
| Cool Gray 1 | `#F2F2F2` | Light surface secondary |
| Cool Gray 3 | `#C7C7C7` | Dividers, borders |
| Cool Gray 5 | `#9E9E9E` | Muted text, placeholders |
| Cool Gray 7 | `#6B6B6B` | Secondary text |
| Cool Gray 9 | `#3C3C3C` | Dark body text |
| Dark Blue | `#002649` | Exclusive/secondary accent (sportback) |
| Electric Blue | `#009FDB` | e-tron / EV product line accent |

Two primary surface modes: Light (white bg, black text) and Dark (black bg, white text). Red is used exclusively for interaction, not decoration.

---

## 3. Typography Rules

| Role | Face | Size | Weight |
|---|---|---|---|
| Display / Hero | Audi Type Extended | 48–96px | 600 |
| Heading 1 | Audi Type | 36px | 600 |
| Heading 2 | Audi Type | 28px | 400 |
| Heading 3 | Audi Type | 22px | 400 |
| Body | Audi Type | 16px | 400 |
| Caption | Audi Type | 12px | 400 |
| Label / UI | Audi Type | 14px | 400 |

Audi Type is a proprietary typeface family. In web contexts without license, use `'Helvetica Neue', Helvetica, Arial, sans-serif`. Extended variant used exclusively for automotive model names and hero display. No italic — Audi type has no italic in Latin.

---

## 4. Component Styling

**Buttons**
- Primary: `#BB0A30` fill, white text, 0px radius (square corners)
- Secondary: transparent, `#000000` 1px border, black text
- Ghost (on dark): transparent, white 1px border, white text
- Hover: darken fill by 10%; add bottom 2px highlight line
- All buttons use ALL CAPS labels — brand standard

**Navigation**
- Horizontal top nav on desktop; minimalist with significant whitespace
- Active state: red underline (`2px solid #BB0A30`)
- Mega-menu for model/category navigation

**Cards / Teaser**
- Full-bleed photography as background
- Text overlay with gradient scrim at bottom
- No border radius; full square frames

**Forms**
- Underline-only inputs (no border box) — line beneath field only
- Label: small ALL CAPS above the line
- Focus: red underline highlight

---

## 5. Layout Principles
- **Grid**: 12-column, generous margins (4% each side minimum)
- **Spacing**: 8px base; primary steps: 8/16/24/32/48/64/96px
- **Photography**: Full-bleed hero images are primary content containers
- **White space**: Generous — layout breathes; content is never crowded
- **Typography-driven hierarchy**: Headlines do primary visual work; decorative elements avoided

---

## 6. Depth & Elevation

Audi interfaces are flat — no drop shadows on components. Depth is achieved through:
- Layered photography (foreground car vs background environment)
- Color contrast (white on black, black on white)
- Scale contrast (large hero type vs small body)

| Usage | Method |
|---|---|
| Overlay panels | Semi-transparent `rgba(0,0,0,0.7)` scrim |
| Tooltip | `1px solid #C7C7C7` border, no shadow |
| Modal | `rgba(0,0,0,0.6)` backdrop, no shadow on modal |

---

## 7. Do's and Don'ts

**Do**
- Use full-bleed photography — it is foundational to the brand
- Use ALL CAPS for button labels and key navigation items
- Use Audi Red (`#BB0A30`) exclusively for interactive primary actions
- Apply generous whitespace — the brand breathes
- Present model names in Extended weight

**Don't**
- Use rounded corners — Audi geometry is angular
- Use more than two typeface weights per screen
- Add decorative icons or illustrations
- Use red for status indicators (reserve it for CTAs only)
- Use the EV blue (`#009FDB`) in non-EV/non-electric contexts

---

## 8. Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| < 768px | Single column; hero images stack; hamburger nav |
| 768–1280px | Two-column with reduced margins |
| ≥ 1280px | Full design intent; generous margins; multi-column |

- Images always maintain aspect ratio; never cropped to fill without `object-fit`
- Typography scales proportionally (clamp preferred over breakpoint jumps)
- Mobile navigation: full-screen overlay with stacked links

---

## 9. Agent Prompt Guide

**When generating Audi-style UI:**
> Apply Audi's luxury-automotive precision aesthetic. White or black surfaces only (no grays as primary). Audi Red `#BB0A30` for interactive/CTA elements only. Helvetica Neue at 600 weight for display, 400 for body. 0px radius — all square corners. ALL CAPS button labels and navigation. Full-bleed photography as primary content framing. Generous whitespace; do not crowd. No decorative shadows. Underline-only form inputs. Flat components; depth from photography contrast only.

**Avoid**: Rounded corners, colorful illustrations, drop shadows, italic text, red for non-CTA uses, dense information layouts.
