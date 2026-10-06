import { customisationNote, hamperNote, hampers } from '../data/hampers.js';
import { PRODUCT_IMAGE_PATH } from '../config.js';
import { escapeHtml, qs, render } from '../lib/dom.js';
import { formatPrice } from '../lib/format.js';
import { openWhatsapp, orderMessage } from '../lib/whatsapp.js';

/**
 * Celebration hampers.
 *
 * A hamper is quoted, not bought off a card, so there are no pack prices here —
 * each card ends in a WhatsApp link, and the rest is settled in the chat.
 *
 * The card leads with the size of the box and what is in it, because that is
 * what separates one hamper from another. The occasions are listed last and
 * read as suggestions: no box belongs to a single festival.
 *
 * A hamper that comes in more than one palette or colourway gets a swatch
 * picker, built from the same `.colour-picker` markup as a product card so the
 * two read as the same control. Events are delegated to the grid, as in
 * `product-grid.js`.
 */

/** @param {string} hamperId @returns {import('../data/hampers.js').Hamper} */
const hamperFor = hamperId => hampers.find(hamper => hamper.id === hamperId);

/**
 * The price in force on a card: the chosen variation's, where it names one, and
 * the hamper's own otherwise. A variation only carries a price when it costs
 * differently — a trunk holding four jars instead of two — so most fall through.
 *
 * @param {import('../data/hampers.js').Hamper} hamper
 * @param {Element} card
 * @returns {number}
 */
function priceOn(hamper, card) {
  const checked = /** @type {HTMLInputElement | null} */ (qs('.swatch input:checked', card));
  return Number(checked?.dataset.from) || hamper.from;
}

/**
 * @param {import('../data/hampers.js').Hamper} hamper
 * @param {import('../data/hampers.js').HamperVariation} variation
 * @param {boolean} isDefault
 * @returns {string}
 */
function variationTemplate(hamper, variation, isDefault) {
  const name = escapeHtml(variation.name);
  // Without an `image` the photo stays put — see the note in `hampers.js`.
  const image = variation.image
    ? ` data-image="${PRODUCT_IMAGE_PATH}/${escapeHtml(variation.image)}"`
    : '';
  // Only present when this variation is priced differently from the hamper.
  const from = variation.from ? ` data-from="${variation.from}"` : '';

  return `
    <label class="swatch" title="${name}">
      <input
        type="radio"
        name="variation-${escapeHtml(hamper.id)}"
        value="${name}"
        ${image}${from}
        ${isDefault ? 'checked' : ''}
      >
      <span class="swatch-dot" style="--swatch:${escapeHtml(variation.swatch || variation.hex)}"></span>
      <span class="sr-only">${name}</span>
    </label>`;
}

/**
 * @param {import('../data/hampers.js').Hamper} hamper
 * @returns {string}
 */
function variationPickerTemplate(hamper) {
  const variations = hamper.variations || [];
  // A single variation is not a choice.
  if (variations.length < 2) return '';

  const [defaultVariation] = variations;
  return `
    <fieldset class="colour-picker">
      <legend>Variant · <span class="colour-label">${escapeHtml(defaultVariation.name)}</span></legend>
      <div class="swatches">
        ${variations
          .map(variation => variationTemplate(hamper, variation, variation === defaultVariation))
          .join('')}
      </div>
    </fieldset>`;
}

/**
 * @param {import('../data/hampers.js').Hamper} hamper
 * @returns {string}
 */
function cardTemplate(hamper) {
  const contents = hamper.contents.map(item => `<li>${escapeHtml(item)}</li>`).join('');
  const occasions = hamper.occasions.map(item => `<li>${escapeHtml(item)}</li>`).join('');
  // The headline price belongs to the variation that loads selected.
  const [defaultVariation] = hamper.variations || [];
  const from = defaultVariation?.from || hamper.from;

  return `
    <article class="hamper-card" data-hamper-id="${escapeHtml(hamper.id)}">
      <div class="hamper-image">
        <img src="${PRODUCT_IMAGE_PATH}/${escapeHtml(hamper.image)}" alt="${escapeHtml(hamper.alt)}" loading="lazy">
        ${hamper.badge ? `<span class="hamper-badge">${escapeHtml(hamper.badge)}</span>` : ''}
      </div>

      <div class="hamper-meta">
        <span>${escapeHtml(hamper.scale)}</span>
        <b data-price>FROM ${escapeHtml(formatPrice(from))}</b>
      </div>

      <h3>${escapeHtml(hamper.name)}</h3>
      <p>${escapeHtml(hamper.description)}</p>

      <ul class="hamper-contents">${contents}</ul>
      <p class="hamper-customisable">${escapeHtml(customisationNote)}</p>

      ${variationPickerTemplate(hamper)}
      
      <div class="hamper-occasions">
        <b>Often sent for</b>
        <ul>${occasions}</ul>
      </div>

      <button class="hamper-cta" type="button">Enquire about this hamper <span aria-hidden="true">→</span></button>
    </article>`;
}

function noteTemplate() {
  return `
    <div class="hamper-note">
      <div>
        <b>${escapeHtml(hamperNote.title)}</b>
        <p>${escapeHtml(hamperNote.text)}</p>
      </div>
      <a
        class="btn btn-dark"
        href="#"
        target="_blank"
        rel="noopener"
        data-whatsapp-link
        data-whatsapp-message="${escapeHtml(hamperNote.message)}"
      >${escapeHtml(hamperNote.cta)} <span aria-hidden="true">→</span></a>
    </div>`;
}

/** How long a swap may take before it is worth showing a spinner. */
const SPINNER_DELAY_MS = 120;

/**
 * Reflects the chosen variation: swaps the photo, updates the alt text and the
 * legend.
 *
 * Mirrors `showColour` in `product-card.js` — the next photo is decoded
 * off-screen so the card keeps the current one until the swap can paint, and
 * the spinner only appears if the fetch outlasts `SPINNER_DELAY_MS`.
 *
 * @param {Element} card
 * @param {import('../data/hampers.js').Hamper} hamper
 * @param {HTMLInputElement} radio The selected variation radio.
 */
function showVariation(card, hamper, radio) {
  const label = qs('.colour-label', card);
  if (label) label.textContent = radio.value;

  // A bigger trunk costs more, so the headline follows the swatch.
  const price = qs('[data-price]', card);
  if (price) price.textContent = `FROM ${formatPrice(priceOn(hamper, card))}`;

  const frame = qs('.hamper-image', card);
  const image = /** @type {HTMLImageElement} */ (qs('.hamper-image img', card));
  const source = radio.dataset.image;
  const alt = `${hamper.alt} — ${radio.value}`;

  // A variation that shares the card's photograph only changes the label.
  if (!source || image.getAttribute('src') === source) {
    image.alt = alt;
    return;
  }

  const spinner = setTimeout(() => frame.classList.add('is-loading'), SPINNER_DELAY_MS);
  const settle = () => {
    clearTimeout(spinner);
    // A later click may have won the race; that swap owns the card now.
    if (radio.checked) frame.classList.remove('is-loading');
  };

  const next = new Image();
  next.addEventListener('load', () => {
    if (!radio.checked) return settle();
    image.src = source;
    image.alt = alt;
    settle();
  });
  // On failure the previous photo stays put rather than breaking the card.
  next.addEventListener('error', settle);
  next.src = source;
}

/**
 * The line sent to WhatsApp: which hamper, which variation and the price it
 * starts at — enough for us to reply with a quote.
 *
 * @param {import('../data/hampers.js').Hamper} hamper
 * @param {Element} card
 * @returns {string}
 */
function enquirySummaryFor(hamper, card) {
  const variation = /** @type {HTMLInputElement | null} */ (qs('.swatch input:checked', card));

  const parts = [`${hamper.name} hamper`];
  if (variation) parts.push(variation.value);
  parts.push(`from ${formatPrice(priceOn(hamper, card))}`);
  return parts.join(' — ');
}

export function initHampers() {
  const grid = qs('[data-hamper-grid]');
  const note = qs('[data-hamper-note]');
  if (note) render(note, noteTemplate());
  if (!grid) return;

  render(grid, hampers.map(cardTemplate).join(''));

  grid.addEventListener('change', event => {
    const radio = /** @type {HTMLInputElement} */ (event.target);
    if (!radio.matches('.swatch input')) return;

    const card = radio.closest('.hamper-card');
    if (card) showVariation(card, hamperFor(card.dataset.hamperId), radio);
  });

  grid.addEventListener('click', event => {
    const button = /** @type {Element} */ (event.target).closest('.hamper-cta');
    if (!button) return;

    const card = button.closest('.hamper-card');
    openWhatsapp(orderMessage(enquirySummaryFor(hamperFor(card.dataset.hamperId), card)));
  });
}
