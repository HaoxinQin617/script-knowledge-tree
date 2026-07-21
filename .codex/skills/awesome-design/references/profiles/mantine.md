# Mantine UI

**URL**: https://mantine.dev/
**Archetype**: developer-minimal
**Stack**: React; CSS Modules (no CSS-in-JS from v7+); PostCSS; Mantine hooks library

---

## 1. Visual Theme & Atmosphere
Mantine is a comprehensive open-source React component library that prioritizes developer experience, dark mode, and accessibility. The default aesthetic is clean, modern, and neutral — close to shadcn/ui in philosophy but a complete managed component library (not copy-paste). The atmosphere is productive and unobtrusive: developer tooling that doesn't get in the way. Dark mode is a first-class citizen from day one.

---

## 2. Color Palette & Roles

Mantine uses a 10-shade scale per color (0–9), with 0 lightest:

| Token | Light Hex | Dark Hex | Role |
|---|---|---|---|
| Blue.6 (default) | `#228BE6` | `#4DABF7` | Primary interactive |
| Gray.6 | `#868E96` | `#868E96` | Neutral text |
| Gray.0 | `#F8F9FA` | `#2E2E2E` | Background light/dark |
| Gray.2 | `#E9ECEF` | `#373737` | Surface secondary |
| Gray.9 | `#212529` | `#C1C2C5` | Text primary |
| Green.6 | `#40C057` | `#69DB7C` | Success |
| Orange.6 | `#FD7E14` | `#FFA94D` | Warning |
| Red.6 | `#FA5252` | `#FF6B6B` | Error |
| Yellow.6 | `#FAB005` | `#FFD43B` | Attention |
| Teal.6 | `#12B886` | `#38D9A9` | Alternative primary |
| Dark.9 | `#141517` | — | Darkest background |
| Dark.7 | `#1A1B1E` | — | Dark mode surface |
| Dark.6 | `#25262B` | — | Dark secondary surface |

`primaryColor` and `colorScheme` are set globally via `MantineProvider`.

---

## 3. Typography Rules

| Role | Face | Size | Weight |
|---|---|---|---|
| H1 | System sans | 2.125rem | 700 |
| H2 | System sans | 1.625rem | 700 |
| H3 | System sans | 1.375rem | 700 |
| H4 | System sans | 1.125rem | 700 |
| H5 | System sans | 1rem | 700 |
| H6 | System sans | 0.875rem | 700 |
| Body (md) | System sans | 0.875rem | 400 |
| Body (lg) | System sans | 1rem | 400 |
| Small | System sans | 0.75rem | 400 |
| Code | Courier New, monospace | 0.875rem | 400 |

Default font stack: `-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif`. Custom fonts via `MantineProvider fontFamily`.

---

## 4. Component Styling

**Buttons**
- `variant="filled"` (default): primary color fill, white text, 4px radius
- `variant="light"`: tint-10 fill, primary-text
- `variant="outline"`: transparent, primary border
- `variant="subtle"`: transparent, primary text, tint on hover
- `variant="default"`: white/dark-6 fill, gray border
- Sizes: xs / sm / md (default) / lg / xl
- `loading` prop: spinner replaces content, maintains dimensions

**DataTable** (via `mantine-datatable` ecosystem)
- Not built-in; commonly paired with `mantine-datatable` for complex grids

**Notifications**
- `@mantine/notifications` package — top-right toast stack
- Color-coded by status; auto-dismiss with progress bar

**Modals**
- `@mantine/modals` — context-based modal manager
- Multiple simultaneous modals support

**Dates**
- `@mantine/dates` — DatePicker, DateTimePicker, Calendar, DateRangePicker
- Popover-based; localization via dayjs

---

## 5. Layout Principles
- **Grid**: `SimpleGrid`, `Grid`, `Group`, `Stack`, `Flex` CSS-grid/flexbox wrappers
- **Spacing**: `xs=0.625rem, sm=0.75rem, md=1rem, lg=1.25rem, xl=2rem`
- **Container**: `size="xs/sm/md/lg/xl"` for content max-widths
- **AppShell**: Built-in `AppShell` with navbar + header + aside + main
- **Breakpoints**: xs(36em) / sm(48em) / md(62em) / lg(75em) / xl(88em) — em-based

---

## 6. Depth & Elevation

| Level | Shadow | Usage |
|---|---|---|
| `xs` | `0 1px 3px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.1)` | Cards |
| `sm` | `0 1px 3px rgba(0,0,0,0.05), 0 4px 6px rgba(0,0,0,0.08)` | Popovers |
| `md` | `0 5px 15px rgba(0,0,0,0.1)` | Modals |
| `lg` | `0 10px 30px rgba(0,0,0,0.1)` | Drawers |
| `xl` | `0 20px 60px rgba(0,0,0,0.15)` | Large overlays |

---

## 7. Do's and Don'ts

**Do**
- Configure `primaryColor` in `MantineProvider` to brand color
- Use `colorScheme` dark toggle — it is fully supported
- Use the `@mantine/hooks` library for common patterns (useClickOutside, useLocalStorage, etc.)
- Leverage `AppShell` for structured layouts — it handles responsive breakpoints
- Use em-based breakpoints (Mantine convention) not px

**Don't**
- Use Mantine without wrapping in `MantineProvider`
- Mix CSS overrides with Mantine CSS variables — use the token system
- Import all components at once (tree-shake properly)
- Use the default blue as brand color in production (always override)
- Expect mobile-native feel — primarily a web component library

---

## 8. Responsive Behavior

| Breakpoint | Width |
|---|---|
| xs | ≥ 36em (576px) |
| sm | ≥ 48em (768px) |
| md | ≥ 62em (992px) |
| lg | ≥ 75em (1200px) |
| xl | ≥ 88em (1408px) |

CSS responsive props: `<Stack gap={{ base: 'sm', md: 'lg' }}>`
`AppShell` collapses Navbar to hamburger below `breakpoint` prop.

---

## 9. Agent Prompt Guide

**When generating Mantine-style UI:**
> Apply Mantine's clean developer-toolkit aesthetic. White light surfaces / dark `#1A1B1E` dark surfaces. Override primary color to brand. System sans, 0.875rem body (`md` size), 4px radius. Use `AppShell` with collapsible navbar. Buttons: filled (default), light, outline, subtle variants. Notifications via toast stack top-right. `@mantine/dates` for date inputs. em-based breakpoints. Dark/light mode toggle via `colorScheme`. Mantine shadow scale for cards and modals.

**Avoid**: Global CSS overrides, px-based breakpoints, shipping default blue as brand color, missing MantineProvider wrapper.
