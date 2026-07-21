# eBay Skin Design System

**URL**: https://ebay.github.io/skin/
**Archetype**: enterprise-data (marketplace)
**Stack**: HTML/CSS (CSS only — framework-agnostic), SCSS

---

## 1. Visual Theme & Atmosphere
Skin is eBay's marketplace design language — practical, trust-building, and globally scalable. The visual atmosphere is clean and functional: optimised for conversion and discovery rather than editorial polish. eBay's four iconic brand colors each carry semantic meaning across buying and selling flows. The aesthetic prioritises usability and trust for a global diverse audience buying everything from rare collectibles to everyday goods.

---

## 2. Color Palette & Roles

| Token | Hex | Role |
|---|---|---|
| eBay Blue | `#3665F3` | Primary action, links, highlight |
| eBay Red | `#E53238` | Urgent deals, bids — "Buy It Now" energy |
| eBay Yellow | `#F5AF02` | My eBay, watchlist, seller highlights |
| eBay Green | `#86B817` | Positive status, sold, confirmed |
| Background | `#FFFFFF` | Page surface |
| Background Light | `#F7F7F7` | Secondary surface, sidebar |
| Text Primary | `#191919` | Heading and body text |
| Text Secondary | `#707070` | Metadata, captions |
| Text Disabled | `#B3B3B3` | Disabled state |
| Border | `#C7C7C7` | Default border |
| Focus | `#3665F3` | Focus ring color |
| Signal 1 | `#CC0000` | Critical errors |
| Signal 2 | `#E55600` | Important warnings |
| Signal 3 | `#5A973A` | Success messages |

---

## 3. Typography Rules

| Role | Face | Size | Weight |
|---|---|---|---|
| H1 | Market Sans → system | 1.75rem | 700 |
| H2 | Market Sans → system | 1.375rem | 700 |
| H3 | Market Sans → system | 1.125rem | 700 |
| Body | Market Sans → system | 1rem / 1.5 | 400 |
| Small | Market Sans → system | 0.875rem | 400 |
| Price (primary) | Market Sans → system | 1.25rem | 700 |
| Price (strike) | Market Sans → system | 1rem | 400 line-through |
| Caption | Market Sans → system | 0.75rem | 400 |

Market Sans is eBay's proprietary typeface. CSS-only system: web fallback `'Helvetica Neue', Helvetica, Arial, sans-serif`. Price formatting is a critical UI pattern: original price struck through, sale price in blue at 700 weight.

---

## 4. Component Styling

**Buttons**
- Primary: `#3665F3` fill, white text, 24px radius (pill-shaped on desktop)
- Secondary: white fill, `#3665F3` 1px border
- Tertiary: text-only, no border
- Destructive: `#E53238` fill
- Sizes: small (32px) / large (40px) / fluid (full width)

**Listing Card**
- Core eBay pattern: product image + title + price + bid/buy controls
- Image: square aspect, `border-radius: 0` (product photos don't have forced radius)
- "Buy It Now" badge: Blue `#3665F3`
- Auction timer: red countdown
- Watched: heart icon; yellow `#F5AF02` when active

**Search Results (SERP)**
- Gallery view (default): 3–4 column grid
- List view: full-width rows with image left, details right
- Filters: left sidebar with checkbox, range, category filters

**Feedback / Rating**
- Star ratings: yellow `#F5AF02` filled stars
- Positive/Negative/Neutral feedback pills

---

## 5. Layout Principles
- **Grid**: 16-column on desktop (legacy eBay); 4-column on product grids
- **Max width**: 1400px; content 1280px
- **Spacing**: 8px base; 8/16/24/32px standard steps
- **Product gallery**: 3-col tablet, 4-col desktop listing grid
- **Search layout**: Left filter sidebar (240px) + results grid

---

## 6. Depth & Elevation

| Level | Shadow | Usage |
|---|---|---|
| 0 | none | Flat inputs, standard surfaces |
| 1 | `0 1px 2px rgba(0,0,0,0.1)` | Card listing tiles |
| 2 | `0 2px 8px rgba(0,0,0,0.12)` | Hover state on cards |
| 3 | `0 8px 20px rgba(0,0,0,0.15)` | Menus, popovers |

---

## 7. Do's and Don'ts

**Do**
- Use Blue for primary CTA (`#3665F3`) — all buying actions
- Use the four eBay brand colors semantically — not decoratively
- Price prominent in product cards: discounted price left / original struck right
- Ensure category/filter sidebar is present on search/browse pages
- Use pill-shaped buttons for primary CTAs

**Don't**
- Use Red for CTAs (it belongs to urgent deals, not standard actions)
- Apply eBay Yellow as a brand accent without semantic context
- Remove seller feedback ratings from product listings
- Build custom listing cards — use the established card anatomy
- Use custom fonts in Skin (CSS-only library; font loaded separately)

---

## 8. Responsive Behavior

| Breakpoint | Layout |
|---|---|
| < 600px | Single column; compact filters as bottom sheet |
| 600–768px | 2-column listing grid |
| 768–1024px | 3-column listing grid; sidebar collapsed |
| ≥ 1024px | 4-column grid; left filter sidebar visible |

- Gallery view → list view: user toggle; defaults to gallery on desktop
- Auction timer: always visible; large on mobile
- Buy controls sticky at bottom on mobile (iOS pattern)

---

## 9. Agent Prompt Guide

**When generating eBay Skin-style UI:**
> Apply eBay's marketplace-commerce aesthetic. White surfaces, `#F7F7F7` secondary. Primary blue `#3665F3` for all purchase CTAs. Pill buttons (24px radius). Product grid: 3–4 columns, square image containers, price in 700 bold, original struck-through below. Yellow `#F5AF02` stars for ratings, heart icon for watchlist. Left filter sidebar on search pages. 8px spacing base. System-sans typography, 1rem body. Price hierarchy: sale price blue + large; original gray + struck.

**Avoid**: Red CTAs, yellow as brand accent, rounded product image containers, missing price hierarchy.
