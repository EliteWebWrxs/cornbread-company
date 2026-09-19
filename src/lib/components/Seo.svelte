<script>
  import { page } from '$app/state';
  import { site } from '$lib/site';
  import { schema } from '$lib/seo/schema';
  let { title, description } = $props();
  const canonical = $derived(site.origin ? new URL(page.url.pathname, site.origin).href : '');
</script>

<svelte:head
  ><title>{title}</title><meta name="description" content={description} /><meta
    property="og:title"
    content={title}
  /><meta property="og:description" content={description} /><meta
    property="og:type"
    content="website"
  /><meta property="og:site_name" content={site.name} /><meta
    name="twitter:card"
    content="summary"
  />{#if canonical}<link rel="canonical" href={canonical} /><meta
      property="og:url"
      content={canonical}
    />{:else}<meta
      name="robots"
      content="noindex, nofollow"
    />{/if}{@html '<script type="application/ld+json">' +
    schema(page.url.pathname, title.split(' | ')[0]) +
    '</' +
    'script>'}</svelte:head
>
