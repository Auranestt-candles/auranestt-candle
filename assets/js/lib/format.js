/** Display formatting shared by the components. */

/**
 * Rupee price with Indian digit grouping, e.g. 1250 → '₹1,250'.
 *
 * @param {number} amount
 * @returns {string}
 */
export function formatPrice(amount) {
  return `₹${amount.toLocaleString('en-IN')}`;
}

/**
 * @param {number} size Candles in the pack.
 * @returns {string} e.g. 'Pack of 2'
 */
export function packLabel(size) {
  return `Pack of ${size}`;
}
