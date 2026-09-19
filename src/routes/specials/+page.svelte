<script>
  import Icon from '$lib/components/Icon.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import Seo from '$lib/components/Seo.svelte';
  import Closing from '$lib/components/Closing.svelte';
  import { menu } from '$lib/menu';
</script>

<Seo
  title="Weekly Specials — Oxtails, Brisket & Prime Rib"
  description="Premium meats and desserts rotate. Here’s what to look forward to when the kitchen announces its next selection."
  image="menu"
/>
<Hero
  title="Something Special at the Table"
  description="Premium meats and desserts rotate. Here’s what to look forward to when the kitchen announces its next selection."
  eyebrow="Denver metro · Southern food & BBQ"
/>
<section class="page-gutter max-w-7xl py-14 text-center md:py-24">
  <p class="text-bronze mb-6 text-xs font-semibold tracking-[0.22em] uppercase">
    Availability update
  </p>
  <h2>The next specials are yet to be announced.</h2>
  <p class="mx-auto max-w-2xl">
    No current weekly special or dessert has been posted. Please confirm availability before
    planning an order.
  </p>
  <p class="text-xs leading-relaxed">
    Status reviewed: <time datetime="2026-09-19">September 19, 2026</time>
  </p>
</section>
<section class="centered-head page-gutter max-w-7xl py-14 md:py-24">
  <h2>The premium rotation</h2>
  <div class="mt-10 grid gap-5 md:grid-cols-3">
    {#each menu[1].items as item}<article
        class="group border-rule/35 bg-cream hover:border-bronze relative flex flex-col rounded-sm border p-7 shadow-[0_8px_30px_-20px_#3e2a1e50] transition duration-300 hover:-translate-y-1 md:p-9"
      >
        <h3>{item.name}</h3>
        <p>{item.description}</p>
      </article>{/each}
  </div>
</section>
<section class="page-gutter max-w-7xl py-14 text-center md:py-24">
  <h2>A sweet finish</h2>
  <p class="mx-auto max-w-2xl"></p>
  <p class="mx-auto max-w-2xl">
    Selections are limited, change weekly and may sell out. An item on the rotation is not a promise
    of daily availability.
  </p>
  <p class="border-bronze bg-cream-shade my-6 rounded-sm border-l-2 p-6 text-sm leading-relaxed">
    Specials alerts are not available yet. New selections will be posted here.
  </p>
  <a class="text-link" href="/menu">See the full menu <Icon /></a>
</section>
<Closing />
