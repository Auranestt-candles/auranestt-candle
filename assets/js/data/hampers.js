/**
 * Celebration hampers — the single source of truth for the hampers section.
 *
 * Adding a hamper: append an entry here. No markup changes are needed; the
 * grid is rendered by `components/hampers.js` from this list.
 *
 * Hampers are not tied to one festival. A box is defined by its size and what
 * goes in it, and the same box works for Diwali, a wedding or a thank-you — so
 * each entry carries a `scale` and `contents` as its identity, and `occasions`
 * only as a hint at where it tends to be sent.
 *
 * They are quoted rather than priced to the rupee: candles, packaging and
 * quantity all move the number, so each card carries a starting price and the
 * conversation happens on WhatsApp.
 *
 * @typedef {object} HamperVariation
 * @property {string} name     Shown in the legend and sent in the WhatsApp message.
 * @property {string} [hex]    Swatch colour.
 * @property {string} [swatch] Any CSS background, for a variation no single
 *                             colour describes. Takes precedence over `hex`.
 * @property {string} [image]  Path under `assets/images/products/`. When given,
 *                             choosing this variation swaps the card photo.
 *                             Omit it when every variation shares one
 *                             photograph — the choice is still recorded and
 *                             sent, the photo simply stays put.
 *
 * @typedef {object} Hamper
 * @property {string} id           Unique, kebab-case.
 * @property {string} name
 * @property {string} scale        Small label above the name — the size of the
 *                                 box, e.g. '9 BLOOM CANDLES · GIFT BOX'.
 * @property {string} description  One line of copy — what the box is like.
 * @property {string[]} contents   What is in the box, shortest first.
 * @property {string[]} occasions  Where this box tends to be sent. Hints, not
 *                                 categories — any box suits any occasion.
 * @property {number} from         Starting price in rupees, for `FROM ₹…`.
 * @property {string} [badge]      Optional ribbon, e.g. 'Bestseller'.
 * @property {string} image        Default photo, shown before any variation is
 *                                 picked. Path under `assets/images/products/`.
 * @property {string} alt
 * @property {HamperVariation[]} [variations]  Two or more to show a picker; a
 *                                 single variation is not a choice, so it is
 *                                 not rendered.
 */

/** @type {Hamper[]} */
export const hampers = [
  {
    id: 'jar-quartet',
    name: 'The Pastel Quartet',
    scale: '4 JAR CANDLES · RIGID BOX',
    description:
      'Four pastel soy jars under brushed gold lids, each sitting in its own gold-lined well inside a deep red magnetic box — the lid lifts like something expensive.',
    contents: [
      '4 pastel jar candles',
      'Your choice of 4 fragrances',
      'Rigid magnetic-close box',
    ],
    occasions: ['Diwali', 'Corporate gifting', 'Housewarmings', 'Big thank-yous'],
    from: 699,
    image: 'hampers/jar-quartet.jpg',
    alt: 'Four pastel jar candles with gold lids in a red rigid gift box',
  },
  {
    id: 'greeting-box',
    name: 'The Greeting Box',
    scale: '2 CANDLES + CHOCOLATES',
    badge: 'Bestseller',
    description:
      'Two gold-rimmed flower bowls and a box of chocolates on a bed of shredded paper, under a gold-foiled greeting lid — in maroon, blush, green or mustard.',
    contents: [
      '2 flower bowl candles, 3 wicks each',
      'Gold-fleck finish on both',
      '5-piece box of chocolates',
      'Choice of four lid colours',
    ],
    occasions: ['Diwali', 'Weddings', 'Corporate gifting', 'Festive giveaways'],
    from: 599,
    image: 'hampers/greeting-box.jpg',
    alt: 'Printed gift boxes with flower bowl candles and chocolates, in four lid colours',
  },
  {
    id: 'bloom-box',
    name: 'The Bloom Box',
    scale: '9 BLOOM CANDLES · GIFT BOX',
    description:
      'Nine hand-sculpted blooms, each in its own paper-lined compartment. It opens like a box of flowers and outlasts one by a few years.',
    contents: [
      '9 sculpted bloom candles',
      'One bloom per lined compartment',
      'Your choice of palette',
      'White rigid gift box',
    ],
    occasions: ['Weddings', 'Anniversaries', "Mother's Day", 'Housewarmings'],
    from: 899,
    image: 'hampers/bloom-box-spectrum.jpg',
    alt: 'Nine sculpted bloom candles in a white compartment gift box',
    variations: [
      {
        name: 'Full spectrum',
        swatch:
          'conic-gradient(from 135deg, #cf2233 0 20%, #e2929b 20% 40%, #7fa9d2 40% 60%, #e0b03a 60% 80%, #5f8a63 80% 100%)',
        image: 'hampers/bloom-box-spectrum.jpg',
      },
      {
        name: 'Blush & ivory',
        swatch: 'linear-gradient(135deg, #f0a3ad 0 50%, #f6ead9 50% 100%)',
        image: 'hampers/bloom-box-blush.jpg',
      },
    ],
  },
  {
    id: 'treat-box',
    name: 'The Treat Box',
    scale: '2 CANDLES + TREATS · LARGE BOX',
    description:
      'Two of our scented jars with a row of namkeen, chocolate and a bottled drink behind them — for the people who want a gift to open and a gift to finish.',
    contents: [
      '2 scented jars — gel & soy wax',
      '4 packs of namkeen',
      'Dark chocolate & coated almonds',
      'A bottled soft drink',
      'Gold box with a satin bow',
    ],
    occasions: ['Diwali', 'Corporate gifting', 'Client gifts', 'Festive giveaways'],
    from: 899,
    image: 'hampers/treat-box.jpg',
    alt: 'Large gold hamper with two jar candles, namkeen, chocolate and a drink',
  },
  {
    id: 'tiered-centrepiece',
    name: 'The Tiered Centrepiece',
    scale: '3-TIER STAND · ONE PIECE',
    description:
      'Not a box — three scalloped gold tiers poured with pearl-studded wax, lit from every tier at once. It is the thing on the table everyone looks at.',
    contents: [
      'Three-tier gold metal stand',
      'Pearl-studded hand-poured wax',
      'Multiple wicks on every tier',
      'Your choice of wax colours',
    ],
    occasions: ['Weddings', 'Anniversaries', 'Milestone events', 'Diwali'],
    from: 599,
    badge: 'Statement piece',
    image: 'hampers/tiered-centrepiece.jpg',
    alt: 'Three-tier gold candle stand poured with pink and yellow pearl-studded wax',
  },
];

/** The closing note under the grid — build-your-own and bulk. */
export const hamperNote = {
  title: 'Or build the box yourself.',
  text: 'Every hamper above is a starting point, not a fixed set — swap any candle, change the palette, or add and drop pieces until the box is what you wanted. Tell us the budget per box and how many you need, and we will put one together around it. Bulk pricing applies from 25 boxes onwards.',
  cta: 'Build your own hamper',
  message:
    "Hi Aura Nestt! I'd like to put a hamper together. Here's the budget per box and the quantity I have in mind:",
};
