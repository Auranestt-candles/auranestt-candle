import {
  decorativeContainers,
  jarContainers,
  jarGallery,
  jarSizes,
  priceFactors,
} from '../data/jar-candles.js';
import { PRODUCT_IMAGE_PATH } from '../config.js';
import { escapeHtml, qs, render } from '../lib/dom.js';
import { formatPrice } from '../lib/format.js';
import { openWhatsapp, orderMessage } from '../lib/whatsapp.js';

/**
 * The jar candle price guide: every container against every size.
 *
 * Each price is a button rather than plain text — tapping one opens WhatsApp
 * with that exact jar and size already written out, so a shopper never has to
 * describe what they want.
 */

/**
 * @param {import('../data/jar-candles.js').JarContainer} container
 * @returns {string}
 */
function rowTemplate(container) {
  const name = escapeHtml(container.name);
  const cells = container.prices
    .map((price, index) => {
      const size = jarSizes[index];
      return `
      <td>
        <button
          class="jar-price"
          type="button"
          data-container="${name}"
          data-size="${escapeHtml(size.label)}"
          data-weight="${escapeHtml(size.weight)}"
          data-price="${price}"
        >${escapeHtml(formatPrice(price))}</button>
      </td>`;
    })
    .join('');

  return `<tr><th scope="row">${name}</th>${cells}</tr>`;
}

function tableTemplate() {
  const head = jarSizes
    .map(size => `<th scope="col"><b>${escapeHtml(size.code)}</b><span>${escapeHtml(size.weight)}</span></th>`)
    .join('');

  return `
    <table class="jar-table">
      <caption class="sr-only">Jar candle prices by container and size. Choose a price to order on WhatsApp.</caption>
      <thead><tr><th scope="col">Container</th>${head}</tr></thead>
      <tbody>${jarContainers.map(rowTemplate).join('')}</tbody>
    </table>`;
}

function asideTemplate() {
  const factors = priceFactors
    .map(([title, detail]) => `<div><b>${escapeHtml(title)}</b><span>${escapeHtml(detail)}</span></div>`)
    .join('');

  return `
    <div class="jar-notes">
      <p class="jar-decorative">
        <b>Decorative &amp; themed containers — from ${escapeHtml(formatPrice(decorativeContainers.from))}.</b>
        ${escapeHtml(decorativeContainers.note)}
      </p>
      <div class="jar-factors">
        <h3>Price may vary based on</h3>
        ${factors}
      </div>
    </div>`;
}

/** Jars we have already poured — the table's container names, made concrete. */
function galleryTemplate() {
  return jarGallery
    .map(
      item => `
      <li>
        <img src="${PRODUCT_IMAGE_PATH}/${escapeHtml(item.image)}" alt="${escapeHtml(item.alt)}" loading="lazy">
      </li>`,
    )
    .join('');
}

export function initJarPriceGuide() {
  const gallery = qs('[data-jar-gallery]');
  if (gallery) render(gallery, galleryTemplate());

  const root = qs('[data-jar-price-guide]');
  if (!root) return;

  render(root, tableTemplate() + asideTemplate());

  root.addEventListener('click', event => {
    const button = /** @type {Element} */ (event.target).closest('.jar-price');
    if (!button) return;

    const { container, size, weight, price } = /** @type {HTMLElement} */ (button).dataset;
    openWhatsapp(
      orderMessage(
        `Jar Candle — ${container} — ${size} (${weight}) — ${formatPrice(Number(price))}`,
      ),
    );
  });
}
