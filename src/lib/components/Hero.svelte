<script>
  import { page } from '$app/state';
  import Icon from './Icon.svelte';
  import Photo from './Photo.svelte';
  let {
    eyebrow = 'Denver metro · Southern food & BBQ',
    title,
    description = '',
    primary = '/catering#inquiry',
    primaryLabel = 'Request catering',
    secondary = '/menu',
    secondaryLabel = 'Explore the menu'
  } = $props();
  const home = $derived(page.url.pathname === '/');
  /** @type {Record<string, keyof typeof import('$lib/photos').photos>} */
  const heroPhotos = {
    '/': 'ribs-1',
    '/catering': 'chicken-wings-2',
    '/menu': 'corn-bread',
    '/about': 'owners',
    '/catering/corporate': 'pulled-pork',
    '/catering/private': 'staff-photo',
    '/gallery': 'company-staff-photo-2',
    '/order': 'ribs-2'
  };
  const heroPhoto = $derived(heroPhotos[page.url.pathname]);
</script>

<section class="on-dark text-cream relative isolate overflow-hidden bg-black">
  <div
    aria-hidden="true"
    class="border-gold/10 pointer-events-none absolute -top-56 -right-52 size-[750px] rounded-full border"
  ></div>
  <div
    class="page-gutter relative grid max-w-7xl gap-12 py-16 md:py-24 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-16"
  >
    <div class="relative z-10">
      <p
        class="text-gold mb-7 flex items-center gap-3 text-xs font-medium tracking-[0.2em] uppercase"
      >
        <span class="bg-gold h-px w-8" aria-hidden="true"></span>{eyebrow}
      </p>
      <h1
        class="font-display max-w-3xl text-[clamp(2.8rem,5.6vw,5.8rem)] leading-[1.02] tracking-[-0.045em]"
      >
        {#if home}Good food.<br /><span class="text-gold italic">Better company.</span
          >{:else}{title}{/if}
      </h1>
      <p class="text-cream/80 mt-7 mb-0 max-w-md text-sm leading-7 md:text-base">{description}</p>
      <div class="mt-9 flex flex-wrap items-center gap-x-7 gap-y-5">
        <a
          href={primary}
          class="group bg-gold hover:bg-gold-light inline-flex min-h-12 items-center justify-center gap-3 rounded-sm px-6 py-4 text-center text-xs leading-none font-semibold text-black transition"
          >{primaryLabel}<Icon class="transition-transform group-hover:translate-x-1" /></a
        >
        <a
          href={secondary}
          class="border-rule-dark hover:border-gold hover:text-gold inline-flex min-h-12 items-center justify-center border-b text-center text-xs leading-none font-medium transition"
          >{secondaryLabel}</a
        >
      </div>
      {#if home}<div class="mt-14 flex items-center gap-4">
          <span aria-hidden="true" class="font-display text-gold text-4xl italic"
            >C<span class="text-xl">&</span>C</span
          >
          <p
            class="border-rule-dark mb-0 border-l pl-4 text-xs leading-5 tracking-[0.15em] uppercase"
          >
            Rooted in love.<br />Seasoned with soul.
          </p>
        </div>{/if}
    </div>
    {#if heroPhoto}
      <figure class="relative mb-8 lg:mb-0">
        <Photo
          name={heroPhoto}
          priority
          class="relative aspect-[4/3] w-full object-cover shadow-2xl"
        />
        <div
          class="bg-gold font-display absolute -bottom-6 -left-5 flex size-24 -rotate-12 items-center justify-center rounded-full border-4 border-black text-center text-lg leading-5 text-black italic sm:size-28"
        >
          Made for<br />gathering.
        </div>
      </figure>
    {:else}
      <div class="relative hidden min-h-72 items-center justify-center lg:flex" aria-hidden="true">
        <div class="border-rule-dark absolute size-64 rounded-full border"></div>
        <div class="border-rule-dark/40 absolute size-80 rounded-full border"></div>
        <div class="text-center">
          <span class="font-display text-gold text-[110px] leading-none italic"
            >C<span class="text-5xl">&</span>C</span
          ><span class="text-cream/70 mt-5 block text-xs tracking-[0.3em] uppercase"
            >A place at the table</span
          >
        </div>
      </div>
    {/if}
  </div>
  <div
    class="border-rule-dark/50 text-cream/70 border-t px-5 py-4 text-center text-xs font-medium tracking-[0.22em] uppercase"
  >
    Southern roots <span class="text-gold mx-4" aria-hidden="true">/</span> Denver tables
    <span class="text-gold mx-4" aria-hidden="true">/</span> Good company
  </div>
</section>
