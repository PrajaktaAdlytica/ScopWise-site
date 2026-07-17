# Scopwise Homepage Storyboard

Status: Design-ready specification
Version: 1.0
Reference viewport: 1440 x 900
Primary conversion: Request a demo
Secondary conversion: Explore the platform / View a sample review

Editable design: [Scopwise Brand Identity & Homepage Storyboard](https://www.figma.com/design/lWm5JqqHfxP3yDaeHdVIx8?node-id=7-3)

## 1. Creative Direction

### The central idea: From unknown access to reviewable evidence

The homepage behaves like an evidence trail. A single agent-access route begins unresolved in the hero, becomes visible in Map, passes through Rules, and ends as a signed review record. This route is the narrative device connecting the whole page.

The page should feel:

- Precise without becoming clinical
- Colorful without becoming playful or juvenile
- Cinematic without obstructing normal reading
- Editorial in pacing, product-led in proof
- European and enterprise-ready without relying on flags or regulatory theatre

The visual personality combines three approved expressions:

- **Prism Ledger:** hero, rules, and key transitions
- **Evidence Garden:** access mapping and relationships
- **Signal Atelier:** review, trust, and conversion

### Creative rule

Every animation must answer one of three questions:

1. What can the agent reach?
2. What is the agent allowed to do?
3. What evidence records the decision?

Decorative movement that does not answer one of these questions is excluded.

## 2. Audience and Page Jobs

### Primary audiences

| Audience | First concern | Proof they need |
| --- | --- | --- |
| CISO / Security | Unknown reach and permission drift | Actual access map, blocked actions, ownership |
| AI Platform Lead | Safe deployment without slowing teams | Reusable rules, change visibility, deployment context |
| Compliance / Legal | Reproducible review and accountability | Evidence sources, decisions, exceptions, timestamps |
| Internal Audit | Clear record across systems and owners | Review history, exports, retention, reviewer identity |

### Homepage jobs

Within the first viewport, visitors must understand that Scopwise governs enterprise AI-agent access. Within three scrolls, they must see why existing reviews fail. Before the first primary CTA repeats, they must have seen Map, Rules, and Review working as one system.

## 3. Information Architecture

### Desktop navigation

Height: 80 px at page top, 68 px after scroll.
Horizontal padding: 64 px.
Maximum content width: 1312 px.

Left group:

- Scopwise horizontal logo
- Product dropdown
- Solutions dropdown
- Pricing
- Company

Right group:

- Contact
- Sign in
- Request a demo

### Product dropdown

Width: 560 px. Two-column layout. Maximum radius: 8 px.

Primary links:

- **Scopwise Map** — Reveal every agent, system, action, and owner.
- **Scopwise Rules** — Define allowed, conditional, and blocked behavior.
- **Scopwise Review** — Produce a review-ready evidence record.

Secondary links:

- Platform overview
- Integrations
- Security
- View a sample review

The three product links use the custom Map, Rules, and Review icons on Sky, Lavender, and Mint surfaces. The entire row is clickable. Hover changes the row background and moves the trailing arrow by 3 px.

### Solutions dropdown

Width: 640 px. Two-column layout.

By team:

- Security review
- AI platform teams
- Compliance and legal
- Internal audit

By deployment:

- Internal copilots
- Workflow agents
- Automation bots
- Regulated operations

### Mobile navigation

- 64 px header
- Logo left, menu icon right
- Full-height drawer with visible close button
- Product and Solutions use accordions, not hover interactions
- Request a demo remains visible as the final high-emphasis item
- Focus is trapped inside the open drawer and returns to the menu button on close

## 4. Global Layout System

### Desktop

- 1440 px reference canvas
- 1312 px content width
- 64 px outer margins
- 12 columns
- 24 px gutters
- Standard section padding: 96 px top and bottom
- Narrative sections: 120-160 px top and bottom when the viewport allows
- Maximum text measure: 560 px
- Maximum body line length: 68 characters

### Tablet

- 768-1199 px
- 32 px outer margins
- 8 columns
- 20 px gutters
- 80 px section padding

### Mobile

- 320-767 px
- 20 px outer margins below 390 px, 24 px above
- 4 columns
- 16 px gutters
- 64 px section padding

### Typography

- Hero: 56/60 desktop, 44/48 tablet, 38/42 mobile
- Section headline: 44/52 desktop, 36/44 tablet, 32/38 mobile
- Product headline: 32/40 desktop, 28/36 mobile
- Lead: 20/32 desktop, 18/28 mobile
- Body: 16/24
- Label: 12/16 semibold
- Letter spacing: 0 throughout

Instrument Serif italics may emphasize one short phrase per major section. Navigation, UI, labels, and all dense information remain Manrope.

## 5. Page Storyline

## Scene 0 — Navigation

**Question answered:** Where can I go, and what is the primary action?

### Resting state

- Transparent over the hero
- Ink text and logo on Porcelain
- Product and Solutions use chevron-down icons
- Request a demo uses an Ink button with a 20 px arrow-right icon

### Scrolled state

- Warm-white surface at 94% opacity
- 1 px bottom divider using Ink at 10% opacity
- Backdrop blur limited to 12 px
- Height compresses from 80 to 68 px
- Transition duration: 240 ms

### Dropdown motion

- Opacity 0 to 1
- Y offset 8 px to 0
- Duration 180 ms
- Ease: power2.out
- Close on Escape, outside click, or focus leaving the menu group

## Scene 1 — Hero: The Access Path

**Question answered:** What does Scopwise do?

### Working copy

Eyebrow: **Agent access governance**

Headline: **Prove what your agents can access.**

Supporting copy: Map every connection, set clear boundaries, and bring review-ready evidence to security, legal, and business owners.

Primary CTA: **Request a demo**
Secondary CTA: **Explore the platform**

Trust line: Built in the EU for enterprise AI governance.

### Composition

Minimum height: 860 px, maximum 94 svh. A 48-72 px preview of the next section remains visible at the bottom of every supported desktop viewport.

The hero is full-width and unframed. Copy occupies columns 1-6 and begins below the navigation at approximately y=188. The product visual occupies columns 6-12 and extends behind the copy area only with low-information paths; no text sits over busy detail.

The background is Porcelain. Three broad, translucent horizontal evidence layers sit behind the product route:

- Map Sky at y=180-380
- Rules Lavender at y=340-570
- Review Mint transitioning to Apricot at y=530-760

These are rectangular systems with crisp cropped edges, not gradient blobs.

### Hero product visual

An internal copilot node connects to:

- Customer CRM / read customer records
- Knowledge base / retrieve policy documents
- Ticketing / draft and update tickets
- Email / compose, approval required before sending

The route begins as a thin dashed line. Nodes use compact product UI styling rather than illustration. Each destination exposes a small state label: Actual, Inherited, Conditional, or Blocked.

### Motion sequence

0-500 ms:

- Navigation and logo fade in
- Eyebrow and headline reveal as two grouped lines

300-900 ms:

- Supporting copy and CTAs rise 12 px into place
- Product nodes appear in logical order from agent outward

700-1400 ms:

- The access route draws once from agent to destinations
- No looping pulse or constant floating

On scroll from 0-70% of hero:

- Copy moves upward no more than 32 px and fades to 72% opacity
- Route progresses toward the first hidden inherited permission
- Evidence layers move at different rates with a maximum 32 px parallax
- Next-scene headline enters normally from document flow

### Static and reduced-motion state

All nodes and paths are visible immediately. No opacity-dependent information. The route uses labels and line styles so meaning does not depend on color.

## Scene 2 — The Review Gap

**Question answered:** Why do enterprise agent deployments stall?

Section label: **The review gap**

Headline: **The agent works. The evidence does not.**

Intro: A working agent is not the same as a reviewable agent. Teams still need to show what it can reach, what it can change, and who approved the boundary.

### Desktop composition

Height: 210 vh. Background shifts from Porcelain to Ink. Text becomes Porcelain. A sticky 100 vh inner scene holds the visual on columns 6-12 while four concise problem statements advance on columns 1-5.

Problem steps:

1. **Hidden reach** — Connected apps do not reveal inherited data access.
2. **Unclear actions** — Read, write, approve, trigger, and delete are treated as one permission.
3. **Permission drift** — The reviewed scope and the deployed scope stop matching.
4. **Missing ownership** — No reproducible record connects the change, owner, decision, and evidence.

### Visual behavior

The hero map remains recognizable but changes state:

- Step 1 reveals two dashed inherited routes
- Step 2 expands a generic “Access” label into five action-level permissions
- Step 3 compares Reviewed scope and Current scope in aligned columns
- Step 4 leaves an incomplete evidence row with Owner and Decision visibly empty

A quiet chapter indicator reads `01 / 03 — SEE` and advances only after the section completes.

### Motion

- Sticky scene uses opacity and 16 px vertical changes for text
- Diagram changes use line drawing, color replacement, and bounded 0.98-1 scale
- No zoom larger than 1.04
- Scrub smoothing: approximately 0.6 seconds

### Mobile fallback

No pinning. Each problem appears as a numbered block followed by its corresponding static diagram state. Ink remains the background, but each block has generous 48 px separation.

## Scene 3 — Editorial Pause

**Question answered:** What principle makes the problem manageable?

Height: 68-76 vh desktop, auto on mobile. Background returns to Porcelain.

Headline centered within an 8-column measure:

**You cannot govern what you cannot see.**

Supporting line: Scopwise turns agent access into a shared object that security, legal, platform, and business owners can inspect together.

The phrase “cannot see” uses Instrument Serif Italic in Map Sky with Ink text contrast maintained through a subtle Ink underline, not color alone.

Motion is limited to a single line reveal. This is a breathing point between dense product scenes.

## Scene 4 — Platform Transformation: Map → Rules → Review

**Question answered:** How does Scopwise solve the review gap?

Section label: **The Scopwise platform**

Headline: **One access model. Three ways to make it reviewable.**

### Desktop composition

Height: 330 vh. Background: Porcelain. A pinned 100 vh frame begins after a 120 px section introduction.

Left side, columns 1-4:

- Vertical chapter rail
- `01 Map`, `02 Rules`, `03 Review`
- Active chapter has Ink text and a 2 px semantic-color rule
- Inactive chapters remain visible at 48% Ink

Right side, columns 5-12:

- One persistent product workspace
- The same agent, systems, and access routes remain in place across all chapters
- The interface changes layers rather than cutting to unrelated screenshots

### Chapter 1: Map

Copy:

**Map the real access surface.**

See every relationship between agents, data, applications, actions, environments, and owners, including inherited and assumed access.

Workspace state:

- Left rail: Agents, Systems, Data, Actions, Owners
- Canvas: Internal Support Copilot at center
- Routes connect to Salesforce, SharePoint, Jira, and Outlook
- Solid routes: confirmed
- Dashed routes: inherited or unresolved
- Right inspector: source, environment, owner, last verified

Scroll transition:

- Tangled routes align into semantic groups
- Unresolved relationships retain dashed lines
- Owner labels appear only after related routes settle

CTA: **Explore Scopwise Map**

### Chapter 2: Rules

Copy:

**Set boundaries people can understand.**

Define action-level rules in plain operational language. Show what is allowed, conditional, or blocked before an agent reaches production.

Workspace transformation:

- The Map remains faintly visible beneath a Lavender policy layer
- A boundary intersects each route
- Permissions expand into Read, Write, Approve, Trigger, and Delete
- Allowed: Ink on Mint
- Conditional: Ink on Butter
- Blocked: Ink on Apricot with explicit text label
- Example condition: “Send email only after service owner approval”

Scroll transition:

- Rules descend as horizontal policy bands
- Routes stop, pass, or pause at the boundary
- The conditional Outlook route opens a compact approval requirement

CTA: **Explore Scopwise Rules**

### Chapter 3: Review

Copy:

**Every change leaves evidence.**

Compare reviewed and current scope, record exceptions, assign owners, and produce a clear package for enterprise review.

Workspace transformation:

- The graph compresses to a 40% overview panel
- An evidence journal opens beside it
- Record fields: Change, Agent, System, Action, Owner, Decision, Source, Timestamp
- One conditional email action is selected
- Decision: Approved with condition
- Evidence source: Microsoft Graph permission snapshot
- Timestamp uses an explicit timezone

Scroll transition:

- The changed route draws into the evidence record
- Owner, decision, and timestamp populate in causal order
- Final state shows “Ready for review” with a check icon and text

CTA: **Explore Scopwise Review**

### Chapter transition behavior

- Chapter changes occur over 24-30% of each scroll segment
- Text crossfade: 220 ms
- Product layer change: 500-700 ms
- Persistent nodes do not jump position
- A “View all three” text control exits pinning and reveals the static product sequence

### Mobile fallback

Three normal sections in document flow. Each section contains copy first and a static 4:3 workspace image second. A sticky 48 px chapter selector may be used, but content never depends on it.

## Scene 5 — Product Detail Sequence

**Question answered:** What does using the product feel like?

Section label: **Inside Scopwise**

Headline: **From access map to signed decision.**

### Desktop behavior

This is the only horizontal sequence on the page. It contains four 78 vw panels within a pinned track. Each panel leaves part of the next panel visible. The sequence can also be navigated with visible previous/next icon buttons and keyboard arrow keys.

Panel 1 — Access map:

- Claim: See the actual route, not just the integration list.
- UI: filtered graph with Actual / Inherited comparison
- Decision supported: Is the agent’s reach understood?

Panel 2 — Rule detail:

- Claim: Separate permission from permitted behavior.
- UI: action matrix and human-readable condition editor
- Decision supported: Should this action pass, pause, or stop?

Panel 3 — Change comparison:

- Claim: Catch drift before the next review.
- UI: Reviewed scope vs Current scope diff
- Decision supported: What changed since approval?

Panel 4 — Review package:

- Claim: Give every reviewer the same evidence.
- UI: owner, decision, exceptions, evidence sources, timestamps
- Decision supported: Is this agent ready to proceed?

### Visual treatment

Panels are not decorative cards. Each is an unframed layout with a restrained product viewport. Captions align to a shared baseline. Backgrounds progress Sky → Lavender → Apricot → Mint while the core product UI remains Porcelain and Ink.

### Mobile fallback

Horizontal overflow with scroll snap, visible controls, and 88% width panels. No pinned horizontal scroll. Content remains navigable without swiping through all panels.

## Scene 6 — Use Cases and Buyers

**Question answered:** Does this fit my team and deployment?

Headline: **Built for the people who have to say yes.**

### Interaction

A segmented control selects a role:

- Security
- AI platform
- Compliance and legal
- Internal audit

The selected role updates one shared evidence workspace and three outcome statements. The control uses text labels, not icon-only tabs.

Default: Security.

Security outcomes:

- Trace agent reach across connected systems
- Identify write and delete actions before deployment
- Assign a named owner to every exception

AI platform outcomes:

- Reuse understandable access rules across agent teams
- Compare reviewed and deployed scope
- Keep governance work connected to delivery

Compliance and legal outcomes:

- Review purpose, scope, conditions, and evidence in one record
- Track exceptions and decision history
- Export a reproducible review package

Internal audit outcomes:

- Inspect evidence sources and timestamps
- Follow changes across owners and systems
- Review retention and decision history

Deployment links below the role module:

- Internal copilots
- Workflow agents
- Automation bots
- Regulated operations

## Scene 7 — Trust and EU Readiness

**Question answered:** Can this fit enterprise governance expectations?

Background: Signal Atelier warm paper. No unverified badges, certification logos, or customer claims.

Headline: **Evidence designed for enterprise review.**

Four principles:

1. **Least-privilege clarity** — Show action-level access and conditions.
2. **Human ownership** — Connect every exception and decision to a responsible owner.
3. **Reproducible history** — Preserve the source and timestamp behind each review state.
4. **Deployment choice** — Explain data handling, residency, retention, and deployment options accurately when product decisions are finalized.

Supporting UI:

An evidence timeline shows:

- Permission snapshot captured
- Rule change proposed
- Service owner requested
- Condition approved
- Review package generated

CTA: **Explore security and trust**

Compliance language must say “supports,” “helps document,” or “designed for.” It must not imply certification or legal compliance without verified evidence.

## Scene 8 — Proof Framework

**Question answered:** Why should I believe this product is practical?

Until approved customers and metrics exist, this section uses product proof rather than invented social proof.

Headline: **A review record people can inspect.**

Content:

- Large sample-review preview
- Clear list of included fields
- Download sample review action
- “Example data” label visible within the artifact

Reserved future modules:

- Approved customer logo row
- One verified outcome-led testimonial
- One concise case study with methodology

No placeholder company logos or invented percentages appear in production.

## Scene 9 — Pricing Orientation

**Question answered:** How will Scopwise be packaged?

Headline: **Start with the scope you need to review.**

Pricing remains enterprise-oriented until commercial packaging is approved. Show comparison dimensions rather than invented prices:

- Number of agents
- Connected systems
- Rule libraries
- Review workflows
- Evidence retention
- Deployment options
- Support model

CTA: **Talk to us about your deployment**

This section is compact and straightforward. No animation beyond a normal reveal.

## Scene 10 — FAQ

**Question answered:** What objections remain before a demo?

Questions:

1. Which agents and copilots can Scopwise review?
2. How does Scopwise discover actual access?
3. Does Scopwise enforce rules or document them?
4. What evidence is included in a review package?
5. How does Scopwise handle inherited permissions and drift?
6. What deployment and data-residency options are available?

Use accessible accordions with plus/minus icons, 48 px minimum hit areas, `aria-expanded`, and complete keyboard support.

## Scene 11 — Closing Conversion

**Question answered:** What should I do next?

Background: Apricot band transitioning into Porcelain footer. The section is full-width and unframed.

Headline: **Bring your next agent to review with evidence.**

Supporting copy: Show security, legal, and business owners the same access surface, boundaries, and decision record.

Primary CTA: **Request a demo**
Secondary CTA: **View a sample review**

Small reassurance line: Based in Poland. Built for European enterprise teams.

Motion:

- The evidence route from the opening hero returns as a short Ink line
- It passes through the Scopwise symbol and ends at a checked review record
- Duration: 800 ms when the section enters the viewport
- Runs once; no looping

## Scene 12 — Footer

Background: Ink. Text: Porcelain and muted Sky.

Columns:

- Product: Map, Rules, Review, Platform, Integrations
- Solutions: Security review, AI platform teams, Compliance, Internal audit
- Company: Company, Contact, Careers when available
- Resources: Security, Sample review, Documentation when available
- Legal: Privacy, Terms, Cookie settings

Footer base:

- Scopwise reverse logo
- `scopewise.io` only after the final domain is confirmed; use the approved production domain
- Poland / European Union
- LinkedIn icon only after an official profile exists
- Copyright year generated dynamically

## 6. Motion System

### Tools

- Lenis: smoothing only; do not disable native scrolling or create forced snap points
- GSAP ScrollTrigger: sticky chapters, path progression, and horizontal product sequence
- Framer Motion: dropdowns, accordions, buttons, tabs, and form states
- Three.js: excluded from version one; the access map is clearer and lighter as DOM/SVG

### Motion tokens

| Token | Value | Use |
| --- | --- | --- |
| Micro | 160-220 ms | Hover, dropdown, icon movement |
| Standard | 500-700 ms | Section and product-state transitions |
| Narrative | 800-1200 ms | One-time path or evidence sequence |
| Ease enter | power3.out | Reveals |
| Ease change | power2.inOut | Product state changes |
| Parallax maximum | 32 px | Large background layers |
| Scale maximum | 1.04 | Product emphasis only |

### Prohibited behavior

- No scroll locking during normal reading
- No wheel hijacking
- No cursor replacement
- No mandatory audio or autoplay video
- No text split into individual animated letters
- No continuous floating product cards
- No horizontal scrolling for essential page copy
- No state communicated by color alone

## 7. Interaction States

### Primary button

- Height: 48 px
- Horizontal padding: 20 px
- Radius: 8 px
- Ink background, Porcelain text
- Arrow-right icon: 20 px
- Hover: background lightens slightly; arrow translates 3 px
- Focus: 2 px Lavender outline with 3 px offset
- Pressed: translateY(1 px), no layout shift
- Disabled: 40% opacity, cursor not-allowed

### Secondary button

- Height: 48 px
- Porcelain or transparent background
- 1 px Ink border
- Hover uses Sky surface

### Text link

- Label plus arrow-up-right or arrow-right
- Underline appears on hover and focus
- Icon does not replace the label

### Icon-only controls

- Minimum target: 40 x 40 px, 44 x 44 px on mobile
- Familiar symbols only
- Tooltip after 500 ms hover and on keyboard focus
- Accessible name required

## 8. Accessibility and Performance

### Accessibility

- Logical DOM order matches the visual narrative
- Skip-to-content link appears on keyboard focus
- Sticky scenes contain normal headings and text in source order
- Product diagrams include concise text alternatives
- Every state uses label, icon, and color where applicable
- `prefers-reduced-motion` removes pinning, scrubbed transformations, parallax, and smooth scrolling
- Focus never moves as a result of scrolling
- Contrast target: WCAG AA for all normal text and controls
- Instrument Serif is not used below 24 px

### Performance

- SVG/DOM product diagrams instead of video for the primary story
- Lazy-load below-fold product screenshots and optional media
- Avoid large blur filters and full-page compositing layers
- GSAP animations modify transform and opacity where possible
- Reserve dimensions for all diagrams to prevent layout shift
- Target Lighthouse performance score: 90+ on production desktop and 80+ mobile
- Target LCP under 2.5 seconds on representative mobile hardware

## 9. Responsive Story Conversion

Desktop tells the story through two controlled pinned sections. Mobile tells the same story through normal document flow.

| Desktop behavior | Mobile behavior |
| --- | --- |
| Transparent 80 px navbar | Solid 64 px navbar |
| Pinned review-gap diagram | Four sequential problem blocks |
| Pinned Map → Rules → Review workspace | Three static product chapters |
| Horizontal product sequence | Scroll-snap cards with controls |
| Role tabs with side-by-side workspace | Full-width segmented control and stacked content |
| Background-layer parallax | Static layer composition |

Nothing essential is removed on mobile. Decorative intermediate animation states may be omitted.

## 10. Product UI Content Requirements

The product mockups must use realistic, consistent example data.

Agent:

- Internal Support Copilot
- Environment: Production
- Owner: Customer Operations AI

Connected systems:

- Salesforce
- Microsoft SharePoint
- Jira Service Management
- Microsoft Outlook

Example actions:

- Read customer account
- Retrieve policy document
- Draft ticket update
- Send customer email
- Delete ticket attachment

Example rule outcomes:

- Read account: Allowed
- Retrieve policy: Allowed
- Draft update: Allowed
- Send email: Conditional — service owner approval
- Delete attachment: Blocked

Example review record:

- Change: Outlook send permission added
- Agent: Internal Support Copilot
- Owner: Customer Operations AI
- Reviewer: Security Architecture
- Decision: Approved with condition
- Evidence: Microsoft Graph permission snapshot
- Timestamp: `2026-07-17 14:32 CEST`
- Status: Ready for review

All dates and organizations are visibly labeled as example data in public samples.

## 11. Figma Frame Plan

Page name: `03 Homepage Storyboard`

Frames:

1. `Homepage / Desktop / Full Story` — 1440 px wide
2. `Homepage / Desktop / Hero` — 1440 x 900
3. `Homepage / Desktop / Review Gap` — 1440 x 900 resting state
4. `Homepage / Desktop / Platform Map` — 1440 x 900
5. `Homepage / Desktop / Platform Rules` — 1440 x 900
6. `Homepage / Desktop / Platform Review` — 1440 x 900
7. `Homepage / Desktop / Product Sequence` — 1440 x 900
8. `Homepage / Desktop / Trust + CTA` — 1440 x 900
9. `Homepage / Mobile / Full Story` — 390 px wide
10. `Homepage / Motion Notes` — annotated transition frames

The first Figma pass should establish composition, spacing, color rhythm, and believable product UI. Fine animation keyframes and component variants follow after the static hierarchy is approved.

## 12. Design Acceptance Criteria

- The first viewport states what Scopwise does without requiring animation
- The Scopwise brand and product are first-viewport signals
- A hint of the next section is visible at common desktop and mobile heights
- Map, Rules, and Review are visually one system, not three unrelated illustrations
- Product mockups use realistic and internally consistent data
- No unverified customers, certifications, metrics, or regulatory claims appear
- Headings remain refined and do not become excessively large or bulky
- Every section follows the spacing scale and 12-column grid
- Buttons and icon controls include hover, focus, pressed, and disabled intent
- Desktop motion has complete reduced-motion and mobile fallbacks
- The page remains understandable when JavaScript and scroll animation are unavailable
- Primary and secondary conversion paths are visible at the hero and closing section
