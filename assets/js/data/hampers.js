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
 * @property {number} [from]   Starting price for this variation, when it costs
 *                             differently from the rest — a trunk holding four
 *                             jars rather than two. Choosing it updates the
 *                             headline price and the WhatsApp message. Omit it
 *                             and the variation uses the hamper's own `from`.
 *
 * @typedef {object} Hamper
 * @property {string} id           Unique, kebab-case.
 * @property {string} name
 * @property {string} scale        Small label above the name — the size of the
 *                                 box, e.g. '9 BLOOM CANDLES · GIFT BOX'.
 * @property {string} description  One line of copy — what the box is like.
 * @property {string[]} contents   What is in the box, shortest first. Physical
 *                                 items only — anything about terms, service or
 *                                 price belongs outside this list, or it stops
 *                                 scanning as a list of contents.
 * @property {string[]} occasions  Where this box tends to be sent. Hints, not
 *                                 categories — any box suits any occasion.
 * @property {number} from         Starting price in rupees, for `FROM ₹…`. With
 *                                 priced variations this is the lowest of them,
 *                                 and the fallback for any that name no price.
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
    banners: []
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
    banners: ['Diwali']
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
    from: 799,
    image: 'hampers/bloom-box-blush.jpg',
    alt: 'Nine sculpted bloom candles in a white compartment gift box',
    banners: [],
    variations: [
      {
        name: 'Blush & ivory',
        swatch: 'linear-gradient(135deg, #f0a3ad 0 50%, #f6ead9 50% 100%)',
        image: 'hampers/bloom-box-blush.jpg',
        from: 799,
      },
      {
        name: 'Full spectrum',
        swatch:
          'conic-gradient(from 135deg, #cf2233 0 20%, #e2929b 20% 40%, #7fa9d2 40% 60%, #e0b03a 60% 80%, #5f8a63 80% 100%)',
        image: 'hampers/bloom-box-spectrum.jpg',
        from: 899,
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
    banners: ['Diwali'],
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
    banners: ['Diwali'],
    occasions: ['Weddings', 'Anniversaries', 'Milestone events', 'Diwali'],
    from: 599,
    badge: 'Statement piece',
    image: 'hampers/tiered-centrepiece-ivory.jpg',
    alt: 'Three-tier gold candle stand poured with pearl-studded wax',
    // Three wax colourways on the same stand — the tiers are poured to order.
    variations: [
      { name: 'Ivory', hex: '#f5ead0', image: 'hampers/tiered-centrepiece-ivory.jpg' },
      {
        name: 'Blush',
        swatch: 'linear-gradient(135deg, #f0a3ad 0 50%, #f3e2b4 50% 100%)',
        image: 'hampers/tiered-centrepiece-blush.jpg',
      },
      { name: 'Amber', hex: '#edb982', image: 'hampers/tiered-centrepiece-amber.jpg' },
    ],
  },
  {
    id: 'keepsake-trunk',
    name: 'The Keepsake Trunk',
    scale: '2–4 JAR CANDLES · TRUNK BOX',
    banners: [],
    description:
      'Jar candles in a hinged trunk with a brass handle and a satin bed, their lids papered to match the box. The candles burn down; the trunk gets kept and used.',
    contents: [
      '2, 3 or 4 jar candles by trunk size',
      'Lids papered to match the box',
      'Choice of 8 candle colours',
    ],
    occasions: ['Diwali', 'Weddings', 'Corporate gifting', 'Housewarmings'],
    from: 499,
    image: 'hampers/trunk-candles-teal.jpg',
    alt: 'Jar candles in a patterned trunk box with a brass handle',
    variations: [
      {
        name: 'Teal floral · 2 jars',
        swatch: 'linear-gradient(135deg, #1f6b6a 0 55%, #f2efe6 55% 100%)',
        image: 'hampers/trunk-candles-teal.jpg',
        from: 499,
      },
      {
        name: 'White & gold · 3 jars',
        swatch: 'linear-gradient(135deg, #f6f1e8 0 55%, #c6a052 55% 100%)',
        image: 'hampers/trunk-candles-white.jpg',
        from: 599,
      },
      {
        name: 'Blue mosaic · 4 jars',
        swatch: 'linear-gradient(135deg, #2b3f8f 0 55%, #e8c86a 55% 100%)',
        image: 'hampers/trunk-candles-blue.jpg',
        from: 699,
      },
    ],
  },
  {
    id: 'dry-fruit-trunk',
    name: 'The Dry Fruit Trunk',
    scale: '2–4 JARS · TRUNK BOX',
    banners: ['Diwali'],
    description:
      'The same hinged trunk, filled instead with screw-top jars of kaju, badam, pista and kishmish — for the people on your list who would rather be fed than lit.',
    contents: [
      '2, 3 or 4 jars by trunk size',
      'Kaju, badam, pista & kishmish',
      'Lids papered to match the box',
    ],
    occasions: ['Diwali', 'Corporate gifting', 'Weddings', 'Client gifts'],
    from: 499,
    image: 'hampers/trunk-dryfruit-teal.jpg',
    alt: 'Jars of dry fruit in a patterned trunk box with a brass handle',
    variations: [
      {
        name: 'Teal floral · 2 jars',
        swatch: 'linear-gradient(135deg, #1f6b6a 0 55%, #f2efe6 55% 100%)',
        image: 'hampers/trunk-dryfruit-teal.jpg',
        from: 499,
      },
      {
        name: 'White & gold · 3 jars',
        swatch: 'linear-gradient(135deg, #f6f1e8 0 55%, #c6a052 55% 100%)',
        image: 'hampers/trunk-dryfruit-white.jpg',
        from: 599,
      },
      {
        name: 'Blue mosaic · 4 jars',
        swatch: 'linear-gradient(135deg, #2b3f8f 0 55%, #e8c86a 55% 100%)',
        image: 'hampers/trunk-dryfruit-blue.jpg',
        from: 699,
      },
    ],
  },
  {
    id: 'gold-basket',
    name: 'The Gold Basket',
    scale: 'BASKET · CANDLES & TREATS',
    banners: ['Diwali'],
    description:
      'An open wire basket in antique gold, with two of our own rose-petal jars lit at the front and brownie, chocolate and net pouches of nuts behind them.',
    contents: [
      '2 jar candles',
      'Net pouches of kaju & badam',
      'Brownie and filled dark chocolate',
      'Gold wire basket, yours to keep',
    ],
    occasions: ['Diwali', 'Weddings', 'Client gifts', 'Festive giveaways'],
    from: 749,
    image: 'hampers/gold-basket.jpg',
    alt: 'Gold wire basket with two lit jar candles, chocolate and pouches of nuts',
  },
];

/**
 * Shown on every hamper card, under the contents.
 *
 * It lives here as one string rather than as a bullet repeated in all eight
 * `contents` arrays: it is true of every hamper, so copying it per hamper adds
 * no information and dilutes the bullets that do differ. It is rendered apart
 * from the contents because it describes the price, not what is in the box.
 */
export const customisationNote = 'Customisable — the price adjusts to what you change.';

/** The closing note under the grid — build-your-own and bulk. */
export const hamperNote = {
  title: 'Or build the box yourself.',
  text: 'Every hamper above is a starting point, not a fixed set — swap any candle, change the palette, or add and drop pieces until the box is what you wanted. Tell us the budget per box and how many you need, and we will put one together around it. Bulk pricing applies from 25 boxes onwards.',
  cta: 'Build your own hamper',
  message:
    "Hi Aura Nestt! I'd like to put a hamper together. Here's the budget per box and the quantity I have in mind:",
};
