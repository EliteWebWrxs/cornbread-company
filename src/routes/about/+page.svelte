<script>
  import Photo from '$lib/components/Photo.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import Seo from '$lib/components/Seo.svelte';
  import Closing from '$lib/components/Closing.svelte';
</script>

<Seo
  title="Our Story — A Family Soul Food Kitchen | Cornbread & Co"
  description="A family soul food and BBQ kitchen with a simple purpose: bringing people together, one plate at a time."
/>
<Hero
  title="Rooted in Love, Seasoned with Soul"
  description="A family soul food and BBQ kitchen with a simple purpose: bringing people together, one plate at a time."
  eyebrow="Denver metro · Southern food & BBQ"
/>
<div class="paper-grid border-rule/20 bg-cream-shade border-b py-12">
  <p
    class="page-gutter font-display text-espresso mb-0 max-w-3xl text-center text-3xl leading-snug italic md:text-4xl"
  >
    “Food that feels familiar.<br />A table that feels like home.”
  </p>
</div>
<section
  class="page-gutter border-rule/25 grid max-w-7xl gap-6 border-b py-14 md:grid-cols-[0.8fr_1.2fr] md:items-center md:gap-16 md:py-24"
>
  <h2 class="max-w-md">There’s room for company.</h2>
  <p class="text-espresso-muted max-w-3xl text-lg leading-relaxed md:text-xl">
    Good food gives us a reason to slow down, pull up a chair and spend time together. That is the
    spirit behind Cornbread & Company. We’re building our kitchen around Southern favorites and the
    gatherings they make possible.
  </p>
</section>
<section
  class="page-gutter border-rule/25 grid max-w-7xl gap-6 border-b py-14 md:grid-cols-[0.8fr_1.2fr] md:items-center md:gap-16 md:py-24"
>
  <h2 class="max-w-md">Meet the family</h2>
  <p class="text-espresso-muted max-w-3xl text-lg leading-relaxed md:text-xl">
    Meet the people behind Cornbread & Company. From the kitchen to your gathering, we bring a
    family spirit to the table.
  </p>
</section>
<section class="page-gutter grid max-w-7xl gap-8 pb-14 md:grid-cols-2 md:pb-24">
  <figure>
    <Photo name="company-staff-photo-2" class="aspect-[4/3] w-full object-cover" />
    <figcaption class="font-display mt-4 text-xl">Meet the company.</figcaption>
  </figure>
  <figure>
    <Photo name="staff-photo" class="aspect-[4/3] w-full object-cover" />
    <figcaption class="font-display mt-4 text-xl">Together, at your gathering.</figcaption>
  </figure>
</section>
<section
  class="page-gutter border-rule/25 grid max-w-7xl gap-6 border-b py-14 md:grid-cols-[0.8fr_1.2fr] md:items-center md:gap-16 md:py-24"
>
  <h2 class="max-w-md">What we bring to the table</h2>
  <p class="text-espresso-muted max-w-3xl text-lg leading-relaxed md:text-xl">
    Food that feels familiar. A welcoming spirit. Care for the people sharing the meal. From an
    office lunch to a Sunday gathering, the occasion starts with your company.
  </p>
</section>
<section
  class="page-gutter border-rule/25 grid max-w-7xl gap-6 border-b py-14 md:grid-cols-[0.8fr_1.2fr] md:items-center md:gap-16 md:py-24"
>
  <h2 class="max-w-md">A day of rest</h2>
  <p class="text-espresso-muted max-w-3xl text-lg leading-relaxed md:text-xl">
    We observe Saturday Sabbath. Our kitchen closes Friday at 5 PM and is closed Saturday, with
    hours resuming Sunday at 11 AM. This rhythm is part of how we make space for faith, family and
    rest.
  </p>
</section>
<Closing />
