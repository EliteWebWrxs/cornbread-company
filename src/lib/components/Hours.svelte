<script>
  import { site } from '$lib/site';

  /**
   * Set when the surrounding section already shows a visible <h2>. The <caption>
   * stays in the DOM so the table keeps its accessible name, but is hidden
   * visually so the heading is not printed twice.
   */
  let { labelled = false } = $props();
</script>

<div>
  <table class="max-w-xl">
    <caption class={labelled ? 'sr-only' : ''}>Kitchen &amp; order hours</caption><tbody
      >{#each site.hours as [day, time]}<tr><th scope="row">{day}</th><td>{time}</td></tr
        >{/each}</tbody
    >
  </table>
  <p class="text-xs leading-relaxed">
    We're closed Saturdays for Sabbath. Our restaurant location is to be announced.
  </p>
</div>
