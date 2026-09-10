/**
 * Navigation and collection filters.
 *
 * The header nav and the mobile menu are rendered from the same list, so the two
 * can never drift apart.
 */

/** @type {{href: string, label: string}[]} */
export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#collections', label: 'Collections' },
  { href: '#customize', label: 'Customize' },
  { href: '#gifting', label: 'Gifting' },
  { href: '#care', label: 'Candle Care' },
  { href: '#contact', label: 'Contact' },
];

/**
 * Collection filters. `value` is matched against `Product.categories`;
 * `ALL_PRODUCTS_FILTER` is the reset option.
 *
 * @type {{value: string, label: string}[]}
 */
export const productFilters = [
  { value: 'all', label: 'All' },
  { value: 'floral', label: 'Floral' },
  { value: 'minimal', label: 'Minimal' },
  { value: 'gifting', label: 'Gifting' },
  { value: 'jar', label: 'Jar candles' },
];

export const ALL_PRODUCTS_FILTER = 'all';
