<script>
  /**
   * The badge artwork already contains the wordmark, so it is marked decorative
   * (alt=""). Both places it is used sit inside a link that carries its own
   * aria-label, so the brand name is still announced exactly once.
   */
  /** @type {{ class?: string; sizes?: string; loading?: 'eager' | 'lazy' }} */
  let { class: className = '', sizes = '96px', loading = 'eager' } = $props();
</script>

<img
  src="/images/optimized/logo-192.webp"
  srcset="/images/optimized/logo-96.webp 96w, /images/optimized/logo-192.webp 192w, /images/optimized/logo-288.webp 288w"
  {sizes}
  {loading}
  width="192"
  height="192"
  alt=""
  decoding="async"
  class={`rounded-full ${className}`}
/>
