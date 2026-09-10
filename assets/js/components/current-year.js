import { qsa } from '../lib/dom.js';

/** Fills every `[data-current-year]` placeholder, e.g. the footer copyright. */
export function initCurrentYear() {
  const year = String(new Date().getFullYear());
  qsa('[data-current-year]').forEach(element => {
    element.textContent = year;
  });
}
