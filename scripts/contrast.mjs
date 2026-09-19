const lum = (hex) => {
  const v = hex.replace('#', '');
  const ch = [0, 2, 4].map((i) => parseInt(v.slice(i, i + 2), 16) / 255);
  const [r, g, b] = ch.map((c) => (c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};
const ratio = (a, b) => {
  const [l1, l2] = [lum(a), lum(b)].sort((x, y) => y - x);
  return (l1 + 0.05) / (l2 + 0.05);
};
const grade = (r, large = false) => {
  const aa = large ? 3 : 4.5,
    aaa = large ? 4.5 : 7;
  return r >= aaa ? 'AAA' : r >= aa ? 'AA ' : 'FAIL';
};

const C = {
  black: '#0F0E0C',
  pureblack: '#000000',
  gold: '#D4AF37',
  goldLt: '#E8C55A',
  bronze: '#6B4E0F',
  espresso: '#3E2A1E',
  brownMid: '#5C4A38',
  cream: '#FAF7F0',
  cream2: '#F0EAE0',
  white: '#FFFFFF',
  oxblood: '#7B2D26',
  green: '#2F5D3A',
  danger: '#A4221B'
};

const pairs = [
  ['THE CLAIM UNDER TEST', null, null],
  ['gold text on near-black', 'gold', 'black'],
  ['gold text on pure black', 'gold', 'pureblack'],
  ['gold text on WHITE', 'gold', 'white'],
  ['gold text on CREAM', 'gold', 'cream'],
  ['WHITE text on gold button', 'white', 'gold'],
  ['BLACK text on gold button', 'black', 'gold'],
  ['DARK SURFACES', null, null],
  ['cream text on near-black', 'cream', 'black'],
  ['gold-light on near-black', 'goldLt', 'black'],
  ['gold text on espresso', 'gold', 'espresso'],
  ['cream text on espresso', 'cream', 'espresso'],
  ['LIGHT SURFACES', null, null],
  ['espresso text on cream', 'espresso', 'cream'],
  ['espresso text on cream2', 'espresso', 'cream2'],
  ['brownMid text on cream', 'brownMid', 'cream'],
  ['bronze text on cream', 'bronze', 'cream'],
  ['bronze text on white', 'bronze', 'white'],
  ['black text on cream', 'black', 'cream'],
  ['THIRD-COLOR CANDIDATES on cream', null, null],
  ['oxblood on cream', 'oxblood', 'cream'],
  ['green on cream', 'green', 'cream'],
  ['danger on cream', 'danger', 'cream'],
  ['UI / NON-TEXT (needs 3:1)', null, null],
  ['cream2 border on cream', 'cream2', 'cream'],
  ['brownMid border on cream', 'brownMid', 'cream'],
  ['gold border on near-black', 'gold', 'black']
];

for (const [label, a, b] of pairs) {
  if (!a) {
    console.log('\n' + label);
    console.log('-'.repeat(62));
    continue;
  }
  const r = ratio(C[a], C[b]);
  console.log(
    `  ${label.padEnd(30)} ${C[a]}/${C[b]}  ${r.toFixed(2).padStart(6)}:1  ` +
      `body ${grade(r)}  lg ${grade(r, true)}`
  );
}
