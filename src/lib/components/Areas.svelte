<script>
  import { site } from '$lib/site';
</script>

<div class="my-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
  {#each Object.entries(site.areas) as [county, cities]}<div>
      <h3>{county} County</h3>
      <p>{cities}</p>
    </div>{/each}
</div>
<p class="max-w-2xl text-xs leading-relaxed">
  Tell us your delivery city. Availability, delivery fees and minimums are confirmed with your
  quote.
</p>
