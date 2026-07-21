# Braid Design System

**URL**: https://seek-oss.github.io/braid-design-system/
**Archetype**: multi-brand / enterprise-platform
**Stack**: React + TypeScript + CSS-in-TS tokens

---

## 1. Visual Theme & Atmosphere
Braid is SEEK's multi-brand design system used across employment marketplaces and adjacent products. Its defining characteristic is themeability: shared component logic with brand-specific tokens for products like SEEK and JORA. The aesthetic is pragmatic and modern, emphasizing consistent interaction patterns while allowing each brand visual expression.

---

## 2. Color Palette & Roles

Braid is token-first and brand-agnostic. Typical semantic roles:

| Token Role | Example Hex | Role |
|---|---|---|
| Primary | `#0A66C2` | Brand primary action |
| Secondary | `#6B7280` | Secondary controls |
| Positive | `#1F9D55` | Success states |
| Warning | `#D97706` | Warning states |
| Negative | `#DC2626` | Error/destructive |
| Neutral Text | `#1F2937` | Primary text |
| Border | `#D1D5DB` | Dividers/inputs |
| Surface | `#FFFFFF` | Cards/surfaces |
| Background | `#F9FAFB` | App background |

Each brand supplies concrete token values through Braid themes.

---

## 3. Typography Rules

Braid supports brand-specific typography via theme tokens.

| Role | Typical Size | Weight |
|---|---|---|
| H1 | 2rem | 700 |
| H2 | 1.5rem | 700 |
| H3 | 1.25rem | 600 |
| Body | 1rem | 400 |
| Compact Body | 0.875rem | 400 |
| Small | 0.75rem | 400 |
| Label | 0.8125rem | 500 |

Font family is configured per brand theme.

---

## 4. Component Styling

**Cross-Brand Components**
- Buttons, form controls, layouts, and typographic primitives
- Brand-specific look from tokenized theming only

**Form Patterns**
- Accessible labels, hints, and validation messages
- Consistent field spacing and error hierarchy

**Layout Primitives**
- Stack, Inline, Columns patterns for compositional consistency
- Responsive behavior encoded in layout props

**Navigation/Content**
- Shared interaction contracts, brand-specific skinning

---

## 5. Layout Principles
- **System composability**: primitives first, product-level compositions second
- **Spacing**: tokenized scale, usually 4px or 8px base equivalents
- **Responsiveness**: prop-driven breakpoints
- **Consistency**: behavior parity across brands is mandatory
- **Theming**: visual divergence only through approved token maps

---

## 6. Depth & Elevation

Depth is defined semantically in theme tokens:

| Level | Typical Usage |
|---|---|
| Surface | Base cards/inputs |
| Raised | Hoverable panels |
| Overlay | Menus/popovers |
| Modal | Dialogs |

Concrete shadow values vary by brand but must keep interaction semantics aligned.

---

## 7. Do's and Don'ts

**Do**
- Implement visual changes through tokens/themes, not component forks
- Maintain interaction consistency across brands
- Use layout primitives to enforce spacing and rhythm
- Keep accessibility behavior identical across branded outputs

**Don't**
- Hardcode brand values inside reusable components
- Diverge interaction behavior per brand for the same component
- Break token contracts with ad hoc styling overrides
- Duplicate components instead of leveraging theming

---

## 8. Responsive Behavior

Braid encourages responsive props and tokenized breakpoints:
- Mobile-first defaults
- Structured progression to tablet/desktop layouts
- Consistent content reflow rules across brands

---

## 9. Agent Prompt Guide

**When generating Braid-style UI:**
> Multi-brand token-first system architecture. Build with shared accessible components and layout primitives; apply brand identity through theme tokens only. Keep interaction behavior consistent across brands, with responsive prop-driven layouts and semantic design tokens for color/spacing/typography/elevation.

**Avoid**: hardcoded brand values in components, per-brand behavioral divergence, ad hoc style overrides.
