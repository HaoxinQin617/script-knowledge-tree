# Kiwi.com Orbit Design System

**URL**: https://orbit.kiwi
**Archetype**: premium-editorial (travel)
**Stack**: React, Vanilla JS, React Native partial; Figma design tokens

---

## 1. Visual Theme & Atmosphere
Orbit is Kiwi.com's design system for the flight and travel search platform. The atmosphere is adventurous, modern, and dark-mode-first — evoking the excitement of travel planning at night, checking prices for an upcoming trip. Teal and orange accents inject energy against deep dark surfaces. The experience should feel sophisticated yet accessible: smart and capable without being austere.

---

## 2. Color Palette & Roles

| Token | Hex | Role |
|---|---|---|
| Product Normal | `#00A991` | Primary brand / CTA (teal) |
| Product Light | `#CAEEEA` | Active bg, hover fill |
| Product Dark | `#007A6B` | Brand hover/active |
| Orange Normal | `#F9971E` | Energy / urgency (book now) |
| Orange Light | `#FEF0DC` | Warm accent bg |
| Orange Dark | `#C77B1B` | Hover for orange elements |
| Ink Dark | `#171B1E` | Page background (dark) |
| Ink Normal | `#252A2D` | Card surface (dark) |
| Ink Normal Light | `#2E3437` | Elevated dark surface |
| Ink Light | `#3D4549` | Border (dark) |
| Cloud Dark | `#BAC7D5` | Primary text (on dark) |
| Cloud Normal | `#E8EDF1` | Secondary surface (light) |
| Cloud Light | `#F5F7F9` | Light background |
| White | `#FFFFFF` | Light-mode surface |
| Red Normal | `#D21C1C` | Error |
| Green Normal | `#2DB785` | Success |

---

## 3. Typography Rules

| Role | Face | Size | Weight |
|---|---|---|---|
| H1 | Circular (or Helvetica Neue) | 2.5rem | 700 |
| H2 | Circular | 1.875rem | 700 |
| H3 | Circular | 1.375rem | 600 |
| H4 | Circular | 1.125rem | 600 |
| Body | System sans | 1rem / 1.5 | 400 |
| Small | System sans | 0.875rem | 400 |
| Caption | System sans | 0.75rem | 400 |

Circular for display headings; system sans for body/UI. Fallback: `'Helvetica Neue', Helvetica, Arial, sans-serif`. All flight times and prices use a monospace-adjacent numeric rendering.

---

## 4. Component Styling

**Buttons**
- Primary: `#00A991` teal fill, white text, 6px radius
- Secondary: transparent, `#00A991` border
- Critical: `#D21C1C` fill
- Sizes: Small (28px) / Normal (44px) / Large (52px)

**Flight Card**
- Dark surface `#252A2D`, 8px radius
- Airline logo + route arc illustration + departure/arrival times
- Price prominent (right), white bold
- Duration + layover badge center
- "Book" CTA in teal

**Itinerary Segment**
- Airport codes in large mono-adjacent display
- Flight path arc with dotted line
- Layover pill badge center (orange if <2hr)

**Badge / Status**
- Price-drop: Orange `#F9971E`
- Cheapest: Teal `#00A991`
- Limited: Red `#D21C1C`

---

## 5. Layout Principles
- **Grid**: Flexible; max 1280px; 16–24px gutter
- **Spacing**: 4px base; 4/8/12/16/20/24/32/48px
- **Dark mode default**: Dark mode is the design-reference mode
- **Flight results**: Single column on mobile, condensed card layout
- **Filter sidebar**: Inline / bottom sheet on mobile; sidebar on desktop

---

## 6. Depth & Elevation

| Level | Shadow (dark) | Usage |
|---|---|---|
| 0 | none | Base dark canvas |
| 1 | `0 1px 4px rgba(0,0,0,0.2)` | Cards |
| 2 | `0 4px 16px rgba(0,0,0,0.3)` | Popovers |
| 3 | `0 8px 24px rgba(0,0,0,0.4)` | Modals |

In dark mode, elevation is achieved primarily by lightening surface values (`#252A2D` → `#2E3437` → `#3D4549`).

---

## 7. Do's and Don'ts

**Do**
- Default to dark mode — it is the primary design context
- Use teal `#00A991` for all primary green-path actions
- Use orange `#F9971E` for urgency and energy (deals, limited-time)
- Present flight cards with large airport code display and price hierarchy
- Animate price-drop or deal badges subtly

**Don't**
- Use light mode as default (dark-first brand)
- Remove airport code display from flight segments
- Use red for deals/urgency (red = error only)
- Apply flat white surfaces for the dark-mode experience
- Use sans-serif for airport codes — they deserve extra weight/clarity

---

## 8. Responsive Behavior

| Breakpoint | Layout |
|---|---|
| < 576px | Single column; full-width flight cards; bottom-sheet filters |
| 576–992px | Two-column; compact flight cards |
| ≥ 992px | Left filter sidebar + flight results grid; max 1280px |

- Date picker: Full-screen overlay on mobile
- Flight card: Compressed height on mobile, full detail on desktop
- Booking funnel: Single-column wizard on all sizes

---

## 9. Agent Prompt Guide

**When generating Orbit / Kiwi.com-style UI:**
> Apply Kiwi.com's dark-travel aesthetic. Dark base `#171B1E`, card surfaces `#252A2D`. Brand teal `#00A991` for all primary actions. Orange `#F9971E` for urgency/deals. Circular (or Helvetica Neue) for headings, system sans for body. 6px radius. Flight cards: airline logo + airport codes large + price right + teal CTA. Layover pill: orange if short. 4px spacing base. Dark mode elevation via surface lightening. Filter sidebar or bottom sheet.

**Avoid**: Light-mode-first design, red for urgency, missing airport code hierarchy, non-dark base surfaces.
