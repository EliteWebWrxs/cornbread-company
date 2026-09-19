<script>
  import Icon from '$lib/components/Icon.svelte';
  import { site } from '$lib/site';
  let { eventType = '', contact = false } = $props();
  let status = $state('');
  let failed = $state(false);
  let sending = $state(false);

  /** @param {SubmitEvent} event */
  async function submit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!(form instanceof HTMLFormElement)) return;

    const data = new FormData(form);
    if (data.get('website')) return; // honeypot

    const date = String(data.get('date') || '');
    if (date && new Date(date + 'T12:00:00').getDay() === 6) {
      failed = true;
      status = "We're closed Saturdays for Sabbath. Please choose another event date.";
      return;
    }

    sending = true;
    failed = false;
    status = 'Sending your inquiry…';

    try {
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ ...Object.fromEntries(data), contact })
      });
      const result = await response.json().catch(() => ({}));

      if (response.ok) {
        form.reset();
        status = "Thank you. Your inquiry is on its way and we'll be in touch soon.";
      } else {
        failed = true;
        status = result.error || 'We could not send that just now. Please call us instead.';
      }
    } catch {
      failed = true;
      status = 'We could not reach the kitchen. Please check your connection, or call us.';
    } finally {
      sending = false;
    }
  }
</script>

<section
  id="inquiry"
  class="border-rule/40 bg-cream mx-auto max-w-4xl rounded-sm border p-6 shadow-[0_24px_80px_-48px_#3e2a1e80] sm:p-12"
>
  <p class="text-bronze mb-6 text-xs font-semibold tracking-[0.22em] uppercase">
    {contact ? 'Say hello' : 'A seat at your table'}
  </p>
  <h2>{contact ? 'Send us a note' : 'Tell us about your gathering'}</h2>
  <p>Complete the details below and we'll get back to you about your gathering.</p>
  <form onsubmit={submit}>
    <div class="my-8 grid gap-6 sm:grid-cols-2">
      <label>Your name<input name="name" autocomplete="name" /></label><label
        >Phone (required)<input type="tel" name="phone" autocomplete="tel" required /></label
      ><label>Email<input type="email" name="email" autocomplete="email" /></label>
      {#if !contact}<label>Event date (required)<input type="date" name="date" required /></label
        ><label
          >Event type<select name="event type" value={eventType}
            ><option value="">Select your event</option><option>Corporate</option><option
              >Family celebration</option
            ><option>Church gathering</option><option>Repast or memorial</option><option
              >Other</option
            ></select
          ></label
        ><label>Guest count<input type="number" min="1" step="1" name="guests" /></label><label
          >Delivery city (required)<input
            name="city"
            autocomplete="address-level2"
            required
          /></label
        ><label
          >Preferred service<select name="service"
            ><option>Discuss with us</option><option>Drop-off</option><option>Setup</option><option
              >Full service</option
            ></select
          ></label
        >{/if}
      <label class="sm:col-span-2"
        >{contact ? 'Your message' : 'Anything else we should know?'}<textarea
          name="notes"
          rows="4"
          placeholder="Menu ideas, timing, dietary needs…"
          required={contact}></textarea></label
      >
    </div>
    <div class="sr-only" aria-hidden="true">
      <label>Leave empty<input name="website" tabindex="-1" autocomplete="off" /></label>
    </div>
    <p class="max-w-2xl text-xs leading-relaxed">
      Your details are emailed to us so we can reply. Read our
      <a href="/privacy">privacy policy</a>. A request does not confirm a booking.
    </p>
    <button
      class="border-bronze bg-gold hover:bg-gold-light mx-auto flex min-h-12 w-fit items-center justify-center gap-3 rounded-sm border px-6 py-4 text-center text-xs leading-none font-semibold tracking-wide text-black transition motion-reduce:transition-none"
      type="submit"
      disabled={sending}>{sending ? 'Sending…' : 'Send inquiry'} <Icon /></button
    >
    <p
      role="status"
      aria-live="polite"
      class={`mt-5 text-sm font-medium ${failed ? 'text-danger' : ''}`}
    >
      {status}{#if failed && site.phones?.length}
        <a href={'tel:' + site.phones[0].tel}>{site.phones[0].display}</a>{/if}
    </p>
  </form>
</section>
