import { site } from '$lib/site';
import { menu } from '$lib/menu';
import { faqs } from '$lib/faq';

export const prerender = true;

/**
 * /llms.txt — a concise, structured summary for language models that read the
 * site (see llmstxt.org). Generated from the same data the pages render, so it
 * cannot drift out of sync with the menu, hours or service area.
 */
export function GET() {
  const url = (/** @type {string} */ path) =>
    site.origin ? new URL(path, site.origin).href : path;

  /**
   * @param {string} path
   * @param {string} label
   * @param {string} [note]
   */
  const link = (path, label, note) => `- [${label}](${url(path)})${note ? `: ${note}` : ''}`;

  const body = `# ${site.name}

> Family-run soul food and BBQ catering serving the Denver metro area. Catering is
> the main business; a permanent restaurant location has not been announced yet.

${site.tagline}. Rooted in Love, Seasoned with Soul.

## Key facts

- Service area: Denver metro and surrounding suburbs${
    site.origin ? '' : ' (see the contact page for the full list)'
  }.
- Counties served: ${Object.keys(site.areas).join(', ')}.
- Hours: ${site.hours.map(([day, time]) => `${day} ${time}`).join('; ')}.
- **Closed Saturdays.** This applies to catering as well as orders.
- Ordering: by phone or through the enquiry form. There is no online checkout.
- Phone: ${site.phones.map((line) => line.display).join(' or ')}
- Email: ${site.email}
- Beef ribs are market price. Premium meats rotate weekly and are not served daily.

## Pages

${link('/', 'Home', 'overview of the catering service and the kitchen')}
${link('/catering', 'Catering', 'how catering works, serving sizes, delivery area, enquiry form')}
${link('/catering/corporate', 'Corporate catering', 'weekday office lunches, invoicing, lead times')}
${link('/catering/private', 'Private events', 'family gatherings, church events, repasts and memorials')}
${link('/menu', 'Menu', 'full menu of meats, sides and desserts')}
${link('/specials', 'Weekly specials', 'rotating premium meats and dessert of the week')}
${link('/order', 'How to order', 'pickup and ordering, lead times, hours')}
${link('/about', 'Our story', 'the family behind the kitchen')}
${link('/gallery', 'Gallery', 'photographs of the food, events and the team')}
${link('/contact', 'Contact and hours', 'phone, email, hours and full service area')}
${link('/faq', 'FAQ', `${faqs.length} answers on pricing, booking, delivery and Saturday availability`)}

## Menu

${menu
  .map(
    (section) =>
      `### ${section.name}\n\n${section.items.map((item) => `- ${item.name}`).join('\n')}`
  )
  .join('\n\n')}

## Optional

${link('/privacy', 'Privacy policy')}
${link('/accessibility', 'Accessibility statement')}
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}
