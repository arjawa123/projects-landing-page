# Japanese Vocab Design System

Panduan ini mendokumentasikan gaya visual Japanese Vocab agar web app lain bisa dibuat seragam dan sedekat mungkin dengan implementasi saat ini.

## 1. Prinsip Desain

- **Tenang dan fokus**: UI mendukung latihan cepat, bukan tampil seperti landing page.
- **Monokrom netral**: gunakan hitam, putih, abu-abu, dan aksen warna hanya untuk status.
- **Padat tapi lega**: spacing cukup untuk dibaca, namun tidak terlalu dekoratif.
- **Kartu sederhana**: border tipis, radius kecil, shadow halus.
- **Kontrol familiar**: icon button untuk aksi kecil, segmented control untuk mode, checkbox/toggle untuk opsi, slider untuk angka.
- **Tidak memakai gradient/orb/dekorasi ramai**.
- **Dark mode first-class**: setiap surface dan border harus berbasis token.

## 2. Design Tokens

### Font

Gunakan Inter sebagai font utama.

```css
font-family:
  Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
font-synthesis: none;
text-rendering: optimizeLegibility;
-webkit-font-smoothing: antialiased;
letter-spacing: 0;
```

### Color Tokens

Light theme:

```css
:root {
  --app-bg: #fafafa;
  --surface: #fff;
  --text: #171717;
  --muted: #707070;
  --faint: #8a8a8a;
  --border: #e1e1e1;
  --soft-border: #dedede;
  --hover: #e8e8e8;
  --control-bg: #fff;
  --control-selected: #f3f3f3;
  --shadow: rgba(0, 0, 0, 0.1);
  --correct-bg: #f0f8f3;
  --correct-border: #81b29a;
  --correct-text: #171717;
  --incorrect-bg: #fff1f1;
  --incorrect-border: #d66b6b;
  --incorrect-text: #171717;
  --bar-bg: #f0f0f0;
  --danger-bg: #fde1e1;
  --danger-text: #f00000;
  --danger-hover: #ffd6d6;
}
```

Dark theme:

```css
:root[data-theme="dark"] {
  --app-bg: #111;
  --surface: #181818;
  --text: #f3f3f3;
  --muted: #a9a9a9;
  --faint: #8d8d8d;
  --border: #303030;
  --soft-border: #3a3a3a;
  --hover: #242424;
  --control-bg: #151515;
  --control-selected: #262626;
  --shadow: rgba(0, 0, 0, 0.36);
  --correct-bg: rgba(129, 178, 154, 0.1);
  --correct-border: #2bad6e;
  --correct-text: #a8e6c9;
  --incorrect-bg: rgba(214, 107, 107, 0.1);
  --incorrect-border: #e63946;
  --incorrect-text: #ffb3b3;
  --bar-bg: #222;
  --danger-bg: rgba(240, 0, 0, 0.15);
  --danger-text: #ff6e6e;
  --danger-hover: rgba(240, 0, 0, 0.25);
  color-scheme: dark;
}
```

### Status Colors

- Success/progress complete: `#0aa36b`
- Warning/pending: background `rgba(234, 179, 8, 0.12)`, text `#b45309`, dark text `#fbbf24`
- Danger: use `--danger-bg`, `--danger-text`, `--danger-hover`
- Fire/streak accent: `#ff6b1a`
- QR/payment cyan accent: `#0094b6` on `rgba(0, 148, 182, 0.1)`

### Spacing

Base rhythm uses 4px increments:

- `4px`: tiny gaps
- `6px`: pill/internal compact gap
- `8px`: control gap, small radius, compact padding unit
- `10px`: button/card internal small padding
- `12px`: header padding, compact panel padding
- `14px`: form input vertical rhythm
- `16px`: page/mobile padding, modal padding
- `18px`: section/card inner spacing
- `20px`: card horizontal gap
- `24px`: main top padding, form card padding
- `28px`: practice column gap
- `32px`: page h1 bottom spacing
- `40px+`: large page section spacing

### Radius

- `6px`: tiny pills and menu items
- `7px`: settings controls, select, small buttons
- `8px`: default cards, panels, icon buttons
- `9px`: quiz choices and primary/next buttons
- `12px`: floating menu/modal only
- `999px`: circular/pill/ring elements

Default rule: cards and panels should be `8px`. Avoid large rounded cards.

### Shadows

Use shadows sparingly.

```css
box-shadow: 0 1px 3px var(--shadow);   /* subtle controls */
box-shadow: 0 4px 20px var(--shadow);  /* donation/payment panel */
box-shadow: 0 8px 24px rgba(0,0,0,.12); /* dropdown */
box-shadow: 0 10px 40px var(--shadow); /* modal */
```

## 3. Layout

### Shell

```css
.app-shell {
  min-height: 100vh;
  display: grid;
  grid-template-rows: 66px 1fr auto;
}

@media (max-width: 720px) {
  .app-shell {
    grid-template-rows: 58px 1fr auto;
  }
}
```

### Content Widths

- Topbar inner: `width: min(1024px, calc(100vw - 32px))`
- General page: `width: min(640px, 100%)`
- Settings/stats pages: `width: min(656px, 100%)`
- Practice column: `width: min(446px, 100%)`
- Modal: `width: min(400px, 100%)`
- Footer border: full width; content aligned with `padding: 12px max(16px, calc((100vw - 1024px) / 2))`

### Main Area

```css
.main {
  position: relative;
  display: flex;
  justify-content: center;
  padding: 24px 16px 120px;
}

@media (max-width: 720px) {
  .main {
    padding-top: 20px;
  }
}
```

## 4. Typography

### Page Titles

Static pages:

```css
.page h1 {
  margin: 0 0 32px;
  font-size: 28px;
  font-weight: 700;
  line-height: 1.25;
}
```

Settings/stats pages:

```css
h1 {
  margin: 0 0 34px;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
}
```

### Section Titles

```css
h2 {
  margin: 0 0 7px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.25;
}
```

### Body Copy

```css
p {
  color: var(--muted);
  font-size: 14px-15px;
  line-height: 1.45-1.7;
}
```

### Japanese Word Display

```css
.word-card h1 {
  font-size: 40px;
  line-height: 1.2;
  font-weight: 500;
}

@media (max-width: 720px) {
  .word-card h1 {
    font-size: 34px;
  }
}
```

## 5. Components

### Topbar

- Height: `66px`, mobile `58px`
- Border bottom: `1px solid var(--border)`
- Inner max width: `1024px`
- Brand: `JV`, 18px, weight 700
- Back button: 28px square, radius 6px
- Menu/icon buttons: 34px square, radius 8px

```css
.topbar {
  position: relative;
  border-bottom: 1px solid var(--border);
  background: var(--app-bg);
}
```

### Dropdown Menu

```css
.menu-panel {
  position: absolute;
  right: 0;
  top: 40px;
  width: 160px;
  padding: 6px;
  background: var(--surface);
  border: 1px solid var(--soft-border);
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  z-index: 100;
}
```

Menu item:

- Height via padding `10px 12px`
- Gap `12px`
- Font `14px`
- Radius `6px`

### Word Card

```css
.word-card {
  min-height: 100px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 10px 18px 14px 10px;
  border: 1px solid var(--soft-border);
  border-radius: 8px;
  background: var(--surface);
}
```

Use this pattern for compact learning/task cards. Avoid decorative nested cards.

### Choice Button

```css
.choice-button {
  min-height: 48px;
  padding: 10px 14px;
  border: 1px solid var(--soft-border);
  border-radius: 9px;
  background: var(--surface);
  color: var(--text);
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}
```

States:

- Hover: `background: var(--hover)`
- Correct: `--correct-bg`, `--correct-border`, `--correct-text`
- Incorrect: `--incorrect-bg`, `--incorrect-border`, `--incorrect-text`
- Blurred/reveal: `filter: blur(8px)`, show centered helper text.

### Primary Button

```css
.primary-button {
  min-height: 48px;
  border-radius: 9px;
  border: 1px solid var(--text);
  background: var(--text);
  color: var(--app-bg);
  cursor: pointer;
  font-weight: 500;
}
```

Disabled:

```css
.primary-button:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}
```

### Secondary Button

```css
.secondary-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 42px;
  background: var(--surface);
  color: var(--text);
  border: 1px solid var(--soft-border);
  border-radius: 8px;
  padding: 0 16px;
}
```

### Icon Button

- Use lucide icons.
- Size: 28px for bare icon, 34px for normal icon button.
- Border: none.
- Radius: 8px or 6px.
- Hover: `var(--hover)`.

### Panel/Card

```css
.settings-group,
.stat-tile {
  padding: 16px;
  border: 1px solid var(--border);
  border-radius: 8px;
  background: var(--surface);
}
```

Use panels for grouped controls and repeated data tiles, not for every page section.

### Segmented Controls

```css
.settings-segment-row {
  display: grid;
  overflow: hidden;
  min-height: 36px;
  border: 1px solid var(--soft-border);
  border-radius: 7px;
  background: var(--control-bg);
  box-shadow: 0 1px 3px var(--shadow);
}

.settings-segment-row button {
  min-height: 36px;
  padding: 7px 10px;
  border: 0;
  border-right: 1px solid var(--soft-border);
  background: transparent;
  color: var(--text);
  font-size: 14px;
}

.settings-segment-row button.selected {
  background: var(--control-selected);
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.03);
}
```

### Form Inputs

```css
input,
textarea,
select {
  width: 100%;
  border: 1px solid var(--soft-border);
  border-radius: 7px-10px;
  background: var(--control-bg);
  color: var(--text);
  font: inherit;
}
```

Donation form input:

```css
.donation-form-modern input,
.donation-form-modern textarea {
  padding: 12px;
  border-radius: 10px;
  font-size: 15px;
}
```

Focus:

```css
outline: 0;
border-color: var(--text);
box-shadow: 0 0 0 3px var(--hover);
```

### Badges/Pills

Level pill:

```css
padding: 3px 7px;
border: 1px solid var(--soft-border);
border-radius: 6px;
font-size: 12px;
color: var(--muted);
```

QR/payment pill:

```css
padding: 4px 10px;
border-radius: 999px;
background: rgba(0, 148, 182, 0.1);
color: #0094b6;
font-size: 11px;
font-weight: 700;
text-transform: uppercase;
letter-spacing: 0;
```

### Modal

```css
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(2px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  padding: 16px;
}

.modal-content {
  width: min(400px, 100%);
  border-radius: 12px;
  border: 1px solid var(--soft-border);
  background: var(--surface);
  box-shadow: 0 10px 40px var(--shadow);
  overflow: hidden;
}
```

### Footer

```css
.footer {
  min-height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  padding: 12px max(16px, calc((100vw - 1024px) / 2));
  border-top: 1px solid var(--border);
  color: var(--muted);
  font-size: 12px;
}
```

Mobile footer becomes centered column.

## 6. Page Patterns

### Practice Page

- Width: `min(446px, 100%)`
- Vertical gap: `28px`, mobile `22px`
- Main visual order:
  1. Word card
  2. Choices
  3. Next/control button
  4. Secondary note/link
  5. Level pills

### Settings Page

- Width: `min(656px, 100%)`
- Section margin bottom: `36px`
- Use compact headings and control rows.
- Controls should be full width and scannable.

### Stats Page

- Width: `min(656px, 100%)`
- Use calm number hierarchy.
- Progress bars are 8px-12px height, rounded full pill.
- Avoid chart decorations unless useful.

### Static Pages

- Width: `min(640px, 100%)`
- H1: 28px bold.
- Body: muted, readable, max line length via container width.

### Donation Page

- Form width: `min(480px, 100%)`
- Header copy should be inside the donation form card.
- Payment QR panel should show:
  1. Payment badge
  2. Intent/title
  3. Amount
  4. QR frame
  5. Expiry + small download icon
  6. Status/check/cancel actions

Do not overlay buttons on the QR image.

## 7. Motion

Use short, subtle motion only:

```css
transition: background 160ms ease;
transition: width 180ms ease, background 180ms ease;
animation: fadeIn 150ms ease;
animation: slideUp 200ms ease;
```

Avoid bouncy/springy decorative motion unless the app is game-like.

## 8. Accessibility

- Buttons must be real `<button>` elements.
- Icon-only buttons need `aria-label` and `title` when helpful.
- Japanese text should use `lang="ja"`.
- Do not rely only on color for correctness; include icon/status shape.
- Disabled controls should use `cursor: not-allowed` and opacity.
- Modal click outside may close, but close button must exist.

## 9. AI Implementation Guide

Use this section as a prompt or checklist for AI agents building another app with this system.

### Required Style

- Build a quiet, focused web app UI using Inter, neutral colors, compact spacing, and small-radius cards.
- Use the exact CSS token names where possible: `--app-bg`, `--surface`, `--text`, `--muted`, `--faint`, `--border`, `--soft-border`, `--hover`, `--control-bg`, `--control-selected`, `--shadow`.
- Support light and dark themes with the token values in this document.
- Keep page content constrained: 446px for focused task flows, 640px for text pages, 656px for dashboards/settings, 1024px for global header/footer alignment.
- Use 8px card radius by default. Use 12px only for dropdowns/modals.
- Use borders more than shadows. Shadows must be subtle.
- Use lucide icons for icon buttons.

### What To Avoid

- Do not create hero/marketing layouts unless explicitly requested.
- Do not use gradients, decorative blobs, large illustrations, glassmorphism, or neon effects.
- Do not use negative letter spacing.
- Do not make text-heavy rounded badges when a familiar icon/button would work.
- Do not put cards inside cards unless it is a modal, repeated tile, or truly framed tool.
- Do not let UI text overflow buttons or controls.
- Do not use huge headings inside cards or dashboards.

### Component Decisions

- For binary options, use checkbox/toggle rows.
- For mode switching, use segmented controls.
- For numeric values, use input/slider.
- For small actions, use icon buttons.
- For primary action, use black/white `primary-button`.
- For secondary action, use bordered `secondary-button`.
- For warning/success/error, use semantic status colors from the token section.

### Layout Recipe

1. Wrap the app in `.app-shell` grid: topbar, main, footer.
2. Use `.topbar-inner` with `width: min(1024px, calc(100vw - 32px))`.
3. Use `.main` with `padding: 24px 16px 120px`.
4. Pick one content width based on page type.
5. Use sparse page sections, not decorative cards.
6. Use full-width footer border with constrained content padding.

### Copy Tone

- Indonesian UI copy should be concise, warm, and practical.
- Prefer direct labels: `Donasi`, `Pengaturan`, `Statistik`, `Cek status pembayaran`.
- Helper text should explain outcome, not repeat the label.
- Avoid overly promotional language.

### Pixel Matching Checklist

- Font is Inter.
- Body minimum width is 320px.
- Main top padding is 24px desktop, 20px mobile.
- Topbar is 66px desktop, 58px mobile.
- Default panel border is `1px solid var(--soft-border)`.
- Default card radius is 8px.
- Primary button min height is 48px.
- Settings controls min height is 36px.
- Footer has full-width top border.
- All letter spacing is `0`.

## 10. Starter CSS

Use this as the base for a new app:

```css
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap");

:root {
  --app-bg: #fafafa;
  --surface: #fff;
  --text: #171717;
  --muted: #707070;
  --faint: #8a8a8a;
  --border: #e1e1e1;
  --soft-border: #dedede;
  --hover: #e8e8e8;
  --control-bg: #fff;
  --control-selected: #f3f3f3;
  --shadow: rgba(0, 0, 0, 0.1);
  --correct-bg: #f0f8f3;
  --correct-border: #81b29a;
  --correct-text: #171717;
  --incorrect-bg: #fff1f1;
  --incorrect-border: #d66b6b;
  --incorrect-text: #171717;
  --bar-bg: #f0f0f0;
  --danger-bg: #fde1e1;
  --danger-text: #f00000;
  --danger-hover: #ffd6d6;
  color: var(--text);
  background: var(--app-bg);
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
}

:root[data-theme="dark"] {
  --app-bg: #111;
  --surface: #181818;
  --text: #f3f3f3;
  --muted: #a9a9a9;
  --faint: #8d8d8d;
  --border: #303030;
  --soft-border: #3a3a3a;
  --hover: #242424;
  --control-bg: #151515;
  --control-selected: #262626;
  --shadow: rgba(0, 0, 0, 0.36);
  --correct-bg: rgba(129, 178, 154, 0.1);
  --correct-border: #2bad6e;
  --correct-text: #a8e6c9;
  --incorrect-bg: rgba(214, 107, 107, 0.1);
  --incorrect-border: #e63946;
  --incorrect-text: #ffb3b3;
  --bar-bg: #222;
  --danger-bg: rgba(240, 0, 0, 0.15);
  --danger-text: #ff6e6e;
  --danger-hover: rgba(240, 0, 0, 0.25);
  color-scheme: dark;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-width: 320px;
  min-height: 100vh;
  background: var(--app-bg);
  color: var(--text);
}

button,
input,
textarea,
select {
  font: inherit;
}

.app-shell {
  min-height: 100vh;
  display: grid;
  grid-template-rows: 66px 1fr auto;
}

.main {
  display: flex;
  justify-content: center;
  padding: 24px 16px 120px;
}

.primary-button {
  min-height: 48px;
  border: 1px solid var(--text);
  border-radius: 9px;
  background: var(--text);
  color: var(--app-bg);
  font-weight: 500;
  cursor: pointer;
}

.secondary-button {
  min-height: 42px;
  padding: 0 16px;
  border: 1px solid var(--soft-border);
  border-radius: 8px;
  background: var(--surface);
  color: var(--text);
  cursor: pointer;
}
```
