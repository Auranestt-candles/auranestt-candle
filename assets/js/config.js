/**
 * Site-wide configuration. Everything an owner may need to change without
 * touching component code lives here.
 */

/** WhatsApp number in international format: country code, no `+`, spaces or dashes. */
export const WHATSAPP_NUMBER = '918979732605';

/** Invite link for the Aura Nestt customer group on WhatsApp. */
export const WHATSAPP_GROUP_URL =
  'https://chat.whatsapp.com/HL6xCzMcdTmCB48jUUdKPA?s=sw&p=i&mlu=4&ilr=4';

/** Opening line for the "chat with us" links that are not tied to a product. */
export const GENERAL_ENQUIRY_MESSAGE =
  "Hi Aura Nestt! I'd like to know more about your candles.";

/**
 * Base path for product photography, relative to `index.html`.
 * Each candle has its own folder under here, named after its `id`, holding one
 * photo per colour: `products/peony-rose/pink.jpg`.
 */
export const PRODUCT_IMAGE_PATH = 'assets/images/products';
