<script>
  import Hero from '$lib/components/Hero.svelte';
  import Seo from '$lib/components/Seo.svelte';
  import Closing from '$lib/components/Closing.svelte';
  import Hours from '$lib/components/Hours.svelte';
  import Areas from '$lib/components/Areas.svelte';
  import Inquiry from '$lib/components/Inquiry.svelte';
  import { site } from '$lib/site';
</script>

<Seo
  title="Contact & Hours | Cornbread & Company Denver"
  description="Tell us what you’re planning. Serving Denver metro, with kitchen and order hours Sunday through Friday."
/>
<Hero
  title="Get in Touch"
  description="Tell us what you’re planning. Serving Denver metro, with kitchen and order hours Sunday through Friday."
  eyebrow="Denver metro · Southern food & BBQ"
/>
<section class="page-gutter grid max-w-7xl gap-12 py-14 md:grid-cols-2 md:gap-20 md:py-24">
  <div>
    <p class="text-bronze mb-6 text-xs font-semibold tracking-[0.22em] uppercase">Talk with us</p>
    <h2>We’d love to hear about your gathering.</h2>
    {#each site.phones as line}<p>
        <a href={'tel:' + line.tel}>{line.display}</a>
      </p>{/each}
    <p><a href={'mailto:' + site.email}>{site.email}</a></p>
    <p>
      Our restaurant location is to be announced. Please confirm arrangements before traveling for
      pickup.
    </p>
  </div>
  <Hours />
</section>
<section class="centered-head page-gutter max-w-7xl py-14 md:py-24">
  <h2>Our Denver metro community</h2>
  <Areas />
</section>
<div class="page-gutter max-w-7xl py-14 md:py-24">
  <Inquiry contact />
</div>
<Closing />
