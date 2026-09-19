<script>
  import Hero from '$lib/components/Hero.svelte';
  import Seo from '$lib/components/Seo.svelte';
  import Closing from '$lib/components/Closing.svelte';
  import Photo from '$lib/components/Photo.svelte';
  import { photos } from '$lib/photos';
  const keys = /** @type {(keyof typeof photos)[]} */ (Object.keys(photos));
  const groups = [
    {
      id: 'food',
      title: 'The food',
      copy: 'Ribs, wings, cornbread and the sides that make a table feel like home.'
    },
    { id: 'events', title: 'At your gathering', copy: 'Good food starts with good company.' },
    {
      id: 'family',
      title: 'The people behind the plates',
      copy: 'Meet the owners and team of Cornbread & Company.'
    }
  ];
  /** @type {HTMLDialogElement} */
  let viewer;
  let selected = $state(0);
  const current = $derived(photos[keys[selected]]);
  /** @param {keyof typeof photos} key */
  function open(key) {
    selected = keys.indexOf(key);
    viewer.showModal();
  }
  /** @param {number} direction */
  function move(direction) {
    selected = (selected + direction + keys.length) % keys.length;
  }
</script>

<Seo
  title="Food & Event Photos | Cornbread & Company"
  description="See the food, owners and team of Cornbread & Company: barbecue ribs, chicken wings, cornbread and sides for Denver gatherings."
/>
<Hero
  title="Our Food, Our People"
  description="From the kitchen to the gathering. A look at the food we share and the people who bring it to your table."
  eyebrow="A place at our table"
/>
<nav
  aria-label="Gallery sections"
  class="page-gutter flex max-w-7xl flex-wrap justify-center gap-8 py-5 text-sm"
>
  {#each groups as group}<a class="border-bronze border-b pb-1" href={'#' + group.id}
      >{group.title}</a
    >{/each}
</nav>
{#each groups as group}
  <section id={group.id} class="centered-head page-gutter max-w-7xl py-14 md:py-24">
    <h2>{group.title}</h2>
    <p class="text-espresso-muted mx-auto mb-10 max-w-2xl text-center">{group.copy}</p>
    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {#each keys.filter((key) => photos[key].category === group.id) as key}
        <figure class={group.id === 'events' ? 'sm:col-span-2' : ''}>
          <button
            type="button"
            onclick={() => open(key)}
            aria-label={'Enlarge photo: ' + photos[key].title}
            class="group bg-cream-shade block w-full overflow-hidden text-left"
          >
            <Photo
              name={key}
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              class="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105 motion-reduce:transform-none"
            />
          </button>
          <figcaption class="mt-4 flex items-center justify-between gap-3">
            <span class="font-display text-xl">{photos[key].title}</span><span
              class="text-bronze text-xs tracking-widest uppercase">View photo</span
            >
          </figcaption>
        </figure>
      {/each}
    </div>
  </section>
{/each}
<dialog
  bind:this={viewer}
  aria-labelledby="photo-title"
  onkeydown={(event) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      move(1);
    }
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      move(-1);
    }
  }}
  class="on-dark border-rule-dark text-cream fixed inset-0 m-auto max-h-[95dvh] w-[min(1100px,95vw)] max-w-none overflow-auto border bg-black p-4 shadow-2xl backdrop:bg-black/90 sm:p-6"
>
  <div class="mb-4 flex items-center justify-between gap-4">
    <p id="photo-title" class="font-display mb-0 text-xl">{current.title}</p>
    <button
      type="button"
      onclick={() => viewer.close()}
      class="border-rule-dark min-h-11 border px-4 text-sm"
      >Close <span aria-hidden="true">×</span></button
    >
  </div>
  <img
    src={current.full}
    width={current.width}
    height={current.height}
    alt={current.alt}
    class="max-h-[70dvh] w-full object-contain"
  />
  <div class="mt-4 flex items-center justify-between gap-4">
    <button
      type="button"
      onclick={() => move(-1)}
      class="border-rule-dark min-h-11 border px-4 text-sm">Previous</button
    ><span aria-live="polite" class="text-gold text-xs">{selected + 1} / {keys.length}</span><button
      type="button"
      onclick={() => move(1)}
      class="border-rule-dark min-h-11 border px-4 text-sm">Next</button
    >
  </div>
</dialog>
<Closing />
