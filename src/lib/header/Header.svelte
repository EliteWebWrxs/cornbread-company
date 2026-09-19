<script>
  import { page } from '$app/state';
  import Icon from '$lib/components/Icon.svelte';
  import Logo from '$lib/components/Logo.svelte';
  let open = $state(false);
  const links = [
    ['/catering', 'Catering'],
    ['/menu', 'Our menu'],
    ['/about', 'Our story'],
    ['/gallery', 'Gallery'],
    ['/contact', 'Contact']
  ];
</script>

<a href="#main" class="bg-cream text-espresso fixed -top-24 left-4 z-50 px-5 py-3 focus:top-4"
  >Skip to content</a
>
<div
  class="on-dark bg-espresso text-cream flex justify-center px-5 py-2 text-xs tracking-[0.15em] sm:justify-between sm:px-10 lg:px-16"
>
  <span>SOUL FOOD & BBQ · DENVER, COLORADO</span><span class="hidden sm:block"
    >SUNDAY–FRIDAY · CLOSED SATURDAYS FOR SABBATH</span
  >
</div>
<header class="on-dark border-rule-dark/60 text-cream relative z-30 border-b bg-black">
  <div class="page-gutter flex max-w-7xl flex-wrap items-center justify-between gap-6 py-6">
    <a href="/" aria-label="Cornbread and Company home" class="flex items-center gap-4">
      <Logo class="size-12 shrink-0 sm:size-14" sizes="56px" />
      <!-- The badge already carries the wordmark, so on phones the mark stands
           alone. The link keeps its aria-label, so the name is still announced. -->
      <span class="font-display text-gold hidden text-3xl leading-[0.85] tracking-tight sm:block"
        >Cornbread<span class="mt-2 block text-center text-xl tracking-normal italic"
          >& Company</span
        ></span
      >
    </a>
    <button
      class="border-rule-dark flex min-h-11 items-center gap-3 rounded-sm border px-4 text-xs lg:hidden"
      aria-expanded={open}
      aria-controls="main-nav"
      onclick={() => (open = !open)}
      >{open ? 'Close' : 'Menu'}<svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        aria-hidden="true"><path d={open ? 'M6 6l12 12M6 18L18 6' : 'M4 8h16M4 16h16'} /></svg
      ></button
    >
    <nav
      id="main-nav"
      aria-label="Main"
      class={`${open ? 'flex' : 'hidden'} w-full flex-col gap-2 lg:flex lg:w-auto lg:flex-row lg:items-center lg:gap-7`}
    >
      {#each links as [href, label]}<a
          {href}
          aria-current={page.url.pathname === href ? 'page' : undefined}
          class="hover:text-gold aria-[current=page]:border-gold aria-[current=page]:text-gold flex min-h-11 items-center border-b border-transparent py-3 text-xs transition lg:block lg:min-h-0"
          onclick={() => (open = false)}>{label}</a
        >{/each}
      <a
        href="/catering#inquiry"
        onclick={() => (open = false)}
        class="border-rule-dark text-gold hover:border-gold ml-0 inline-flex min-h-12 items-center justify-center gap-3 border px-5 py-3.5 text-center text-xs leading-none transition lg:ml-3"
        >Let's gather <Icon size={16} /></a
      >
    </nav>
  </div>
</header>
