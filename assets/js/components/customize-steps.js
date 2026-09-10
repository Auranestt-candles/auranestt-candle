import { customizeSteps, fullyCustomizable, occasions } from '../data/customize.js';
import { escapeHtml, qs, render } from '../lib/dom.js';

/**
 * The five customisation steps, plus the occasions we already make for.
 *
 * Options with a `detail` are set as a described list; the rest are chips, so a
 * long list of fragrances stays scannable next to a short list of wax types.
 */

/**
 * @param {import('../data/customize.js').CustomizeStep} step
 * @param {number} index
 * @returns {string}
 */
function stepTemplate(step, index) {
  const described = step.options.some(option => option.detail);

  const options = described
    ? `<dl class="step-list">${step.options
        .map(
          option => `
        <div>
          <dt>${escapeHtml(option.name)}</dt>
          <dd>${escapeHtml(option.detail)}</dd>
        </div>`,
        )
        .join('')}</dl>`
    : `<ul class="step-chips">${step.options
        .map(option => `<li>${escapeHtml(option.name)}</li>`)
        .join('')}</ul>`;

  return `
    <article class="customize-step">
      <span class="step-number">${String(index + 1).padStart(2, '0')}</span>
      <h3>${escapeHtml(step.title)}</h3>
      <p class="step-tagline">${escapeHtml(step.tagline)}</p>
      ${options}
      ${step.note ? `<p class="step-note">${escapeHtml(step.note)}</p>` : ''}
    </article>`;
}

/** Closes the grid — and fills the cell the five steps leave empty. */
function highlightTemplate() {
  const points = fullyCustomizable.points
    .map(point => `<li>${escapeHtml(point)}</li>`)
    .join('');

  return `
    <article class="customize-step customize-highlight">
      <h3>${escapeHtml(fullyCustomizable.title)}</h3>
      <p class="step-tagline">${escapeHtml(fullyCustomizable.tagline)}</p>
      <ul class="step-checks">${points}</ul>
    </article>`;
}

export function initCustomizeSteps() {
  const steps = qs('[data-customize-steps]');
  if (steps) render(steps, customizeSteps.map(stepTemplate).join('') + highlightTemplate());

  const list = qs('[data-occasions]');
  if (list) {
    render(list, occasions.map(occasion => `<li>${escapeHtml(occasion)}</li>`).join(''));
  }
}
