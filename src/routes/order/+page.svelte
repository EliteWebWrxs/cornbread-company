<script>
  import Icon from '$lib/components/Icon.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import Seo from '$lib/components/Seo.svelte';
  import Closing from '$lib/components/Closing.svelte';
  import Hours from '$lib/components/Hours.svelte';
</script>

<Seo
  title="How to Order | Cornbread & Company Denver"
  description="We’re catering first. Our restaurant location is to be announced; pickup details must be confirmed before any order."
/>
<Hero
  title="Let’s Get Something Good Started"
  description="We’re catering first. Our restaurant location is to be announced; pickup details must be confirmed before any order."
  eyebrow="Denver metro · Southern food & BBQ"
/>
<section
  class="page-gutter border-rule/25 grid max-w-7xl gap-6 border-b py-14 md:grid-cols-[0.8fr_1.2fr] md:items-center md:gap-16 md:py-24"
>
  <h2 class="max-w-md">Choose your next meal</h2>
  <div class="mt-10 grid gap-5 md:mt-0 md:grid-cols-3">
    <a
      class="group border-rule/35 bg-cream hover:border-bronze relative flex flex-col rounded-sm border p-7 shadow-[0_8px_30px_-20px_#3e2a1e50] transition duration-300 hover:-translate-y-1 md:p-9"
      href="/contact"
      ><span class="font-display text-bronze/80 mb-12 text-4xl italic">01 /</span>
      <h3>Talk to the kitchen</h3>
      <p>Find contact information and kitchen hours.</p>
      <span
        class="border-rule/30 text-bronze mt-auto flex items-center justify-between gap-4 border-t pt-6 text-xs font-semibold tracking-widest uppercase"
        >Explore <Icon /></span
      ></a
    ><a
      class="group border-rule/35 bg-cream hover:border-bronze relative flex flex-col rounded-sm border p-7 shadow-[0_8px_30px_-20px_#3e2a1e50] transition duration-300 hover:-translate-y-1 md:p-9"
      href="/catering#inquiry"
      ><span class="font-display text-bronze/80 mb-12 text-4xl italic">02 /</span>
      <h3>Plan your gathering</h3>
      <p>Start with your date, delivery city and guest count.</p>
      <span
        class="border-rule/30 text-bronze mt-auto flex items-center justify-between gap-4 border-t pt-6 text-xs font-semibold tracking-widest uppercase"
        >Explore <Icon /></span
      ></a
    ><a
      class="group border-rule/35 bg-cream hover:border-bronze relative flex flex-col rounded-sm border p-7 shadow-[0_8px_30px_-20px_#3e2a1e50] transition duration-300 hover:-translate-y-1 md:p-9"
      href="/specials"
      ><span class="font-display text-bronze/80 mb-12 text-4xl italic">03 /</span>
      <h3>Explore the rotation</h3>
      <p>Learn about our premium meats and rotating desserts.</p>
      <span
        class="border-rule/30 text-bronze mt-auto flex items-center justify-between gap-4 border-t pt-6 text-xs font-semibold tracking-widest uppercase"
        >Explore <Icon /></span
      ></a
    >
  </div>
</section>
<section class="page-gutter max-w-7xl py-14 text-center md:py-24">
  <h2>A little notice makes room for a good meal.</h2>
  <p class="text-espresso-muted mx-auto max-w-2xl text-lg leading-relaxed md:text-xl">
    Reach out early for large orders. Menu availability, lead time, payment arrangements and
    collection or delivery details are confirmed before your order is accepted. There is no online
    checkout.
  </p>
</section>
<section
  class="page-gutter grid max-w-7xl gap-6 py-14 md:grid-cols-[0.8fr_1.2fr] md:items-center md:gap-16 md:py-24"
>
  <h2 class="max-w-md">Kitchen &amp; order hours</h2>
  <div>
    <Hours labelled />
    <p>Storefront updates will be shared here. Email signup is not available yet.</p>
  </div>
</section>
<Closing />
