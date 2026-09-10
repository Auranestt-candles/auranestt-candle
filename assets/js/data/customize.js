/**
 * "Customize your candle" — transcribed from the printed catalog (page 13).
 *
 * @typedef {object} CustomizeOption
 * @property {string} name
 * @property {string} [detail] Shown under the name. Options without one are
 *                             rendered as compact chips instead.
 *
 * @typedef {object} CustomizeStep
 * @property {string} title
 * @property {string} tagline
 * @property {CustomizeOption[]} options
 * @property {string} [note]
 */

/** @type {CustomizeStep[]} */
export const customizeSteps = [
  {
    title: 'Choose your container',
    tagline: 'Any jar, any glass, any style.',
    options: [
      { name: 'Round glass' }, { name: 'Straight glass' }, { name: 'Colored glass' },
      { name: 'Frosted glass' }, { name: 'Mason jar' }, { name: 'Amber glass' },
      { name: 'Ceramic jar' }, { name: 'Wooden lid jar' }, { name: 'Wine glass' },
      { name: 'Whiskey glass' }, { name: 'Beer mug' }, { name: 'Unique containers' },
    ],
    note: 'Something unique in mind? We can pour into almost any glass, jar or decorative container.',
  },
  {
    title: 'Choose your wax',
    tagline: 'Different wax types for different vibes.',
    options: [
      { name: 'Soy wax', detail: 'Natural, clean burn and long lasting.' },
      { name: 'Gel wax', detail: 'Crystal clear, with beautiful bubbles.' },
      { name: 'Coconut wax', detail: 'Eco friendly, with excellent scent throw.' },
    ],
  },
  {
    title: 'Choose your fragrance',
    tagline: '20+ premium fragrances to uplift every moment.',
    options: [
      { name: 'Lavender' }, { name: 'Rose' }, { name: 'Vanilla' }, { name: 'Coffee' },
      { name: 'Jasmine' }, { name: 'Oudh' }, { name: 'Sandalwood' },
      { name: 'Ocean breeze' }, { name: 'Cinnamon' }, { name: '& more' },
    ],
  },
  {
    title: 'Choose your decorations',
    tagline: 'Add beauty. Add personality.',
    options: [
      { name: 'Dried flowers' }, { name: 'Rose petals' }, { name: 'Crystals' },
      { name: 'Gold flakes' }, { name: 'Glitter' }, { name: 'Coffee beans' },
      { name: 'Shells' }, { name: 'Fruits' }, { name: 'Herbs' }, { name: 'Pearls' },
    ],
    note: 'Decorations are available as per your choice.',
  },
  {
    title: 'Choose your wick',
    tagline: 'Because every detail matters.',
    options: [
      { name: 'Cotton wick', detail: 'Clean burn, for everyday use.' },
      { name: 'Wooden wick', detail: 'A soothing crackle and a cosy vibe.' },
      { name: 'Multiple wick', detail: 'Stronger fragrance and an even burn.' },
    ],
  },
];

/** Occasions we already make custom candles for. */
export const occasions = [
  'Birthday', 'Wedding', 'Return gifts', 'Corporate gifts',
  'Anniversary', 'Festivals', 'Housewarming', 'Baby shower',
];

export const customizeNote = {
  from: 149,
  detail: 'The final price depends on the container type and size, the wax, the fragrance, the decorations and any personalisation.',
};

/** The catalog's closing promise, shown as the last tile in the grid. */
export const fullyCustomizable = {
  title: 'Fully customizable',
  tagline: 'You dream it, we create it.',
  points: [
    'Any glass or jar',
    'Any wax type',
    'Your favourite fragrance',
    'Decorations of your choice',
    'Your wick type',
    'Personalisation for gifts & events',
  ],
};
