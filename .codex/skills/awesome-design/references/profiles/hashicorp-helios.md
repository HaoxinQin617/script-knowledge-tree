# HashiCorp Helios Design System

**URL**: https://helios.hashicorp.design
**Archetype**: developer-minimal (infrastructure SaaS)
**Stack**: Ember.js, React; design tokens via Style Dictionary

---

## 1. Visual Theme & Atmosphere
Helios is HashiCorp's design system — powering Terraform, Vault, Consul, Nomad, and HCP (HashiCorp Cloud Platform). The visual atmosphere is technical, calm, and trustworthy — infrastructure tools demand precision without anxiety. The dark navy-and-teal palette suggests depth and structural confidence. Helios balances developer ergonomics (dense information, code blocks) with modern SaaS accessibility. The brand feels like well-engineered infrastructure: reliable, not flashy.

---

## 2. Color Palette & Roles

| Token | Hex | Role |
|---|---|---|
| Foreground Strong | `#1A212E` | Primary text (near-black) |
| Foreground Primary | `#2A2F3A` | Default headings |
| Foreground Muted | `#656A76` | Secondary text |
| Foreground Disabled | `#9EA3AD` | Disabled state |
| Surface Primary | `#FFFFFF` | Card, modal surface |
| Surface Secondary | `#F4F5F8` | Background gray |
| Surface Tertiary | `#E8EAED` | Divider, border bg |
| Border Strong | `#C7CBD5` | Default border |
| Border Faint | `#E8EAED` | Subtle separator |
| HCP Teal | `#14B6D0` | HCP brand (SaaS) |
| Primary (interactive) | `#1563FF` | Buttons, links, focus |
| Primary Hover | `#0B44C1` | Primary hover |
| Success | `#058556` | Success states |
| Warning | `#C26C16` | Warning |
| Critical | `#C8162C` | Error/critical |
| Info | `#1563FF` | Info alerts |

Each HashiCorp product also has its own accent: Terraform Purple `#7B42BB`, Vault Navy `#FFCF25`, Consul Pink `#F24C53`.

---

## 3. Typography Rules

| Role | Face | Size | Weight |
|---|---|---|---|
| Display | Gilroy (proprietary) | 2.5rem | 700 |
| H1 | Gilroy | 2rem | 700 |
| H2 | Gilroy | 1.5rem | 600 |
| H3 | System sans | 1.125rem | 600 |
| Body M | System sans | 1rem / 1.5 | 400 |
| Body S | System sans | 0.875rem | 400 |
| Code | JetBrains Mono | 0.875rem | 400 |
| Badge / Label | System sans | 0.75rem | 500 |

Gilroy used for marketing/display; system sans (`'Inter'` preferred, then system stack) for all UI text. JetBrains Mono for code, terminal output, resource names, configuration snippets.

---

## 4. Component Styling

**Buttons**
- Primary: `#1563FF` fill, white text, 5px radius
- Secondary: white fill, `#C7CBD5` border, foreground text
- Critical: `#C8162C` fill for destructive actions
- Sizes: Small (28px) / Medium (36px) / Large (44px)
- Icon buttons: square aspect, same radius

**Badge**
- Semantic badges: success / warning / critical / info / neutral
- Used for resource status: Running, Stopped, Degraded, Locked
- Filled or outlined variant; 4px radius

**Code Block**
- Dark background `#1A212E`, monospace code
- Language label top-right; copy button top-right
- Syntax highlighting with neutral-blue color scheme

**Table**
- Full-width; sortable headers; optional row selection
- Status column aligned with Badge component
- Left-aligned text; right-aligned numeric values

---

## 5. Layout Principles
- **Grid**: Flexible container system; no rigid column count
- **Spacing**: 4px base; 4/8/12/16/20/24/32/48px scale
- **App shell**: Left sidebar (product nav, 240px) + main content
- **Content max-width**: 1200px; sidebar + content fluid
- **Command palette**: `Cmd+K` pattern for navigation

---

## 6. Depth & Elevation

| Level | Shadow | Usage |
|---|---|---|
| 0 | none | Inline elements |
| Low | `0 1px 2px rgba(26,33,46,0.06)` | Cards |
| Mid | `0 4px 16px rgba(26,33,46,0.1)` | Dropdowns, popovers |
| High | `0 8px 32px rgba(26,33,46,0.14)` | Modals |

---

## 7. Do's and Don'ts

**Do**
- Show infrastructure resource status via Badge components
- Use JetBrains Mono for all configuration, CLI, code
- Use product-specific accent alongside Helios base (Terraform = Purple, Vault = Yellow, etc.)
- Use the command palette pattern for navigation-heavy tools
- Provide clear import/apply steps in workflow UI

**Don't**
- Use teal `#14B6D0` for standard UI interactions (HCP brand only)
- Create custom status indicators outside Badge semantics
- Apply marketing display type (Gilroy) in product UI panels
- Use warm color accents — the palette is intentionally cool/neutral

---

## 8. Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| < 768px | Sidebar collapses; hamburger nav overlay |
| 768–1024px | Compact sidebar (icons only) |
| ≥ 1024px | Full sidebar + main content |

Infrastructure tools are desktop-primary. Mobile is supported but not the primary surface.

---

## 9. Agent Prompt Guide

**When generating HashiCorp Helios-style UI:**
> Apply HashiCorp's infrastructure SaaS aesthetic. White cards, `#F4F5F8` page background. Primary blue `#1563FF` for interactive. Near-black `#1A212E` heading text. System sans (Inter preferred) 1rem body; JetBrains Mono for code/config. 5px radius. Dark code blocks with copy button. Status badges: success/warning/critical/info. Left sidebar 240px navigation. Clean shadow scale (low/mid/high). Add product accent if Terraform (purple `#7B42BB`) / Vault (yellow) / Consul (pink).

**Avoid**: Teal for standard interactions, warm tones, marketing display type in panel UI, custom status colors.
