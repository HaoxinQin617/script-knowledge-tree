# Kaizen (Culture Amp Design System)

**URL**: https://cultureamp.design/
**Archetype**: enterprise-data / people-analytics
**Stack**: React component library

---

## 1. Visual Theme & Atmosphere
Kaizen powers Culture Amp's people and performance platforms. The design language is human-centered and data-informed, with warm tones and approachable UI patterns that support sensitive HR workflows like feedback, engagement surveys, and performance reviews.

---

## 2. Color Palette & Roles

| Token | Hex | Role |
|---|---|---|
| Seedling | `#45C86A` | Primary positive brand accent |
| Seedling Dark | `#2FA650` | Hover/active |
| Seedling Light | `#EAF8EE` | Success/selection tint |
| Indigo | `#3F51B5` | Secondary actions, links |
| Sky | `#3BA0FF` | Info states |
| Warning Amber | `#D98A00` | Warning |
| Error Red | `#D64545` | Error/destructive |
| Ink | `#1F2937` | Primary text |
| Slate | `#4B5563` | Secondary text |
| Muted | `#9CA3AF` | Disabled text |
| Border | `#D1D5DB` | Inputs/dividers |
| Surface | `#FFFFFF` | Cards/forms |
| Background | `#F8FAFC` | App background |

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

**Survey Builder**
- Question cards with drag-and-drop ordering
- Clear logic and branching indicators

**Feedback Modules**
- Sentiment indicators and response summaries
- Privacy/visibility labels for confidential data

**People Analytics Cards**
- Engagement score, trends, segment filters
- Drill-down pathways to team-level insights

**Performance Review Flow**
- Step-based progression with completion states
- Action prompts for managers and employees

---

## 5. Layout Principles
- **Empathy-first UX** for sensitive HR contexts
- **Spacing**: 8px base scale
- **Patterns**: overview -> insight -> action
- **Data density**: moderate, with narrative support
- **Navigation**: role-aware modules for HR/admin/manager personas

---

## 6. Depth & Elevation

| Level | Value | Usage |
|---|---|---|
| Flat | `1px solid #D1D5DB` | Inputs/tables |
| Card | `0 2px 8px rgba(31,41,55,0.08)` | Insight modules |
| Popover | `0 4px 16px rgba(31,41,55,0.14)` | Filters/tooltips |
| Modal | `0 8px 24px rgba(31,41,55,0.2)` | Feedback dialogs |

---

## 7. Do's and Don'ts

**Do**
- Use supportive, clear language in people workflows
- Surface confidentiality and visibility context explicitly
- Provide drill-down from org to team to individual insight levels
- Keep action recommendations close to insight visuals

**Don't**
- Present sensitive feedback without context or safeguards
- Use aggressive visual patterns for HR-sensitive content
- Hide important privacy states in secondary views
- Overload dashboards with low-priority metrics

---

## 8. Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| < 768px | Stacked insight cards and simplified navigation |
| 768–1024px | Two-column analytics and workflow modules |
| ≥ 1024px | Full people-analytics workspace |

---

## 9. Agent Prompt Guide

**When generating Kaizen/Culture Amp-style UI:**
> Human-centered people-analytics interface. Seedling `#45C86A` as positive anchor, balanced neutral surfaces, and clear insight-to-action flows. Support sensitive HR contexts with explicit privacy states and approachable language. Keep metrics readable and actionable.

**Avoid**: aggressive visual tone, hidden privacy context, metric overload without action guidance.
