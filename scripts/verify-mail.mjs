/**
 * Checks that the SMTP settings in .env can authenticate.
 * Connects and logs in, then disconnects — it does NOT send mail.
 *
 *   node --env-file=.env scripts/verify-mail.mjs
 */
import nodemailer from 'nodemailer';

const { GOOGLE_EMAIL, GOOGLE_EMAIL_PASSWORD, MAIL_HOST, MAIL_PORT } = process.env;
const missing = Object.entries({ GOOGLE_EMAIL, GOOGLE_EMAIL_PASSWORD, MAIL_HOST, MAIL_PORT })
  .filter(([, v]) => !v)
  .map(([k]) => k);

if (missing.length) {
  console.error('Missing from .env:', missing.join(', '));
  process.exit(1);
}

const port = Number(MAIL_PORT);
console.log(`host ${MAIL_HOST}  port ${port}  secure ${port === 465}  user ${GOOGLE_EMAIL}`);

try {
  await nodemailer
    .createTransport({
      host: MAIL_HOST,
      port,
      secure: port === 465,
      auth: { user: GOOGLE_EMAIL, pass: GOOGLE_EMAIL_PASSWORD }
    })
    .verify();
  console.log('SMTP authentication OK — no mail was sent.');
} catch (error) {
  console.error('SMTP failed:', error instanceof Error ? error.message : error);
  process.exit(1);
}
