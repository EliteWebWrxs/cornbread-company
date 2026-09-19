<script>
  import { page } from '$app/state';
  import { site } from '$lib/site';
  import { schema } from '$lib/seo/schema';

  /**
   * @type {{
   *   title: string;
   *   description: string;
   *   image?: 'default' | 'catering' | 'menu';
   *   imageAlt?: string;
   * }}
   */
  let {
    title,
    description,
    image = 'default',
    imageAlt = 'Cornbread & Company — soul food and BBQ catering in Denver'
  } = $props();

  const canonical = $derived(site.origin ? new URL(page.url.pathname, site.origin).href : '');
  // Social crawlers do not resolve relative URLs, so the image must be absolute.
  const ogImage = $derived(site.origin ? new URL(`/og/${image}.jpg`, site.origin).href : '');
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />

  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content={site.name} />
  <meta property="og:locale" content="en_US" />

  {#if ogImage}
    <meta property="og:image" content={ogImage} />
    <meta property="og:image:secure_url" content={ogImage} />
    <meta property="og:image:type" content="image/jpeg" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content={imageAlt} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={ogImage} />
    <meta name="twitter:image:alt" content={imageAlt} />
  {:else}
    <!-- No absolute URL yet, so no image can be advertised. Fall back to the
         text-only card rather than pointing at something that will not load. -->
    <meta name="twitter:card" content="summary" />
  {/if}
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />

  {#if canonical}
    <link rel="canonical" href={canonical} />
    <meta property="og:url" content={canonical} />
  {:else}
    <!-- Pre-launch guard: without a canonical origin the site must not be
         indexed. Set `origin` in src/lib/site.js to turn indexing on. -->
    <meta name="robots" content="noindex, nofollow" />
  {/if}

  {@html '<script type="application/ld+json">' +
    schema(page.url.pathname, title.split(' | ')[0]) +
    '</' +
    'script>'}
</svelte:head>
