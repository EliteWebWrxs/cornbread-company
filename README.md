# Cornbread Company

A [SvelteKit](https://svelte.dev/docs/kit) app styled with [Tailwind CSS](https://tailwindcss.com).

## Stack

| Package      | Version |
| ------------ | ------- |
| Svelte       | 5       |
| SvelteKit    | 2       |
| Vite         | 8       |
| Tailwind CSS | 4       |

## Developing

Install dependencies with `pnpm install`, then start a development server:

```bash
pnpm run dev

# or start the server and open the app in a new browser tab
pnpm run dev --open
```

## Building

```bash
pnpm run build
```

Preview the production build with `pnpm run preview`.

`@sveltejs/adapter-auto` picks the right adapter for the deploy target. For a fixed
target, install the matching adapter and set it in `svelte.config.js`.

## Other commands

```bash
pnpm run check    # type-check with svelte-check
pnpm run format   # format with Prettier
pnpm run lint     # verify formatting
```

## Styling

Tailwind is wired in through `@tailwindcss/vite` (no `tailwind.config.js` — v4 is
configured in CSS). The palette, fonts, and base styles live in
[`src/app.css`](src/app.css) under `@theme`.
