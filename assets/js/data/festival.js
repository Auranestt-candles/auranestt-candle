/**
 * The seasonal push shown at the top of the page.
 *
 * It is time-boxed on purpose: `from` and `until` bracket the window in which
 * the banner and the picks strip appear, so a Diwali banner cannot still be
 * live in December. Outside the window the section stays hidden and the
 * announcement bar keeps its everyday text — nothing to remember to take down.
 *
 * To run it again next year, move the three dates. To end it early, set
 * `until` to today. To turn it off entirely, set `active: false`.
 *
 * TODO: `orderBy` is the date shown to shoppers as the cut-off for festival
 * delivery. Set it to a date that actually suits your pouring and shipping
 * time — it is a promise, so it should be one you can keep.
 *
 * @typedef {object} Festival
 * @property {boolean} active   Master switch, regardless of the dates.
 * @property {string} from      ISO date the push starts appearing.
 * @property {string} until     ISO date it stops, end of that day.
 * @property {string} occasion  Matched against `Hamper.occasions` to choose
 *                              which hampers to feature — no second list to
 *                              maintain.
 * @property {number} maxPicks  How many hampers to show in the strip.
 */

/** @type {Festival & Record<string, any>} */
export const festival = {
  active: true,
  from: '2026-10-01',
  until: '2026-11-12',
  occasion: 'Diwali',
  maxPicks: 4,

  /** Shown to shoppers as the cut-off for festival delivery. */
  orderBy: '2026-11-05',

  /** Replaces the everyday announcement bar while the window is open. */
  announcement: 'Diwali hampers are open',
  announcementCta: 'See hampers',

  kicker: 'DIWALI GIFTING',
  headline: 'Light up',
  headlineScript: 'their Diwali.',
  lead: 'Hand-poured candles boxed for the festival — for the family, the neighbours, and the office list. Every hamper is made to order, so the earlier you tell us, the easier it is to get right.',
  cta: 'See all Diwali hampers',
};
