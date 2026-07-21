# Artsy Palette

**URL**: https://palette.artsy.net/
**Archetype**: premium-editorial / art-marketplace
**Stack**: React; styled-system patterns

---

## 1. Visual Theme & Atmosphere
Artsy's Palette design language is built for art discovery and commerce. The aesthetic is gallery-first: quiet, editorial, and image-led. White space, serif/sans pairings, and restrained accent colors create a museum-like frame that elevates artwork and artist narratives.

---

## 2. Color Palette & Roles

| Token | Hex | Role |
|---|---|---|
| Artsy Black | `#000000` | Primary text, anchors |
| Artsy White | `#FFFFFF` | Background, gallery space |
| Artsy Red | `#C82400` | Accent, urgency, sale highlights |
| Warm Gray | `#F5F3F0` | Section backgrounds |
| Cool Gray | `#E5E2DC` | Borders/dividers |
| Slate | `#4A4A4A` | Secondary text |
| Muted | `#8A8A8A` | Metadata |
| Success Green | `#2E8B57` | Confirmed actions |
| Warning Amber | `#C58B00` | Warnings |

---

## 3. Typography Rules

| Role | Face | Size | Weight |
|---|---|---|---|
| Display | Garamond No8 | 3rem | 400 |
| H1 | Garamond No8 | 2.25rem | 400 |
| H2 | Garamond No8 | 1.75rem | 400 |
| H3 | Unica77 | 1.25rem | 600 |
| H4 | Unica77 | 1rem | 600 |
| Body | Unica77 | 1rem | 400 |
| Small | Unica77 | 0.875rem | 400 |
| Caption | Unica77 | 0.75rem | 400 |

---

## 4. Component Styling

**Artwork Card**
- Dominant artwork image with minimal UI chrome
- Artist, title, year, medium, and price metadata
- Save and inquire actions in subtle controls

**Editorial Module**
- Longform text with pull quotes and image blocks
- Serif display headlines and generous line spacing

**Filter Bar**
- Refine by medium, price, size, availability
- Compact controls that stay visually quiet

**Auction/Offer CTA**
- High-contrast black or red action buttons
- Clear urgency and deadline context

---

## 5. Layout Principles
- **Gallery-first**: imagery leads hierarchy
- **Spacing**: generous vertical rhythm (8px base with large multiples)
- **Grid**: adaptive masonry and editorial column layouts
- **Content width**: restrained for narrative readability
- **Navigation**: understated global nav with strong search

---

## 6. Depth & Elevation

| Level | Value | Usage |
|---|---|---|
| Flat | Border and spacing separation | Most elements |
| Card Hover | `0 6px 20px rgba(0,0,0,0.12)` | Artwork hover affordance |
| Popover | `0 8px 24px rgba(0,0,0,0.16)` | Filter menus |
| Modal | `0 10px 28px rgba(0,0,0,0.22)` | Inquiry dialogs |

---

## 7. Do's and Don'ts

**Do**
- Keep artwork the visual focal point
- Use typography contrast (serif display + sans body)
- Preserve quiet UI chrome around content
- Surface provenance and pricing details clearly for buyer trust

**Don't**
- Over-style interface controls around artwork
- Use bright multi-color palettes that compete with art
- Truncate critical artwork metadata
- Crowd pages with excessive badges or utility UI

---

## 8. Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| < 768px | Single-column artwork stream |
| 768–1024px | Two-column gallery and compact filters |
| ≥ 1024px | Rich multi-column gallery/editorial layouts |

---

## 9. Agent Prompt Guide

**When generating Artsy Palette-style UI:**
> Editorial art marketplace aesthetic with gallery-like restraint. Artsy Black/White base, selective red accents, and serif-led display typography (Garamond No8) paired with clean sans body (Unica77). Make artwork imagery dominant, minimize chrome, and keep commerce actions clear but understated.

**Avoid**: loud color palettes, heavy utility chrome, metadata truncation.
