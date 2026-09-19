<script>
  import Hero from '$lib/components/Hero.svelte';
  import Seo from '$lib/components/Seo.svelte';
  import Closing from '$lib/components/Closing.svelte';
  import { site } from '$lib/site';
</script>

<Seo
  title="Accessibility | Cornbread & Company"
  description="Everyone should be able to find their way to the table."
/>
<Hero
  title="Accessibility Statement"
  description="Everyone should be able to find their way to the table."
  eyebrow="Denver metro · Southern food & BBQ"
/>
<section
  class="page-gutter border-rule/25 grid max-w-7xl gap-6 border-b py-14 md:grid-cols-[0.8fr_1.2fr] md:items-center md:gap-16 md:py-24"
>
  <h2 class="max-w-md">Using this website</h2>
  <p class="text-espresso-muted max-w-3xl text-lg leading-relaxed md:text-xl">
    We aim to make this site usable with a keyboard and assistive technology. Pages use descriptive
    headings, labeled forms, visible focus indicators and high-contrast colors. You can skip
    directly to the main content using the first keyboard link on every page.
  </p>
</section>
<section
  class="page-gutter border-rule/25 grid max-w-7xl gap-6 border-b py-14 md:grid-cols-[0.8fr_1.2fr] md:items-center md:gap-16 md:py-24"
>
  <h2 class="max-w-md">An ongoing commitment</h2>
  <p class="text-espresso-muted max-w-3xl text-lg leading-relaxed md:text-xl">
    We aim to meet WCAG 2.2 Level AA. This is a design goal, not a claim of independent
    certification. We continue to review navigation, readability and form behavior as content is
    added.
  </p>
</section>
<section
  class="page-gutter border-rule/25 grid max-w-7xl gap-6 border-b py-14 md:grid-cols-[0.8fr_1.2fr] md:items-center md:gap-16 md:py-24"
>
  <h2 class="max-w-md">Need help?</h2>
  <p class="text-espresso-muted max-w-3xl text-lg leading-relaxed md:text-xl">
    If something makes this site difficult to use, please tell us which page and what happened using
    the <a href="/contact">contact information</a> when it is available. Direct contact channels are still
    being finalized. Last updated September 19, 2026.
  </p>
</section>
<Closing />
