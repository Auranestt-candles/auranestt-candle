# Aura Nestt Candle — Premium Static Website

A premium, responsive, GitHub Pages-ready storefront for Aura Nestt Candle.
No framework, no build step — plain HTML, modular CSS and ES modules.

## Project structure

```
index.html                     page shell only; content hooks are data-* attributes
assets/
  css/
    main.css                   entry point — @imports the partials in order
    base/                      tokens, reset, typography (shared type, buttons, utilities)
    layout/                    header, section rhythm, footer
    components/                one file per UI component, media queries co-located
  js/
    main.js                    entry point — initialises each component
    config.js                  WhatsApp number and other owner-editable settings
    data/
      products.js              the candle catalogue (single source of truth)
      jar-candles.js           jar price guide: containers, sizes, price factors
      customize.js             the five customisation steps and their options
      navigation.js            nav links and collection filters
    lib/
      dom.js                   qs/qsa/escapeHtml/render helpers
      whatsapp.js              wa.me link and message builders
    components/                site-nav, product-grid, product-card,
                               collection-filter, whatsapp-links, current-year
  images/
    brand/                     logo art and the hero photograph
    sections/                  photography for a page section (care, gifting)
    products/<product-id>/     one folder per candle, one photo per colour
```

Product photos are addressed as `<product-id>/<colour>.jpg`, e.g.
`products/peony-rose/pink.jpg`, and the base path is `PRODUCT_IMAGE_PATH` in
`config.js` — so `image` values in `products.js` stay short.

The Customize section reuses `products/jar-candles/clear-glass.jpg` rather than
keeping a second copy of the same photograph.

Conventions:

- **Markup hooks are `data-*` attributes** (`data-product-grid`, `data-whatsapp-link`).
  Classes are for styling only, so restyling never breaks behaviour.
- **Components render from data.** The product grid, filter bar and both nav menus are
  generated from `assets/js/data/`, so nothing is duplicated in the markup.
- **Events are delegated** to the grid rather than bound per card.
- **CSS media queries live beside the component they modify**, not in a block at the
  bottom of one large file. Breakpoints: 1050px, 800px, 520px.
- **Design tokens** (colour, type, spacing) are declared only in `css/base/tokens.css`.
- **Nothing on the page is smaller than 10px**, and body copy sits at 13–17px.
  Small caps labels carry letter-spacing instead of shrinking.

## Voice

Copy follows the printed catalog: feeling first, specification second. Short
sentences, an em-dash where a pause helps, and a concrete moment rather than an
adjective — *"a calming glow at the end of a long day"*, not *"premium quality"*.

Claims are limited to the six the catalog already makes (handmade, premium wax,
long lasting burn, beautiful fragrance, perfect for gifting, eco friendly),
which are also the trust strip below the hero. Don't add burn times, fragrance
notes or delivery promises to the copy unless they are true — those belong in
product data where they can be kept accurate.

## Editing the site

### Add or change a candle

Edit `assets/js/data/products.js` — no HTML changes needed:

```js
{
  id: 'peony-rose',                       // unique, kebab-case
  name: 'Peony Rose',
  collection: 'FLORAL COLLECTION',
  description: 'A layered peony bloom, hand-poured petal by petal.',
  categories: ['floral'],                 // must match a filter in data/navigation.js
  image: 'peony-rose.jpg',                // file in assets/images/
  alt: 'Peony Rose candle',
  packs: [                                // smallest first — it is the default
    { size: 1, price: 110 },
    { size: 2, price: 210 },
    { size: 4, price: 400 },
  ],
  colours: [
    // The first entry is the default selection shown when the page loads.
    { name: 'Pink', hex: '#e79ab0', image: 'peony-rose.jpg' },
    { name: 'Peach', hex: '#f3bb9c', image: 'peony-rose-peach.jpg' },
  ],
  order: { cta: 'Order this candle' },
}
```

Pack sizes and colours are pickers, so **don't list them in `description`** — use
that line for a short piece of copy about the candle instead.

Choosing a pack updates the headline price; choosing a colour swaps the photo.
The WhatsApp message is built from both, e.g.
`Peony Rose — Pack of 2 — ₹210 — Peach`.

> Only the default photo of each candle is real. Every other swatch points at a
> different candle's folder as a placeholder — that is why choosing "Blue" on
> Rose Bloom currently shows the Cloud candle. As real photography arrives, drop
> it into that candle's own folder as `<colour>.jpg` and update the `image`
> value; a swatch is right when its path starts with its own product id.

### Set your WhatsApp number

`assets/js/config.js`:

```js
export const WHATSAPP_NUMBER = '919999999999';
```

International format, no `+`, spaces or dashes — e.g. `919876543210`.

### WhatsApp destinations

Two different links, both configured in `config.js`:

| Where | Goes to | Why |
| --- | --- | --- |
| Card order buttons, floating button, "Order on WhatsApp" card | direct chat (`WHATSAPP_NUMBER`) | carries a pre-filled message with the product, pack and colour |
| "Join our WhatsApp group" card | `WHATSAPP_GROUP_URL` | community and restock alerts; a group invite cannot carry a message |

Keep ordering on the direct chat — a group invite drops the order details and
puts the buyer in a room instead of a conversation.

### Update contact details

Search `index.html` for `@auranestt_candle`.

### Jar candle prices

Jar candles are priced by container and size, not by pack, so the card carries
`packs: []` and a `priceLabel` (`FROM ₹149`), and its CTA links to the
**#jar-candles** section instead of opening WhatsApp. That section is rendered
from `assets/js/data/jar-candles.js` — twelve containers × three sizes,
transcribed from page 12 of the printed catalog. Every price is a button that
opens WhatsApp with that container and size written out.

Keep the table and the printed guide in step. Any other product can use the
same escape hatch: give it an empty `packs`, a `priceLabel`, and an
`order.href`.

### Customisation options

The five steps in **#customize** — container, wax, fragrance, decoration, wick —
come from `assets/js/data/customize.js`, transcribed from page 13 of the printed
catalog, along with the occasions strip and the closing "fully customizable"
tile. An option with a `detail` renders as a described list; one without renders
as a chip, so a list of twelve containers stays scannable.

### Ordering, shipping and payment terms

These are stated in the **Ordering & delivery** section of `index.html`
(`#ordering`) and must match how you actually trade:

- direct orders are confirmed by a 30% advance;
- shipping is nationwide, charged at actual, paid by the customer;
- turnaround depends on the size of the order;
- the alternative route is Flipkart — customers search "auranestt candles".

The Flipkart search link also appears as a card in the contact section.

### Change navigation or filters

`assets/js/data/navigation.js`. A new filter needs a matching value in the
`categories` array of the products it should show.

## Run locally

ES modules are blocked by the browser over `file://`, so open the site through a
server rather than double-clicking `index.html`:

```bash
npm start          # python3 -m http.server 8080
```

Then open <http://localhost:8080>. VS Code's Live Server extension works too.

## Before you deploy

`index.html` carries Open Graph tags so the link previews with a photo and a
headline when it is shared — in a WhatsApp group, for instance. Open Graph
rejects relative paths, so replace `YOUR-USERNAME` in the two absolute URLs
(`og:url` and `og:image`) with your live GitHub Pages address.

## Deploy on GitHub Pages

1. Push this folder to a GitHub repository.
2. **Settings → Pages → Build and deployment**.
3. Source: **Deploy from a branch**, branch `main`, folder `/ (root)`.
4. Save — GitHub publishes the site as-is. No Node.js build is required.

## Known trade-off

Product cards are rendered by JavaScript from `data/products.js`. This keeps the
catalogue in one place, but the cards are not in the HTML that is served, so
visitors with JavaScript disabled see the `<noscript>` message in the collections
section instead of the grid. If search indexing of individual products becomes
important, add a small Node script that pre-renders the cards into `index.html`
at commit time.
