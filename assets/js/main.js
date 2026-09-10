/**
 * Entry point. Loaded as a module (`<script type="module">`), so it is deferred
 * by default and runs after the document has been parsed.
 *
 * Each init function is independent and no-ops when its markup hook is missing.
 */
import { initCandleCare } from './components/candle-care.js';
import { initCollectionFilter } from './components/collection-filter.js';
import { initCustomizeSteps } from './components/customize-steps.js';
import { initCurrentYear } from './components/current-year.js';
import { initJarPriceGuide } from './components/jar-price-guide.js';
import { initProductGrid } from './components/product-grid.js';
import { initSiteNav } from './components/site-nav.js';
import { initWhatsappLinks } from './components/whatsapp-links.js';

initSiteNav();
initCollectionFilter(initProductGrid());
initCustomizeSteps();
initCandleCare();
initJarPriceGuide();
initWhatsappLinks();
initCurrentYear();
