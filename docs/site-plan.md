# Cornbread & Company — Site & SEO Plan

**Model:** Catering-first service-area business. Restaurant storefront TBD.
**Service area:** Denver metro and surrounding suburbs.
**Ordering:** Click-to-call + inquiry forms. No cart, no payments, no PCI scope.
**Content scope:** Core pages. No blog at launch.

---

## 1. Three things to resolve before content is written

### 1.1 Saturday is closed, and Saturday is the biggest catering day

This is the most important strategic fact in the brief. Weddings, reunions, graduation
parties and birthday parties are overwhelmingly Saturday events. A catering-first
business observing Saturday Sabbath cannot serve that demand.

**This is not a problem to fix — it is a positioning decision to make deliberately.**
The good news: the stated hours align almost perfectly with the _higher-margin, more
repeatable_ side of catering.

| Segment                                | Day               | Fits your hours? |
| -------------------------------------- | ----------------- | ---------------- |
| Corporate lunch catering               | Mon–Fri           | Yes — ideal      |
| Church events, repasts, after-service  | Sunday            | Yes — ideal      |
| Weekday office meetings, training days | Mon–Thu           | Yes              |
| Friday evening gatherings              | Fri (closes 5 PM) | Partial          |
| Sunday family reunions                 | Sunday            | Yes              |
| Weddings, Saturday parties             | Saturday          | **No**           |

Corporate weekday catering is more profitable per hour, repeats monthly, and pays on
invoice rather than haggling. Sunday repast and church catering is the deepest, most
loyal vertical in soul food, and it is almost entirely Sunday. **Lean into both.** Denver
makes this easier than most markets — see §3.

**Decide:** do you want to offer Friday drop-off for Saturday events (reheat-ready pans
delivered before sundown)? It recovers part of the Saturday market without working the
Sabbath. If yes, it becomes a named product on the catering page and an FAQ entry. If
no, the FAQ answers it plainly and we stop spending copy on it.

### 1.2 "Six days a week" vs. "location to be announced"

The brief says the business "operates as a full-service BBQ and soul-food restaurant six
days a week" and also that the permanent location is TBD. Those cannot both be true of
the same thing right now. Which is it today?

- **Already serving food** (food truck, pop-up, ghost kitchen, commissary) — then the
  site says so, names the pickup point, and the hours are real operating hours.
- **Catering only, restaurant coming** — then the hours are _kitchen and order hours_,
  and the storefront gets a "coming soon" treatment with email capture.

Every page's copy, the hours block, and the schema depend on the answer. **Top blocker.**
The plan below assumes the second case and is built so the first requires swapping one
config file.

Related, and worth confirming early: catering in Colorado has to come out of a licensed
commercial kitchen, and retail food licensing in this metro is handled at the
city/county level — Denver through DDPHE, and separately in Aurora, Jefferson County,
Adams County and so on. If the plan is to cater across county lines, confirm with each
relevant authority what that requires before the site promises a service area it cannot
legally serve. I'd verify this directly rather than taking my summary as authoritative.

### 1.3 Name: "and" or "&"

The brief uses **Cornbread and Company** in the header and **Cornbread & Company** in
the hours section. For local SEO the business name must be byte-identical everywhere:
site, Google Business Profile, Facebook, invoices, the sign on the building.

**Recommendation:** display as **Cornbread & Company** (shorter in title tags, reads
more premium), register `"Cornbread and Company"` as `alternateName` in schema so both
spellings rank. Pick one today and never vary it.

---

## 2. Brand standards

| Item                 | Value                                                            |
| -------------------- | ---------------------------------------------------------------- |
| Display name         | Cornbread & Company                                              |
| Schema alternateName | Cornbread and Company                                            |
| Primary tagline      | Bringing People Together, One Plate at a Time.                   |
| Secondary tagline    | Rooted in Love, Seasoned with Soul.                              |
| Colors               | Black and gold                                                   |
| Voice                | Southern, upscale, warm, soulful, family-first. Never fast-food. |

**Voice rules for writers**

- Write like a person who cooks, not a marketer. "We smoke ribs low and slow" beats
  "premium artisanal BBQ experience."
- Family words earn their place: family, gathering, table, home, plate, Sunday.
- Never say: artisanal, elevated, curated, culinary journey, mouthwatering, "nestled."
- Premium is shown through specificity and photography, not adjectives. "Oxtails,
  braised until they fall off the bone" is premium. "Premium oxtails" is not.
- The Sabbath is stated plainly and without apology. It is a trust signal, not a
  disclaimer. One clean sentence; no explanation owed to anyone.

---

## 3. Market & service area — Denver metro

### 3.1 Why the Sabbath constraint hurts less in Denver than elsewhere

Denver metro is one of the stronger corporate-catering markets in the country: dense
office corridors, a large healthcare and government employer base, and a sprawl pattern
that means most offices are not walking distance from good food. Weekday office catering
is a Monday–Friday business, which is exactly the window Cornbread & Company is open.

There is also a real gap worth naming: Denver has far fewer established soul food and
Southern BBQ caterers than a Southern metro of comparable size. The category is less
crowded here, which means ranking for `soul food catering denver` is a genuinely
winnable target rather than a multi-year fight.

> I have not validated search volumes or audited who currently ranks. Both the
> `marketing:ahrefs` and `marketing:similarweb` connectors need authorizing before I can
> pull real numbers — they are listed but not connected in this session. Treat everything
> in §5 as a reasoned hypothesis until then.

### 3.2 Service area, by county

Publish this list — service-area businesses that name their areas rank better for
`near me` searches in those areas than ones that say "Denver metro."

| County     | Cities to name                                                                    |
| ---------- | --------------------------------------------------------------------------------- |
| Denver     | Denver, Five Points, Park Hill, Montbello, Green Valley Ranch, Central Park, RiNo |
| Arapahoe   | Aurora, Centennial, Englewood, Greenwood Village, Glendale, Littleton             |
| Adams      | Thornton, Westminster, Northglenn, Commerce City, Brighton, Federal Heights       |
| Jefferson  | Lakewood, Arvada, Wheat Ridge, Golden                                             |
| Douglas    | Highlands Ranch, Lone Tree, Parker, Castle Rock                                   |
| Broomfield | Broomfield                                                                        |

**Set a delivery radius and fee tiers before publishing this.** Castle Rock to Broomfield
is roughly 50 miles. "Denver metro and surrounding suburbs" is a reasonable brand promise
and an unreasonable operational one. Recommend three tiers — core (free over a minimum),
extended (flat fee), and by-quote beyond that — and say so on `/catering`.

### 3.3 Office corridors to target for corporate catering

More useful than city names, because this is where the buyers actually sit:

- **Denver Tech Center** (Greenwood Village / Centennial) — the single densest corporate
  catering market in the metro
- **Downtown Denver / LoDo** — law, finance, agencies
- **Anschutz Medical Campus & Fitzsimons**, Aurora — very large healthcare employer base,
  round-the-clock shift meals, and departmental budgets
- **Interlocken**, Broomfield — tech and office parks
- **Meridian**, Lone Tree
- **Federal Center**, Lakewood — government offices

Name two or three of these explicitly in `/catering/corporate` copy. Specificity like
"we deliver to the Tech Center and downtown" outperforms "we serve the Denver area."

### 3.4 A local content angle worth checking

Five Points is Denver's historically Black neighborhood — once known as the "Harlem of
the West" — with real Southern food and jazz heritage. If your family has Denver roots,
or the business has any genuine connection to that community, `/about` is where it
belongs, and it is strong local-relevance signal.

**Only if it is true.** Do not manufacture a heritage connection. An invented local story
is the fastest way to lose the community whose referrals this business will run on.

---

## 4. Sitemap

```
/                        Home
/catering                Catering hub                  [PRIMARY MONEY PAGE]
  /catering/corporate    Corporate & office catering
  /catering/private      Private events & celebrations
/menu                    Full menu
/specials                Weekly specials & premium meats
/order                   How to order / pickup
/about                   Our story + the family
/gallery                 Food & event photography
/contact                 Contact, hours, service area
/faq                     Frequently asked questions

/privacy                 Privacy policy
/accessibility           Accessibility statement
/404                     Not found
```

11 public pages. No blog. No cart, checkout, or account pages.

**Why catering is split into three pages:** "corporate catering" and "party catering" are
different searchers with different budgets, objections and timelines. An office manager
booking a recurring Tuesday lunch and a woman planning her father's repast do not need
the same page. One combined page ranks well for neither. Three tightly interlinked pages
is the whole service-area SEO play.

**Deferred — city landing pages.** The standard next move for a service-area business is
a page per city (`/catering/aurora`, `/catering/lakewood`, …). It works, but only with
genuinely distinct content per page; twenty near-identical pages are doorway pages and
Google demotes them. Recommendation: launch without them, then add **three to five**
once you have real event photos and testimonials from those areas — Aurora, Denver Tech
Center, Lakewood, Westminster/Thornton. This is outside the "core pages only" scope you
set, so flagging it rather than planning it.

---

## 5. Keyword map

Each page owns one primary term. No two pages target the same head term — that is
cannibalization and it costs you both rankings.

| Page                  | Primary keyword               | Supporting terms                                                                                         |
| --------------------- | ----------------------------- | -------------------------------------------------------------------------------------------------------- |
| `/`                   | soul food catering denver     | bbq catering denver, southern food denver                                                                |
| `/catering`           | soul food catering denver     | catering denver, southern catering, bbq catering near me                                                 |
| `/catering/corporate` | corporate catering denver     | office lunch catering denver, business catering, denver tech center catering                             |
| `/catering/private`   | private event catering denver | family reunion catering, repast catering denver, church event catering, graduation party catering denver |
| `/menu`               | soul food menu                | bbq menu, fried chicken, catfish, mac and cheese, peach cobbler                                          |
| `/specials`           | oxtails denver                | smoked brisket denver, prime rib, weekly specials                                                        |
| `/order`              | soul food takeout denver      | soul food near me, pickup                                                                                |
| `/about`              | _brand terms_                 | cornbread and company, black owned caterer denver                                                        |
| `/gallery`            | _supporting_                  | soul food catering photos                                                                                |
| `/faq`                | _long-tail capture_           | how much does catering cost per person, catering for 50 people                                           |

### Two underserved opportunities

**`repast catering denver`** — Repast (the meal after a funeral) is a deep, urgent,
high-intent vertical. Families need 40–80 plates on short notice and are not price
shopping. It is nearly always a weekday or Sunday, which fits your hours exactly, and
almost no caterer in this metro targets the term directly. Handle it on
`/catering/private` with genuine sensitivity: a short calm section, no sales language, a
direct phone number. Done right it becomes a referral engine through churches and funeral
homes — which is the most durable marketing channel this business will ever have.

**`black owned caterer denver`** and related terms — a real search pattern with
meaningful volume, and Denver has active directories and networks that drive referrals.
Worth owning on `/about` if it reflects the business.

---

## 6. Page specifications

Title tags shown with character counts. Target ≤ 60 so they do not truncate. Meta
descriptions target 140–155.

---

### 6.1 `/` — Home

**Job:** in five seconds, establish what this is, that it is real food by real people,
and push to catering.

| Field         | Value                                                                                                                                                        |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Title         | `Denver Soul Food & BBQ Catering \| Cornbread & Company` (53)                                                                                                |
| Meta          | `Family-run soul food and BBQ catering in Denver. Smoked ribs, fried chicken, oxtails and homemade sides for offices, church events and celebrations.` (150) |
| H1            | Bringing People Together, One Plate at a Time                                                                                                                |
| Primary CTA   | Request Catering                                                                                                                                             |
| Secondary CTA | See the Menu                                                                                                                                                 |

**Sections, in order**

1. **Hero** — Full-bleed food photograph, black overlay, gold type. H1 + one line of
   subcopy + two buttons. This image is the LCP element; priority-loaded, never lazy.
2. **The one-liner** — Two sentences on what Cornbread & Company is, and that it serves
   the Denver metro. Lifted from the mission statement but cut to half its length.
3. **What we cater** — Three cards → `/catering/corporate`, `/catering/private`,
   `/order`. Each card: one photo, three words, one line.
4. **Meet the family** — Owner photograph, 60–80 words, link to `/about`. The highest-
   trust block on the site; it belongs on mobile's second scroll, not the footer. People
   hire caterers whose face they have seen.
5. **The food** — Six-to-eight item photo grid of signature dishes → `/menu`.
6. **This week** — Rotating premium special (oxtails / brisket / prime rib) + dessert of
   the week → `/specials`. Gives a reason to return.
7. **Service area** — Short line plus the county/city list from §3.2. Real local SEO value
   and it answers "do you come out this far" immediately.
8. **Hours & Sabbath** — Clean hours table. One sentence: _"We're closed Saturdays for
   Sabbath."_ No apology, no explanation.
9. **Closing CTA** — "Rooted in Love, Seasoned with Soul." + Request Catering.

**Schema:** `FoodEstablishment` (full org block, §7), `WebSite`, `BreadcrumbList`.

---

### 6.2 `/catering` — Catering Hub ⭐ primary money page

**Job:** convert an inquiry. Everything else on the site exists to feed this page.

| Field       | Value                                                                                                                                                             |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Title       | `Soul Food Catering Denver \| Cornbread & Company` (47)                                                                                                           |
| Meta        | `Southern soul food and BBQ catering across Denver metro. Corporate lunches, church events, reunions and celebrations. Request a quote for your gathering.` (152) |
| H1          | Soul Food & BBQ Catering in Denver                                                                                                                                |
| Primary CTA | Request a Quote                                                                                                                                                   |

**Sections**

1. **Hero** — A full catering spread, not a single plate. Buyers need to see volume and
   presentation.
2. **Why us** — Three proof points: family recipes, made-from-scratch sides, on-time
   delivery. Short, photo-backed.
3. **Choose your event** — Two prominent cards → `/catering/corporate`,
   `/catering/private`. The main internal links on the site.
4. **How catering works** — Four numbered steps: _Tell us about your event → We build
   your menu and quote → We cook and deliver → You host._ Removes fear of an unfamiliar
   process, which is the top reason catering inquiries never get sent.
5. **What's on the table** — Condensed menu by category → `/menu`. Do not duplicate the
   full menu here; it splits ranking signal between the two pages.
6. **Serving sizes & planning** — A pans-per-guest-count table. Heavily searched, genuinely
   useful, and almost no competitor publishes one. Strong SEO asset.
7. **Where we deliver** — Service area list plus the delivery tiers from §3.2.
8. **Availability & the Sabbath** — Which days you cater, handled before it becomes an
   objection.
9. **Inquiry form** — fields below.
10. **FAQ teaser** — Four questions → `/faq`.

**Inquiry form fields:** name, phone, email, event date, event type (select), guest count,
delivery city, service type (drop-off / setup / full service), notes. Phone, date and city
are what matter for follow-up; keep the rest optional or the form gets abandoned.

**Schema:** `Service` (serviceType: Catering, `areaServed`, `provider` → org),
`BreadcrumbList`.

---

### 6.3 `/catering/corporate` — Corporate & Office Catering

**Job:** win recurring weekday business. Highest lifetime value on the site.

| Field | Value                                                                                                                                                      |
| ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Title | `Corporate Catering Denver \| Cornbread & Company` (47)                                                                                                    |
| Meta  | `Soul food catering for Denver offices, meetings and company events. Weekday delivery to DTC and downtown, per-person pricing, invoicing available.` (147) |
| H1    | Corporate & Office Catering                                                                                                                                |

**Sections**

1. Hero — a catered office spread, boxed lunches visible.
2. **Built for the workweek** — Lead with the hours as a _feature_: Monday through Friday
   delivery, exactly when offices need food.
3. **Where we deliver** — Name the corridors from §3.3 explicitly. Denver Tech Center,
   downtown, Anschutz, Interlocken.
4. **What we cater** — Team lunches, client meetings, training days, appreciation days,
   holiday parties, grand openings, shift meals.
5. **Packages** — Boxed individual lunches / buffet pans / full-service hot line. Give a
   per-person price range even if approximate. Pages with no price get _fewer_ inquiries,
   not more — buyers who cannot gauge fit simply do not call.
6. **Invoicing & billing** — State plainly that you invoice, accept PO numbers, and can
   provide a W-9 and COI. This is why an office manager picks one caterer over another,
   and it is missing from nearly every competitor site.
7. **Lead time & minimums** — Days of notice, headcount minimum.
8. Inquiry form (event type pre-set to Corporate).

**Schema:** `Service`, `BreadcrumbList`, `FAQPage` if 3+ Q&As are answered inline.

---

### 6.4 `/catering/private` — Private Events & Celebrations

**Job:** capture family and community events. Emotionally driven, photo-led.

| Field | Value                                                                                                                                                             |
| ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Title | `Private Event Catering Denver \| Cornbread & Co` (46)                                                                                                            |
| Meta  | `Soul food catering for family reunions, birthdays, graduations, church events and repasts across Denver metro. Homemade Southern food for your gathering.` (153) |
| H1    | Catering for Life's Gatherings                                                                                                                                    |

**Sections**

1. Hero — a family gathered around a table, if you have that photo. The warmest image you own.
2. **Events we cater** — Family reunions, birthdays, graduations, baby showers, church
   events, anniversaries. One line each, not a paragraph.
3. **Repast & memorial catering** — A separate, quieter section. Plain language, a direct
   phone number, no marketing voice, no "packages." Something close to: _"When your family
   is grieving, food should be one less thing to think about. Call us and we'll take care
   of it."_ No form here — a phone number.
4. **Sunday gatherings** — Own Sunday deliberately. After-church meals, Sunday reunions,
   family dinners. Your strongest available day, and culturally the right day for this food.
5. **Menu & serving sizes** — Link to `/menu`, repeat the guest-count table.
6. **Saturday events** — Handle honestly and once: closed Saturdays for Sabbath, plus the
   Friday drop-off option if you offer it.
7. Inquiry form + gallery strip → `/gallery`.

**Schema:** `Service`, `BreadcrumbList`.

---

### 6.5 `/menu` — Full Menu

**Job:** rank for dish-level searches and prove quality. High-traffic, low-conversion — so
every section ends pointing at catering.

| Field | Value                                                                                                                                                       |
| ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Title | `Menu — Soul Food, BBQ & Homemade Sides \| Cornbread & Co` (55)                                                                                             |
| Meta  | `Fried chicken, BBQ ribs, catfish, oxtails, mac and cheese, greens, yams and peach cobbler. See the full Cornbread & Company soul food and BBQ menu.` (149) |
| H1    | Our Menu                                                                                                                                                    |

Accessible anchor nav, then:

**Main Meats** — Fried Chicken · BBQ Ribs · Pork Ribs · Beef Ribs _(market price)_ ·
Wings · Fried Catfish · Buffalo Fish Ribs · Hot Links · Hot Dogs · Hamburgers

**Premium Weekly Specials** — Oxtails · Smoked Brisket · Prime Rib · seasonal premium
meats. Carries a visible notice: _limited availability, rotates weekly, not served daily._
Put it **above** the items, not in fine print below. Managing that expectation on the page
prevents the disappointed phone call.

**Sides** — Baked Beans · Macaroni & Cheese · Greens · Yams · Cornbread ·
Black-Eyed Peas · French Fries · House Salad · Fried Okra

**Desserts of the Week** — Banana Pudding · Peach Cobbler · Oreo Mudslide ·
**Pineapple Juice Cake**

> **Naming locked per the owner: the dessert is "Pineapple Juice Cake."** Not "Pineapple
> Cake." It appears that way everywhere — site, schema, printed menus, social. Four
> desserts total.

**Every item needs a 10–20 word description.** A bare list ranks for nothing and sells
nothing. "Macaroni & Cheese" is invisible to search; "Baked macaroni and cheese, sharp
cheddar, crisped at the edges" ranks and sells. Roughly 30 short descriptions — the
largest single copywriting task on the site.

**Price display:** recommendation for a catering-first model — show per-person and per-pan
catering pricing, keep individual plate prices off until the storefront opens. Beef Ribs
stays "Market Price."

**Schema:** `Menu` → `MenuSection` × 4 → `MenuItem` for every dish. Include `offers` only
where a real price exists.

---

### 6.6 `/specials` — Weekly Specials

**Job:** create a reason to return, and capture `oxtails denver` — one of the
highest-intent searches in the whole category.

| Field | Value                                                                                                                                                            |
| ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Title | `Weekly Specials — Oxtails, Brisket & Prime Rib` (46)                                                                                                            |
| Meta  | `Premium meats rotate weekly at Cornbread & Company. Oxtails, smoked brisket, prime rib and seasonal cuts, limited availability. See this week's special.` (152) |
| H1    | This Week at Cornbread & Company                                                                                                                                 |

Current special (large photo, availability, call-to-order) · dessert of the week · the full
premium rotation list · how specials work (limited, weekly, they sell out) · text/email
alert signup.

**Critical:** this page needs a visible "updated" date and must actually be updated. A
weekly-specials page showing a three-month-old special does more brand damage than having
no page at all. **If nobody will own updating it weekly, cut the page** and fold the
content into `/menu`. Decide the owner before it ships.

---

### 6.7 `/order` — How to Order

| Field | Value                                                                                                                                                     |
| ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Title | `Order Pickup & Takeout \| Cornbread & Company Denver` (51)                                                                                               |
| Meta  | `Call to place your Cornbread & Company order. Open Sunday–Thursday 11–8, Friday 11–5. Closed Saturday for Sabbath. Catering needs advance notice.` (148) |
| H1    | How to Order                                                                                                                                              |

Three paths: **call to order** (large tap-to-dial button — the primary mobile action),
**catering** → `/catering`, **weekly specials** → `/specials`. Plus hours, lead times, and
how far ahead to call for large orders.

Gated on §1.2 — with no pickup location yet, this page instead explains that catering and
pre-orders are available now and the storefront is coming, with email capture.

---

### 6.8 `/about` — Our Story

**Job:** E-E-A-T and trust. When people hand a stranger their family's event, this page
does more conversion work than any sales copy on the site.

| Field | Value                                                                                                                                                                       |
| ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Title | `Our Story — A Family Soul Food Kitchen \| Cornbread & Co` (55)                                                                                                             |
| Meta  | `Cornbread & Company is a family-run soul food and BBQ kitchen serving Denver. Meet the family behind the recipes and what Rooted in Love, Seasoned with Soul means.` (155) |
| H1    | Rooted in Love, Seasoned with Soul                                                                                                                                          |

**Sections**

1. **Owner portrait + the story** — Who started this, why, who taught them to cook. Name
   real people. Real names and faces are the strongest trust signal available, and the
   reason the professional photos matter.
2. **Denver roots** — Where the family is from, how they got here, what they cook and why.
   See §3.4 — only if genuine.
3. **Mission** — The mission statement, trimmed. It is currently one long sentence; break
   it into three short ones.
4. **What we believe about food** — Quality ingredients, scratch cooking, no shortcuts.
5. **The Sabbath** — A short, warm paragraph. The fuller explanation lives _here_, so every
   other page can state the fact and move on. It also explains the Friday 5 PM close, and
   tells customers something true about who they are hiring.
6. **The team** — Remaining owner/team photos with names and roles.
7. CTA → `/catering`.

---

### 6.9 `/gallery`

| Field | Value                                             |
| ----- | ------------------------------------------------- |
| Title | `Food & Event Photos \| Cornbread & Company` (41) |
| H1    | Our Food, Our People                              |

Sectioned: **The Food** / **Catering & Events** / **The Family**. Real alt text on every
image (§8). Lazy-load below the fold. Lightbox must be keyboard navigable and close on
Escape.

This page's real job is supporting `/catering/private` — people booking a family event want
to see you have actually done family events.

---

### 6.10 `/contact`

| Field | Value                                                                                                                                               |
| ----- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| Title | `Contact & Hours \| Cornbread & Company Denver` (44)                                                                                                |
| Meta  | `Call or message Cornbread & Company. Open Sunday–Thursday 11 AM–8 PM, Friday 11 AM–5 PM, closed Saturday for Sabbath. Serving Denver metro.` (139) |
| H1    | Get in Touch                                                                                                                                        |

Phone (tap-to-dial), email, contact form, full hours table, the §3.2 service area list,
social links.

**Do not publish a placeholder or approximate street address.** A wrong address in a Google
Business Profile is difficult to correct and can get the listing suspended. Until §1.2
resolves, the page states the service area and no street address.

---

### 6.11 `/faq`

**Job:** capture long-tail questions and kill objections before they cost inquiries. The
cheapest SEO on the site.

| Field | Value                                             |
| ----- | ------------------------------------------------- |
| Title | `Catering FAQ \| Cornbread & Company Denver` (41) |
| H1    | Frequently Asked Questions                        |

Each of these is a real search:

- How much does soul food catering cost per person?
- How many people does one pan feed?
- How far in advance do I need to book?
- What's your minimum order?
- What areas of Denver do you deliver to? — pull from §3.2, state the fee tiers
- Do you set up and serve, or drop off?
- **Are you open Saturdays?** — plain answer, Sabbath, what you offer instead
- Can you cater a Saturday wedding or party? — the honest answer, plus Friday drop-off if
  you offer it
- Do you cater repasts and memorial services?
- Can you invoice my company / provide a W-9?
- Are the premium meats always available?
- Do you offer vegetarian options? — **needs a decision.** Greens are often cooked with
  pork; this gets asked constantly and Denver skews more vegetarian than most metros. Decide
  and state it.
- Do you provide plates, utensils and chafing dishes?
- How long does the food stay hot?

**Schema:** `FAQPage`. Mark up only questions genuinely answered on the page.

---

## 7. Schema architecture

Single source of truth in `src/lib/seo/schema.js`, injected via `<svelte:head>`.

**Site-wide (`FoodEstablishment`)** — a service-area business, so **omit
`address.streetAddress`** and use `areaServed` until there is a real storefront.

```jsonc
{
  "@context": "https://schema.org",
  "@type": "FoodEstablishment",
  "name": "Cornbread & Company",
  "alternateName": "Cornbread and Company",
  "slogan": "Bringing People Together, One Plate at a Time.",
  "servesCuisine": ["Soul Food", "Southern", "Barbecue"],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Denver",
    "addressRegion": "CO",
    "addressCountry": "US"
  },
  "areaServed": [
    { "@type": "City", "name": "Denver" },
    { "@type": "City", "name": "Aurora" },
    { "@type": "City", "name": "Lakewood" },
    { "@type": "City", "name": "Arvada" },
    { "@type": "City", "name": "Westminster" },
    { "@type": "City", "name": "Thornton" },
    { "@type": "City", "name": "Centennial" },
    { "@type": "City", "name": "Englewood" },
    { "@type": "City", "name": "Littleton" },
    { "@type": "City", "name": "Broomfield" }
  ],
  "telephone": "<PHONE>",
  "priceRange": "$$",
  "hasMenu": "/menu",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
      "opens": "11:00",
      "closes": "20:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Friday",
      "opens": "11:00",
      "closes": "17:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "00:00",
      "closes": "00:00"
    }
  ]
}
```

`addressLocality: Denver` with no `streetAddress` is the correct shape for a service-area
business — it establishes the market without claiming a storefront. Saturday as
`00:00`–`00:00` is how you signal closed; it is what makes Google render "Closed" instead
of guessing.

**Per page:** `Menu`/`MenuSection`/`MenuItem` on `/menu` · `Service` with `areaServed` on
all three catering pages · `FAQPage` on `/faq` · `BreadcrumbList` everywhere below root ·
`ImageObject` on gallery items.

**Do not** add `aggregateRating` or `Review` markup until you have real, verifiable
reviews. Fabricated review markup risks a manual action.

---

## 8. Image plan

You are providing owner photos and food photos, so this matters — images are both the main
trust driver and the main performance risk.

| Asset                    | Pages                                                              |
| ------------------------ | ------------------------------------------------------------------ |
| Owner / family portraits | `/about` (hero + team), `/` (meet the family), `/catering/private` |
| Plated dishes            | `/menu`, `/` (food grid), `/gallery`                               |
| Full catering spreads    | `/catering`, `/catering/corporate`, `/gallery`                     |
| Boxed/office lunches     | `/catering/corporate`                                              |
| Event / people eating    | `/catering/private`, `/gallery`                                    |
| Premium meats            | `/specials`, `/menu`                                               |

**Technical**

- Use `@sveltejs/enhanced-img` — generates AVIF/WebP, emits `srcset`, and sets intrinsic
  `width`/`height` so images cannot cause layout shift.
- Hero images: `fetchpriority="high"`, never lazy-loaded. Everything below the fold:
  `loading="lazy"`.
- Deliver originals at 2400px on the long edge minimum; let the build downscale.
- Budget the largest hero under ~200KB after AVIF conversion.

**Filenames** — descriptive, hyphenated, keyword-bearing. Filenames are a real image-search
signal and `IMG_4471.jpg` throws it away.

```
cornbread-and-company-oxtails-soul-food-catering-denver.jpg
cornbread-and-company-smoked-bbq-ribs.jpg
cornbread-and-company-owner-portrait.jpg
cornbread-and-company-corporate-catering-denver.jpg
```

**Alt text** — describe the photo for someone who cannot see it. Never keyword-stuff.

- Good: `Slow-smoked pork ribs with baked beans and macaroni and cheese`
- Good: `The owners of Cornbread & Company standing in their kitchen`
- Bad: `soul food catering denver best bbq catering oxtails near me`
- Decorative textures: `alt=""` so screen readers skip them.

---

## 9. Technical SEO checklist

- [ ] One `<h1>` per page; headings nest without skipping levels
- [ ] Canonical URL on every page
- [ ] `sitemap.xml` generated at build (`src/routes/sitemap.xml/+server.js`)
- [ ] `robots.txt` — already present, update to reference the sitemap
- [ ] Open Graph + Twitter card tags with per-page images
- [ ] Tap-to-dial `tel:` links on every phone number
- [ ] Forms: real `<label>`s, visible focus states, honeypot + rate limiting
- [ ] **Gold-on-black contrast verified at 4.5:1 — gold on black frequently fails. Test the
      exact hex pair before it ships.**
- [ ] All interactive elements keyboard reachable; lightbox closes on Escape
- [ ] Hours in a real `<table>` with a caption, not a styled `<div>` grid
- [ ] Core Web Vitals: LCP < 2.5s, CLS < 0.1
- [ ] `prerender = true` stays on — every page here is static, so the site is fast and
      nearly free to host

### Off-site, and more important than anything above

**Google Business Profile.** For a local food business this drives more inquiries than the
website. GBP supports service-area businesses: you can hide the street address and declare
service areas instead — which fits this model. Note that verification generally still
requires a real address on file even when it is not shown publicly, so confirm the current
requirements when you set it up. It needs the resolved name, the hours with Saturday
closed, the Denver service areas, and photos.

Also worth pursuing locally: Denver Black-owned business directories, chamber listings, and
relationships with churches and funeral homes for repast referrals. For this business,
those referral relationships will likely outproduce search for the first year.

---

## 10. Build order

1. Config + layout: name, hours, phone, service area in one file; header/footer; schema helper
2. `/catering` + the inquiry form component
3. `/catering/corporate`, `/catering/private`
4. `/menu` (blocked on ~30 item descriptions)
5. `/` (blocked on hero photography)
6. `/about` (blocked on owner photos + the family story)
7. `/faq`, `/contact`
8. `/specials`, `/order`, `/gallery`
9. `/privacy`, `/accessibility`, `404`
10. Sitemap, OG images, Lighthouse + contrast audit

Catering ships first because it is the only page that makes money, and it can go live
before the photography and menu copy are done.

---

## 11. What is needed from you

| Item                                        | Blocks                                     |
| ------------------------------------------- | ------------------------------------------ |
| §1.2 — operating today, or catering-only?   | Everything. Top blocker.                   |
| §1.1 — Friday drop-off for Saturday events? | `/catering/private`, `/faq`                |
| Name: "and" vs "&"                          | All pages, schema, GBP                     |
| Phone number and email                      | Every page                                 |
| Delivery radius + fee tiers                 | `/catering`, `/faq`                        |
| ~30 menu item descriptions                  | `/menu`                                    |
| Catering price ranges (per person, per pan) | `/catering/corporate`, `/faq`              |
| Owner names, roles, the family story        | `/about`                                   |
| Photography                                 | `/`, `/about`, `/gallery`                  |
| Who updates `/specials` weekly              | Whether that page ships at all             |
| Vegetarian options — yes or no              | `/faq`, `/menu`                            |
| Licensing across counties (§1.2)            | How wide the published service area can be |
