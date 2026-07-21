# Yelp Design Language

**URL**: https://www.yelp.com/styleguide (public brand refs vary)
**Archetype**: marketplace / local-discovery
**Stack**: Web and mobile marketplace interfaces

---

## 1. Visual Theme & Atmosphere
Yelp's design language is built for local business discovery and decision confidence. It combines strong red branding with high-information listings (ratings, reviews, attributes, photos). The tone is energetic and urban, but practical: users need to compare options quickly and trust review quality.

---

## 2. Color Palette & Roles

| Token | Hex | Role |
|---|---|---|
| Yelp Red | `#D32323` | Brand primary, key CTAs |
| Red Dark | `#B71C1C` | Hover/active |
| Red Light | `#FDECEC` | Selection/error tint |
| Link Blue | `#0073BB` | Links, secondary actions |
| Success Green | `#41A700` | Positive confirmation |
| Warning Amber | `#D98A00` | Warning |
| Error Red | `#D32323` | Error/destructive |
| Ink | `#2D2D2D` | Primary text |
| Slate | `#6E6E6E` | Secondary text |
| Muted | `#A0A0A0` | Metadata/disabled |
| Border | `#E6E6E6` | Dividers/cards |
| Surface | `#FFFFFF` | Cards/forms |
| Background | `#F5F5F5` | Page background |
| Star Yellow | `#FEC601` | Rating stars |

---

## 3. Typography Rules

| Role | Face | Size | Weight |
|---|---|---|---|
| H1 | system sans | 2rem | 700 |
| H2 | system sans | 1.5rem | 700 |
| H3 | system sans | 1.25rem | 600 |
| H4 | system sans | 1rem | 600 |
| Body | system sans | 0.9375rem | 400 |
| Compact Body | system sans | 0.875rem | 400 |
| Small | system sans | 0.75rem | 400 |
| Label | system sans | 0.8125rem | 500 |
| Numeric | system sans | 0.875rem | 600 |

---

## 4. Component Styling

**Business Listing Card**
- Name, rating stars, review count, category, price tier
- Location and open/closed status
- Thumbnail photo and quick actions

**Review Module**
- Reviewer avatar, stars, date, text excerpt
- Useful/Funny/Cool vote actions
- Sort and filter by recency/relevance

**Map + List Layout**
- Split view for geospatial browsing
- Hover sync between map pins and list items

**Trust Signals**
- Verified info, attributes, response times
- Prominent rating and review volume context

---

## 5. Layout Principles
- **Pattern**: search -> compare -> inspect reviews -> decide
- **Spacing**: 8px base scale
- **Density**: moderate-high for decision speed
- **Layout**: list and map dual-view for local discovery
- **Content**: review snippets and business metadata prioritized

---

## 6. Depth & Elevation

| Level | Value | Usage |
|---|---|---|
| Flat | Border-led card/list separation | Listings/reviews |
| Card | `0 2px 8px rgba(45,45,45,0.08)` | Business cards |
| Popover | `0 4px 16px rgba(45,45,45,0.14)` | Filters/tooltips |
| Modal | `0 8px 24px rgba(45,45,45,0.2)` | Photo/review dialogs |

---

## 7. Do's and Don'ts

**Do**
- Keep rating and review volume highly visible
- Provide clear map/list synchronization for location browsing
- Surface trust and recency context in review displays
- Keep CTA hierarchy clear for contact/order/book actions

**Don't**
- Hide essential business metadata behind expandable panels
- Overweight brand red across entire surfaces
- Use ambiguous rating visuals without numeric context
- Overload listing cards with secondary features

---

## 8. Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| < 768px | Single-column feed with optional map overlay |
| 768–1024px | Hybrid map/list layouts |
| ≥ 1024px | Full split view and rich filter controls |

---

## 9. Agent Prompt Guide

**When generating Yelp-style UI:**
> Local discovery marketplace interface. Yelp Red `#D32323` for key actions, strong star-rating and review-count visibility, and map/list dual browsing. Keep listing cards compact but informative, with trust signals and clear compare/decision pathways.

**Avoid**: hiding core business info, overusing red across entire surfaces, vague rating presentation.
