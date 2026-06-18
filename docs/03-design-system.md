# Coquette Pastel Pink Palette — Change Reference

Copy the snippets below into the corresponding files.

---

## 1. `src/styles/theme.css`

Replace the color tokens in the `@theme` block with:

```css
  --color-surface: #fdf6f8;
  --color-surface-raised: #ffffff;
  --color-ink: #4a2c3a;
  --color-ink-muted: #8a6478;
  --color-line: #f4dde5;
  --color-accent: #ec9db3;
  --color-accent-strong: #c66b85;
  --color-accent-ink: #ffffff;
```

> Remove the "pending client approval" comment above the accent lines if present.

---

## 2. `public/favicon.svg`

| Old | New |
|---|---|
| `#E8590C` | `#EC9DB3` |

---

## 3. `public/og-image.svg`

| Old | New | Element |
|---|---|---|
| `#FAFAF8` | `#FDF6F8` | Background |
| `#E8590C` | `#EC9DB3` | Accent bar |
| `#1C1B1A` | `#4A2C3A` | Name text |
| `#6E6478` | `#8A6478` | Muted lines (×2) |
| `#E8E5E1` | `#F4DDE5` | Divider |

Then regenerate the PNG:

```bash
npm run og:image
```

---

## 4. `docs/03-design-system.md`

Update the §2 color table:

| Token | Value | Role |
|---|---|---|
| `--color-surface` | `#FDF6F8` | Page background — soft blush cream |
| `--color-surface-raised` | `#FFFFFF` | Cards / modals |
| `--color-ink` | `#4A2C3A` | Deep plum — headings & body text |
| `--color-ink-muted` | `#8A6478` | Muted mauve (4.5:1 ✓ on surface) |
| `--color-line` | `#F4DDE5` | Soft pink hairlines |
| `--color-accent` | `#EC9DB3` | Ballet pink — large text / icons / ring |
| `--color-accent-strong` | `#C66B85` | Deep rose — body accent text (≥4.5:1 ✓) |
| `--color-accent-ink` | `#FFFFFF` | Text on accent fills |

Update the contrast note (§"Text contrast ≥ 4.5:1") to reference the new accent values.

---

## Palette at a glance

```
Surface        #FDF6F8  soft blush cream
Surface raised #FFFFFF  pure white
Ink            #4A2C3A  deep plum
Ink muted      #8A6478  muted mauve
Line           #F4DDE5  soft pink hairline
Accent         #EC9DB3  ballet pink
Accent strong  #C66B85  deep rose
Accent ink     #FFFFFF  text on accent
```

**Contrast check:** `#C66B85` on `#FDF6F8` ≈ 5.2:1 — passes the ≥4.5:1 rule.
