# Starbucks Creative Expression (Siren Design System)

**URL**: https://creative.starbucks.com/ / https://www.starbucksdesign.com/
**Archetype**: premium-editorial / brand
**Stack**: React; Starbucks-internal Siren Design System

---

## 1. Visual Theme & Atmosphere
Starbucks Creative Expression is the design language of one of the world's most recognised coffee brands. It centres on the tension between artisan warmth and modern aspirational design: rich greens, cream backgrounds, and the Siren logo as a cultural icon. Typography combines Lander Grande (custom serif) with SoDo Sans (custom sans) for an editorial voice that feels curated and local. UI should feel like a quality coffee experience materialized: warm, inviting, and slightly indulgent.

---

## 2. Color Palette & Roles

| Token | Hex | Role |
|---|---|---|
| Starbucks Green | `#00704A` | Brand primary, CTAs |
| House Green | `#1E3932` | Dark sections, footer, headers |
| Accent Green | `#D4E9E2` | Light tint surfaces |
| Light Green | `#CBA258` | Gold/reward accents |
| Reward Gold | `#CBA258` | My Starbucks Rewards, stars |
| Warm Black | `#212121` | Primary text |
| Warm Gray | `#544F4B` | Secondary text |
| Mist | `#D4CEC8` | Borders, dividers |
| Cream | `#F9F1E7` | Warm page background |
| White | `#FFFFFF` | Clean surface |
| Pink | `#F3C9D6` | Seasonal/promotional |
| Coral | `#F78D57` | Seasonal/promotional |
| Sky Blue | `#B3D6E7` | Cold drink seasonal |
| Chestnut | `#5B3D2E` | Autumn seasonal |

---

## 3. Typography Rules

| Role | Face | Size | Weight |
|---|---|---|---|
| Display | Lander Grande | 4rem | 700 |
| H1 | Lander Grande | 2.75rem | 700 |
| H2 | Lander Grande | 2.25rem | 400 |
| H3 | Lander Grande | 1.75rem | 400 |
| H4 | SoDo Sans | 1.25rem | 700 |
| Body (lg) | SoDo Sans | 1.25rem | 400 |
| Body | SoDo Sans | 1rem | 400 |
| Small | SoDo Sans | 0.875rem | 400 |
| Price | SoDo Sans | 1.125rem | 700 |
| Calligraphy | Lander Grande | 1.5+ rem | 400 |

**Lander Grande**: Custom scripty geometric serif, headings and display. **SoDo Sans**: Named after SoDo (South of Downtown Seattle), custom humanist sans for body. Line-height 1.6 for body.

---

## 4. Component Styling

**Product Cards (Drink Cards)**
- Cream `#F9F1E7` background, or photography
- Top: beverage photo (hero shot from above)
- Item name: Lander Grande, 1.25rem
- Size + customisation info in SoDo Sans
- Price: bold SoDo Sans
- "Add to Order" CTA: Green `#00704A`, white label, 24px radius

**Loyalty / Rewards**
- Gold stars: `#CBA258`, star icons
- Progress bar: teal-to-gold gradient indicating next reward tier
- Reward badge: circular, dark green, gold star centre

**Navigation**
- Fixed top bar: House Green `#1E3932` background
- Siren logo centre, nav items white
- Mobile: hamburger, full-screen drawer with cream overlay

**Seasonal Campaign Banners**
- Full-width, photography + seasonal palette (rotates quarterly)
- Lander Grande overlay text, large and centered

---

## 5. Layout Principles
- **Grid**: 12 columns, 1280px max-width, 24–32px gutters
- **Product grid**: 3–4 column on desktop, 1–2 on mobile
- **Imagery**: Full-bleed top-of-section coffee photography
- **Spacing**: 8px base (8, 16, 24, 32, 48, 64, 80)
- **Section alternation**: Cream → House Green → White → Cream

---

## 6. Depth & Elevation

| Level | Value | Usage |
|---|---|---|
| Flat | None | Editorial sections |
| Card | `0 4px 12px rgba(33,33,33,0.1)` | Drink cards, promo tiles |
| Sticky nav | `0 2px 8px rgba(33,33,33,0.2)` | Header on scroll |
| Drawer/Modal | `0 8px 32px rgba(33,33,33,0.3)` | Mobile nav drawer, dialogs |

---

## 7. Do's and Don'ts

**Do**
- Use cream `#F9F1E7` as the default warm page background
- Lead sections with aspirational coffee photography
- Use Lander Grande for emotional/headline copy
- Reserve House Green `#1E3932` for important dark sections (header, footer)
- Animate seasonal palette changes — Starbucks quarterly campaigns drive the visual system

**Don't**
- Use white-only backgrounds (loses warmth)
- Use SoDo Sans for display headings — that's Lander Grande's role
- Make the Siren logo smaller than standardised minimum size
- Use generic stock coffee photography — Starbucks imagery is carefully art-directed

---

## 8. Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| < 640px | 1-column product grid, hamburger, large touch targets |
| 640–1024px | 2-column grid, condensed nav |
| ≥ 1024px | 3–4 column grid, full horizontal nav |
| ≥ 1280px | Max-width container, wide hero banners |

---

## 9. Agent Prompt Guide

**When generating Starbucks-style UI:**
> Artisan premium coffee brand. Starbucks Green `#00704A` CTAs (pill, 24px radius). Cream `#F9F1E7` page bg. House Green `#1E3932` header/footer. Lander Grande serif for headlines/display. SoDo Sans for body/UI. Reward gold `#CBA258` for loyalty. Aspirational beverage photography leading each section. Alternating cream/dark-green/white sections. 8px spacing base. Warm shadows.

**Avoid**: White-only backgrounds, rectangular buttons, generic fonts, corporate tone.
