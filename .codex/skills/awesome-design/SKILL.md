---
name: ui-designer
description: 'Create high-fidelity UI design specs and implementation-ready styling direction using DESIGN.md patterns. Use when a user asks for UI direction, visual identity, design tokens, component styling, responsive behavior, or "make this page look like <brand>".'
argument-hint: 'Product/page goal + audience + preferred brand vibe + constraints'
user-invocable: true
---

# UI Designer

Creates practical, agent-friendly UI design direction in DESIGN.md format and turns vague style requests into implementable design systems.

## Use When
- User asks for a UI redesign, visual direction, or design language.
- User asks to mimic or be inspired by a known product/brand style.
- User needs a reusable token system before building frontend code.
- User wants responsive + accessibility-aware styling rules, not just colors.

## Source Model
This skill is derived from two curated reference repositories:
- `VoltAgent/awesome-design-md` — 9-section DESIGN.md format, agent-optimised structure
- `alexpate/awesome-design-systems` — 130+ real-world design systems analysed for style signals

**Design System Reference Library:**
- Full 9-section profiles for top systems → `./references/profiles/`
  - [IBM Carbon](./references/profiles/ibm-carbon.md) — enterprise-data, `#0f62fe`, IBM Plex, 0px radius
  - [Material Design 3](./references/profiles/material-design-m3.md) — tonal HCT color, Roboto/Google Sans, M3 motion
  - [Atlassian](./references/profiles/atlassian.md) — `#0052CC`, status lozenges, 3px radius
  - [Shopify Polaris](./references/profiles/shopify-polaris.md) — merchant admin, Inter, `#008060`
  - [Salesforce Lightning](./references/profiles/salesforce-lightning.md) — CRM-dense, `#0176D3`, 4px radius
  - [GitHub Primer](./references/profiles/github-primer.md) — developer-minimal, system-ui + mono, `#0969DA`
  - [Microsoft Fluent 2](./references/profiles/microsoft-fluent.md) — Segoe UI Variable, Mica/Acrylic
  - [GOV.UK](./references/profiles/govuk.md) — GDS Transport, `#FFDD00` focus, 0px radius
  - [USWDS](./references/profiles/uswds.md) — Merriweather + Source Sans Pro, `#005EA2`, Section 508
  - [shadcn/ui](./references/profiles/shadcn-ui.md) — CSS vars, zinc palette, Radix, dark-first
  - [BuildDistributedSystem Networker](./references/profiles/builddistributedsystem-networker.md) — `#00D4FF` teal, dark surfaces, JetBrains Mono, topology node aesthetics
- Compact signals for all 130+ systems → [design-systems-catalogue.md](./references/design-systems-catalogue.md)

## Procedure
1. Clarify the design target.
- Extract product type, primary audience, and conversion goal.
- Infer desired tone (e.g., technical, editorial, playful, premium, institutional).
- Capture constraints: accessibility, mobile-first, component library, framework.

2. Pick a style archetype.
- Map the request to one or more archetypes:
  - `developer-minimal` — clean monochrome, code-forward → GitHub Primer, shadcn/ui, Vercel Geist
  - `enterprise-data` — dense dashboards, strong hierarchy → IBM Carbon, Atlassian, SAP Fiori, AWS Cloudscape
  - `premium-editorial` — spacious, typography-led → Apple HIG, Artsy Palette, FT Origami, Porsche
  - `playful-gradient` — vibrant surfaces, softer geometry → Material M3, Duolingo, Vibe (monday.com)
  - `cinematic-dark` — dramatic contrast, glow restraint → Astro UXDS, dark-mode design tools
  - `civic-accessible` — high contrast, flat, institutional → GOV.UK, USWDS, Aurora Canada, NHS UK
  - `media-forward` — image-first, editorial → Pinterest Gestalt, BBC GEL, FT Origami
- If the user names a specific design system, load its profile from `./references/profiles/<name>.md` before generating.
- If the system is not in profiles, check `./references/design-systems-catalogue.md` for signal attributes.

3. Generate a DESIGN.md spec with all nine sections.
- Use [template](./references/design-md-template.md).
- Do not skip sections.
- Include concrete values (hex, spacing scale, type scale, radius, shadows).

4. Add implementation guidance.
- Include CSS variable naming suggestions.
- Include component state behavior (hover, active, focus-visible, disabled).
- Include responsive collapse strategy and touch target minimums.

5. Add prompt-ready handoff.
- Provide a short "agent prompt guide" that another coding agent can apply directly.
- Include what to avoid so generated UI does not drift.

## Output Requirements
- Output in markdown with the 9 numbered sections.
- Prefer explicit tokens over vague adjectives.
- Include at least one table for type scale or token mapping.
- Ensure color contrast and focus treatment are explicitly defined.
- Keep the design coherent across desktop and mobile.

## Quality Checklist
- Is there a strong visual point of view (not default UI)?
- Are typography choices intentional and role-specific?
- Are component states defined clearly?
- Are spacing and layout systems consistent?
- Is responsive behavior fully specified?
- Is accessibility addressed (contrast, focus, touch targets)?

## Safety and IP Boundaries
- Use brand inspiration, not direct trademark imitation for logos or proprietary marks.
- Do not claim exact parity with a private design system.
- Synthesize patterns into an original, usable system for the user context.
