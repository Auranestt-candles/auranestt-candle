import { careGroups, careSpecials, handmadeNote } from '../data/candle-care.js';
import { escapeHtml, qs, render } from '../lib/dom.js';

/**
 * Candle care: how to burn it, how to store it, and what it is made of.
 */

/**
 * @param {import('../data/candle-care.js').CareGroup} group
 * @returns {string}
 */
function groupTemplate(group) {
  const body = group.bullets
    ? `<ul>${group.bullets.map(item => `<li>${escapeHtml(item)}</li>`).join('')}</ul>`
    : `${group.lead ? `<b>${escapeHtml(group.lead)}</b>` : ''}<p>${escapeHtml(group.text)}</p>`;

  return `
    <article class="care-group">
      <h3>${escapeHtml(group.title)}</h3>
      ${body}
      ${group.script ? `<p class="care-script">${escapeHtml(group.script)}</p>` : ''}
    </article>`;
}

function specialsTemplate() {
  const items = careSpecials
    .map(
      item => `
      <div>
        <b>${escapeHtml(item.title)}</b>
        <span>${escapeHtml(item.detail)}</span>
      </div>`,
    )
    .join('');

  return `
    <h3>What makes our candles special</h3>
    <div class="care-specials-grid">${items}</div>
    <p class="care-handmade">${escapeHtml(handmadeNote)}</p>`;
}

export function initCandleCare() {
  const grid = qs('[data-care-groups]');
  if (grid) render(grid, careGroups.map(groupTemplate).join(''));

  const specials = qs('[data-care-specials]');
  if (specials) render(specials, specialsTemplate());
}
