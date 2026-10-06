import { navLinks } from '../data/navigation.js';
import { escapeHtml, qs, render } from '../lib/dom.js';

/**
 * Primary navigation: the desktop bar and the mobile drawer are rendered from
 * the same link list, and the toggle keeps its ARIA state in sync.
 */

const OPEN_CLASS = 'open';

/**
 * Pins the drawer to the bottom edge of the header.
 *
 * It used to sit at a hardcoded 83px, which assumed a one-line announcement
 * bar; as soon as that bar wraps to two lines the header grows and the drawer
 * slides underneath it. Measuring instead means the drawer stays put whatever
 * the bar says, and the header is sticky so this is re-read while the drawer
 * is open and the page moves under it.
 *
 * @param {Element} menu
 */
function positionMenu(menu) {
  const header = qs('.site-header');
  if (!header) return;
  const bottom = Math.max(0, Math.round(header.getBoundingClientRect().bottom));
  /** @type {HTMLElement} */ (menu).style.setProperty('--drawer-top', `${bottom}px`);
}

const linksTemplate = () =>
  navLinks
    .map(({ href, label }) => `<a href="${escapeHtml(href)}">${escapeHtml(label)}</a>`)
    .join('');

/**
 * @param {Element} menu
 * @param {Element} toggle
 * @param {boolean} isOpen
 */
function setMenuOpen(menu, toggle, isOpen) {
  if (isOpen) positionMenu(menu);
  menu.classList.toggle(OPEN_CLASS, isOpen);
  menu.setAttribute('aria-hidden', String(!isOpen));
  toggle.setAttribute('aria-expanded', String(isOpen));
  toggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
}

export function initSiteNav() {
  const desktopNav = qs('[data-desktop-nav]');
  const menu = qs('[data-mobile-menu]');
  const toggle = qs('[data-menu-toggle]');

  if (desktopNav) render(desktopNav, linksTemplate());
  if (!menu || !toggle) return;

  render(menu, linksTemplate());
  setMenuOpen(menu, toggle, false);

  toggle.addEventListener('click', () => {
    setMenuOpen(menu, toggle, !menu.classList.contains(OPEN_CLASS));
  });

  // Jumping to a section should close the drawer behind it.
  menu.addEventListener('click', event => {
    if (/** @type {Element} */ (event.target).closest('a')) {
      setMenuOpen(menu, toggle, false);
    }
  });

  // Anywhere outside the drawer closes it. The toggle is excluded so its own
  // handler owns that click rather than the two fighting over it.
  document.addEventListener('click', event => {
    if (!menu.classList.contains(OPEN_CLASS)) return;
    const target = /** @type {Node} */ (event.target);
    if (menu.contains(target) || toggle.contains(target)) return;
    setMenuOpen(menu, toggle, false);
  });

  // The header is sticky, so its bottom edge moves as the page scrolls.
  const reposition = () => {
    if (menu.classList.contains(OPEN_CLASS)) positionMenu(menu);
  };
  window.addEventListener('scroll', reposition, { passive: true });
  window.addEventListener('resize', reposition);

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu.classList.contains(OPEN_CLASS)) {
      setMenuOpen(menu, toggle, false);
      /** @type {HTMLElement} */ (toggle).focus();
    }
  });
}
