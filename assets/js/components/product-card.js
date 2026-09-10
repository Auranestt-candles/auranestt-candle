import { PRODUCT_IMAGE_PATH } from '../config.js';
import { escapeHtml, qs } from '../lib/dom.js';
import { formatPrice, packLabel } from '../lib/format.js';

/**
 * A product card: photo, price, pack sizes, colour swatches and an order
 * button. Markup only — the grid owns the event handling (see
 * `product-grid.js`).
 *
 * Both pickers are radio groups, so a card always has exactly one pack and one
 * colour selected, and the browser restores them on a back-navigation.
 */

/**
 * @param {import('../data/products.js').Product} product
 * @param {import('../data/products.js').PackOption} pack
 * @param {boolean} isDefault
 * @returns {string}
 */
function packTemplate(product, pack, isDefault) {
  return `
    <label class="pack">
      <input
        type="radio"
        name="pack-${escapeHtml(product.id)}"
        value="${pack.size}"
        data-price="${pack.price}"
        ${isDefault ? 'checked' : ''}
      >
      <span class="pack-label">${escapeHtml(packLabel(pack.size))}</span>
    </label>`;
}

/**
 * Pack sizes. The smallest pack is the default, so the headline price is the
 * lowest one — the least intimidating entry point.
 *
 * @param {import('../data/products.js').Product} product
 * @returns {string}
 */
function packPickerTemplate(product) {
  const [defaultPack] = product.packs;
  return `
    <fieldset class="pack-picker">
      <legend class="sr-only">Pack size for ${escapeHtml(product.name)}</legend>
      <div class="packs">
        ${product.packs.map(pack => packTemplate(product, pack, pack === defaultPack)).join('')}
      </div>
    </fieldset>`;
}

/**
 * @param {import('../data/products.js').Product} product
 * @param {import('../data/products.js').ColourOption} colour
 * @param {boolean} isDefault
 * @returns {string}
 */
function swatchTemplate(product, colour, isDefault) {
  const name = escapeHtml(colour.name);
  return `
    <label class="swatch" title="${name}">
      <input
        type="radio"
        name="colour-${escapeHtml(product.id)}"
        value="${name}"
        data-image="${PRODUCT_IMAGE_PATH}/${escapeHtml(colour.image)}"
        ${isDefault ? 'checked' : ''}
      >
      <span class="swatch-dot" style="--swatch:${escapeHtml(colour.swatch || colour.hex)}"></span>
      <span class="sr-only">${name}</span>
    </label>`;
}

/**
 * @param {import('../data/products.js').Product} product
 * @returns {string}
 */
function colourPickerTemplate(product) {
  // A single colour is not a choice — show the picker only when there is one.
  if (product.colours.length < 2) return '';

  const [defaultColour] = product.colours;
  return `
    <fieldset class="colour-picker">
      <legend>Colour · <span class="colour-label">${escapeHtml(defaultColour.name)}</span></legend>
      <div class="swatches">
        ${product.colours
          .map(colour => swatchTemplate(product, colour, colour === defaultColour))
          .join('')}
      </div>
    </fieldset>`;
}

/**
 * @param {import('../data/products.js').Product} product
 * @returns {string}
 */
export function productCardTemplate(product) {
  const [defaultPack] = product.packs;
  return `
    <article class="product-card" data-product-id="${escapeHtml(product.id)}">
      <div class="product-image">
        <img src="${PRODUCT_IMAGE_PATH}/${escapeHtml(product.image)}" alt="${escapeHtml(product.alt)}" loading="lazy">
      </div>
      <div class="product-meta">
        <span>${escapeHtml(product.collection)}</span>
        <b data-price>${escapeHtml(formatPrice(defaultPack.price))}</b>
      </div>
      <h3>${escapeHtml(product.name)}</h3>
      <p>${escapeHtml(product.description)}</p>
      ${packPickerTemplate(product)}
      ${colourPickerTemplate(product)}
      <button class="order-btn" type="button">${escapeHtml(product.order.cta)} ↗</button>
    </article>`;
}

/**
 * Reflects the chosen colour: swaps the photo, updates the alt text and the
 * legend.
 *
 * @param {Element} card
 * @param {import('../data/products.js').Product} product
 * @param {HTMLInputElement} radio The selected colour radio.
 */
export function showColour(card, product, radio) {
  const image = /** @type {HTMLImageElement} */ (qs('.product-image img', card));
  const label = qs('.colour-label', card);

  image.src = radio.dataset.image;
  image.alt = `${product.alt} — ${radio.value}`;
  if (label) label.textContent = radio.value;
}

/**
 * Reflects the chosen pack size in the headline price.
 *
 * @param {Element} card
 * @param {HTMLInputElement} radio The selected pack radio.
 */
export function showPackPrice(card, radio) {
  const price = qs('[data-price]', card);
  if (price) price.textContent = formatPrice(Number(radio.dataset.price));
}

/**
 * The line sent to WhatsApp: what it is, how many, how much and in which
 * colour — everything needed to confirm an order in one reply.
 *
 * @param {import('../data/products.js').Product} product
 * @param {Element} card
 * @returns {string}
 */
export function orderSummaryFor(product, card) {
  const pack = /** @type {HTMLInputElement | null} */ (qs('.pack input:checked', card));
  const colour = /** @type {HTMLInputElement | null} */ (qs('.swatch input:checked', card));

  const parts = [product.name];
  if (pack) parts.push(packLabel(Number(pack.value)), formatPrice(Number(pack.dataset.price)));
  if (colour) parts.push(colour.value);
  return parts.join(' — ');
}
