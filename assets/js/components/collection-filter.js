import { ALL_PRODUCTS_FILTER, productFilters } from '../data/navigation.js';
import { escapeHtml, qs, qsa, render } from '../lib/dom.js';
import { filterProducts } from './product-grid.js';

/**
 * The collection filter bar. Buttons are toggles rather than tabs — there is no
 * tab panel — so the active one is announced with `aria-pressed`.
 */

const ACTIVE_CLASS = 'active';

/** @param {{value: string, label: string}} filter */
function filterTemplate({ value, label }) {
  const isDefault = value === ALL_PRODUCTS_FILTER;
  return `
    <button
      class="filter${isDefault ? ` ${ACTIVE_CLASS}` : ''}"
      type="button"
      data-filter="${escapeHtml(value)}"
      aria-pressed="${isDefault}"
    >${escapeHtml(label)}</button>`;
}

/**
 * @param {Element} bar
 * @param {Element} activeButton
 */
function setActive(bar, activeButton) {
  qsa('.filter', bar).forEach(button => {
    const isActive = button === activeButton;
    button.classList.toggle(ACTIVE_CLASS, isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });
}

/**
 * Renders the filter bar into `[data-collection-filter]` and applies selections
 * to `grid`.
 *
 * @param {Element | null} grid
 */
export function initCollectionFilter(grid) {
  const bar = qs('[data-collection-filter]');
  if (!bar || !grid) return;

  render(bar, productFilters.map(filterTemplate).join(''));

  bar.addEventListener('click', event => {
    const button = /** @type {Element} */ (event.target).closest('.filter');
    if (!button) return;

    setActive(bar, button);
    filterProducts(grid, button.dataset.filter);
  });
}
