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
 * @property {string} name   Shown to shoppers and sent in the WhatsApp message.
 * @property {string} hex    Swatch colour.
 * @property {string} image  File name inside `assets/images/`.
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
 * @property {ColourOption[]} colours  First entry is the default selection.
 * @property {{cta: string}} order     Button label. The WhatsApp message is built
 *                                     from the name, pack and colour on order.
 */

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
    packs: [{ size: 1, price: 70 }, { size: 2, price: 140 }, { size: 4, price: 260 }],
    colours: [
      { name: 'Pink', hex: '#e79ab0', image: 'rose-bloom/pink.jpg' },
      { name: 'Yellow', hex: '#efd07a', image: 'lotus-bloom/pink.jpg' },
      { name: 'Lavender', hex: '#c3aede', image: 'evil-eye/deep-blue.jpg' },
      { name: 'White', hex: '#f6f1ea', image: 'moon-face/blush-pink.jpg' },
      { name: 'Peach', hex: '#f3bb9c', image: 'bubble-cube/baby-pink.jpg' },
      { name: 'Blue', hex: '#9fb9dd', image: 'cloud-candles/sky-blue.jpg' },
    ],
    order: { cta: 'Order this candle' },
  },
  {
    id: 'peony-rose',
    name: 'Peony Rose',
    collection: 'FLORAL COLLECTION',
    description: 'Layered like a peony in full bloom, it turns an ordinary evening into something worth slowing down for.',
    categories: ['floral'],
    image: 'peony-rose/pink.jpg',
    alt: 'Peony Rose candle',
    packs: [{ size: 1, price: 110 }, { size: 2, price: 210 }, { size: 4, price: 400 }],
    colours: [
      { name: 'Pink', hex: '#e79ab0', image: 'peony-rose/pink.jpg' },
      { name: 'Peach', hex: '#f3bb9c', image: 'spiral-wave-pillar/red.jpeg' },
      { name: 'White', hex: '#f6f1ea', image: 'cloud-candles/sky-blue.jpg' },
      { name: 'Yellow', hex: '#efd07a', image: 'lotus-bloom/pink.jpg' },
      { name: 'Blue', hex: '#9fb9dd', image: 'teddy-bear/baby-pink.jpg' },
      { name: 'Lavender', hex: '#c3aede', image: 'bubble-cube/baby-pink.jpg' },
    ],
    order: { cta: 'Order this candle' },
  },
  {
    id: 'lotus-bloom',
    name: 'Lotus Bloom',
    collection: 'FLORAL COLLECTION',
    description: 'A quiet lotus for a quiet moment — light it, breathe out, and let the day finally settle.',
    categories: ['floral', 'minimal'],
    image: 'lotus-bloom/pink.jpg',
    alt: 'Lotus Bloom candle',
    packs: [{ size: 1, price: 110 }, { size: 2, price: 210 }, { size: 4, price: 400 }],
    colours: [
      { name: 'Pink', hex: '#e79ab0', image: 'lotus-bloom/pink.jpg' },
      { name: 'Peach', hex: '#f3bb9c', image: 'spiral-wave-pillar/red.jpeg' },
      { name: 'White', hex: '#f6f1ea', image: 'heart-in-bloom/rose-pink.png' },
      { name: 'Yellow', hex: '#efd07a', image: 'bubble-cube/baby-pink.jpg' },
      { name: 'Blue', hex: '#9fb9dd', image: 'cloud-candles/sky-blue.jpg' },
      { name: 'Lavender', hex: '#c3aede', image: 'peony-rose/pink.jpg' },
    ],
    order: { cta: 'Order this candle' },
  },
  {
    id: 'bubble-cube',
    name: 'Bubble Cube',
    collection: 'BUBBLE CUBE COLLECTION',
    description: 'Little cubes of calm — playful enough for a study desk, soft enough for a bedside table.',
    categories: ['minimal', 'gifting'],
    image: 'bubble-cube/baby-pink.jpg',
    alt: 'Bubble Cube candles',
    packs: [{ size: 1, price: 40 }, { size: 2, price: 70 }, { size: 4, price: 130 }],
    colours: [
      { name: 'Baby Pink', hex: '#f2c3cd', image: 'bubble-cube/baby-pink.jpg' },
      { name: 'Baby Blue', hex: '#b5cde5', image: 'peony-rose/pink.jpg' },
      { name: 'Cream', hex: '#f2e6d2', image: 'evil-eye/deep-blue.jpg' },
      { name: 'Lavender', hex: '#c3aede', image: 'jar-candles/clear-glass.jpg' },
      { name: 'Sage Green', hex: '#b7c4ae', image: 'evil-eye/deep-blue.jpg' },
      { name: 'Peach', hex: '#f3bb9c', image: 'spiral-wave-pillar/red.jpeg' },
    ],
    order: { cta: 'Order this candle' },
  },
  {
    id: 'cloud-candles',
    name: 'Cloud Candles',
    collection: 'CLOUD COLLECTION',
    description: 'Soft as the sky on a good day — a gentle glow that makes a whole room feel lighter.',
    categories: ['minimal', 'gifting'],
    image: 'cloud-candles/sky-blue.jpg',
    alt: 'Cloud candles',
    packs: [{ size: 1, price: 75 }, { size: 2, price: 140 }, { size: 4, price: 260 }],
    colours: [
      { name: 'Sky Blue', hex: '#a9cbe6', image: 'cloud-candles/sky-blue.jpg' },
      { name: 'Lavender', hex: '#c3aede', image: 'peony-rose/pink.jpg' },
      { name: 'Ivory', hex: '#f4ecdd', image: 'bubble-cube/baby-pink.jpg' },
      { name: 'Baby Pink', hex: '#f2c3cd', image: 'teddy-bear/baby-pink.jpg' },
    ],
    order: { cta: 'Order this candle' },
  },
  {
    id: 'moon-face',
    name: 'Moon Face',
    collection: 'MOON FACE COLLECTION',
    description: 'A calm little moon to keep you company through slow nights and unhurried conversations.',
    categories: ['minimal', 'gifting'],
    image: 'moon-face/blush-pink.jpg',
    alt: 'Moon Face candles',
    packs: [{ size: 1, price: 75 }, { size: 2, price: 140 }, { size: 4, price: 260 }],
    colours: [
      { name: 'Blush Pink', hex: '#eab7b6', image: 'moon-face/blush-pink.jpg' },
      { name: 'Ivory', hex: '#f4ecdd', image: 'cloud-candles/sky-blue.jpg' },
      { name: 'Sage Green', hex: '#b7c4ae', image: 'heart-in-bloom/rose-pink.png' },
      { name: 'Lavender', hex: '#c3aede', image: 'teddy-bear/baby-pink.jpg' },
      { name: 'Mustard', hex: '#d8a63f', image: 'bubble-cube/baby-pink.jpg' },
      { name: 'Dusty Blue', hex: '#93a8bd', image: 'teddy-bear/baby-pink.jpg' },
    ],
    order: { cta: 'Order this candle' },
  },
  {
    id: 'teddy-bear',
    name: 'Teddy Bear',
    collection: 'TEDDY BEAR COLLECTION',
    description: 'The one everyone gifts — a cuddly little bear that says \'thinking of you\' without needing a card.',
    categories: ['gifting'],
    image: 'teddy-bear/baby-pink.jpg',
    alt: 'Teddy Bear candles',
    packs: [{ size: 1, price: 75 }, { size: 2, price: 140 }, { size: 4, price: 260 }],
    colours: [
      { name: 'Baby Pink', hex: '#f2c3cd', image: 'teddy-bear/baby-pink.jpg' },
      { name: 'Cream Yellow', hex: '#f0e2ae', image: 'spiral-wave-pillar/red.jpeg' },
      { name: 'Lavender', hex: '#c3aede', image: 'moon-face/blush-pink.jpg' },
      { name: 'Sky Blue', hex: '#a9cbe6', image: 'bubble-cube/baby-pink.jpg' },
      { name: 'Butter Yellow', hex: '#f5dd8f', image: 'heart-in-bloom/rose-pink.png' },
      { name: 'Mint Green', hex: '#b6d8c6', image: 'bubble-cube/baby-pink.jpg' },
    ],
    order: { cta: 'Order this candle' },
  },
  {
    id: 'evil-eye',
    name: 'Evil Eye',
    collection: 'EVIL EYE COLLECTION',
    description: 'A charm and a candle in one — glossy, protective, and quietly watching over your space.',
    categories: ['gifting', 'minimal'],
    image: 'evil-eye/deep-blue.jpg',
    alt: 'Evil Eye candles',
    packs: [{ size: 1, price: 150 }, { size: 2, price: 290 }, { size: 4, price: 560 }],
    colours: [
      { name: 'Deep Blue', hex: '#2f4f86', image: 'evil-eye/deep-blue.jpg' },
      { name: 'Turquoise', hex: '#4fb2ad', image: 'spiral-wave-pillar/red.jpeg' },
      { name: 'Lavender', hex: '#c3aede', image: 'heart-in-bloom/rose-pink.png' },
      { name: 'White', hex: '#f6f1ea', image: 'lotus-bloom/pink.jpg' },
      { name: 'Pink', hex: '#e79ab0', image: 'peony-rose/pink.jpg' },
      { name: 'Yellow', hex: '#efd07a', image: 'heart-in-bloom/rose-pink.png' },
      { name: 'Black', hex: '#2c2622', image: 'spiral-wave-pillar/red.jpeg' },
    ],
    order: { cta: 'Order this candle' },
  },
  {
    id: 'heart-in-bloom',
    name: 'Heart in Bloom',
    collection: 'HEARTSCAPE COLLECTION',
    description: 'Where delicate petals meet little hearts — a candle that speaks the language of love, peace and beautiful moments.',
    categories: ['floral', 'gifting'],
    image: 'heart-in-bloom/rose-pink.png',
    alt: 'Heart in Bloom scented candle',
    packs: [{ size: 1, price: 160 }, { size: 2, price: 310 }, { size: 4, price: 600 }],
    colours: [
      { name: 'Rose Pink', hex: '#dd8fa0', image: 'heart-in-bloom/rose-pink.png' },
      { name: 'Ivory', hex: '#f4ecdd', image: 'cloud-candles/sky-blue.jpg' },
      { name: 'Lavender', hex: '#c3aede', image: 'teddy-bear/baby-pink.jpg' },
      { name: 'Red', hex: '#a8261f', image: 'lotus-bloom/pink.jpg' },
    ],
    order: { cta: 'Order this candle' },
  },
  {
    id: 'spiral-wave-pillar',
    name: 'Spiral Wave Pillar',
    collection: 'SCULPTURAL COLLECTION',
    description: 'Sculpted in one slow spiral — a quiet centrepiece that looks as good unlit as it does aglow.',
    categories: ['sculptural', 'gifting'],
    image: 'spiral-wave-pillar/red.jpeg',
    alt: 'Spiral Wave Pillar candle',
    packs: [{ size: 1, price: 160 }, { size: 2, price: 300 }, { size: 4, price: 580 }],
    colours: [
      { name: 'Red', hex: '#a8261f', image: 'spiral-wave-pillar/red.jpeg' },
      { name: 'Ivory', hex: '#f4ecdd', image: 'rose-bloom/pink.jpg' },
      { name: 'Sage Green', hex: '#b7c4ae', image: 'evil-eye/deep-blue.jpg' },
      { name: 'Terracotta', hex: '#c2724f', image: 'cloud-candles/sky-blue.jpg' },
    ],
    order: { cta: 'Order this candle' },
  },
  {
    id: 'jar-candles',
    name: 'Jar Candles',
    collection: 'JAR CANDLE COLLECTION',
    description: 'Your candle, your way — pick the container, wax, fragrance and finishing touches, and we pour it for you.',
    categories: ['jar'],
    image: 'jar-candles/clear-glass.jpg',
    alt: 'Jar candle collection',
    packs: [{ size: 1, price: 149 }, { size: 2, price: 290 }, { size: 4, price: 560 }],
    colours: [
      { name: 'Clear Glass', hex: '#e9edee', image: 'jar-candles/clear-glass.jpg' },
      { name: 'Frosted Glass', hex: '#dfe6e6', image: 'teddy-bear/baby-pink.jpg' },
      { name: 'Amber', hex: '#c98a3c', image: 'teddy-bear/baby-pink.jpg' },
      { name: 'Terracotta', hex: '#c2724f', image: 'heart-in-bloom/rose-pink.png' },
    ],
    order: { cta: 'Enquire on WhatsApp' },
  },
];
