# Thumbprint (Thumbtack Design System)

**URL**: https://thumbprint.design/
**Archetype**: marketplace / service-booking
**Stack**: React component library

---

## 1. Visual Theme & Atmosphere
Thumbprint powers Thumbtack's marketplace where homeowners find local professionals. The design language is practical and trustworthy, with approachable blue accents and strong conversion-oriented UX for service discovery, booking, and messaging. The interface must bridge two audiences: consumers and service pros.

---

## 2. Color Palette & Roles

| Token | Hex | Role |
|---|---|---|
| Thumbtack Blue | `#009FD9` | Primary brand, links, CTAs |
| Blue Dark | `#007FB0` | Hover/active |
| Blue Light | `#E6F7FC` | Selected/info tint |
| Success Green | `#2E9B4D` | Confirmed/accepted |
| Warning Orange | `#F59E0B` | Pending/attention |
| Error Red | `#DC2626` | Error/destructive |
| Ink | `#1F2937` | Primary text |
| Slate | `#4B5563` | Secondary text |
| Muted | `#9CA3AF` | Disabled text |
| Border | `#D1D5DB` | Inputs/dividers |
| Surface | `#FFFFFF` | Cards/forms |
| Background | `#F8FAFC` | Page background |

---

## 3. Typography Rules

| Role | Face | Size | Weight |
|---|---|---|---|
| H1 | Mark Pro | 2rem | 700 |
| H2 | Mark Pro | 1.5rem | 700 |
| H3 | Mark Pro | 1.25rem | 600 |
| H4 | Mark Pro | 1rem | 600 |
| Body | Mark Pro | 0.9375rem | 400 |
| Compact Body | Mark Pro | 0.875rem | 400 |
| Small | Mark Pro | 0.75rem | 400 |
| Label | Mark Pro | 0.8125rem | 500 |
| Numeric | Mark Pro | 0.875rem | 600 |

Fallback: system sans where Mark Pro is unavailable.

---

## 4. Component Styling

**Service Card**
- Pro name, category, rating stars, review count
- Price estimate and response time
- CTA: "Contact" / "Request quote"

**Quote Flow Stepper**
- Multi-step form with clear progress indicator
- Question-by-question inputs for service details
- Inline validation and summary before submit

**Message Thread**
- Chat-style thread for homeowner and pro communication
- Quick action templates for common replies

**Trust Badges**
- Verified, Top Pro, Background Checked badges
- Icon + label for quick confidence cues

---

## 5. Layout Principles
- **Marketplace shell**: Search/filter left + result cards right
- **Spacing**: 8px base scale
- **Density**: moderate, optimized for browsing and decision-making
- **Patterns**: browse -> compare -> quote -> message -> book
- **Width**: adaptive grid for listings and card layouts

---

## 6. Depth & Elevation

| Level | Value | Usage |
|---|---|---|
| Flat | `1px solid #D1D5DB` | Cards/inputs |
| Card | `0 2px 8px rgba(31,41,55,0.08)` | Listing cards |
| Popover | `0 4px 16px rgba(31,41,55,0.14)` | Filters/menus |
| Modal | `0 8px 24px rgba(31,41,55,0.2)` | Booking dialogs |

---

## 7. Do's and Don'ts

**Do**
- Prioritize trust signals (ratings, verification, response time)
- Keep quote flow simple and progressive
- Surface price and availability context early
- Support clear two-sided communication states
- Use strong CTA hierarchy for booking conversion

**Don't**
- Hide key trust indicators below the fold
- Overcomplicate initial quote requests
- Use ambiguous status language in booking steps
- Overload result cards with excessive metadata

---

## 8. Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| < 768px | Single-column service cards, filter drawer |
| 768–1024px | Two-column listing grid |
| ≥ 1024px | Full search/filter + result layout |

---

## 9. Agent Prompt Guide

**When generating Thumbprint-style UI:**
> Service marketplace interface focused on trust and conversion. Thumbtack Blue `#009FD9` for primary actions, clear listing cards with ratings/reviews, and streamlined multi-step quote flows. Emphasize trust badges, response-time context, and simple message threads between users and pros.

**Avoid**: hidden trust signals, overly complex quote steps, overloaded listing cards.
