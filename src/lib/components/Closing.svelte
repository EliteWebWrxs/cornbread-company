<script>
  import Icon from './Icon.svelte';
</script>

<section class="on-dark bg-espresso text-cream relative overflow-hidden py-20 text-center md:py-28">
  <span
    aria-hidden="true"
    class="font-display text-cream/[0.025] pointer-events-none absolute -bottom-24 left-1/2 -translate-x-1/2 text-[250px] leading-none whitespace-nowrap italic"
    >good company</span
  >
  <div class="page-gutter relative max-w-7xl">
    <p class="text-gold mb-6 text-xs tracking-[0.25em] uppercase">
      The best memories start at the table
    </p>
    <h2 class="mb-8 text-5xl leading-[1.08] md:text-7xl">
      You bring the people.<br /><em class="text-gold font-normal">Let’s talk about the food.</em>
    </h2>
    <a
      class="bg-gold hover:bg-gold-light mx-auto flex min-h-12 w-fit items-center justify-center gap-3 rounded-sm px-7 py-4 text-center text-xs leading-none font-semibold text-black transition"
      href="/catering#inquiry">Plan your gathering <Icon /></a
    >
  </div>
</section>
