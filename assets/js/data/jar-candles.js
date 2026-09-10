/**
 * Jar candle price guide — transcribed from the printed catalog (page 12).
 *
 * Jar candles are priced by container and size rather than by pack, so they get
 * their own section instead of a price on the card. Keep this table and the
 * printed guide in step.
 *
 * @typedef {object} JarSize
 * @property {string} code   Column heading: S, M or L.
 * @property {string} label  Spoken name, used in the WhatsApp message.
 * @property {string} weight Approximate filled weight.
 *
 * @typedef {object} JarContainer
 * @property {string} name
 * @property {number[]} prices One price per entry in `jarSizes`, same order.
 */

/** @type {JarSize[]} */
export const jarSizes = [
  { code: 'S', label: 'Small', weight: 'approx 100–120 g' },
  { code: 'M', label: 'Medium', weight: 'approx 200–250 g' },
  { code: 'L', label: 'Large', weight: 'approx 350–450 g' },
];

/** @type {JarContainer[]} */
export const jarContainers = [
  { name: 'Clear glass', prices: [149, 199, 249] },
  { name: 'Frosted glass', prices: [159, 219, 269] },
  { name: 'Amber glass', prices: [169, 229, 279] },
  { name: 'Colored glass', prices: [179, 249, 299] },
  { name: 'Round glass', prices: [179, 249, 299] },
  { name: 'Straight glass', prices: [159, 219, 269] },
  { name: 'Mason jar', prices: [149, 199, 249] },
  { name: 'Ceramic jar', prices: [199, 249, 349] },
  { name: 'Wine glass', prices: [199, 269, 359] },
  { name: 'Whiskey glass', prices: [199, 269, 359] },
  { name: 'Beer mug', prices: [219, 289, 389] },
  { name: 'Luxury glass', prices: [249, 349, 499] },
];

/** Bowls, teacups, bear glasses and other one-off containers. */
export const decorativeContainers = {
  from: 199,
  note: 'Bowls, teacups, bear glasses and other themed containers. The final price depends on the container, size, wax type and decoration.',
};

/** What moves a price up or down, in the catalog’s own words. */
export const priceFactors = [
  ['Container type & design', 'Premium, decorated or imported containers.'],
  ['Container size', 'Small, medium or large.'],
  ['Wax type', 'Soy wax, gel wax, coconut wax.'],
  ['Fragrance', 'Premium and luxury fragrance oils.'],
  ['Decoration', 'Flowers, crystals, glitter, gold flakes.'],
  ['Wooden wick', 'Premium wooden wicks.'],
  ['Customization', 'Personalised themes and special requests.'],
];
