# Chakra UI

**URL**: https://chakra-ui.com/
**Archetype**: developer-minimal
**Stack**: React (primary); styled-system prop model

---

## 1. Visual Theme & Atmosphere
Chakra UI is a developer-focused React component library built for rapid accessible app development. The default visual theme is clean, neutral, and restrained — it intentionally does not impose a strong brand identity, making it suitable as a foundation for any product aesthetic. The documentation and showcase demonstrate a teal-accented neutral-gray palette. The atmosphere communicates: accessible, composable, and production-ready out of the box.

---

## 2. Color Palette & Roles

Chakra ships a full token set per hue (50–900 steps):

| Token | Hex | Role |
|---|---|---|
| Teal 500 | `#319795` | Default brand / primary (light mode) |
| Teal 200 | `#81E6D9` | Default brand / primary (dark mode) |
| Gray 50 | `#F7FAFC` | Light bg |
| Gray 100 | `#EDF2F7` | Secondary surface |
| Gray 200 | `#E2E8F0` | Borders |
| Gray 500 | `#718096` | Muted text |
| Gray 700 | `#2D3748` | Dark body text |
| Gray 800 | `#1A202C` | Dark surface |
| Gray 900 | `#171923` | Darkest dark |
| Red 500 | `#E53E3E` | Error |
| Green 500 | `#38A169` | Success |
| Yellow 400 | `#F6E05E` | Warning |
| Blue 500 | `#3182CE` | Info / alternative primary |

The `colorScheme` prop changes the accent hue globally. Teams typically replace teal with their own brand color via `extendTheme({ colors: { brand: {...} } })`.

---

## 3. Typography Rules

| Role | Face | Size | Weight |
|---|---|---|---|
| H1 | System sans | 2.25rem | 700 |
| H2 | System sans | 1.875rem | 700 |
| H3 | System sans | 1.5rem | 600 |
| H4 | System sans | 1.125rem | 600 |
| Body | System sans | 1rem / 1.5 | 400 |
| Small | System sans | 0.875rem | 400 |
| xs | System sans | 0.75rem | 400 |

System font stack: `body: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif"`. All sizes use `rem` relative to 16px base. Custom fonts set via `extendTheme({ fonts: { heading: '...', body: '...' } })`.

---

## 4. Component Styling

**Buttons**
- `variant="solid"` (default): colorScheme fill, white text, 6px radius
- `variant="outline"`: transparent, 1px colorScheme border
- `variant="ghost"`: transparent, no border, colorScheme text
- `variant="link"`: inline link style
- Sizes: xs (24px) / sm (32px) / md (40px) / lg (48px) — all on 1rem-based spacing

**Input / Form**
- `variant="outline"` (default): 1px border `#E2E8F0`, 1px radius, focus: colorScheme 2px ring
- `variant="filled"`: `#EDF2F7` fill, no border; focus: white fill + ring
- `variant="flushed"`: bottom border only
- FormControl wrapper with FormLabel / FormHelperText / FormErrorMessage

**Badge / Tag**
- `colorScheme` fills with semantic colors; rounded by default
- TagCloseButton included in Tag component

**Card (Chakra v2+)**
- `Card`, `CardHeader`, `CardBody`, `CardFooter`
- 8px radius default, subtle shadow variant available

---

## 5. Layout Principles
- **Grid**: `SimpleGrid`, `Grid`, `GridItem` — CSS Grid primitive wrappers
- **Flex**: `Flex`, `Spacer`, `Stack`, `HStack`, `VStack`
- **Spacing**: T-shirt size tokens: 1=4px, 2=8px, 3=12px, 4=16px, 5=20px, 6=24px, 8=32px, 10=40px, 12=48px, 16=64px
- **Container**: max-width presets: sm(480px) / md(768px) / lg(992px) / xl(1280px) / 2xl(1536px)
- **Responsive props**: `<Box p={{ base: 4, md: 6, lg: 8 }}>`

---

## 6. Depth & Elevation

| Variant | Shadow | Usage |
|---|---|---|
| `shadow="sm"` | `0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.08)` | Cards |
| `shadow="md"` | `0 4px 6px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.06)` | Menus |
| `shadow="lg"` | `0 10px 15px rgba(0,0,0,0.1), 0 4px 6px rgba(0,0,0,0.05)` | Modals |
| `shadow="2xl"` | `0 25px 50px rgba(0,0,0,0.25)` | Drawers |
| `shadow="dark-lg"` | `rgba(0,0,0,0.1) 0px 0px 0px 1px, rgba(0,0,0,0.2) 0px 5px 10px, rgba(0,0,0,0.4) 0px 15px 40px` | Dark mode elevated |

---

## 7. Do's and Don'ts

**Do**
- Replace the default teal with your brand color using `extendTheme`
- Use the `colorScheme` prop to maintain consistency across components
- Use the responsive prop syntax for adaptive layouts — avoid media query overrides
- Use `useColorMode` / `ColorModeProvider` for dark mode support
- Compose using `Stack` / `HStack` / `VStack` for layout — avoid custom margins

**Don't**
- Hardcode colors — use theme tokens exclusively
- Override component styles with CSS classes (use `sx` prop or `extendTheme` instead)
- Use Chakra as a design reference for client-facing branded products without theming
- Mix Chakra prop-based styling with global CSS stylesheets
- Expect Chakra UI to provide strong visual opinions — it is a foundation, not a design language

---

## 8. Responsive Behavior

Chakra has built-in responsive prop system:

| Breakpoint | Width |
|---|---|
| `base` | 0px |
| `sm` | 480px |
| `md` | 768px |
| `lg` | 992px |
| `xl` | 1280px |
| `2xl` | 1536px |

All component props accept responsive arrays: `<Box w={["100%", "50%", "25%"]}>` = full on mobile, half on sm, quarter on md+.

---

## 9. Agent Prompt Guide

**When generating Chakra UI-style UI (with brand customization):**
> Apply Chakra UI's clean neutral foundation. Replace teal with brand primary. Gray 100 `#EDF2F7` secondary surfaces; gray 800 `#1A202C` dark surfaces. System sans, 1rem base, 6px radius. Token-driven spacing: `4/8/16/24/32px`. Button colorScheme prop. Responsive props for adaptive layouts. `useColorMode` dark/light toggle. Forms via `FormControl` + `FormLabel`. `SimpleGrid` for grid layouts. Clean shadow scale for cards.

**Avoid**: Hardcoded colors, CSS overrides, custom font loading without theme config, shipping with default teal as the brand color.
