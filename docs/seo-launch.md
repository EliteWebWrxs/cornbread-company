# SEO launch checklist

Canonical host: **https://www.cornbreadandcompany.com**
Set in `src/lib/site.js` as `origin`. Everything else derives from it — canonical
tags, `og:url`, absolute OG image URLs, the sitemap and robots.txt.

---

## 1. Redirect the apex to www (do this first)

The site declares `www` as canonical. If `cornbreadandcompany.com` _also_ serves
the site, Google sees two copies of every page. The canonical tag is a hint;
a redirect is the fix.

In Vercel → Project → Settings → Domains, add both and set
`www.cornbreadandcompany.com` as **Primary**. Vercel then 301s the apex to it.

Verify after DNS propagates:

```bash
curl -sI https://cornbreadandcompany.com | grep -i "^location"
# expect: location: https://www.cornbreadandcompany.com/
```

If you would rather drop the `www`, change `origin` in `src/lib/site.js` to the
apex and make the apex Primary instead. Pick one and never serve both.

## 2. Confirm what ships

```bash
curl -s https://www.cornbreadandcompany.com/robots.txt
curl -s https://www.cornbreadandcompany.com/sitemap.xml
curl -s https://www.cornbreadandcompany.com/ | grep -E 'canonical|og:image'
```

`robots.txt` should allow crawling and name the sitemap. If it instead says
`Disallow: /`, then `origin` is empty — the site has a deliberate guard that
blocks indexing until a canonical host is set.

## 3. Google Search Console

1. Add `www.cornbreadandcompany.com` as a property (or a Domain property, which
   covers both variants).
2. Submit `/sitemap.xml`.
3. Use **URL Inspection → Request indexing** on `/` and `/catering` to prime it.
4. Check **Page indexing** after a week for anything excluded.

## 4. Google Business Profile

For a local caterer this usually drives more enquiries than the website.

- Name must match the site exactly: **Cornbread & Company**.
- Hours: Sun–Thu 11–8, Fri 11–5, **Saturday closed**.
- Set it up as a service-area business covering the Denver metro counties listed
  on `/contact`; no storefront address is published yet.
- Add the logo and the photos from `/gallery`.

## 5. Social previews

Cards live in `static/og/` at 1200x630 and are regenerated with:

```bash
node scripts/make-og.mjs
```

Re-run after changing the logo or the source photography. Validate once live:

- Facebook: https://developers.facebook.com/tools/debug/
- LinkedIn: https://www.linkedin.com/post-inspector/
- X/Twitter: paste a link into a draft post

Facebook and LinkedIn cache aggressively — use the debuggers to force a refresh
after any change to a card.

## 6. Still outstanding

| Item                                             | Blocks                                      |
| ------------------------------------------------ | ------------------------------------------- |
| Apex -> www redirect (step 1)                    | duplicate content                           |
| Gmail app password is rejected                   | the inquiry form cannot send                |
| Restaurant address once signed                   | full `LocalBusiness` schema, GBP storefront |
| Real reviews before any `aggregateRating` markup | never fake these                            |

Run `node --env-file=.env scripts/verify-mail.mjs` to re-test the mail
credentials without sending anything.
