# Cedar — REI Design System

**URL**: https://rei.github.io/rei-cedar-docs/
**Archetype**: premium-editorial (outdoor retail)
**Stack**: Vue 2/3 (primary), React partial; Cedar CSS tokens

---

## 1. Visual Theme & Atmosphere
Cedar is REI's design system — built for the outdoor recreation co-op brand that exists at the intersection of adventure, nature, and community. The visual atmosphere is earthy, warm, and trustworthy — photography of the outdoors dominates; the UI steps back to let wilderness imagery do the emotional work. Typography is purposeful and confident; spacing is generous and unhurried. The experience should feel like a well-made piece of outdoor gear: functional, durable, and thoughtfully made.

---

## 2. Color Palette & Roles

| Token | Hex | Role |
|---|---|---|
| REI Green | `#3F7F00` | Primary brand, CTAs |
| REI Green Dark | `#2F5F00` | Hover state |
| REI Green Light | `#EAF2DC` | Success bg, light fill |
| REI Cream | `#F9F4EF` | Warm page background |
| Stone | `#D0C9C3` | Borders, dividers |
| Warm Gray | `#796E65` | Secondary text |
| White | `#FFFFFF` | Card surface |
| Black | `#1B120D` | Primary text |
| Error Red | `#CC2222` | Error states |
| Caution | `#F0A500` | Warnings |
| Info | `#0073C6` | Informational |

REI's warmth comes from the cream background (`#F9F4EF`) — avoid pure white for page backgrounds. The earthy tone anchors all photographic content.

---

## 3. Typography Rules

| Role | Face | Size | Weight |
|---|---|---|---|
| Display | Stuart (REI proprietary) | 3rem+ | 700 |
| H1 | Stuart | 2.25rem | 700 |
| H2 | Stuart | 1.75rem | 600 |
| H3 | Graphik | 1.25rem | 600 |
| Body | Graphik | 1rem / 1.5 | 400 |
| Small | Graphik | 0.875rem | 400 |
| Caption | Graphik | 0.75rem | 400 |

Stuart is REI's proprietary serif/display typeface — condensed, authoritative, trail sign-inspired. Graphik (Comercial Type) handles body and UI text. Web fallback for Stuart: `'Georgia', serif`; for Graphik: `'Helvetica Neue', Arial, sans-serif`.

---

## 4. Component Styling

**Buttons**
- Primary: `#3F7F00` fill, white text, 4px radius
- Secondary: white fill, `#3F7F00` 2px border, `#3F7F00` text
- Sale: dark red fill for sale/deal emphasis
- Sizes: sm / md / lg
- Loading state: spinner replaces text, maintains dimensions

**Rating Component**
- Star ratings with REI green filled stars
- Includes review count linked to reviews section
- Signature product pattern

**Product Card**
- Image (3:4 product or 3:2 lifestyle), brand tag, product title, price, rating
- Sale badge: red corner overlay
- Wishlist icon: heart, top-right
- `0px` radius (square frames — outdoor gear aesthetic)

**Breadcrumb**
- Always shown on product/category pages
- Separator: `›`; current page not linked

---

## 5. Layout Principles
- **Grid**: 12-column, max 1280px, 16/24/32px gutters by screen size
- **Spacing**: 8px base; Cedar spacing tokens: 4/8/12/16/20/24/32/40/48/64px
- **Photography-first**: Product and lifestyle images are primary content
- **Sidebar**: Category filtering sidebar on search/PLP pages
- **Content zone**: Single column for article/guide content (~700px max)

---

## 6. Depth & Elevation

| Level | Shadow | Usage |
|---|---|---|
| 0 | none | Flat surfaces |
| 1 | `0 1px 4px rgba(0,0,0,0.08)` | Cards, inputs |
| 2 | `0 4px 16px rgba(0,0,0,0.12)` | Dropdowns, sticky bars |
| 3 | `0 8px 32px rgba(0,0,0,0.15)` | Modals |

Warm-tinted shadows (slight sepia) reinforce the earthy brand feel vs pure grey shadows.

---

## 7. Do's and Don'ts

**Do**
- Use `#F9F4EF` cream as the page background — not white
- Use outdoor/adventure photography; always high-quality
- Use Stuart for display/heading; Graphik for all body text
- Use green CTAs consistently — REI Green is primary
- Provide generous whitespace — the brand does not feel rushed

**Don't**
- Use cold blue tones as accents in standard product contexts
- Use rounded pill buttons — Cedar is square-cornered (4px max)
- Use stock-photo generic office imagery
- Mix the warm cream background with cold-gray UI elements
- Add decorative patterns or textures

---

## 8. Responsive Behavior

| Breakpoint | Layout |
|---|---|
| < 576px | Single column; full-width images; hamburger nav |
| 576–768px | 2-column product grid |
| 768–1024px | 3-column product grid; collapsed filter sidebar |
| ≥ 1024px | 4-column grid; filter sidebar visible |

- Filter sidebar becomes a bottom drawer on mobile
- Product images maintain 3:4 ratio at all breakpoints
- Navigation: multi-level horizontal on desktop → fullscreen overlay on mobile

---

## 9. Agent Prompt Guide

**When generating Cedar / REI-style UI:**
> Apply REI's outdoor-retail premium aesthetic. Cream background `#F9F4EF`, white cards, REI Green `#3F7F00` CTAs. Stuart display font + Graphik body. 4px border radius. Product cards: square frames, 3:4 product image, bold product title, green CTA. Large adventure photography in hero areas. 8px spacing grid. Generous whitespace. Warm shadow tones. Error red `#CC2222`, caution amber `#F0A500`. Breadcrumbs on all product pages.

**Avoid**: Cold blue accents, pill buttons, pure-white page backgrounds, stock office imagery, rounded product card corners.
