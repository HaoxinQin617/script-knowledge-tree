# Alaska Auro Design System

**URL**: https://auro.alaskaair.com/
**Archetype**: premium-editorial / travel
**Stack**: Web Components + design tokens

---

## 1. Visual Theme & Atmosphere
Auro is Alaska Airlines' design system, built for booking, trip management, and loyalty workflows. The style blends trustworthy airline utility with warm hospitality. Orion Blue anchors brand trust, while clean layouts and large touch targets support high-stakes travel tasks such as booking and check-in.

---

## 2. Color Palette & Roles

| Token | Hex | Role |
|---|---|---|
| Orion Blue | `#0074C8` | Primary brand, CTAs |
| Blue Dark | `#005B9A` | Hover/active |
| Blue Light | `#E6F2FB` | Selected/info tint |
| Evergreen | `#00856A` | Success, loyalty accents |
| Sunset Orange | `#F5A623` | Warning/travel alerts |
| Error Red | `#D93025` | Errors/disruptions |
| Ink | `#1F2937` | Primary text |
| Slate | `#4B5563` | Secondary text |
| Border | `#D1D5DB` | Inputs/dividers |
| Surface | `#FFFFFF` | Cards/forms |
| Background | `#F8FAFC` | App background |

---

## 3. Typography Rules

| Role | Face | Size | Weight |
|---|---|---|---|
| H1 | Circular | 2.25rem | 700 |
| H2 | Circular | 1.75rem | 700 |
| H3 | Circular | 1.25rem | 600 |
| H4 | Circular | 1rem | 600 |
| Body | Circular | 1rem | 400 |
| Compact Body | Circular | 0.875rem | 400 |
| Small | Circular | 0.75rem | 400 |
| Label | Circular | 0.8125rem | 500 |

---

## 4. Component Styling

**Flight Card**
- Route, departure/arrival times, fare class, baggage rules
- Price prominence and CTA for selection

**Booking Stepper**
- Flights -> Seats -> Extras -> Passenger -> Payment
- Progress state clearly visible and recoverable

**Trip Timeline**
- Check-in milestones and gate updates
- Disruption states with rebooking CTA

**Loyalty Widget**
- Mileage balance and tier progress
- Emphasis on next milestone value

---

## 5. Layout Principles
- **Flow-first**: step-based booking journeys
- **Spacing**: 8px base scale, generous in mobile touch zones
- **Grid**: adaptive card layouts and comparison columns
- **Priority**: itinerary and price visibility near top
- **Patterns**: list-compare-select-confirm

---

## 6. Depth & Elevation

| Level | Value | Usage |
|---|---|---|
| Flat | Border-led surfaces | Forms/tables |
| Card | `0 2px 10px rgba(31,41,55,0.08)` | Flight cards |
| Popover | `0 4px 16px rgba(31,41,55,0.14)` | Fare details |
| Modal | `0 8px 24px rgba(31,41,55,0.2)` | Disruption dialogs |

---

## 7. Do's and Don'ts

**Do**
- Prioritize critical travel information (time, airport, status)
- Keep booking flow state explicit and reversible
- Use large touch targets for mobile and in-transit usage
- Surface disruption help actions immediately

**Don't**
- Hide fees/constraints behind deep interactions
- Use ambiguous status labels for delays/cancellations
- Overload booking cards with secondary marketing content

---

## 8. Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| < 768px | Single-column flow, sticky next-action bar |
| 768–1024px | Two-column compare and detail layouts |
| ≥ 1024px | Full booking workspace with side summaries |

---

## 9. Agent Prompt Guide

**When generating Auro-style UI:**
> Airline booking UX with trustworthy clarity. Orion Blue `#0074C8` for primary actions, generous touch targets, and explicit step-based progress through booking/check-in flows. Prioritize itinerary, fare, and disruption actions with minimal friction.

**Avoid**: hidden fare details, ambiguous disruption messaging, cluttered booking cards.
