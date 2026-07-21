# Okta Odyssey

**URL**: https://odyssey.okta.design/
**Archetype**: enterprise-data / identity-security
**Stack**: React; token-driven component library

---

## 1. Visual Theme & Atmosphere
Okta Odyssey is designed for identity and access management workflows where trust, precision, and security signaling are critical. The visual language is clean and enterprise-grade, with strong blue anchors and high information density in admin consoles. The tone is reliable and technical, supporting authentication, policy, and user lifecycle operations.

---

## 2. Color Palette & Roles

| Token | Hex | Role |
|---|---|---|
| Okta Blue | `#00297A` | Brand primary, major CTAs |
| Blue 600 | `#0054D1` | Interactive links/actions |
| Blue 500 | `#1A73E8` | Secondary action |
| Blue Light | `#E8F0FE` | Selected/info backgrounds |
| Success Green | `#0F9D58` | Success states |
| Warning Orange | `#F29900` | Warning |
| Error Red | `#D93025` | Errors/destructive |
| Purple | `#6A5ACD` | Identity feature accent |
| Ink | `#202124` | Primary text |
| Slate | `#5F6368` | Secondary text |
| Muted | `#9AA0A6` | Disabled/placeholder |
| Border | `#DADCE0` | Inputs/separators |
| Surface | `#FFFFFF` | Cards/sheets |
| Background | `#F8F9FA` | App background |

---

## 3. Typography Rules

| Role | Face | Size | Weight |
|---|---|---|---|
| H1 | Aeonik | 2rem | 700 |
| H2 | Aeonik | 1.5rem | 700 |
| H3 | Aeonik | 1.25rem | 600 |
| H4 | Aeonik | 1rem | 600 |
| Body | Aeonik | 0.875rem | 400 |
| Body (lg) | Aeonik | 1rem | 400 |
| Small | Aeonik | 0.75rem | 400 |
| Label | Aeonik | 0.8125rem | 500 |
| Code | ui-monospace | 0.8125rem | 400 |

---

## 4. Component Styling

**Auth Flow Cards**
- Compact cards with clear step sequencing
- Security state indicators (MFA enabled, policy status)
- Inline help links for setup guidance

**Policy Table**
- Dense rows with condition summary and priority
- Toggle status controls with explicit labels
- Row expansion for advanced rule details

**User Profile Panel**
- Identity data grouped by category
- Risk/sign-in anomalies surfaced near top
- Action panel for lock, reset MFA, suspend

**Notification/Alert**
- Severity icon + heading + detail text
- Persistent alerts for risky security states

---

## 5. Layout Principles
- **Shell**: Left admin nav + top global search/header
- **Spacing**: 8px base with compact table spacing
- **Density**: medium-high for IAM workflows
- **Patterns**: list-detail and policy editor side panels
- **Max-width**: fluid for admin pages, constrained for auth setup forms

---

## 6. Depth & Elevation

| Level | Value | Usage |
|---|---|---|
| Flat | `1px solid #DADCE0` | Data surfaces |
| Card | `0 2px 8px rgba(32,33,36,0.08)` | Config panels |
| Popover | `0 4px 16px rgba(32,33,36,0.14)` | Menus/tooltips |
| Modal | `0 8px 24px rgba(32,33,36,0.2)` | Security dialogs |

---

## 7. Do's and Don'ts

**Do**
- Surface security-relevant state early and clearly
- Use explicit language for destructive actions (suspend, deactivate)
- Keep policy evaluation details transparent and inspectable
- Provide audit/log links from relevant entities
- Maintain strict contrast and hierarchy for trust

**Don't**
- Hide risk states behind secondary tabs
- Use ambiguous wording for identity actions
- Overuse decorative accents in security-critical screens
- Rely on color alone for status severity

---

## 8. Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| < 768px | Simplified auth workflows, collapsed nav |
| 768–1024px | Two-pane admin layout |
| ≥ 1024px | Full IAM dashboard and policy panels |

---

## 9. Agent Prompt Guide

**When generating Okta Odyssey-style UI:**
> Enterprise IAM/security interface. Okta Blue `#00297A` trust anchor, clean neutral surfaces, and dense but readable admin workflows. Aeonik typography with compact 0.875rem body. Emphasize policy tables, auth flow cards, and explicit risk/alert signals. Keep language precise and action semantics unambiguous.

**Avoid**: decorative styling in security contexts, hidden risk indicators, color-only status semantics.
