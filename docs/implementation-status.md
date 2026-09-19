# Page implementation status

All 14 routes in the sitemap are implemented, with a shared responsive header/footer,
color tokens, page metadata, structured data, and prerendering. Unknown paths use the
SvelteKit error page. `/404` is also available as a standalone preview.

## Configuration

`src/lib/site.js` holds the name, contact details, production origin, hours and service
areas. Set `origin` to the verified HTTPS production URL to enable canonical URLs,
indexing and sitemap entries, then rebuild. Until then pages emit `noindex, nofollow`
and the sitemap is empty. The site currently follows the catering-first assumption;
changing operating model also requires reviewing the pickup and storefront copy.

## Content still needed

- Verified phone, email, operating model and production domain.
- Owner names and approved family story.
- Approved menu descriptions, prices, pan yields, lead times and order minimums.
- Confirmed delivery coverage and fee tiers; service formats and corporate paperwork.
- Dietary accommodations and the Friday drop-off decision.
- A weekly specials editor, actual selection and corresponding updated date.
- Review privacy text against the eventual hosting and inquiry providers.

There are 25 explicitly named dishes in the plan. Each has draft descriptive copy.
Seasonal premium cuts are mentioned without inventing an additional named dish.
User-provided photographs are now placed in the home, catering, menu, ordering,
story and gallery pages. All 15 supplied photos appear in the gallery. Original uploads
are preserved; responsive WebP derivatives live in `static/images/optimized`, with
metadata in `src/lib/photos.js` and shared rendering in `Photo.svelte`. Images have
intrinsic dimensions, descriptive alt text, and lazy loading below the fold. Hero
images load eagerly. The generated illustration is no longer referenced by the UI.

The gallery uses a native modal dialog with previous/next controls, left/right arrow
keys, Escape dismissal and native focus management. Gallery ImageObject schema is
included. Photos of additional dishes are shown in the gallery without silently adding
them to the approved menu. Owner names and the family story still need approved copy.

## Inquiries

Until `site.email` is configured, forms download a plain-text draft locally and clearly
state that it has not been sent. After configuration, they open the user's email app;
the user must send the message there. No backend submission, mailing list, analytics,
or payment integration is installed. Native validation and Saturday date validation
are included. A future submission service needs server validation, spam protection,
rate limiting and delivery verification before replacing this workflow.

## Validation

- `pnpm check`: zero errors and warnings.
- `pnpm build`: all pages prerender; missing internal routes fail the build.
- `node scripts/contrast.mjs`: approved palette pairs retain their documented contrast.
- Deployment adapter remains auto; choose the appropriate adapter for the host.
