<script>
  import Icon from '$lib/components/Icon.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import Seo from '$lib/components/Seo.svelte';
  import Closing from '$lib/components/Closing.svelte';
  import { menu } from '$lib/menu';
</script>

<Seo
  title="Menu — Soul Food, BBQ & Homemade Sides | Cornbread & Co"
  description="Southern favorites, barbecue, comforting sides and something sweet to finish. Confirm menu availability and pricing when planning your order."
  image="menu"
/>
<Hero
  title="Our Menu"
  description="Southern favorites, barbecue, comforting sides and something sweet to finish. Confirm menu availability and pricing when planning your order."
  eyebrow="Denver metro · Southern food & BBQ"
/>
<nav
  class="page-gutter border-rule/30 bg-cream/95 sticky top-0 z-20 flex max-w-7xl gap-6 overflow-x-auto border-b py-5 text-xs whitespace-nowrap backdrop-blur-md"
  aria-label="Menu categories"
>
  {#each menu as section}<a href={'#' + section.id}>{section.name}</a>{/each}
</nav>
{#each menu as section}<section
    class="centered-head page-gutter max-w-7xl py-14 md:py-24"
    id={section.id}
  >
    <p class="text-bronze mb-6 text-xs font-semibold tracking-[0.22em] uppercase">
      From our kitchen
    </p>
    <h2>{section.name}</h2>
    {#if section.id === 'premium-weekly-specials'}<p
        class="border-bronze bg-cream-shade my-6 rounded-sm border-l-2 p-6 text-sm leading-relaxed"
      >
        Limited availability. Premium meats rotate weekly and are not served daily. Seasonal cuts
        may also be offered.
      </p>{:else if section.id === 'desserts-of-the-week'}<p
        class="border-bronze bg-cream-shade my-6 rounded-sm border-l-2 p-6 text-sm leading-relaxed"
      >
        Desserts rotate. Please confirm this week’s selection before ordering.
      </p>{/if}
    <div class="grid gap-x-16 md:grid-cols-2">
      {#each section.items as item}<article
          class="border-rule/25 [&_p]:text-espresso-muted border-b py-7 [&_h3]:flex [&_h3]:items-center [&_h3]:justify-between [&_h3]:gap-4 [&_p]:max-w-lg [&_p]:text-sm"
        >
          <h3>
            {item.name}{#if item.name === 'Beef Ribs'}<span
                class="text-bronze font-sans text-xs whitespace-nowrap">Market price</span
              >{/if}
          </h3>
          <p>{item.description}</p>
        </article>{/each}
    </div>
    <a class="text-link" href="/catering#inquiry">Build your catering menu <Icon /></a>
  </section>{/each}
<section class="page-gutter max-w-7xl py-14 md:py-24">
  <p class="max-w-2xl">
    Dietary needs or allergies? Ask about ingredients and preparation before ordering. Vegetarian
    options and accommodations must be confirmed with the kitchen.
  </p>
</section>
<Closing />
