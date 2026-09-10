import { products } from '../data/products.js';
import { ALL_PRODUCTS_FILTER } from '../data/navigation.js';
import { qs, qsa, render } from '../lib/dom.js';
import { openWhatsapp, orderMessage } from '../lib/whatsapp.js';
import {
  orderSummaryFor,
  productCardTemplate,
  showColour,
  showPackPrice,
} from './product-card.js';

/**
 * Renders the collections grid and owns every interaction inside it: colour
 * selection, ordering and filtering. Card-level events are delegated to the
 * grid so the number of listeners stays constant as the catalogue grows.
 */

const HIDDEN_CLASS = 'is-hidden';

/** @param {string} productId @returns {import('../data/products.js').Product} */
const productFor = productId => products.find(product => product.id === productId);

/** @param {Element} target @returns {Element | null} */
const cardOf = target => target.closest('.product-card');

/**
 * One listener covers both pickers on every card.
 *
 * @param {Element} grid
 */
function handleSelectionChange(grid) {
  grid.addEventListener('change', event => {
    const radio = /** @type {HTMLInputElement} */ (event.target);
    const card = cardOf(radio);
    if (!card) return;

    if (radio.matches('.swatch input')) {
      showColour(card, productFor(card.dataset.productId), radio);
    } else if (radio.matches('.pack input')) {
      showPackPrice(card, radio);
    }
  });
}

/** @param {Element} grid */
function handleOrderClick(grid) {
  grid.addEventListener('click', event => {
    const button = /** @type {Element} */ (event.target).closest('.order-btn');
    // An anchor CTA points at a section on the page; let it navigate.
    if (!button || button.tagName === 'A') return;

    const card = cardOf(button);
    const product = productFor(card.dataset.productId);
    openWhatsapp(orderMessage(orderSummaryFor(product, card)));
  });
}

/**
 * Shows only the cards in `category`.
 *
 * @param {Element} grid
 * @param {string} category A `Product.categories` entry, or `ALL_PRODUCTS_FILTER`.
 */
export function filterProducts(grid, category) {
  qsa('.product-card', grid).forEach(card => {
    const { categories } = productFor(card.dataset.productId);
    const matches = category === ALL_PRODUCTS_FILTER || categories.includes(category);
    card.classList.toggle(HIDDEN_CLASS, !matches);
  });
}

/**
 * Renders the catalogue into `[data-product-grid]` and wires up its behaviour.
 *
 * @returns {Element | null} The grid, or null when the section is absent.
 */
export function initProductGrid() {
  const grid = qs('[data-product-grid]');
  if (!grid) return null;

  render(grid, products.map(productCardTemplate).join(''));
  handleSelectionChange(grid);
  handleOrderClick(grid);
  return grid;
}
