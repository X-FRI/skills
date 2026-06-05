---
name: frontend-design
description: Use when building, redesigning, or polishing frontend screens, UI components, web apps, dashboards, landing pages, games, or interactive tools where visual quality, interaction feel, responsive layout, or product fit matters.
---

# Frontend Design

Use this skill to make frontend work feel intentionally designed instead of default-generated.

The goal is not to impose a house style or a preferred framework. The goal is to understand the product, choose a clear visual direction, then implement it through the target project's existing frontend conventions.

## Core Rule

Design guidance is framework-neutral. Implementation is project-native.

Never choose React, Svelte, Vue, Tailwind, shadcn/ui, Framer Motion, Motion, icon libraries, component libraries, fonts, or charting libraries because this skill mentions them. Choose tools from the current project unless the user explicitly asks for a new stack.

Express quality in capability terms:

- hierarchy, density, rhythm, alignment, and proportion
- typography scale, contrast, role, and tone
- color relationships, semantic roles, and accessibility contrast
- interaction states, feedback, timing, easing, and sequencing
- responsive behavior, information priority, and touch ergonomics
- product specificity, domain fit, and memorable details

Then map those capabilities onto the project's actual framework and primitives.

## When to Use

Use this skill when:

- creating a new frontend view, page, component, prototype, app, game, or tool
- improving an existing UI that feels generic, flat, cluttered, unfinished, or template-like
- translating a design direction, screenshot, mockup, or product idea into code
- adding motion, responsive behavior, visual hierarchy, empty states, loading states, or interaction feedback
- building user-facing dashboards, admin tools, marketing pages, product surfaces, or interactive demos

Do not use this skill for backend-only work, pure data modeling, one-line copy changes, or visual tasks where the user explicitly asks for no design judgment.

## Project-Native Frontend Audit

Before implementing, inspect the current project. Keep this audit quick but real.

Identify:

- **Framework**: React, Svelte, Vue, Astro, Solid, Angular, plain HTML, server-rendered templates, native app shell, or other.
- **Styling system**: global CSS, CSS modules, scoped styles, Tailwind, SCSS, CSS-in-JS, design tokens, component library, or utility classes.
- **Component conventions**: file naming, folder layout, composition style, state management, props/events, slots/snippets/children, and shared primitives.
- **Motion system**: CSS transitions/keyframes, framework transitions, existing animation helpers, Motion/Framer Motion, GSAP, spring utilities, or no established motion layer.
- **Assets and icons**: local assets, image pipeline, font loading, SVG conventions, icon packages, CDN rules, and licensing constraints.
- **Verification path**: dev server command, build command, test command, Storybook, Playwright, screenshots, or browser route.

Use the closest existing primitive first. If the project has no convention, choose the smallest standard implementation that fits the current stack.

## Design Intent Pass

Before changing UI, silently answer:

- What is the user trying to do on this surface?
- Is this an operational tool, consumer app, editorial page, portfolio, game, marketing page, data product, or workflow screen?
- What should the screen feel like: quiet, dense, premium, playful, clinical, fast, trustworthy, expressive, technical, calm, urgent, or something else?
- What content matters most in the first viewport?
- What should be memorable after a 5-second glance?
- What constraints are already set by the product, brand, data, device, or workflow?

If the product context is missing, infer conservatively from the repository and the user's request. Ask only when the missing answer would change the design direction completely.

## Visual Direction

Choose one clear direction before implementing. Avoid bland neutrality unless the product genuinely calls for it.

Good directions are specific enough to guide choices:

- quiet clinical operations with dense scan-friendly tables
- expressive creator tool with direct-manipulation controls
- high-trust financial dashboard with restrained contrast and crisp data hierarchy
- playful learning game with tactile feedback and strong state changes
- editorial product page with large real imagery and confident type

Bad directions are too generic:

- modern and clean
- sleek dashboard
- beautiful landing page
- better spacing
- nice animations

## Framework-Neutral Motion

Motion is a behavior specification before it is a library choice.

Specify:

- what moves
- why it moves
- duration
- easing
- sequence
- interruption behavior
- reduced-motion behavior

Then implement with the project's existing motion approach:

- In Svelte, prefer built-in transitions, CSS transitions, actions, stores, or existing local utilities.
- In Vue, prefer `Transition`, `TransitionGroup`, CSS transitions, or existing local utilities.
- In React, use existing CSS, component-library transitions, Motion/Framer Motion only if already present, or existing local utilities.
- In plain HTML or server-rendered apps, prefer CSS transitions and keyframes.
- In canvas, WebGL, or game surfaces, use the existing render loop or engine timing.

Do not add a motion dependency for a small hover, reveal, route transition, or loading state unless the project already depends on one.

## Component And Layout Rules

Use the host framework's idioms:

- React: preserve existing component composition, hooks patterns, state boundaries, and styling approach.
- Svelte: use existing component boundaries, props/events, stores, snippets/slots, transitions, and scoped styles.
- Vue: use existing component conventions, props/emits, composables, slots, transitions, and scoped styles.
- Server-rendered templates: keep behavior progressive, avoid unnecessary client framework assumptions, and use stable CSS/HTML structure.
- Plain HTML/CSS/JS: keep the DOM readable, use semantic elements, and avoid framework-shaped abstractions.

Layout must be stable:

- Use explicit responsive constraints for grids, boards, panels, media, toolbars, cards, and controls.
- Ensure labels, icons, hover states, loading text, and dynamic values do not resize core layout unexpectedly.
- Keep text inside its parent at mobile and desktop widths.
- Avoid nested cards and decorative panels that compete with the actual task.
- Match type scale to context: hero-scale type belongs in heroes, not dense tools or sidebars.

## Visual Quality Rules

### Typography

- Use the project's existing font system first.
- If choosing fonts, choose them for product tone and readability, not because they are common defaults.
- Avoid defaulting to Inter, Roboto, Arial, or system sans when the product needs a stronger identity.
- Do not scale font size directly with viewport width.
- Keep letter spacing at `0` unless the typeface and context clearly need otherwise.

### Color

- Build a palette with semantic roles: background, surface, text, muted text, border, accent, danger, success, warning, focus.
- Avoid one-note palettes dominated by variants of a single hue.
- Avoid generic purple-blue gradients, beige/cream/tan, dark slate/blue, or espresso/orange themes unless they are clearly justified by product context.
- Check contrast for body text, controls, disabled states, focus states, and charts.

### Imagery And Assets

- Use real or generated bitmap imagery when a website, landing page, product page, portfolio, venue page, or game needs visual assets.
- Prefer images that reveal the actual product, place, object, state, gameplay, or person.
- Do not use dark, blurred, cropped, stock-like, or purely atmospheric media when users need to inspect the subject.
- Use SVG for icons, diagrams, custom game assets, or vector marks where vector is the right medium.

### Controls

- Use familiar controls for familiar jobs: icons for toolbar actions, segmented controls for modes, toggles for binary settings, sliders or inputs for numbers, menus for option sets, tabs for views.
- Use icon libraries already present in the project. Do not add one only because an icon would be convenient.
- Add accessible labels and tooltips where an icon is not self-explanatory.
- Preserve keyboard, focus, hover, disabled, pressed, selected, loading, and error states.

## Surface-Specific Guidance

### Operational Tools And Dashboards

Operational software should feel quiet, dense, and repeatable.

Prioritize:

- scan speed
- stable navigation
- clear filters and table controls
- predictable layout
- compact but legible spacing
- obvious status and error states

Avoid oversized marketing heroes, decorative card-heavy layouts, and visual flourishes that slow repeated work.

### Landing Pages And Product Pages

The first viewport must clearly signal the brand, product, place, person, or offer.

Use strong real or generated media where appropriate. Hero text should sit directly over or within the visual field, not inside a decorative card unless the existing design system requires it.

Make the headline literal: brand name, product name, place name, person name, or offer category. Put value propositions in supporting copy.

### Games And Interactive Tools

Build the actual playable or usable experience as the first screen. Do not start with a marketing landing page.

Use a proven library for established rules, physics, parsing, or AI engines unless the user asks for a from-scratch implementation.

Verify that the primary scene is nonblank, correctly framed, interactive, and responsive.

## Implementation Workflow

1. **Audit the project**: identify framework, styling, component, motion, asset, and verification conventions.
2. **Choose the visual direction**: name the product-specific direction in one sentence before coding.
3. **Map design to primitives**: decide which existing components, styles, transitions, and assets to reuse.
4. **Implement narrowly**: change only the surface needed unless shared primitives are the right local pattern.
5. **Handle states**: empty, loading, error, disabled, hover, focus, selected, mobile, desktop, and reduced motion when relevant.
6. **Verify visually**: run the app when possible and inspect the result in a browser or screenshot.
7. **Check polish**: scan for overlaps, text overflow, broken contrast, blank media, layout shift, and framework-inconsistent code.

## Common Mistakes

- Assuming React when the project is Svelte, Vue, server-rendered, or plain HTML.
- Adding Tailwind, shadcn/ui, Motion, Framer Motion, or a new icon library instead of using existing project primitives.
- Treating "modern clean UI" as a complete design direction.
- Replacing a product's established styling system with a new one.
- Using motion as decoration instead of feedback, continuity, or state communication.
- Building a landing page when the user asked for an app, game, dashboard, or tool.
- Making every surface a card, or putting cards inside cards.
- Using placeholder assets where the subject itself should be visible.
- Letting button text, labels, counters, badges, or loading states resize the layout.
- Claiming visual completion without running or inspecting the UI when verification is available.

## Completion Standard

Frontend design work is complete when:

- the implementation follows the target project's framework and styling conventions
- the surface has a clear product-specific visual direction
- responsive layout, text fitting, and interaction states have been checked
- motion and assets use project-native mechanisms
- no new dependency was added without evidence or explicit user approval
- the result has been visually verified when a runnable target exists
