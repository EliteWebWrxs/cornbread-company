<script>
  import Icon from '$lib/components/Icon.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import Seo from '$lib/components/Seo.svelte';
  import Closing from '$lib/components/Closing.svelte';
  import Hours from '$lib/components/Hours.svelte';
  import Areas from '$lib/components/Areas.svelte';
  import Inquiry from '$lib/components/Inquiry.svelte';
  import { menu } from '$lib/menu';
  import { faqs } from '$lib/faq';
</script>

<Seo
  title="Soul Food Catering Denver | Cornbread & Company"
  description="Southern food for the people you bring together. Let’s plan a menu for your office, church or family gathering."
/>
<Hero
  title="Soul Food & BBQ Catering in Denver"
  description="Southern food for the people you bring together. Let’s plan a menu for your office, church or family gathering."
  eyebrow="Denver metro · Southern food & BBQ"
/>
<section class="centered-head page-gutter max-w-7xl py-14 md:py-24">
  <p class="text-bronze mb-6 text-xs font-semibold tracking-[0.22em] uppercase">
    Food with a sense of home
  </p>
  <h2>Bring the company. We’ll talk food.</h2>
  <div class="mt-10 grid gap-5 md:mt-0 md:grid-cols-3">
    <article
      class="group border-rule/35 bg-cream hover:border-bronze relative flex flex-col rounded-sm border p-7 shadow-[0_8px_30px_-20px_#3e2a1e50] transition duration-300 hover:-translate-y-1 md:p-9"
    >
      <h3>Southern favorites</h3>
      <p>Build your meal around the meats and sides your guests love.</p>
    </article>
    <article
      class="group border-rule/35 bg-cream hover:border-bronze relative flex flex-col rounded-sm border p-7 shadow-[0_8px_30px_-20px_#3e2a1e50] transition duration-300 hover:-translate-y-1 md:p-9"
    >
      <h3>A complete table</h3>
      <p>From cornbread to dessert, plan a spread that feels like a meal at home.</p>
    </article>
    <article
      class="group border-rule/35 bg-cream hover:border-bronze relative flex flex-col rounded-sm border p-7 shadow-[0_8px_30px_-20px_#3e2a1e50] transition duration-300 hover:-translate-y-1 md:p-9"
    >
      <h3>A plan for your day</h3>
      <p>Confirm the menu, timing and service details before your event.</p>
    </article>
  </div>
</section>
<section
  class="page-gutter border-rule/25 grid max-w-7xl gap-6 border-b py-14 md:grid-cols-[0.8fr_1.2fr] md:items-center md:gap-16 md:py-24"
>
  <h2 class="max-w-md">What brings you together?</h2>
  <div class="mt-10 grid gap-5 md:grid-cols-3">
    <a
      class="group border-rule/35 bg-cream hover:border-bronze relative flex flex-col rounded-sm border p-7 shadow-[0_8px_30px_-20px_#3e2a1e50] transition duration-300 hover:-translate-y-1 md:p-9"
      href="/catering/corporate"
      ><span class="font-display text-bronze/80 mb-12 text-4xl italic">01 /</span>
      <h3>The working lunch</h3>
      <p>Bring everyone together for office lunches, meetings and team celebrations.</p>
      <span
        class="border-rule/30 text-bronze mt-auto flex items-center justify-between gap-4 border-t pt-6 text-xs font-semibold tracking-widest uppercase"
        >Explore <Icon /></span
      ></a
    ><a
      class="group border-rule/35 bg-cream hover:border-bronze relative flex flex-col rounded-sm border p-7 shadow-[0_8px_30px_-20px_#3e2a1e50] transition duration-300 hover:-translate-y-1 md:p-9"
      href="/catering/private"
      ><span class="font-display text-bronze/80 mb-12 text-4xl italic">02 /</span>
      <h3>Life’s gatherings</h3>
      <p>Family celebrations, church meals and Sunday tables.</p>
      <span
        class="border-rule/30 text-bronze mt-auto flex items-center justify-between gap-4 border-t pt-6 text-xs font-semibold tracking-widest uppercase"
        >Explore <Icon /></span
      ></a
    ><a
      class="group border-rule/35 bg-cream hover:border-bronze relative flex flex-col rounded-sm border p-7 shadow-[0_8px_30px_-20px_#3e2a1e50] transition duration-300 hover:-translate-y-1 md:p-9"
      href="/order"
      ><span class="font-display text-bronze/80 mb-12 text-4xl italic">03 /</span>
      <h3>Something for home</h3>
      <p>Learn how ordering works and plan your next meal.</p>
      <span
        class="border-rule/30 text-bronze mt-auto flex items-center justify-between gap-4 border-t pt-6 text-xs font-semibold tracking-widest uppercase"
        >Explore <Icon /></span
      ></a
    >
  </div>
</section>
<section class="bg-espresso text-cream on-dark py-14 md:py-24">
  <div class="centered-head page-gutter max-w-7xl">
    <p class="text-bronze mb-6 text-xs font-semibold tracking-[0.22em] uppercase">
      From your first hello to the last plate
    </p>
    <h2>How catering works</h2>
    <ol class="marker:text-gold mt-12 grid list-decimal gap-10 pl-5 sm:grid-cols-2 lg:grid-cols-4">
      <li>
        <h3>Tell us about your event</h3>
        <p>Your date, guest count and delivery city.</p>
      </li>
      <li>
        <h3>Build your menu & quote</h3>
        <p>Choose your food and confirm the details.</p>
      </li>
      <li>
        <h3>We prepare your meal</h3>
        <p>Delivery and service are arranged when booking.</p>
      </li>
      <li>
        <h3>You host</h3>
        <p>Make room at the table and enjoy your company.</p>
      </li>
    </ol>
  </div>
</section>
<section class="page-gutter max-w-7xl py-14 text-center md:py-24">
  <h2>What’s on the table?</h2>
  <p class="text-espresso-muted mx-auto max-w-2xl text-lg leading-relaxed md:text-xl">
    Start with chicken, ribs or fish. Add Southern sides, cornbread and a rotating dessert. <a
      href="/menu">Explore the full menu <Icon /></a
    >
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
<section class="centered-head page-gutter max-w-7xl py-14 md:py-24">
  <h2>Where we gather</h2>
  <Areas />
</section>
<section
  class="page-gutter grid max-w-7xl gap-6 py-14 md:grid-cols-[0.8fr_1.2fr] md:items-center md:gap-16 md:py-24"
>
  <h2 class="max-w-md">Kitchen &amp; order hours</h2>
  <Hours labelled />
</section>
<div class="page-gutter max-w-7xl py-14 md:py-24">
  <Inquiry />
</div>
<section class="centered-head page-gutter max-w-7xl py-14 md:py-24">
  <h2>A few things you may be wondering</h2>
  {#each faqs.slice(0, 4) as faq}<details>
      <summary>{faq.question}</summary>
      <p>{faq.answer}</p>
    </details>{/each}<a class="text-link" href="/faq">All catering questions <Icon /></a>
</section>
<Closing />
