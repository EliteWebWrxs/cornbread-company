<script>
  import Hero from '$lib/components/Hero.svelte';
  import Seo from '$lib/components/Seo.svelte';
  import Closing from '$lib/components/Closing.svelte';
  import { menu } from '$lib/menu';
  import { faqs } from '$lib/faq';
</script>

<Seo
  title="Catering FAQ | Cornbread & Company Denver"
  description="A little clarity before we gather. Here’s how to plan your menu, timing and service."
/>
<Hero
  title="Frequently Asked Questions"
  description="A little clarity before we gather. Here’s how to plan your menu, timing and service."
  eyebrow="Denver metro · Southern food & BBQ"
/>
<section class="page-gutter max-w-4xl py-14 md:py-24">
  {#each faqs as faq}<details>
      <summary>{faq.question}</summary>
      <p>{faq.answer}</p>
    </details>{/each}
</section>
<Closing />
