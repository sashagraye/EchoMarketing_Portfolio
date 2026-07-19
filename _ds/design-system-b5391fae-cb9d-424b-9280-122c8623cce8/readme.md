# 이태현 · Personal Design System v1

A personal brand & UI system for **이태현 (Lee Taehyun)** — a 콘텐츠·영상·UI·AI 크리에이터 (content / video / UI / AI creator). Built for a digital-marketing internship portfolio and general portfolio use. **Korean-first.**

The system fuses three references into one rulebook:
- **Naver · Apple** — modular card structure and generous editorial whitespace.
- **Kakao** — elastic, springy interaction (the "life" of the UI).
- **Signature** — an anti-uniform corner: every surface rounds two diagonal corners and points the other two.

Restraint by design: **one indigo accent**, a warm-neutral ink/paper scale, and energy expressed through bold **card surfaces** and **spring motion** — never a rainbow of hues.

---

## Sources
- `uploads/taehyun-design-system_7.html` — the authored design-system spec page. **This is the ground truth**; all tokens, shapes, motion, and rules are transcribed from it.
- `uploads/portfolio.pdf` (원본: `디지털 마케팅_인턴_포트폴리오_이태현 (2).pdf`) — 17-page image-based portfolio. Text is vectorized/outlined and not machine-extractable; the embedded images are the creator's private work (3D chrome typography, AI series, video stills) and are **not** repurposed as system assets. Page 1 carries an **INNOCEAN Worldwide** logo (the target agency). Used for content/context only.

No logo or brand mark was provided. The brand name **이태현** is set in the display typeface (IBM Plex Sans KR) wherever a mark would go — no mark was drawn or invented.

---

## Content fundamentals — how copy is written
- **Language:** Korean first, with Latin used for labels/kickers and tool names (Premiere, Figma, Midjourney).
- **Tone:** 간결한 에디토리얼 — concise, confident, editorial. Short declarative sentences.
- **Voice:** first-person-implicit ("…설계합니다", "…만듭니다") — polite 합니다체, never chatty.
- **Data as values, not adjectives:** write "3.5hr", "504장", "6 분기점 · 15 결말" — never "빠르게", "많은".
- **Casing:** Latin labels are UPPERCASE with wide tracking (`SELECTED WORK · 01`). Korean headings are natural case.
- **Emoji:** none. Not part of the brand.
- **Examples:** "카드로 말하고 움직임으로 살아나는 콘텐츠" · "타깃을 먼저 읽고, 포맷을 짭니다" · "도구는 빠르게 갈아 끼웁니다".

---

## Visual foundations
- **Color:** single indigo accent axis (`#3538CD`, press `#2A2CA8`, bright `#6C6EF5` on dark, tint `#E7E7FB`) over a warm off-white paper (`#FDFDFC`) and a four-step ink scale (`#16171B → #8A8B90`). No secondary hues. Emphasis lives in card *surfaces* (light / ink / accent / media), not colored text.
- **Type:** display & headings in **IBM Plex Sans KR** 600–700 with tight tracking (−2 to −3%); body in **Pretendard** 400 at line-height 1.7; labels/kickers in **Plus Jakarta Sans** 600, uppercase, 0.14em tracking. Never fall back to bare Inter or system sans.
- **Shape (signature):** `border-radius: 22px 3px 22px 3px` — top-left & bottom-right ROUND, top-right & bottom-left SHARP. The diagonal direction never changes. Chips/buttons use the reduced `12px 2px 12px 2px`. **Uniform radius is forbidden.**
- **Spacing / layout:** 4px base rhythm; 1160px max content column; 40px desktop gutters; generous 64px section rhythm. Modular card grids.
- **Backgrounds:** flat warm paper. No gradients on page backgrounds; the only gradient is the `media` card surface (ink→indigo, 135°). No textures, no illustrations, no full-bleed photography by default.
- **Motion:** Kakao-style elastic. Hover = `translateY(-6px)` with spring `cubic-bezier(.34,1.4,.5,1)`; press = `scale(.95)`; scroll reveals rise 20px with a soft ease + stagger. `prefers-reduced-motion` is always honored.
- **Layout — centered showcase vs editorial grid:** hero, process, manifesto, and contact moments are **center-aligned** (Apple-homepage style: centered eyebrow → big balanced headline → centered CTAs); work galleries and dense content stay **left-aligned editorial grids**. The alternation is the scroll rhythm — a new "hook" roughly every viewport.
- **Interactive patterns (sanctioned):** rotating accent word in the hero headline (spring `wordIn` pop); count-up stats on scroll into view; pointer-tilt (≤7°) on media cards; auto-advancing clickable process stepper; Apple-style scroll-highlight manifesto (words ink up from `--line-strong` → `--ink`). All degrade to static under reduced motion. Use 1–2 per screen, never all at once.
- **Hover states:** cards lift + gain a directional shadow + border strengthens; buttons shift to the press-color and grow their shadow; links/labels shift to indigo.
- **Press states:** compress to 0.95 scale (the spring gives it snap).
- **Borders:** 1px hairlines — `--line #DAD9D3` default, `--line-strong #C6C5BD` on hover/ghost outlines. Borders (not shadows) define resting cards.
- **Shadows / elevation:** deep, directional, indigo-tinted on accent surfaces; used sparingly — mostly appearing on hover to sell the lift. No ambient shadow spam at rest.
- **Transparency / blur:** reserved for the sticky nav (`rgba(253,253,252,.85)` + `blur(12px)`). Not used decoratively.
- **Imagery vibe:** when real media exists it skews cool/metallic/high-contrast (chrome renders, AI series). Placeholders use the indigo `media` gradient.
- **Corner radii summary:** card 22/3 · chip·button 12/2 · control 8/2 — always diagonal, never uniform.
- **Cards:** hairline border at rest, signature diagonal corners, spring lift + directional shadow on hover; four surfaces (light / ink / accent / media).

---

## Iconography
The source system uses **no icon font, no SVG icon set, and no PNG icons**. Its only glyphs are:
- **Typographic marks** — the eyebrow's leading rule (a 20px indigo bar), `+` / `×` bullets in Do/Don't lists, and `·` middots as separators.
- **Unicode arrows** — `↑` / `→` used sparingly as directional hints in copy.
- **No emoji.**

If a consumer genuinely needs iconography, add a lightweight stroke set (e.g. **Lucide** via CDN, 1.5px stroke) and document it here — but the default is type-and-rule minimalism. **This is a flagged substitution**, not something present in the source.

---

## Components (namespace `DesignSystem_b5391f`)
Built from the source's real inventory — nothing invented beyond it.
- **Button** (`components/actions/`) — primary / ghost / ink; sm/md/lg; spring press.
- **Chip** (`components/actions/`) — solid / outline / tint tag token.
- **Card** (`components/surfaces/`) — the signature surface: light / ink / accent / media.
- **Stat** (`components/surfaces/`) — big display-face metric + small indigo unit + label.
- **Eyebrow** (`components/text/`) — uppercase kicker with a leading indigo rule.
- **SectionHeader** (`components/text/`) — numbered eyebrow + display heading + note.
- **Toast** (`components/feedback/`) — bottom-center confirmation pill.
- **Reveal** (`components/motion/`) — scroll-triggered 20px rise + stagger wrapper. *Intentional addition:* it codifies the source's stated reveal spec as a reusable primitive.

---

## Index / manifest (root)
- `styles.css` — global entry; `@import`s the token modules below.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `shape.css`, `spacing.css`, `motion.css`, `elevation.css`.
- `components/` — `actions/`, `surfaces/`, `text/`, `feedback/` (each: `.jsx` + `.d.ts` + `.prompt.md` + one `@dsCard` HTML).
- `guidelines/` — foundation specimen cards (Colors, Type, Shape, Motion, Spacing, Brand).
- `ui_kits/portfolio/` — interactive portfolio-site recreation (`index.html` + screen JSX + `README.md`).
- `SKILL.md` — Agent-Skills-compatible entry point.
- `uploads/` — original source files.

## Fonts
All three families are CDN-hosted open-source webfonts (IBM Plex Sans KR + Plus Jakarta Sans via Google Fonts; Pretendard via jsDelivr). **No local font binaries** are bundled — see the caveat in `SKILL.md`. If you need self-hosted files, upload them and I'll wire `@font-face` rules.
