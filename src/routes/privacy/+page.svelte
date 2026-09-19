<script>
  import Hero from '$lib/components/Hero.svelte';
  import Seo from '$lib/components/Seo.svelte';
  import Closing from '$lib/components/Closing.svelte';
  import Inquiry from '$lib/components/Inquiry.svelte';
  import { site } from '$lib/site';
</script>

<Seo
  title="Privacy | Cornbread & Company"
  description="How inquiry details are handled on this website."
/>
<Hero
  title="Privacy Policy"
  description="How inquiry details are handled on this website."
  eyebrow="Denver metro · Southern food & BBQ"
/>
<section
  class="page-gutter border-rule/25 grid max-w-7xl gap-6 border-b py-14 md:grid-cols-[0.8fr_1.2fr] md:items-center md:gap-16 md:py-24"
>
  <h2 class="max-w-md">Information you choose to share</h2>
  <p class="text-espresso-muted max-w-3xl text-lg leading-relaxed md:text-xl">
    Inquiry drafts are created in your browser and downloaded to your device. They are not submitted
    to a server or stored by this website. If email inquiries are enabled, your email app opens and
    you decide whether to send the message.
  </p>
</section>
<section
  class="page-gutter border-rule/25 grid max-w-7xl gap-6 border-b py-14 md:grid-cols-[0.8fr_1.2fr] md:items-center md:gap-16 md:py-24"
>
  <h2 class="max-w-md">Email and hosting</h2>
  <p class="text-espresso-muted max-w-3xl text-lg leading-relaxed md:text-xl">
    If you send an inquiry by email, the information you include is used to respond to your request
    and discuss your order. Your email provider processes the message under its own policies. The
    website’s hosting provider may process technical request information, such as IP addresses and
    browser details, to deliver the site.
  </p>
</section>
<section
  class="page-gutter border-rule/25 grid max-w-7xl gap-6 border-b py-14 md:grid-cols-[0.8fr_1.2fr] md:items-center md:gap-16 md:py-24"
>
  <h2 class="max-w-md">Cookies and tracking</h2>
  <p class="text-espresso-muted max-w-3xl text-lg leading-relaxed md:text-xl">
    This implementation does not set advertising or analytics cookies and does not include analytics
    scripts. Details will be updated if these services are introduced.
  </p>
</section>
<section
  class="page-gutter border-rule/25 grid max-w-7xl gap-6 border-b py-14 md:grid-cols-[0.8fr_1.2fr] md:items-center md:gap-16 md:py-24"
>
  <h2 class="max-w-md">Questions and updates</h2>
  <p class="text-espresso-muted max-w-3xl text-lg leading-relaxed md:text-xl">
    Use the contact details on our <a href="/contact">contact page</a> for privacy questions once they
    are available. This policy must be reviewed when online submissions, mailing lists or new service
    providers are introduced. Last updated September 19, 2026.
  </p>
</section>
<Closing />
