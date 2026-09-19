import { site } from '$lib/site';

export const prerender = true;

export function GET() {
  // Without a canonical origin the pages already emit noindex (see Seo.svelte),
  // so robots must say the same thing rather than contradict it.
  const body = site.origin
    ? `User-agent: *\nAllow: /\n\nSitemap: ${new URL('/sitemap.xml', site.origin).href}\n`
    : `# No canonical origin set yet — site is not ready to be indexed.\n# Set \`origin\` in src/lib/site.js before launch.\nUser-agent: *\nDisallow: /\n`;

  return new Response(body, { headers: { 'Content-Type': 'text/plain' } });
}
