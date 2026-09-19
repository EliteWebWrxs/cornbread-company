import { site } from '$lib/site';
import { photos } from '$lib/photos';
import { menu } from '$lib/menu';
import { faqs } from '$lib/faq';
/** @param {string} path @param {string} title */
export function schema(path, title) {
  const url = (/** @type {string} */ p) => (site.origin ? new URL(p, site.origin).href : p);
  const business = {
    '@type': 'FoodEstablishment',
    name: site.name,
    alternateName: site.alternateName,
    slogan: site.tagline,
    servesCuisine: ['Soul Food', 'Southern', 'Barbecue'],
    hasMenu: url('/menu'),
    ...(site.phone ? { telephone: site.phone } : {}),
    ...(site.email ? { email: site.email } : {}),
    ...(site.phones?.length > 1
      ? {
          contactPoint: site.phones.map((line) => ({
            '@type': 'ContactPoint',
            contactType: 'Catering and orders',
            telephone: line.tel,
            areaServed: 'Denver metro'
          }))
        }
      : {}),
    areaServed: 'Denver metro',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        opens: '11:00',
        closes: '20:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Friday',
        opens: '11:00',
        closes: '17:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '00:00',
        closes: '00:00'
      }
    ]
  };
  /** @type {Record<string, unknown>[]} */
  const graph = [business];
  if (path === '/')
    graph.push({
      '@type': 'WebSite',
      name: site.name,
      ...(site.origin ? { url: site.origin } : {})
    });
  else
    graph.push({
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: url('/') },
        ...(path.startsWith('/catering/')
          ? [{ '@type': 'ListItem', position: 2, name: 'Catering', item: url('/catering') }]
          : []),
        {
          '@type': 'ListItem',
          position: path.startsWith('/catering/') ? 3 : 2,
          name: title,
          item: url(path)
        }
      ]
    });
  if (path.startsWith('/catering'))
    graph.push({
      '@type': 'Service',
      name: title,
      serviceType: 'Catering',
      provider: { '@type': 'Organization', name: site.name },
      areaServed: 'Denver metro'
    });
  if (path === '/menu')
    graph.push({
      '@type': 'Menu',
      name: 'Our menu',
      hasMenuSection: menu.map((section) => ({
        '@type': 'MenuSection',
        name: section.name,
        hasMenuItem: section.items.map((item) => ({ '@type': 'MenuItem', ...item }))
      }))
    });
  if (path === '/faq')
    graph.push({
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer }
      }))
    });
  if (path === '/gallery')
    graph.push(
      ...Object.values(photos).map((photo) => ({
        '@type': 'ImageObject',
        name: photo.title,
        description: photo.alt,
        contentUrl: url(photo.full),
        width: photo.width,
        height: photo.height
      }))
    );
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(
    /</g,
    '\u003c'
  );
}
