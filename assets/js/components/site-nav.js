import { navLinks } from '../data/navigation.js';
import { escapeHtml, qs, render } from '../lib/dom.js';

/**
 * Primary navigation: the desktop bar and the mobile drawer are rendered from
 * the same link list, and the toggle keeps its ARIA state in sync.
 */

const OPEN_CLASS = 'open';

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

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu.classList.contains(OPEN_CLASS)) {
      setMenuOpen(menu, toggle, false);
      /** @type {HTMLElement} */ (toggle).focus();
    }
  });
}
