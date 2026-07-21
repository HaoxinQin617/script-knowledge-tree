# Twilio Paste

**URL**: https://paste.twilio.design/
**Archetype**: developer-minimal / API product
**Stack**: React; Emotion (CSS-in-JS); design tokens via Style Dictionary; Theme Builder

---

## 1. Visual Theme & Atmosphere
Twilio Paste is Twilio's open-source design system for building Twilio Console and partner products. It is designed for communications API products — dense status tables, live message logs, campaign monitors. The palette leads with Twilio Red as the unforgettable brand anchor, supporting a clean white/near-black foundation. The system is token-first: everything is a design token, and the Theme Builder lets operators white-label Paste for embedded products.

---

## 2. Color Palette & Roles

| Token | Hex | Role |
|---|---|---|
| Twilio Red | `#F22F46` | Brand primary, CTAs, destructive |
| Red Dark | `#C82234` | Button hover, active |
| Red Light | `#FDE8EB` | Error tint, destructive bg |
| Blue | `#0263E0` | Links, informational |
| Blue Light | `#E0EDFF` | Info tint |
| Green | `#14892B` | Delivered, success |
| Green Light | `#E4F1E7` | Success tint |
| Yellow | `#916808` | Warning text (on light bg) |
| Yellow Light | `#FEF3CE` | Warning tint |
| Gray 0 | `#F4F4F6` | Page background |
| Gray 10 | `#E8E8ED` | Border subtle |
| Gray 20 | `#CACAD6` | Border default |
| Gray 60 | `#606B85` | Secondary text |
| Gray 80 | `#2F3345` | Primary text |
| Gray 100 | `#121C2D` | Heading text |
| White | `#FFFFFF` | Surface, cards |

Message status colors: Delivered (green), Sent (blue), Failed (red), Undelivered (orange), Queued (gray).

---

## 3. Typography Rules

| Role | Face | Size | Weight |
|---|---|---|---|
| Display | Inter | 2rem | 700 |
| Heading 10 | Inter | 3rem | 700 |
| Heading 20 | Inter | 2.25rem | 700 |
| Heading 30 | Inter | 1.5rem | 700 |
| Heading 40 | Inter | 1.25rem | 600 |
| Heading 50 | Inter | 1rem | 600 |
| Body (100) | Inter | 1rem | 400 |
| Body (200) | Inter | 0.875rem | 400 |
| Body (300) | Inter | 0.75rem | 400 |
| Code | Fira Mono | 0.875rem | 400 |

Token names use Paste's `--color-background-*`, `--color-text-*` semantic naming. Font tokens: `$font-family-text`, `$font-family-code`.

---

## 4. Component Styling

**Data Grid**
- Status cell with badge (color + label)
- Row hover: `#F4F4F6` background
- Clickable rows open detail drawer
- Column sorting, filters toolbar

**Status Badge**
- Pill shape (99px radius), compact
- Colors: Delivered green / Sent blue / Failed red / Queued neutral
- Uppercase text, small caps 0.625rem

**Alert / Callout**
- 4 variants: info / success / warning / error
- Left icon + title + body + optional dismiss
- Full palette mapping with accessible text

**API Code / Snippet**
- Fira Mono, dark `#121C2D` bg or inline `#F4F4F6`
- Copy-to-clipboard integration
- Customer helper libraries: Node / Python / PHP / Ruby / Java / C# language tabs

---

## 5. Layout Principles
- **Sidebar**: 220px left nav (console product navigation)
- **Top bar**: 56px with current product name
- **Content**: 8px grid, max-content 960px for forms
- **Console pattern**: full-bleed data tables for message logs
- **Spacing tokens**: `$space-10` through `$space-200` (4px → 320px)

---

## 6. Depth & Elevation

| Level | Value | Usage |
|---|---|---|
| Flat | 1px `#E8E8ED` border | Cards, inputs |
| Dropdown | `0 4px 12px rgba(47,51,69,0.12)` | Menus, popovers |
| Modal | `0 8px 24px rgba(47,51,69,0.2)` | Dialogs |
| Toast | `0 4px 16px rgba(47,51,69,0.2)` | Notification toasts |

---

## 7. Do's and Don'ts

**Do**
- Use Paste design tokens exclusively — never hardcode colors or sizes
- Use the 4-variant Alert pattern (info/success/warning/error) consistently
- Use Status Badge for communication statuses; never use text-only
- Provide code examples in the help text for API product UIs
- Support the Theme Builder for white-label customisation

**Don't**
- Use Twilio Red for normal interactive elements — it reads as destructive
- Hardcode values that should be tokens
- Use red for "send" or positive actions — it conflicts with error semantics
- Use dense tables without row-level status colour coding

---

## 8. Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| < 768px | Sidebar hidden, hamburger nav drawer |
| 768–1024px | Collapsed icon sidebar |
| ≥ 1024px | Full sidebar with labels |
| ≥ 1440px | Wider content area for dashboard cards |

---

## 9. Agent Prompt Guide

**When generating Twilio Paste-style UI:**
> Communications API console aesthetic. Twilio Red `#F22F46` brand (destructive/brand only). Blue `#0263E0` links. Inter body (0.875rem for tables), Fira Mono for code. Gray `#F4F4F6` page bg. White cards with `#E8E8ED` borders. Status badges: Delivered green / Sent blue / Failed red. 220px left sidebar. Compact data tables with status colour coding. Token-first: use CSS custom properties mapped to semantic token names.

**Avoid**: Red for positive/send actions, hardcoded colours, missing status badges on message data.
