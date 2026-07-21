# Gympass Yoga Design System

**URL**: https://yoga.gympass.com/
**Archetype**: wellness-saas / energetic
**Stack**: React component library

---

## 1. Visual Theme & Atmosphere
Yoga is Gympass/Wellhub's design system for wellness and corporate fitness products. It combines energetic accent colors with clean SaaS structure, balancing motivational consumer touchpoints and enterprise admin flows. The visual tone is vibrant, optimistic, and health-forward without sacrificing operational clarity.

---

## 2. Color Palette & Roles

| Token | Hex | Role |
|---|---|---|
| Grape | `#6600CC` | Primary brand, CTAs |
| Grape Dark | `#4F00A3` | Hover/active |
| Grape Light | `#EFE5FF` | Selected/info tint |
| Lime | `#C0E400` | Secondary accent, highlights |
| Mint | `#00C49A` | Success/positive |
| Coral | `#FF6B6B` | Alerts/attention |
| Sky | `#3BA0FF` | Info/link accent |
| Ink | `#1F2937` | Primary text |
| Slate | `#4B5563` | Secondary text |
| Muted | `#9CA3AF` | Disabled/placeholder |
| Border | `#D1D5DB` | Inputs/dividers |
| Surface | `#FFFFFF` | Cards/sheets |
| Background | `#F7FAFC` | App background |

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

**Class Card**
- Trainer, duration, intensity, location/online mode
- Action: Book class / Join session
- Color accents by category (Yoga, HIIT, Meditation)

**Wellness Dashboard Widgets**
- Activity streaks, attendance, wellness goals
- Progress bars and achievement chips

**Search + Filter Bar**
- Filters by time, location, category, intensity
- Chip-based filter selections

**Enterprise Admin Modules**
- Employee engagement metrics and benefit usage
- Clean table and chart modules for HR admins

---

## 5. Layout Principles
- **Dual-mode UX**: consumer discovery + enterprise reporting
- **Spacing**: 8px base scale
- **Cards-first layout**: modular content blocks
- **Flow**: discover -> book -> attend -> track progress
- **Data**: compact dashboards for corporate admins

---

## 6. Depth & Elevation

| Level | Value | Usage |
|---|---|---|
| Flat | Border-led surfaces | Forms/tables |
| Card | `0 2px 10px rgba(31,41,55,0.08)` | Class cards/widgets |
| Popover | `0 4px 16px rgba(31,41,55,0.14)` | Filter menus |
| Modal | `0 8px 24px rgba(31,41,55,0.2)` | Booking dialogs |

---

## 7. Do's and Don'ts

**Do**
- Keep wellness actions motivating and easy to complete
- Use bright accents sparingly on neutral foundations
- Preserve clear hierarchy between consumer and admin tasks
- Surface progress and streak metrics clearly

**Don't**
- Overwhelm users with too many simultaneous accent colors
- Hide booking constraints or class capacity details
- Use enterprise-heavy jargon in consumer-facing flows
- Sacrifice readability for visual energy

---

## 8. Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| < 768px | Single-column class feed and sticky booking actions |
| 768–1024px | Two-column class/dashboard modules |
| ≥ 1024px | Full discovery + management layouts |

---

## 9. Agent Prompt Guide

**When generating Gympass Yoga-style UI:**
> Wellness-product interface with energetic but controlled accents. Grape `#6600CC` as primary, Lime `#C0E400` as highlight, and clean neutral surfaces. Card-first layouts for class discovery and progress tracking. Keep booking flows simple, motivational, and clear.

**Avoid**: visual clutter from too many accent colors, hidden booking constraints, enterprise jargon in consumer UI.
