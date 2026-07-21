# Zendesk Garden

**URL**: https://garden.zendesk.com/
**Archetype**: enterprise-data / support-platform
**Stack**: React; Emotion; monorepo packages `@zendeskgarden/*`

---

## 1. Visual Theme & Atmosphere
Zendesk Garden powers the Zendesk ecosystem: support tickets, chat, help centers, and customer service operations. The design language is calm, service-oriented, and highly functional. Signature green and blue accents sit atop neutral white and gray surfaces, with intentional minimalism to avoid cognitive overload in ticket-heavy workflows.

---

## 2. Color Palette & Roles

| Token | Hex | Role |
|---|---|---|
| Zendesk Green | `#228722` | Brand primary, confirmation |
| Green Dark | `#1A6B1A` | Hover, active |
| Green Light | `#EAF7EA` | Success tint |
| Zendesk Blue | `#1F73B7` | Links, info actions |
| Blue Dark | `#185A8F` | Link hover |
| Blue Light | `#E7F1FA` | Info tint, selected states |
| Warning Amber | `#FFB057` | Warning |
| Error Red | `#D93F4C` | Error, destructive |
| Primary Text | `#2F3941` | Body, headings |
| Secondary Text | `#68737D` | Labels, metadata |
| Muted Text | `#87929D` | Placeholder, disabled |
| Border | `#D8DCDE` | Inputs, table separators |
| Surface Gray | `#F8F9F9` | Background sections |
| White | `#FFFFFF` | Surface |
| Dark Theme Bg | `#1F232B` | Dark mode page background |

---

## 3. Typography Rules

| Role | Face | Size | Weight |
|---|---|---|---|
| H1 | system sans | 2rem | 700 |
| H2 | system sans | 1.5rem | 700 |
| H3 | system sans | 1.25rem | 600 |
| H4 | system sans | 1rem | 600 |
| Body | system sans | 0.875rem | 400 |
| Body (lg) | system sans | 1rem | 400 |
| Small | system sans | 0.75rem | 400 |
| Label | system sans | 0.8125rem | 600 |
| Code | Menlo, monospace | 0.8125rem | 400 |

Garden uses platform-native system fonts for performance and consistency across global support teams.

---

## 4. Component Styling

**Ticket List Table**
- Compact rows with status icon + ticket subject + requester
- Priority chip (Low/Normal/High/Urgent)
- Row hover: light blue tint `#E7F1FA`
- Bulk-select checkboxes and multi-action toolbar

**Status Chips**
- Open: blue
- Pending: amber
- Solved: green
- Closed: gray
- All chips: pill radius, small uppercase labels

**Sidebar Navigation**
- Product areas: Support / Chat / Guide / Talk / Explore
- Icon + label; active state in green left border

**Forms and Fields**
- Clear validation text below input
- Error state: red border + icon + helper text
- Character count helper for agent notes and macros

---

## 5. Layout Principles
- **Main shell**: left nav + top utility bar + central work area
- **Spacing**: 4px base scale (4, 8, 12, 16, 24, 32, 48)
- **Density**: medium-compact (support teams process many rows)
- **Ticket workspace**: split pane (ticket thread left, user profile/context right)
- **Content max-width**: fluid, usually full-width for queue tables

---

## 6. Depth & Elevation

| Level | Value | Usage |
|---|---|---|
| Flat | `1px solid #D8DCDE` | Inputs, table boundaries |
| Card | `0 1px 6px rgba(47,57,65,0.08)` | Panels |
| Dropdown | `0 4px 16px rgba(47,57,65,0.14)` | Menus, pickers |
| Modal | `0 8px 24px rgba(47,57,65,0.2)` | Dialogs |

---

## 7. Do's and Don'ts

**Do**
- Keep support queues scannable with compact rows and clear status chips
- Use green for solved/success and blue for active/informational states
- Provide keyboard shortcuts for common support actions
- Maintain clear distinction between customer-facing and agent-only notes
- Use split-pane layout for ticket detail workflows

**Don't**
- Use heavy decorative visuals in ticket management views
- Mix too many accent colours in a single queue
- Hide priority/severity in hover-only interactions
- Use dark text on dark mode backgrounds with insufficient contrast

---

## 8. Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| < 768px | Sidebar collapses; queue becomes single-column list |
| 768–1024px | Compact nav and stacked detail panels |
| ≥ 1024px | Full split-pane ticket workspace |
| ≥ 1440px | Expanded queue + context panel simultaneously |

---

## 9. Agent Prompt Guide

**When generating Zendesk Garden-style UI:**
> Customer-support SaaS aesthetic. Zendesk Green `#228722` for success/brand, Zendesk Blue `#1F73B7` for links/info. Neutral white and gray surfaces. Compact ticket queues with status chips and priority badges. System sans typography at 0.875rem body. Split-pane ticket detail layout. 4px spacing scale. Minimal, calm, operational.

**Avoid**: decorative-heavy visuals, low-contrast dark mode text, hidden severity states.
