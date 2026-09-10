import { WHATSAPP_NUMBER } from '../config.js';

/**
 * Builds a wa.me deep link for a pre-filled message.
 *
 * @param {string} message
 * @returns {string}
 */
export function whatsappUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/**
 * The message sent when a shopper orders from a product card.
 *
 * @param {string} productSummary e.g. 'Peony Rose — Pack of 1 — ₹110 — Lavender'
 * @returns {string}
 */
export function orderMessage(productSummary) {
  return `Hi Aura Nestt! I'd like to order/enquire about: ${productSummary}.`;
}

/**
 * Opens WhatsApp in a new tab.
 *
 * @param {string} message
 */
export function openWhatsapp(message) {
  window.open(whatsappUrl(message), '_blank', 'noopener');
}
