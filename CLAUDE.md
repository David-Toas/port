# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Project

Personal portfolio for **Olabode Showole (David-Toas)** — positioned as *Full-Stack Developer + Customer Support / Client Success*. The dual positioning is deliberate: content must serve both a hiring engineer and a support/CS hiring manager. Don't strip the customer-service framing when "cleaning up" copy.

Deployed target: Vercel. Live-facing, so treat `main` as production.

## Commands

```bash
npm run dev      # next dev — http://localhost:3000
npm run build    # production build; run before claiming a change is done
npm run start    # serve the production build
npm run lint     # eslint (next/core-web-vitals)
```

There is no test suite. Verification = `npm run build` clean + a manual pass over the affected route.

## Stack

- **Next.js 15** App Router, **React 18**, **JavaScript only** (`.jsx`, no TypeScript — `jsconfig.json` maps `@/*` to the repo root)
- **Tailwind CSS 3** with `tailwindcss-animate`; `darkMode: "class"` is configured but never used — the site is dark-only
- **shadcn/ui** (JSX flavour; colours come from CSS custom properties, see Design system)
- **CSS keyframes** for entrances, **Framer Motion 11** only where JS is required, **Swiper 11** for the work carousel
- **sonner** for toasts, **react-countup** for the stats counters
- **Web3Forms** for contact submissions (public access key lives client-side in [app/contact/page.jsx](app/contact/page.jsx) — that's by design for Web3Forms, but never add a secret key there)

### Icon libraries — two, deliberately

`react-icons` for content icons, `lucide-react` for shadcn internals and UI chrome. `@mui/*`, `@emotion/*` and `phosphor-react` were removed — don't reintroduce a third icon set.

## Layout & architecture

```
app/
  layout.jsx        Root layout: Inter + JetBrains Mono, Header, PageTransition, Toaster
  globals.css       Design tokens (:root), base layer, entrance keyframes, reduced motion
  page.jsx          Home — hero, Photo, Stats, hand-rolled resume-picker modal
  services/page.jsx Four service cards (data array at top of file)
  resume/page.jsx   Tabs: experience / customer-experience / education / skills / about
  work/page.jsx     Swiper carousel; project data array at top of file
  contact/page.jsx  Web3Forms form + contact info
components/
  Header, Nav, MobileNav, Socials, Photo, Stats
  PageTransition    ← the only route transition
  WorkSliderBtns
  ui/               shadcn primitives (button, input, textarea, select, tabs, sheet, tooltip, scroll-area)
lib/utils.js        cn() = twMerge(clsx(...))
lib/motion.js       shared easings, durations, stagger, spring, viewport, variants
lib/hooks.js        useInView, usePrefersReducedMotion (no framer-motion needed)
public/assets/      work screenshots, skill/resume icons, profile photo
public/*.pdf        two resume variants (Full Stack / CSR) — filenames contain spaces
```

`PageTransition` renders the single `<main id="main">`. Pages should not add
their own route-entry animation — that duplication was removed.

**Content lives in module-scope arrays at the top of each page file.** Adding a project or service means editing that array, not a CMS. If a third consumer of the same data appears, extract to `lib/content/` — until then, leave it inline.

`PORTFOLIO_ANALYSIS.md` is a pre-existing SEO/perf audit and is **gitignored** — read it for background, don't treat it as spec, don't commit it.

## Conventions

- `"use client"` only where `usePathname`, state, effects, or `framer-motion` are actually used. `Photo`, `Socials`, `Header` and `/services` are server components — **don't add the directive by reflex**, it costs bundle size.
- Named `const Component = () => {}` + `export default Component`
- Tailwind classes inline; use `cn()` when merging conditional classes
- Section wrapper pattern: `<section className="...">` → `<div className="container mx-auto">`
- Pages do **not** define their own route-entry animation — `PageTransition` owns it.

---

## Design system

### Palette — "Ink, Teal & Sand" (shipped)

The organising idea: **two accents mapped to the two tracks.** Teal carries engineering content, sand carries client-success content, so the palette encodes the dual positioning before anyone reads a word. It replaced `#00ff99` on `#1c1c22` — the most recognisable dev-portfolio-template palette in circulation, and a neon-green "hacker terminal" signal that worked against the customer-success half of the audience.

Tokens live in `:root` in [app/globals.css](app/globals.css); `tailwind.config.js` references them by `var()`. **Never introduce a raw hex outside that block.**

| Token | Value | Tailwind | Notes |
|---|---|---|---|
| `--bg` | `#0B0F14` | `bg-primary` | deep ink, slight blue cast |
| `--surface` | `#11161D` | `bg-surface` | cards |
| `--surface-2` | `#18202A` | `bg-surface-2` | raised / hover |
| `--border` | `#232E3A` | `border-line` | 1px hairlines — this creates depth |
| `--text` | `#E8EDF2` | `text-content` | 16:1 on bg |
| `--text-muted` | `#94A3B2` | `text-content-muted` | the ONE muted value. 7.5:1, AAA |
| `--accent` | `#2DD4A7` | `text-accent` etc. | primary action + engineering track. 10.2:1 |
| `--accent-hover` | `#24BE96` | `bg-accent-hover` | |
| `--accent-soft` | `rgba(45,212,167,.12)` | `bg-accent-soft` | tints, chips, active borders |
| `--warm` | `#F2B880` | `text-warm` | client-success track. 10.9:1 |
| `--warm-soft` | `rgba(242,184,128,.12)` | `bg-warm-soft` | |

Every value passes WCAG AA comfortably; body and muted text pass AAA. `#2DD4A7` is deliberately an evolution of the old green rather than a repudiation — calmer, shifted toward blue, loses the neon.

**Colour rules** — these matter more than the hexes:

1. **One accent-coloured element per viewport.** Accent was on buttons, links, headings, dots, numbers, borders and chips simultaneously — that was the real reason it read cheap. Most are now `--text` / `--text-muted`, with borders carrying the structure.
2. Build depth with **surface elevation** (`--bg` → `--surface` → `--surface-2`) plus a 1px `--border`. Never with more accent.
3. `--warm` never becomes a second CTA colour. It is for the client-success track and testimonials only. Currently used on the resume "key strengths" chips and available as `<Button variant="warm">`.
4. One muted-text token. `text-white/60|70|80` no longer appears anywhere — don't reintroduce it.
5. `components.json` stays `cssVariables: false`. The token names here are custom (`--bg`, `--surface`) rather than shadcn's (`--background`, `--foreground`), so flipping it would make newly-generated components reference variables that don't exist. If you ever want shadcn's convention, add its aliases first.

### Light mode

Dark-only is itself a template signal, and non-technical recruiters frequently skim on a phone in daylight. Once the tokens exist this is ~20 lines. Dark stays default; a header toggle signals craft.

```css
--bg #FAFAF8  --surface #FFFFFF  --border #E4E4E1
--text #14171A  --text-muted #5A6472 (5.8:1)
--accent #0F766E (5.3:1)  --warm #B45309
```

### Typography (shipped)

`font-primary` is applied to `<body>` and now resolves to **Inter**. Mono was previously set on every paragraph on the site, which is measurably harder to read at that length and reads as a developer who hasn't considered typography.

- `font-primary` → Inter — body and headings. The default; you rarely need to write it.
- `font-mono` → JetBrains Mono — **accents only**: logo, stat numbers, tech-stack chips, section eyebrows, the big outlined numerals. Don't put it on a paragraph.

Body `line-height` is `relaxed` (1.625), down from `loose` (2.0).

### Motion

Two mechanisms, and the split matters:

- **CSS keyframes** (`animate-page-enter`, `animate-reveal`, `animate-line`, `animate-ring-spin` in [app/globals.css](app/globals.css)) for **entrances and loops**. Stagger with an inline `animationDelay`. This is the default — reach for it first.
- **Framer Motion** only for what genuinely needs JS. Right now that is one thing: the `layoutId` tab indicator in [components/ui/tabs.jsx](components/ui/tabs.jsx).

**Why the split matters.** Framer Motion's `initial` serialises into the SSR HTML as inline `opacity:0`, so the markup is invisible until hydration. `/services` was shipping its entire page content that way. Verify with:

```bash
curl -s http://localhost:3000/<route> | grep -c 'style="opacity:0'   # want 0
```

For scroll triggers and reduced-motion checks use `useInView` / `usePrefersReducedMotion` from [lib/hooks.js](lib/hooks.js) rather than the framer-motion equivalents — importing those pulled ~38 kB into the home page for a single observer.

**SVG gotcha:** SVG children default to `transform-origin: 0 0`, so a rotation orbits the viewBox corner instead of spinning in place. Set `transform-box` and `transform-origin` explicitly (see `.animate-ring-spin`).

**Motion tokens** live in [lib/motion.js](lib/motion.js) — `ease`, `duration`, `stagger`, `spring`, `viewport`, plus `fadeUp()` / `staggerParent()` variants. Import them; don't inline durations.

```js
ease.out = [0.16, 1, 0.3, 1]    // entrances — decisive, no float
duration = { fast: 0.18, base: 0.32, slow: 0.55 }
stagger  = 0.07                  // 60–80ms between siblings
spring   = { type: "spring", stiffness: 400, damping: 30 }   // hover/tap only
viewport = { once: true, margin: "-80px" }
```

**Rules**

1. **Animate `transform` and `opacity` only.** [components/Stairs.jsx](components/Stairs.jsx) animates `top`, which is layout-driven and cannot be GPU-composited — that's a direct cause of janky transitions. Use `y` / `scaleY` with `transformOrigin`.
2. **Entrance delays above ~0.4s are a bug, not a style.** See Known issues — the hero currently waits 2s and the stat counters finish at ~7s.
3. **There is exactly one route transition**, in `PageTransition`: a 320ms CSS `page-enter` (opacity + 8px rise), keyed on pathname. The old 6-bar stairs wipe is gone — it was a tutorial signature, cost ~1.4s per navigation, and animated `top`. There is **no exit animation**: the App Router swaps `children` before an outgoing tree could finish, so an exit variant animates the *incoming* content out. Don't reintroduce `AnimatePresence` here.
4. **Scroll-trigger below-the-fold content** with `useInView` from `lib/hooks.js`, gating only the *behaviour* (e.g. whether a counter animates), never the visibility of the content itself.
5. **Springs for interaction, tweens for entrance.** Hover/tap: `spring`. Reveals: tween + `ease.out`.
6. **Always honour reduced motion.** The global `@media (prefers-reduced-motion: reduce)` block in `globals.css` covers the CSS keyframes — `both` fill-mode means they land on the final state instantly rather than being skipped. For JS-driven motion use `usePrefersReducedMotion()`.
7. Hover transitions: `duration-200`/`duration-300`, never `duration-500`.

**Upgrades still worth building**, in payoff order:

1. **Card hover: lift + border glow.** `y: -4` on a spring with the border transitioning to `--accent-soft`. Not done.
2. **Scroll reveal on the remaining routes.** Only `/services` uses `whileInView` so far.
3. **Page-level view transitions** if the App Router's native View Transitions API stabilises — would give real exit animations without the `AnimatePresence` problem.

Already shipped: masked hero reveal (CSS, 70ms stagger), `layoutId` resume tab indicator, reduced motion, the portrait ring rework.

---

## Information architecture

### The core problem

Five sibling routes, each a wall of prose, with both identities merged into every paragraph. A recruiter for either role clicks four times and mentally filters out half the content. Neither audience gets a focused story.

### The fix: an audience switch

An explicit control near the top of the home page:

```
I'm hiring for:   [ Engineering ]   [ Client Success ]
```

Selecting a track changes which resume the CV button downloads, which skills surface first, which case studies lead, and the section accent (`--accent` vs `--warm`). Persist in `localStorage`.

This resolves the central tension — each visitor gets a coherent story instead of a compromise — and reads as product thinking rather than decoration. Highest-leverage structural change available.

### Home as one narrative page

| Section | Purpose |
|---|---|
| Hero + track switch | Name, one-line positioning, dual CTA |
| Proof bar | Stats — subject to the credibility fix (known issue #20) |
| Selected work | 3 cards, not a carousel |
| Dual track | Engineering block (teal) / Client Success block (sand), reordered by the switch |
| Testimonials | **Currently missing entirely** |
| Contact CTA + footer | Footer does not exist yet |

### Route changes

- **Carousel → grid.** Swiper hides 8 of 9 projects behind interaction, only the first slide gets read, and it's poor for SEO.
- **Add `/work/[slug]` case studies:** Context → Problem → What I built → Stack decisions → Outcome. Three real case studies beat nine paragraph blurbs for engineering roles, decisively.
- **Retire `/services`.** "Services" frames the site as freelance, which conflicts with applying for full-time roles. Fold into the home page's dual-track section as "What I do."
- **Keep `/resume`.** The tabbed structure is good; it needs the `layoutId` indicator and equal visual weight for the customer-experience tab.
- Nav shrinks to **Work · Resume · Contact** + "Hire me".

### Evidence for the client-success track

The CS half is currently assertion-only — "empathy", "active listening", "relationship building" — with no proof. A CS hiring manager will notice. Add at minimum two named testimonials (name, role, company) and any real support metrics available: CSAT, response time, resolution volume, retention.

---

## Known issues

### Outstanding

1. [app/contact/page.jsx](app/contact/page.jsx) — `formErrors` is populated for first name, last name, email and phone, but only `message` renders its error. The other four fail silently.
2. [app/layout.jsx](app/layout.jsx) — `title: "Toas"`, generic description, no `metadataBase`, no `openGraph`/`twitter` cards, no canonical. Links shared to LinkedIn/X preview as nothing. **Highest-leverage remaining fix.**
3. Missing App Router files: `not-found.jsx`, `error.jsx`, `loading.jsx`, `sitemap.js`, `robots.js`, `manifest.json`. Icon PNGs for a manifest already exist in `public/`.
4. [README.md](README.md) is untouched `create-next-app` boilerplate.
5. No footer anywhere — no copyright, no secondary nav, no repeat contact CTA at the bottom of long pages.
6. Home page resume modal is hand-rolled: no focus trap, no Esc-to-close, no body scroll lock, no `role="dialog"`. `@radix-ui/react-dialog` is already a dependency — use it.
7. [next.config.mjs](next.config.mjs) is empty — no image formats/sizes, no security headers.
8. Commented-out project entries in [app/work/page.jsx](app/work/page.jsx). Git has the history; delete them. (Tailwind scans comments, so dead classes in them still emit CSS.)
9. Content credibility: `Stats` claims "243 code commits" alongside "5+ years experience" — an oddly small, unverifiable number that undercuts the rest. Several project descriptions cite invented metrics ("converts 25% better", "boost productivity by 60%", "3x faster"). Replace with real, defensible specifics. Emoji prefixes in project copy read informal.
10. PDF filenames contain spaces (`Olabode-Showole-Full Stack.pdf`) — rename to hyphenated.
11. `/resume` first-load JS is 181 kB vs 106–164 kB elsewhere — the `layoutId` tab indicator is the only thing pulling Framer Motion into the build. Acceptable for the effect, but it's the last framer consumer; if it goes, so does the dependency.
12. `/work` still hides 8 of 9 projects behind the carousel. Grid + case studies is the fix (see Information architecture).

### Fixed

- Font variable typo (`var(----font-jetbrainsMono)`) — the whole site was falling back to the browser default face. Now Inter for body, JetBrains Mono for accents.
- `MobileNav` template literal producing `border-accenttext-xl`.
- Stairs stagger maths — component deleted outright.
- `flex flex-flex-col` and the `bg-pink-50/25` placeholder on the work page.
- External `live` / `github` links now carry `target="_blank" rel="noopener noreferrer"` + `aria-label`.
- Hero portrait `delay: 2` → `0.1`; stat counters `delay: 2, duration: 5` (~7s to settle) → `whileInView` + `duration: 1.6`.
- Double full-screen overlay and the ~1.4s of dead time per navigation.
- All hardcoded hex and mixed `text-white/60|70|80` opacities.
- Skip-to-content link, `aria-label` on icon-only controls, `aria-current` on nav links, stable list keys, `:focus-visible` ring, `SheetTitle` on the mobile nav dialog (Radix announces an unlabelled panel without it).
- Commented-out resume block (was still emitting a dead `#232329` class).
- SVG ring rotated about the viewBox corner instead of its centre (missing `transform-box`/`transform-origin`).
- `/services` shipped its entire content at `opacity:0` pre-hydration; no route does now.
- `@mui/*`, `@emotion/*`, `phosphor-react` removed. Home first-load JS 189 kB → 133 kB, `/services` 144 kB → 106 kB.

---

## Suggested order of work

Steps 1–3 of the original plan (bugs + typography, colour tokens, motion pass) are done. Remaining:

1. **Metadata + OG cards** (outstanding #3), then the missing route files (#4).
2. **Track switch** on the home page — the highest-leverage structural change.
3. **Carousel → grid**, then `/work/[slug]` case studies.
4. **Content credibility** (#10) — remove invented metrics, tighten copy.
5. **Evidence** — testimonials and support metrics for the client-success track.
6. **Polish** — footer, light mode, Radix dialog for the resume modal, contact form error display (#1).

## Working agreements

- Run `npm run build` before reporting a change complete; a passing dev server is not sufficient.
- Don't reformat files you aren't otherwise changing.
- Don't add a dependency when something already installed covers it (Radix, Framer Motion, and Tailwind cover nearly everything here).
- Preserve the dual developer / customer-success positioning in all copy edits.
- `PORTFOLIO_ANALYSIS.md` stays gitignored.
