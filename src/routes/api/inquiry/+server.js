import { json } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import nodemailer from 'nodemailer';
import { site } from '$lib/site';

// The rest of the site is prerendered by src/routes/+layout.js. This route has
// to run on a server, so it opts out.
export const prerender = false;

/**
 * Fields we accept, in the order they should appear in the email.
 * @type {Array<[key: string, label: string, maxLength: number]>}
 */
const FIELDS = [
  ['name', 'Name', 120],
  ['phone', 'Phone', 40],
  ['email', 'Email', 160],
  ['date', 'Event date', 40],
  ['event type', 'Event type', 60],
  ['guests', 'Guest count', 20],
  ['city', 'Delivery city', 80],
  ['service', 'Preferred service', 60],
  ['notes', 'Notes', 4000]
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * Anything reaching a mail header must not carry CR/LF — that is header injection.
 * @param {unknown} value
 */
const headerSafe = (value) =>
  String(value)
    .replace(/[\r\n]+/g, ' ')
    .trim()
    .slice(0, 200);

/**
 * Best-effort throttle. Serverless instances do not share memory, so this slows
 * down casual abuse but is not a real rate limiter. If the form gets targeted,
 * move this to a shared store or put Turnstile/reCAPTCHA in front of it.
 */
/** @type {Map<string, number>} */
const recent = new Map();

/** @param {string} ip */
function throttled(ip) {
  const now = Date.now();
  for (const [key, time] of recent) if (now - time > 60_000) recent.delete(key);
  const last = recent.get(ip);
  return Boolean(last && now - last < 20_000);
}

/** @type {import('./$types').RequestHandler} */
export async function POST({ request, getClientAddress }) {
  const { GOOGLE_EMAIL, GOOGLE_EMAIL_PASSWORD, MAIL_HOST, MAIL_PORT } = env;

  if (!GOOGLE_EMAIL || !GOOGLE_EMAIL_PASSWORD || !MAIL_HOST || !MAIL_PORT) {
    // Never echo which value is missing — that leaks configuration.
    console.error('[inquiry] mail transport is not configured');
    return json({ error: 'Email is not configured yet. Please call us instead.' }, { status: 503 });
  }

  /** @type {Record<string, unknown>} */
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: 'Could not read that request.' }, { status: 400 });
  }

  // Honeypot: real people leave it empty.
  if (body.website) return json({ ok: true });

  const ip = getClientAddress();
  if (throttled(ip)) {
    return json({ error: 'Please wait a moment before sending again.' }, { status: 429 });
  }

  const contact = body.contact === true;
  const phone = String(body.phone ?? '').trim();
  const notes = String(body.notes ?? '').trim();
  const email = String(body.email ?? '').trim();
  const date = String(body.date ?? '').trim();
  const city = String(body.city ?? '').trim();

  if (contact ? !notes : !phone) {
    return json(
      { error: contact ? 'Please include a message.' : 'Please include a phone number.' },
      { status: 400 }
    );
  }
  if (!contact && (!date || !city)) {
    return json({ error: 'Please include your event date and delivery city.' }, { status: 400 });
  }
  if (email && !EMAIL_RE.test(email)) {
    return json({ error: 'That email address does not look right.' }, { status: 400 });
  }
  // Mirrors the client-side check so it cannot simply be bypassed.
  if (date && new Date(`${date}T12:00:00`).getDay() === 6) {
    return json(
      { error: "We're closed Saturdays for Sabbath. Please choose another event date." },
      { status: 400 }
    );
  }

  const lines = FIELDS.map(([key, label, max]) => {
    const value = String(body[key] ?? '')
      .trim()
      .slice(0, max);
    return value ? `${label}: ${value}` : null;
  }).filter(Boolean);

  const port = Number(MAIL_PORT);
  const transporter = nodemailer.createTransport({
    host: MAIL_HOST,
    port,
    secure: port === 465, // 465 is implicit TLS; 587 upgrades with STARTTLS
    auth: { user: GOOGLE_EMAIL, pass: GOOGLE_EMAIL_PASSWORD }
  });

  const kind = contact ? 'Contact' : 'Catering';
  const who = headerSafe(body.name || city || 'website');

  try {
    await transporter.sendMail({
      // Gmail rewrites `from` to the authenticated account, so send as ourselves
      // and use replyTo for the visitor. User input never lands in `from`.
      from: `"${site.name} website" <${GOOGLE_EMAIL}>`,
      to: GOOGLE_EMAIL,
      ...(email && EMAIL_RE.test(email) ? { replyTo: headerSafe(email) } : {}),
      subject: `${kind} inquiry — ${who}`,
      text: `${lines.join('\n')}\n\nSent from ${site.name} website.`
    });
  } catch (error) {
    // Log server-side only. The message can contain credentials or host details.
    console.error('[inquiry] send failed:', error instanceof Error ? error.message : error);
    return json(
      { error: 'We could not send that just now. Please call us and we will take care of it.' },
      { status: 502 }
    );
  }

  // Recorded only now, so a validation mistake never costs the visitor a wait.
  recent.set(ip, Date.now());
  return json({ ok: true });
}
