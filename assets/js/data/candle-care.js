/**
 * Candle care — transcribed from the printed catalog (page 14).
 *
 * A group is either a single instruction (`lead` + `text`) or a list of
 * `bullets`; the component picks the shape from the data.
 *
 * @typedef {object} CareGroup
 * @property {string} title
 * @property {string} [lead]     Bold first line, for single-instruction groups.
 * @property {string} [text]
 * @property {string[]} [bullets]
 * @property {string} [script]   Closing line, set in the script face.
 */

/** @type {CareGroup[]} */
export const careGroups = [
  {
    title: 'Before lighting',
    lead: 'Trim the wick',
    text: 'Trim the wick to 5 mm before each use, for a clean and even burn.',
  },
  {
    title: 'First burn',
    lead: 'Let the wax melt evenly',
    text: 'Let the wax melt right across the top surface to prevent tunnelling and keep every burn after it even.',
  },
  {
    title: 'Safety first',
    bullets: [
      'Never leave a burning candle unattended.',
      'Keep away from children and pets.',
      'Burn on a heat-resistant, stable surface.',
      'Do not burn near curtains or flammable objects.',
    ],
  },
  {
    title: 'Storage',
    bullets: [
      'Store in a cool, dry place.',
      'Keep away from direct sunlight and extreme heat.',
      'This preserves both the fragrance and the colour.',
    ],
  },
  {
    title: 'Best practice',
    bullets: [
      'Burn your candle for short periods.',
      'Keep the candle on a tray to protect surfaces.',
      'Stop burning when 5 mm of wax remains.',
    ],
  },
  {
    title: 'Enjoy mindfully',
    text: 'Light your candle, take a deep breath, and let the aroma settle the room and your mood.',
    script: 'Light the vibe. Feel the aura.',
  },
];

/** @type {{title: string, detail: string}[]} */
export const careSpecials = [
  { title: 'Premium soy wax blend', detail: 'Clean burning, natural and eco friendly.' },
  { title: 'Cotton wick', detail: 'Lead-free cotton wick, for a steady and safe flame.' },
  { title: 'Fine fragrance oil', detail: 'Premium oils, for a long-lasting, soothing aroma.' },
  { title: 'Handmade in India', detail: 'Hand-poured with love and crafted with care.' },
];

export const handmadeNote =
  'Every candle is uniquely handmade. Slight variations in colour and texture make each piece truly one of a kind.';
