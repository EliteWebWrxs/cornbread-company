/**
 * Builds the social share cards (Open Graph / Twitter) at 1200x630.
 *   node scripts/make-og.mjs
 * Re-run after changing the logo or the source photography.
 */
import sharp from 'sharp';
import { mkdir } from 'fs/promises';

const W = 1200;
const H = 630;
const IMAGES = 'static/images';
const OUT = 'static/og';

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** Scrim + type layer drawn over the photo. */
const overlay = (title, kicker) => `
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="scrim" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%"   stop-color="#0f0e0c" stop-opacity="0.94"/>
      <stop offset="55%"  stop-color="#0f0e0c" stop-opacity="0.80"/>
      <stop offset="100%" stop-color="#0f0e0c" stop-opacity="0.35"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#scrim)"/>
  <rect x="0" y="${H - 10}" width="${W}" height="10" fill="#d4af37"/>
  <text x="248" y="291" font-family="Georgia, 'Times New Roman', serif" font-size="76"
        fill="#d4af37">${esc(title)}</text>
  <text x="248" y="345" font-family="Georgia, 'Times New Roman', serif" font-size="44"
        font-style="italic" fill="#e8c55a">&amp; Company</text>
  <text x="250" y="410" font-family="Helvetica, Arial, sans-serif" font-size="25"
        letter-spacing="3.4" fill="#faf7f0">${esc(kicker)}</text>
</svg>`;

async function card(name, source, kicker) {
  const photo = await sharp(source)
    .resize(W, H, { fit: 'cover', position: 'attention' })
    .modulate({ brightness: 0.72 })
    .toBuffer();

  // Clip the badge to a circle so its black corners don't box it against the photo.
  const SIZE = 168;
  const mask = Buffer.from(
    `<svg width="${SIZE}" height="${SIZE}"><circle cx="${SIZE / 2}" cy="${SIZE / 2}" r="${SIZE / 2}" fill="#fff"/></svg>`
  );
  const badge = await sharp(`${IMAGES}/logo.webp`)
    .resize(SIZE, SIZE)
    .composite([{ input: mask, blend: 'dest-in' }])
    .png()
    .toBuffer();

  await sharp(photo)
    .composite([
      { input: Buffer.from(overlay('Cornbread', kicker)), top: 0, left: 0 },
      { input: badge, top: 231, left: 64 }
    ])
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(`${OUT}/${name}.jpg`);

  console.log(`${OUT}/${name}.jpg`);
}

await mkdir(OUT, { recursive: true });
await card('default', `${IMAGES}/company-staff-photo-2.webp`, 'SOUL FOOD & BBQ CATERING · DENVER');
await card('catering', `${IMAGES}/staff-photo.webp`, 'CATERING FOR YOUR GATHERING · DENVER');
await card('menu', `${IMAGES}/ribs-3.webp`, 'SOUTHERN FAVORITES & BARBECUE');
