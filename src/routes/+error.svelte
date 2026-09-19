<script>
  import { page } from '$app/state';
  import Hero from '$lib/components/Hero.svelte';
</script>

<svelte:head
  ><title>{page.status} | Cornbread & Company</title><meta
    name="robots"
    content="noindex"
  /></svelte:head
><Hero
  eyebrow={String(page.status)}
  title={page.status === 404 ? 'This page is off the menu.' : 'Something went wrong.'}
  description={page.status === 404
    ? 'Let’s get you back to the table.'
    : 'Please try again in a moment.'}
  primary="/"
  primaryLabel="Back home"
/>
