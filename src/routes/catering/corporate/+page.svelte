<script>
  import Icon from '$lib/components/Icon.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import Seo from '$lib/components/Seo.svelte';
  import Closing from '$lib/components/Closing.svelte';
  import Inquiry from '$lib/components/Inquiry.svelte';
</script>

<Seo
  title="Corporate Catering Denver | Cornbread & Company"
  description="A good lunch gives everyone a reason to step away from their desk. Southern food for Denver teams, meetings and company gatherings."
/>
<Hero
  title="Corporate & Office Catering"
  description="A good lunch gives everyone a reason to step away from their desk. Southern food for Denver teams, meetings and company gatherings."
  eyebrow="Denver metro · Southern food & BBQ"
/>
<section
  class="page-gutter border-rule/25 grid max-w-7xl gap-6 border-b py-14 md:grid-cols-[0.8fr_1.2fr] md:items-center md:gap-16 md:py-24"
>
  <h2 class="max-w-md">Built for the workweek.</h2>
  <p class="text-espresso-muted max-w-3xl text-lg leading-relaxed md:text-xl">
    Team lunches, training days, client meetings, appreciation meals and shift gatherings. Our
    Monday–Friday kitchen hours fit the working week; Friday orders close at 5 PM.
  </p>
</section>
<section
  class="page-gutter border-rule/25 grid max-w-7xl gap-6 border-b py-14 md:grid-cols-[0.8fr_1.2fr] md:items-center md:gap-16 md:py-24"
>
  <h2 class="max-w-md">From downtown to the Tech Center.</h2>
  <p class="text-espresso-muted max-w-3xl text-lg leading-relaxed md:text-xl">
    Planning a meal in downtown Denver, Denver Tech Center, Anschutz, Interlocken, Meridian or the
    Federal Center? Share the address and delivery window so we can check availability.
  </p>
</section>
<section
  class="page-gutter border-rule/25 grid max-w-7xl gap-6 border-b py-14 md:grid-cols-[0.8fr_1.2fr] md:items-center md:gap-16 md:py-24"
>
  <h2 class="max-w-md">Find the right format</h2>
  <div class="mt-10 grid gap-5 md:mt-0 md:grid-cols-3">
    <a
      class="group border-rule/35 bg-cream hover:border-bronze relative flex flex-col rounded-sm border p-7 shadow-[0_8px_30px_-20px_#3e2a1e50] transition duration-300 hover:-translate-y-1 md:p-9"
      href="/catering#inquiry"
      ><span class="font-display text-bronze/80 mb-12 text-4xl italic">01 /</span>
      <h3>Individual lunches</h3>
      <p>Ask about individually portioned meals for meetings and working lunches.</p>
      <span
        class="border-rule/30 text-bronze mt-auto flex items-center justify-between gap-4 border-t pt-6 text-xs font-semibold tracking-widest uppercase"
        >Explore <Icon /></span
      ></a
    ><a
      class="group border-rule/35 bg-cream hover:border-bronze relative flex flex-col rounded-sm border p-7 shadow-[0_8px_30px_-20px_#3e2a1e50] transition duration-300 hover:-translate-y-1 md:p-9"
      href="/catering#inquiry"
      ><span class="font-display text-bronze/80 mb-12 text-4xl italic">02 /</span>
      <h3>Buffet pans</h3>
      <p>A shared spread with a choice of meats and Southern sides.</p>
      <span
        class="border-rule/30 text-bronze mt-auto flex items-center justify-between gap-4 border-t pt-6 text-xs font-semibold tracking-widest uppercase"
        >Explore <Icon /></span
      ></a
    ><a
      class="group border-rule/35 bg-cream hover:border-bronze relative flex flex-col rounded-sm border p-7 shadow-[0_8px_30px_-20px_#3e2a1e50] transition duration-300 hover:-translate-y-1 md:p-9"
      href="/catering#inquiry"
      ><span class="font-display text-bronze/80 mb-12 text-4xl italic">03 /</span>
      <h3>Hosted meals</h3>
      <p>Share your setup and service needs for a tailored quote.</p>
      <span
        class="border-rule/30 text-bronze mt-auto flex items-center justify-between gap-4 border-t pt-6 text-xs font-semibold tracking-widest uppercase"
        >Explore <Icon /></span
      ></a
    >
  </div>
</section>
<section class="page-gutter max-w-7xl py-14 text-center md:py-24">
  <h2>Make the details easy to discuss.</h2>
  <p class="text-espresso-muted mx-auto max-w-2xl text-lg leading-relaxed md:text-xl">
    Tell us your budget per person, headcount, preferred date and any purchasing requirements.
    Pricing, minimums, lead time, invoicing, PO numbers, W-9 and insurance documentation are
    confirmed before booking.
  </p>
</section>
<div class="page-gutter max-w-7xl py-14 md:py-24">
  <Inquiry eventType="Corporate" />
</div>
<Closing />
