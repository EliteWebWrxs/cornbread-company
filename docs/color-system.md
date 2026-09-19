# Color System — Black, Gold & Espresso

Black and gold are the brand and they stay. **Espresso is the third color**, and it is
what makes the pair accessible.

All ratios below are measured with the WCAG 2.x relative-luminance formula. Re-run
`node scripts/contrast.mjs` after changing any token.

---

## 1. The actual problem (it is not gold on black)

| Pair                                   | Ratio      | Body text | Verdict                                |
| -------------------------------------- | ---------- | --------- | -------------------------------------- |
| Gold `#D4AF37` on near-black `#0F0E0C` | **9.18:1** | AAA       | Fine. Never was the issue.             |
| Gold on pure black `#000000`           | **9.99:1** | AAA       | Fine.                                  |
| Black text on gold `#D4AF37`           | **9.18:1** | AAA       | Fine — this is your button.            |
| Gold text on white `#FFFFFF`           | **2.10:1** | FAIL      | Fails even large-text 3:1.             |
| Gold text on cream `#FAF7F0`           | **1.97:1** | FAIL      | Fails everything.                      |
| **White text on a gold button**        | **2.10:1** | FAIL      | The most common way to get this wrong. |

Gold is a _light_ color. On black it is one of the highest-contrast pairings you could
pick. It only fails when it is asked to sit on something else light, or to pair with
white.

**So the fix is not "make gold darker."** Darkening gold until it reads on cream turns it
into brown and you lose the brand. The fix is to stop asking gold to do a job it cannot
do, and give that job to a third color.

---

## 2. What the third color has to be

Not another accent. Adding burgundy or green does not fix anything, because the gap is
not "we need more color" — it is **"nothing can carry text on a light surface."**

What is missing is a _workhorse_: a warm dark neutral that reads at length, on light
backgrounds, at small sizes.

**Espresso `#3E2A1E`** — 12.62:1 on cream, AAA. It is warm enough to sit beside gold
without going cold or corporate, and it is on-brand for this business: cast iron, smoke,
cornbread crust, BBQ bark.

### Alternates, if espresso is too brown

Both are verified and both work — but as **accents**, not as body text. You still need
espresso (or black) for running copy.

| Color         | Hex       | On cream   | Reads as                               |
| ------------- | --------- | ---------- | -------------------------------------- |
| Oxblood       | `#7B2D26` | 8.74:1 AAA | Upscale, Southern, a little formal     |
| Collard green | `#2F5D3A` | 7.14:1 AAA | Earthy, ties to the greens on the menu |

---

## 3. The palette

| Token            | Hex       | Job                                                                                                             |
| ---------------- | --------- | --------------------------------------------------------------------------------------------------------------- |
| `black`          | `#0F0E0C` | Primary dark surface. Also text on light (18.03:1). Warm near-black, not pure black — sits better next to gold. |
| `espresso`       | `#3E2A1E` | **Third color.** Body text on light (12.62:1). Secondary dark surface.                                          |
| `espresso-muted` | `#5C4A38` | Secondary/supporting text on light (7.88:1).                                                                    |
| `cream`          | `#FAF7F0` | Primary light surface. Warmer than white, less glare, more premium.                                             |
| `cream-shade`    | `#F0EAE0` | Inset panels and **decorative** rules only (1.12:1 — not a functional border).                                  |
| `rule`           | `#8F7D63` | Functional borders on cream (3.72:1 — meets 1.4.11).                                                            |
| `rule-dark`      | `#6B5F4E` | Functional borders on black (3.10:1).                                                                           |
| `gold`           | `#D4AF37` | Accent on **dark surfaces only** (9.18:1 on black).                                                             |
| `gold-light`     | `#E8C55A` | Hover state on dark (11.54:1).                                                                                  |
| `bronze`         | `#6B4E0F` | Gold-**flavored** text on light (7.21:1) + focus ring on light.                                                 |
| `danger`         | `#A4221B` | Form errors on cream (6.95:1).                                                                                  |
| `success`        | `#2F5D3A` | Confirmations on cream (7.14:1).                                                                                |

`bronze` is the release valve. When a designer wants "gold text" on a light section —
an eyebrow label, a price, a small-caps heading — use bronze. It reads as the same
metallic family and it passes at 7.21:1.

---

## 4. Rules

### Always

- Gold on black, or black on gold. Both are 9.18:1.
- Cream `#FAF7F0` as the light surface, not `#FFFFFF`. Warmer, on-brand, easier to read on.
- Espresso for running copy on light surfaces.
- Bronze when you want a gold _feeling_ on a light surface.
- Gold buttons get **black** text.

### Never

- ❌ Gold text on white or cream — 1.97:1
- ❌ White text on a gold button — 2.10:1
- ❌ Gold as a focus ring on a light surface — 1.97:1, fails the 3:1 non-text rule
- ❌ `cream-shade` as an input border — 1.12:1
- ❌ Gold for error or required-field text
- ❌ Color alone to signal state. The nav's active item gets a gold underline _and_ gold
  text _and_ `aria-current="page"`.

### The focus-ring trap

Focus indicators need 3:1 against their background (WCAG 1.4.11). A gold ring is the
obvious choice for a gold brand and it **fails on every light surface** — 1.97:1.

Handled in `app.css`: light surfaces get a bronze ring; anything inside `.on-dark`
switches to gold. Put `.on-dark` on the dark header, footer, and any dark section.

---

## 5. Suggested page composition

Alternating dark and light bands is what lets gold appear often enough to feel like the
brand, while all body copy still lands on cream at 12:1+.

```
┌─────────────────────────────────────┐
│ HEADER    black + gold wordmark     │  gold 9.18:1
├─────────────────────────────────────┤
│ HERO      black, gold display type  │  gold 9.18:1
│           [gold button, black text] │  9.18:1
├─────────────────────────────────────┤
│ BODY      cream + espresso copy     │  12.62:1
│           bronze eyebrow labels     │  7.21:1
├─────────────────────────────────────┤
│ FEATURE   espresso + cream copy     │  12.62:1
│           gold accents              │  6.42:1 (large text only)
├─────────────────────────────────────┤
│ FOOTER    black + gold + cream      │  9.18 / 18.03:1
└─────────────────────────────────────┘
```

One caveat on that feature band: gold on espresso is **6.42:1** — AAA for large text,
AA for body. Fine for headings and accents; do not set long paragraphs in gold there.

---

## 6. Verifying

`scripts/contrast.mjs` computes every pair in this document. Run it after any token
change:

```bash
node scripts/contrast.mjs
```

Automated checks catch contrast on rendered pages, not tokens in isolation — worth
adding once there are real pages:

```bash
npx @axe-core/cli http://localhost:5173
npx lighthouse http://localhost:5173 --only-categories=accessibility
```
