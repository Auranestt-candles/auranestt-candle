/** Small DOM helpers shared by the components. */

/**
 * @param {string} selector
 * @param {ParentNode} [scope]
 * @returns {Element | null}
 */
export const qs = (selector, scope = document) => scope.querySelector(selector);

/**
 * @param {string} selector
 * @param {ParentNode} [scope]
 * @returns {Element[]}
 */
export const qsa = (selector, scope = document) => [...scope.querySelectorAll(selector)];

/**
 * Escapes a value for interpolation into an HTML template literal.
 * Catalogue copy is author-written, but escaping keeps the templates safe if the
 * data ever comes from somewhere less trusted.
 *
 * @param {unknown} value
 * @returns {string}
 */
export function escapeHtml(value) {
  return String(value).replace(
    /[&<>"']/g,
    char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char],
  );
}

/**
 * Renders an HTML string into a container, replacing its current contents.
 *
 * @param {Element} container
 * @param {string} html
 */
export function render(container, html) {
  container.innerHTML = html;
}
