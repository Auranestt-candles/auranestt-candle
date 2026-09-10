import { GENERAL_ENQUIRY_MESSAGE, WHATSAPP_GROUP_URL } from '../config.js';
import { qsa } from '../lib/dom.js';
import { whatsappUrl } from '../lib/whatsapp.js';

/**
 * Fills in the WhatsApp destinations at runtime so the number and the group
 * invite live in `config.js` rather than the markup.
 *
 * - `[data-whatsapp-link]`  one-to-one chat, optionally with a pre-filled
 *   message in `data-whatsapp-message`.
 * - `[data-whatsapp-group]` invite to the customer group. Group invites cannot
 *   carry a pre-filled message.
 */
export function initWhatsappLinks() {
  qsa('[data-whatsapp-link]').forEach(link => {
    link.href = whatsappUrl(link.dataset.whatsappMessage || GENERAL_ENQUIRY_MESSAGE);
  });

  qsa('[data-whatsapp-group]').forEach(link => {
    link.href = WHATSAPP_GROUP_URL;
  });
}
