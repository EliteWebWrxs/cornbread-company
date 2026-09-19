<script>
  import Icon from '$lib/components/Icon.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import Seo from '$lib/components/Seo.svelte';
  import Closing from '$lib/components/Closing.svelte';
  import Inquiry from '$lib/components/Inquiry.svelte';
  import { site } from '$lib/site';
  import { menu } from '$lib/menu';
</script>

<Seo
  title="Private Event Catering Denver | Cornbread & Company"
  description="For birthdays, reunions, church meals and the moments that bring your people close."
  image="catering"
/>
<Hero
  title="Catering for Life’s Gatherings"
  description="For birthdays, reunions, church meals and the moments that bring your people close."
  eyebrow="Denver metro · Southern food & BBQ"
/>
<section
  class="page-gutter border-rule/25 grid max-w-7xl gap-6 border-b py-14 md:grid-cols-[0.8fr_1.2fr] md:items-center md:gap-16 md:py-24"
>
  <h2 class="max-w-md">A meal for your kind of gathering.</h2>
  <p class="text-espresso-muted max-w-3xl text-lg leading-relaxed md:text-xl">
    Family reunions. Birthdays. Graduations. Baby showers. Anniversaries. Church events. Tell us who
    is coming and what they love to eat.
  </p>
</section>
<section
  class="page-gutter border-rule/25 grid max-w-7xl gap-6 border-b py-14 md:grid-cols-[0.8fr_1.2fr] md:items-center md:gap-16 md:py-24"
>
  <h2 class="max-w-md">Repasts & memorial gatherings</h2>
  <p class="text-espresso-muted max-w-3xl text-lg leading-relaxed md:text-xl">
    When your family is grieving, a shared meal is one less thing you should have to plan alone. We
    welcome inquiries about repast catering and will confirm availability for your date.
  </p>
</section>
<div class="page-gutter max-w-7xl">
  {#if site.phone}<a
      class="border-bronze bg-gold hover:bg-gold-light inline-flex min-h-12 items-center justify-center gap-5 rounded-sm border px-6 py-4 text-xs font-semibold tracking-wide text-black transition motion-reduce:transition-none"
      href={'tel:' + site.phone}>Call {site.phone}</a
    >{:else}<p>Our direct phone contact will be posted when available.</p>{/if}
</div>
<section
  class="page-gutter border-rule/25 grid max-w-7xl gap-6 border-b py-14 md:grid-cols-[0.8fr_1.2fr] md:items-center md:gap-16 md:py-24"
>
  <h2 class="max-w-md">Sunday has a place at our table.</h2>
  <p class="text-espresso-muted max-w-3xl text-lg leading-relaxed md:text-xl">
    After-church meals, Sunday reunions and family dinners are a natural fit for our kitchen. Gather
    your people and choose the dishes that feel like home.
  </p>
</section>
<section class="centered-head page-gutter max-w-7xl py-14 md:py-24">
  <p class="text-bronze mb-6 text-xs font-semibold tracking-[0.22em] uppercase">
    A little planning, a generous table
  </p>
  <h2>Let’s get the portions right.</h2>
  <p class="mx-auto max-w-2xl text-center">
    Serving sizes depend on your menu. These planning steps help us build your quote; pan counts are
    confirmed with your order.
  </p>
  <div class="overflow-x-auto">
    <table>
      <caption>Planning your guest count</caption><thead
        ><tr
          ><th scope="col">Guests</th><th scope="col">What to share with us</th><th scope="col"
            >What we’ll confirm</th
          ></tr
        ></thead
      ><tbody
        ><tr
          ><th scope="row">Up to 25</th><td>Menu preferences and meal time</td><td
            >Portions and minimum order</td
          ></tr
        ><tr
          ><th scope="row">25–50</th><td>Guest count and buffet or individual meals</td><td
            >Pan quantities and delivery needs</td
          ></tr
        ><tr
          ><th scope="row">50–100+</th><td>Venue, serving schedule and equipment</td><td
            >Menu quantities and service availability</td
          ></tr
        ></tbody
      >
    </table>
  </div>
  <a class="text-link" href="/menu">Find your favorites on the menu <Icon /></a>
</section>
<section
  class="page-gutter border-rule/25 grid max-w-7xl gap-6 border-b py-14 md:grid-cols-[0.8fr_1.2fr] md:items-center md:gap-16 md:py-24"
>
  <h2 class="max-w-md">Planning around the Sabbath</h2>
  <p class="text-espresso-muted max-w-3xl text-lg leading-relaxed md:text-xl">
    We’re closed Saturdays for Sabbath. Sunday and weekday events are welcome to inquire. Friday
    drop-off for Saturday events has not been announced.
  </p>
</section>
<div class="page-gutter max-w-7xl py-14 md:py-24">
  <Inquiry eventType="Family celebration" />
</div>
<section class="page-gutter max-w-7xl py-14 text-center md:py-24">
  <h2>Food, family and gathering.</h2>
  <p class="mx-auto max-w-2xl">
    <a class="text-link" href="/gallery">Visit the gallery <Icon /></a>
  </p>
</section>
<Closing />
