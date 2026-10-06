import { festival } from '../data/festival.js';
import { hampers } from '../data/hampers.js';
import { PRODUCT_IMAGE_PATH } from '../config.js';
import { escapeHtml, qs, render } from '../lib/dom.js';
import { formatPrice } from '../lib/format.js';

/**
 * The seasonal push: a festive announcement bar and a strip of the hampers
 * that suit the occasion, both shown only inside the window in `festival.js`.
 *
 * The featured hampers are filtered out of `hampers.js` by occasion rather than
 * listed again here, so adding 'Diwali' to a hamper's `occasions` is all it
 * takes to put it in the strip.
 *
 * Everything is hidden by default in the markup and revealed here, so if the
 * window is closed — or the script never runs — the page is simply the
 * everyday one rather than a broken festive section.
 */

/** @returns {boolean} Whether today falls inside the configured window. */
export function festivalIsOn(today = new Date()) {
  if (!festival.active) return false;
  const from = new Date(`${festival.from}T00:00:00`);
  const until = new Date(`${festival.until}T23:59:59`);
  return today >= from && today <= until;
}

/** The hampers that name this occasion, capped at `maxPicks`. */
function picks() {
  return hampers
    .filter(hamper => hamper.banners.some(o => o.toLowerCase() === festival.occasion.toLowerCase()))
    .slice(0, festival.maxPicks);
}

/** A hamper's lowest price: its cheapest variation, or its own `from`. */
const priceOf = hamper =>
  Math.min(hamper.from, ...(hamper.variations || []).map(v => v.from).filter(Boolean));

/**
 * @param {import('../data/hampers.js').Hamper} hamper
 * @returns {string}
 */
function pickTemplate(hamper) {
  return `
    <a class="festival-pick" href="#hampers-grid">
      <span class="festival-pick-image">
        <img src="${PRODUCT_IMAGE_PATH}/${escapeHtml(hamper.image)}" alt="${escapeHtml(hamper.alt)}" loading="lazy">
      </span>
      <b>${escapeHtml(hamper.name)}</b>
      <span class="festival-pick-price">FROM ${escapeHtml(formatPrice(priceOf(hamper)))}</span>
    </a>`;
}

/** 2026-11-01 reads as '1 November' — the date is for people, not machines. */
function orderByLabel() {
  const date = new Date(`${festival.orderBy}T00:00:00`);
  if (Number.isNaN(date.getTime())) return '';
  return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long' });
}

function sectionTemplate() {
  const orderBy = orderByLabel();
  return `
    <div class="festival-copy">
      <div class="section-kicker">${escapeHtml(festival.kicker)}</div>
      <h2>${escapeHtml(festival.headline)}<br><em>${escapeHtml(festival.headlineScript)}</em></h2>
      <p class="lead">${escapeHtml(festival.lead)}</p>
      ${orderBy ? `<p class="festival-deadline">Order by <b>${escapeHtml(orderBy)}</b> for delivery before the festival</p>` : ''}
      <a class="btn btn-gold" href="#hampers-grid">${escapeHtml(festival.cta)} <span aria-hidden="true">→</span></a>
    </div>
    <div class="festival-picks">${picks().map(pickTemplate).join('')}</div>`;
}

export function initFestival() {
  if (!festivalIsOn()) return;

  const section = qs('[data-festival]');
  if (section && picks().length) {
    render(section, sectionTemplate());
    section.hidden = false;
  }

  // The everyday bar carries the festival line while the window is open.
  const bar = qs('[data-announcement]');
  if (bar) {
    render(
      bar,
      `<a href="#hampers-grid">${escapeHtml(festival.announcement)}
        <span aria-hidden="true">•</span> ${escapeHtml(festival.announcementCta)} →</a>`,
    );
    bar.classList.add('is-festival');
  }
}
