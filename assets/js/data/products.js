/**
 * Product catalogue — the single source of truth for the collections grid.
 *
 * Adding a candle: append an entry here. No markup changes are needed; the grid
 * is rendered by `components/product-grid.js` from this list.
 *
 * @typedef {object} PackOption
 * @property {number} size   Candles in the pack.
 * @property {number} price  Price of the whole pack, in rupees.
 *
 * @typedef {object} ColourOption
 * @property {string} name      Shown to shoppers and sent in the WhatsApp message.
 * @property {string} [hex]     Swatch colour, sampled from the photograph.
 * @property {string} [swatch]  Any CSS background, for mixed packs that no single
 *                              colour describes (a gradient of what is in the box).
 *                              Takes precedence over `hex`.
 * @property {string} image     Path under `assets/images/products/`.
 *
 * @typedef {object} Product
 * @property {string} id           Unique, kebab-case. Used for radio group names.
 * @property {string} name
 * @property {string} collection   Small label above the name.
 * @property {string} description  One line of copy. Pack sizes and colours are
 *                                 pickers now, so do not list them here.
 * @property {string[]} categories Must match the filters in `data/navigation.js`.
 * @property {string} image        Default image, shown before any colour is picked.
 * @property {string} alt
 * @property {PackOption[]} packs      Smallest pack first; it is the default.
 *                                     Empty when the price depends on choices a
 *                                     card cannot hold (see `priceLabel`).
 * @property {string} [priceLabel]     Shown instead of a pack price, e.g. 'FROM ₹149'.
 * @property {ColourOption[]} colours  First entry is the default selection.
 * @property {{cta: string, href?: string}} order  Button label. Without `href` the
 *                                     button opens WhatsApp with a message built from
 *                                     the name, pack and colour; with it, the CTA is a
 *                                     link to that section instead.
 */

/**
 * Swatch colours, sampled from the photography. Shared across the catalogue so
 * the same colour name always reads the same in every card.
 */
const SWATCH = {
  pink: '#e2929b',
  red: '#a92038',
  orange: '#e07726',
  yellow: '#e0b03a',
  green: '#5f8a63',
  blue: '#7fa9d2',
  purple: '#a98ace',
  brown: '#a97e5c',
  white: '#f1e7da',
  skyBlue: '#a9cbe6',
  clearGlass: '#e9edee',
  // A mixed pack is not one colour, so the swatch shows what is in the box.
  multicolor:
    'conic-gradient(from 135deg, #ecc45f 0 25%, #7fa9d2 25% 50%, #e2929b 50% 75%, #a98ace 75% 100%)',
};

/** @type {Product[]} */
export const products = [
  {
    id: 'rose-bloom',
    name: 'Rose Bloom',
    collection: 'ROSE BLOOM COLLECTION',
    description: 'A rose that never wilts — hand-sculpted petal by petal, for the people who make your days softer.',
    categories: ['floral', 'gifting'],
    image: 'rose-bloom/pink.jpg',
    alt: 'Rose Bloom candles',
    packs: [{ size: 2, price: 139 }, { size: 4, price: 239 }],
    colours: [
      { name: 'Pink', hex: SWATCH.pink, image: 'rose-bloom/pink.jpg' },
      { name: 'Red', hex: SWATCH.red, image: 'rose-bloom/red.jpg' },
      { name: 'Orange', hex: SWATCH.orange, image: 'rose-bloom/orange.jpg' },
      { name: 'Yellow', hex: SWATCH.yellow, image: 'rose-bloom/yellow.jpg' },
      { name: 'Green', hex: SWATCH.green, image: 'rose-bloom/green.jpg' },
      { name: 'Blue', hex: SWATCH.blue, image: 'rose-bloom/blue.jpg' },
      { name: 'Purple', hex: SWATCH.purple, image: 'rose-bloom/purple.jpg' },
      { name: 'White', hex: SWATCH.white, image: 'rose-bloom/white.jpg' },
      { name: 'Multicolor', swatch: SWATCH.multicolor, image: 'rose-bloom/multicolor.jpg' },
    ],
    order: { cta: 'Order this candle' },
  },
  {
    id: 'peony-rose',
    name: 'Peony Rose',
    collection: 'FLORAL COLLECTION',
    description: 'Layered like a peony in full bloom, it turns an ordinary evening into something worth slowing down for.',
    categories: ['floral', 'gifting'],
    image: 'peony-rose/pink.jpg',
    alt: 'Peony Rose candle',
    packs: [{ size: 2, price: 199 }, { size: 4, price: 329 }],
    colours: [
      { name: 'Pink', hex: SWATCH.pink, image: 'peony-rose/pink.jpg' },
      { name: 'Red', hex: SWATCH.red, image: 'peony-rose/red.jpg' },
      { name: 'Orange', hex: SWATCH.orange, image: 'peony-rose/orange.jpg' },
      { name: 'Yellow', hex: SWATCH.yellow, image: 'peony-rose/yellow.jpg' },
      { name: 'Green', hex: SWATCH.green, image: 'peony-rose/green.jpg' },
      { name: 'Blue', hex: SWATCH.blue, image: 'peony-rose/blue.jpg' },
      { name: 'Purple', hex: SWATCH.purple, image: 'peony-rose/purple.jpg' },
      { name: 'Brown', hex: SWATCH.brown, image: 'peony-rose/brown.jpg' },
      { name: 'White', hex: SWATCH.white, image: 'peony-rose/white.jpg' },
      { name: 'Multicolor', swatch: SWATCH.multicolor, image: 'peony-rose/multicolor.jpg' },
    ],
    order: { cta: 'Order this candle' },
  },
  {
    id: 'lotus-bloom',
    name: 'Lotus Bloom',
    collection: 'FLORAL COLLECTION',
    description: 'A quiet lotus for a quiet moment — light it, breathe out, and let the day finally settle.',
    categories: ['floral', 'pillar', 'gifting'],
    image: 'lotus-bloom/pink.jpg',
    alt: 'Lotus Bloom candle',
    packs: [{ size: 2, price: 209 }, { size: 4, price: 349 }],
    colours: [
      { name: 'Pink', hex: SWATCH.pink, image: 'lotus-bloom/pink.jpg' },
      { name: 'Red', hex: SWATCH.red, image: 'lotus-bloom/red.jpg' },
      { name: 'Orange', hex: SWATCH.orange, image: 'lotus-bloom/orange.jpg' },
      { name: 'Yellow', hex: SWATCH.yellow, image: 'lotus-bloom/yellow.jpg' },
      { name: 'Green', hex: SWATCH.green, image: 'lotus-bloom/green.jpg' },
      { name: 'Blue', hex: SWATCH.blue, image: 'lotus-bloom/blue.jpg' },
      { name: 'Purple', hex: SWATCH.purple, image: 'lotus-bloom/purple.jpg' },
      { name: 'Brown', hex: SWATCH.brown, image: 'lotus-bloom/brown.jpg' },
      { name: 'White', hex: SWATCH.white, image: 'lotus-bloom/white.jpg' },
      { name: 'Multicolor', swatch: SWATCH.multicolor, image: 'lotus-bloom/multicolor.jpg' },
    ],
    order: { cta: 'Order this candle' },
  },
  {
    id: 'bubble-cube',
    name: 'Bubble Cube',
    collection: 'BUBBLE CUBE COLLECTION',
    description: 'Little cubes of calm — playful enough for a study desk, soft enough for a bedside table.',
    categories: ['pillar', 'gifting'],
    image: 'bubble-cube/pink.jpg',
    alt: 'Bubble Cube candles',
    packs: [{ size: 4, price: 149 }, { size: 6, price: 219 }],
    colours: [
      { name: 'Pink', hex: SWATCH.pink, image: 'bubble-cube/pink.jpg' },
      { name: 'Red', hex: SWATCH.red, image: 'bubble-cube/red.jpg' },
      { name: 'Yellow', hex: SWATCH.yellow, image: 'bubble-cube/yellow.jpg' },
      { name: 'Green', hex: SWATCH.green, image: 'bubble-cube/green.jpg' },
      { name: 'Blue', hex: SWATCH.blue, image: 'bubble-cube/blue.jpg' },
      { name: 'Purple', hex: SWATCH.purple, image: 'bubble-cube/purple.jpg' },
      { name: 'Brown', hex: SWATCH.brown, image: 'bubble-cube/brown.jpg' },
      { name: 'White', hex: SWATCH.white, image: 'bubble-cube/white.jpg' },
      { name: 'Multicolor', swatch: SWATCH.multicolor, image: 'bubble-cube/multicolor.jpg' },
    ],
    order: { cta: 'Order this candle' },
  },
  {
    id: 'moon-face',
    name: 'Moon Face',
    collection: 'MOON FACE COLLECTION',
    description: 'A calm little moon to keep you company through slow nights and unhurried conversations.',
    categories: [],
    image: 'moon-face/white.jpg',
    alt: 'Moon Face candles',
    packs: [{ size: 2, price: 139 }, { size: 4, price: 239 }],
    colours: [
      { name: 'White', hex: SWATCH.white, image: 'moon-face/white.jpg' },
      { name: 'Pink', hex: SWATCH.pink, image: 'moon-face/pink.jpg' },
      { name: 'Red', hex: SWATCH.red, image: 'moon-face/red.jpg' },
      { name: 'Yellow', hex: SWATCH.yellow, image: 'moon-face/yellow.jpg' },
      { name: 'Blue', hex: SWATCH.blue, image: 'moon-face/blue.jpg' },
      { name: 'Purple', hex: SWATCH.purple, image: 'moon-face/purple.jpg' },
      { name: 'Brown', hex: SWATCH.brown, image: 'moon-face/brown.jpg' },
      { name: 'Multicolor', swatch: SWATCH.multicolor, image: 'moon-face/multicolor.jpg' },
    ],
    order: { cta: 'Order this candle' },
  },
  {
    id: 'teddy-bear',
    name: 'Teddy Bear',
    collection: 'TEDDY BEAR COLLECTION',
    description: 'The one everyone gifts — a cuddly little bear that says \'thinking of you\' without needing a card.',
    categories: ['pillar', 'gifting'],
    image: 'teddy-bear/brown.jpg',
    alt: 'Teddy Bear candles',
    packs: [{ size: 2, price: 139 }, { size: 4, price: 239 }],
    colours: [
      { name: 'Brown', hex: SWATCH.brown, image: 'teddy-bear/brown.jpg' },
      { name: 'Pink', hex: SWATCH.pink, image: 'teddy-bear/pink.jpg' },
      { name: 'Red', hex: SWATCH.red, image: 'teddy-bear/red.jpg' },
      { name: 'Orange', hex: SWATCH.orange, image: 'teddy-bear/orange.jpg' },
      { name: 'Yellow', hex: SWATCH.yellow, image: 'teddy-bear/yellow.jpg' },
      { name: 'Green', hex: SWATCH.green, image: 'teddy-bear/green.jpg' },
      { name: 'Blue', hex: SWATCH.blue, image: 'teddy-bear/blue.jpg' },
      { name: 'Purple', hex: SWATCH.purple, image: 'teddy-bear/purple.jpg' },
      { name: 'White', hex: SWATCH.white, image: 'teddy-bear/white.jpg' },
      { name: 'Multicolor', swatch: SWATCH.multicolor, image: 'teddy-bear/multicolor.jpg' },
    ],
    order: { cta: 'Order this candle' },
  },
  {
    id: 'evil-eye',
    name: 'Evil Eye',
    collection: 'EVIL EYE COLLECTION',
    description: 'A charm and a candle in one — glossy, protective, and quietly watching over your space.',
    categories: ['pillar', 'gifting'],
    image: 'evil-eye/blue.jpg',
    alt: 'Evil Eye candles',
    packs: [{ size: 2, price: 199 }, { size: 3, price: 279 }, { size: 4, price: 339 }],
    colours: [
      { name: 'Blue', hex: SWATCH.blue, image: 'evil-eye/blue.jpg' },
      { name: 'Pink', hex: SWATCH.pink, image: 'evil-eye/pink.jpg' },
      { name: 'Orange', hex: SWATCH.orange, image: 'evil-eye/orange.jpg' },
      { name: 'Green', hex: SWATCH.green, image: 'evil-eye/green.jpg' },
      { name: 'Purple', hex: SWATCH.purple, image: 'evil-eye/purple.jpg' },
      { name: 'White', hex: SWATCH.white, image: 'evil-eye/white.jpg' },
      { name: 'Multicolor', swatch: SWATCH.multicolor, image: 'evil-eye/multicolor.jpg' },
    ],
    order: { cta: 'Order this candle' },
  },
  {
    id: 'heart-in-bloom',
    name: 'Heart in Bloom',
    collection: 'HEARTSCAPE COLLECTION',
    description: 'Where delicate petals meet little hearts — a candle that speaks the language of love, peace and beautiful moments.',
    categories: ['floral', 'pillar', 'gifting'],
    image: 'heart-in-bloom/pink.jpg',
    alt: 'Heart in Bloom scented candle',
    packs: [{ size: 2, price: 249 }, { size: 3, price: 349 }],
    colours: [
      { name: 'Pink', hex: SWATCH.pink, image: 'heart-in-bloom/pink.jpg' },
      { name: 'Orange', hex: SWATCH.orange, image: 'heart-in-bloom/orange.jpg' },
      { name: 'Yellow', hex: SWATCH.yellow, image: 'heart-in-bloom/yellow.jpg' },
      { name: 'Green', hex: SWATCH.green, image: 'heart-in-bloom/green.jpg' },
      { name: 'Blue', hex: SWATCH.blue, image: 'heart-in-bloom/blue.jpg' },
      { name: 'Purple', hex: SWATCH.purple, image: 'heart-in-bloom/purple.jpg' },
      { name: 'Brown', hex: SWATCH.brown, image: 'heart-in-bloom/brown.jpg' },
      { name: 'White', hex: SWATCH.white, image: 'heart-in-bloom/white.jpg' },
      { name: 'Multicolor', swatch: SWATCH.multicolor, image: 'heart-in-bloom/multicolor.jpg' },
    ],
    order: { cta: 'Order this candle' },
  },
  {
    id: 'spiral-wave-pillar',
    name: 'Spiral Wave Pillar',
    collection: 'SCULPTURAL COLLECTION',
    description: 'Sculpted in one slow spiral — a quiet centrepiece that looks as good unlit as it does aglow.',
    categories: ['pillar', 'gifting'],
    image: 'spiral-wave-pillar/red.jpg',
    alt: 'Spiral Wave Pillar candle',
    packs: [{ size: 2, price: 259 }, { size: 3, price: 369 }, { size: 4, price: 479 }],
    colours: [
      { name: 'Red', hex: SWATCH.red, image: 'spiral-wave-pillar/red.jpg' },
      { name: 'Pink', hex: SWATCH.pink, image: 'spiral-wave-pillar/pink.jpg' },
      { name: 'Yellow', hex: SWATCH.yellow, image: 'spiral-wave-pillar/yellow.jpg' },
      { name: 'Blue', hex: SWATCH.blue, image: 'spiral-wave-pillar/blue.jpg' },
      { name: 'Purple', hex: SWATCH.purple, image: 'spiral-wave-pillar/purple.jpg' },
      { name: 'White', hex: SWATCH.white, image: 'spiral-wave-pillar/white.jpg' },
    ],
    order: { cta: 'Order this candle' },
  },
  {
    id: 'wooven-bloom',
    name: 'Wooven Bloom',
    collection: 'WOOVEN BLOOM COLLECTION',
    description: 'A bloom with a woven texture — the kind of candle you catch yourself running a thumb across before you light it.',
    categories: ['gifting'],
    image: 'wooven-bloom/pink.jpg',
    alt: 'Wooven Bloom candles',
    packs: [{ size: 4, price: 149 }, { size: 12, price: 369 }],
    colours: [
      { name: 'Pink', hex: SWATCH.pink, image: 'wooven-bloom/pink.jpg' },
      { name: 'Yellow', hex: SWATCH.yellow, image: 'wooven-bloom/yellow.jpg' },
      { name: 'Blue', hex: SWATCH.blue, image: 'wooven-bloom/blue.jpg' },
      { name: 'Purple', hex: SWATCH.purple, image: 'wooven-bloom/purple.jpg' },
      { name: 'Brown', hex: SWATCH.brown, image: 'wooven-bloom/brown.jpg' },
      { name: 'White', hex: SWATCH.white, image: 'wooven-bloom/white.jpg' },
      { name: 'Multicolor', swatch: SWATCH.multicolor, image: 'wooven-bloom/multicolor.jpg' },
    ],
    order: { cta: 'Order this candle' },
  },
  {
    id: 'jar-candles',
    name: 'Jar Candles',
    collection: 'JAR CANDLE COLLECTION',
    description: 'Your candle, your way — pick the container, wax, fragrance and finishing touches, and we pour it for you.',
    categories: ['jar', 'gifting'],
    image: 'jar-candles/combined.jpg',
    alt: 'Jar candle collection',
    // Priced by container and size, not by pack — see `data/jar-candles.js`.
    packs: [],
    priceLabel: 'FROM ₹149',
    colours: [
      { name: 'Clear Glass', hex: SWATCH.clearGlass, image: 'jar-candles/clear-glass.jpg' },
    ],
    order: { cta: 'See jars & prices', href: '#jar-candles' },
  },
];
