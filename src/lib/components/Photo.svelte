<script>
  import { photos } from '$lib/photos';
  /** @type {{ name: keyof typeof photos, priority?: boolean, class?: string, sizes?: string }} */
  let {
    name,
    priority = false,
    class: className = '',
    sizes = '(min-width: 1024px) 45vw, 90vw'
  } = $props();
  const photo = $derived(photos[name]);
</script>

<img
  src={photo.src}
  srcset={photo.srcset}
  {sizes}
  width={photo.width}
  height={photo.height}
  alt={photo.alt}
  loading={priority ? 'eager' : 'lazy'}
  fetchpriority={priority ? 'high' : 'auto'}
  decoding="async"
  class={className}
/>
