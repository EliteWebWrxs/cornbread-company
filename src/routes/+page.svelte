<script>
  /** @type {(keyof typeof import('$lib/photos').photos)[]} */
  const featuredPhotos = ['ribs-2', 'chicken-wings', 'mac-and-cheese', 'corn-bread'];
  import Photo from '$lib/components/Photo.svelte';
  import Icon from '$lib/components/Icon.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import Seo from '$lib/components/Seo.svelte';
  import Closing from '$lib/components/Closing.svelte';
  import Hours from '$lib/components/Hours.svelte';
  import Areas from '$lib/components/Areas.svelte';
</script>

<Seo
  title="Denver Soul Food & BBQ Catering | Cornbread & Company"
  description="Soul food and BBQ catering for office lunches, church gatherings and family celebrations across Denver metro."
/>
<Hero
  title="Bringing People Together, One Plate at a Time"
  description="Soul food and BBQ catering for office lunches, church gatherings and family celebrations across Denver metro."
  eyebrow="Denver metro · Southern food & BBQ"
/>
<section
  class="page-gutter border-rule/25 grid max-w-7xl gap-6 border-b py-14 md:grid-cols-[0.8fr_1.2fr] md:items-center md:gap-16 md:py-24"
>
  <h2 class="max-w-md">Bringing people together,<br /><em>one plate at a time.</em></h2>
  <p class="text-espresso-muted max-w-3xl text-lg leading-relaxed md:text-xl">
    Southern favorites belong at a shared table. We bring soul food and BBQ to gatherings across the
    Denver metro, with catering at the heart of our kitchen.
  </p>
</section>
<section class="centered-head page-gutter max-w-7xl py-14 md:py-24">
  <p class="text-bronze mb-6 text-xs font-semibold tracking-[0.22em] uppercase">
    Made for gathering
  </p>
  <h2>There’s always a reason to come together.</h2>
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
<section
  class="page-gutter border-rule/25 grid max-w-7xl gap-6 border-b py-14 md:grid-cols-[0.8fr_1.2fr] md:items-center md:gap-16 md:py-24"
>
  <h2 class="max-w-md">A family kitchen. A welcoming table.</h2>
  <p class="text-espresso-muted max-w-3xl text-lg leading-relaxed md:text-xl">
    Cornbread & Company is built around a simple idea: bring people together over a good meal. Meet
    the people behind the plates and the family spirit at the heart of our kitchen. <a
      class="text-link"
      href="/about">Get to know us <Icon /></a
    >
  </p>
</section>
<figure class="page-gutter mb-16 max-w-7xl">
  <Photo name="owners" class="max-h-[560px] w-full object-cover object-[center_35%]" />
  <figcaption class="text-espresso-muted mt-4 text-sm">The people behind the plates.</figcaption>
</figure>
<section class="paper-grid bg-cream-shade py-14 md:py-24">
  <div class="page-gutter grid max-w-7xl items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
    <div>
      <p class="text-bronze mb-6 text-xs font-semibold tracking-[0.22em] uppercase">
        From our kitchen
      </p>
      <h2 class="text-5xl md:text-6xl">Soul in every<br /><em>single serving.</em></h2>
      <p class="text-espresso-muted max-w-sm">
        The familiar favorites. The sides worth a second helping. And always, a little something
        sweet.
      </p>
      <a class="text-link" href="/menu">Explore our full menu <Icon /></a>
    </div>
    <div class="on-dark text-cream relative bg-black p-8 shadow-[16px_16px_0_0_#3e2a1e15] sm:p-12">
      <div class="border-rule-dark flex items-center justify-between border-b pb-6">
        <span class="font-display text-gold text-3xl italic">A taste of home</span><span
          class="text-xs tracking-widest uppercase">The favorites</span
        >
      </div>
      {#each ['Fried Chicken', 'BBQ Ribs', 'Fried Catfish', 'Macaroni & Cheese', 'Greens', 'Cornbread'] as dish, i}<a
          href="/menu"
          class="group border-rule-dark/50 flex items-center gap-5 border-b py-5"
          ><span class="text-gold text-xs">0{i + 1}</span>
          <h3 class="mb-0 flex-1 text-xl sm:text-2xl">{dish}</h3>
          <Icon size={16} class="text-gold transition-transform group-hover:translate-x-1" /></a
        >{/each}
      <p class="text-cream/70 mt-6 mb-0 text-xs tracking-wide">
        Made for a full table and a little good company.
      </p>
    </div>
  </div>
</section>
<section
  class="page-gutter border-rule/25 grid max-w-7xl gap-6 border-b py-14 md:grid-cols-[0.8fr_1.2fr] md:items-center md:gap-16 md:py-24"
>
  <h2 class="max-w-md">Something special for the table.</h2>
  <p class="text-espresso-muted max-w-3xl text-lg leading-relaxed md:text-xl">
    Oxtails, smoked brisket and prime rib rotate through our premium selection. Desserts rotate,
    too. <a href="/specials">Check how specials work <Icon /></a>
  </p>
</section>
<section class="centered-head page-gutter max-w-7xl py-14 md:py-24">
  <h2>Denver, and the communities around it.</h2>
  <Areas />
</section>
<section
  class="page-gutter grid max-w-7xl gap-6 py-14 md:grid-cols-[0.8fr_1.2fr] md:items-center md:gap-16 md:py-24"
>
  <h2 class="max-w-md">Kitchen &amp; order hours</h2>
  <Hours labelled />
</section>
<section class="page-gutter max-w-7xl pb-14 md:pb-24">
  <div class="mb-8 flex flex-wrap items-end justify-between gap-4">
    <h2 class="mb-0">Straight from our table.</h2>
    <a class="text-link" href="/gallery">See the gallery <Icon /></a>
  </div>
  <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
    {#each featuredPhotos as name}<a href="/gallery"
        ><Photo
          {name}
          sizes="(min-width: 768px) 25vw, 50vw"
          class="aspect-square w-full object-cover transition duration-300 hover:brightness-110"
        /></a
      >{/each}
  </div>
</section>
<Closing />
