<script>
  import Header from '$lib/header/Header.svelte';
  import { site } from '$lib/site';
  import Logo from '$lib/components/Logo.svelte';
  import '../app.css';
  let { children } = $props();
</script>

<Header />
<main id="main" tabindex="-1">{@render children()}</main>
<footer class="on-dark">
  <div
    class="page-gutter grid max-w-7xl gap-12 py-20 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]"
  >
    <div>
      <a
        href="/"
        aria-label="Cornbread and Company home"
        class="inline-flex flex-col items-start gap-5"
      >
        <Logo class="size-24" sizes="96px" loading="lazy" />
        <span class="font-display text-gold text-3xl leading-none tracking-tight"
          >Cornbread <span class="block text-xl italic">& Company</span></span
        >
      </a>
      <p>Bringing People Together,<br />One Plate at a Time.</p>
    </div>
    <nav aria-label="Explore">
      <h2>Come to the table</h2>
      <a href="/catering">Catering</a><a href="/catering/corporate">Corporate & office</a><a
        href="/catering/private">Private gatherings</a
      ><a href="/menu">Our menu</a><a href="/specials">Weekly specials</a><a href="/order"
        >How to order</a
      >
    </nav>
    <nav aria-label="Company">
      <h2>Get to know us</h2>
      <a href="/about">Our story</a><a href="/gallery">Gallery</a><a href="/faq"
        >Frequently asked questions</a
      ><a href="/contact">Contact & hours</a>
    </nav>
    <div>
      <h2>Denver metro</h2>
      <p>Sun–Thu · 11 AM–8 PM<br />Friday · 11 AM–5 PM<br />Saturday · Closed for Sabbath</p>
      <div class="mt-6 flex flex-col items-start gap-2 text-sm">
        {#each site.phones as line}<a class="hover:text-gold transition" href={'tel:' + line.tel}
            >{line.display}</a
          >{/each}<a class="hover:text-gold break-words transition" href={'mailto:' + site.email}
          >{site.email}</a
        >
      </div>
      <p class="text-xs leading-relaxed">Catering first. Restaurant location to be announced.</p>
    </div>
  </div>
  <div
    class="page-gutter border-rule-dark flex max-w-7xl flex-wrap gap-6 border-t py-6 text-xs [&_span]:mr-auto"
  >
    <span>© {new Date().getFullYear()} {site.name}</span><a href="/privacy">Privacy</a><a
      href="/accessibility">Accessibility</a
    >
  </div>
</footer>
