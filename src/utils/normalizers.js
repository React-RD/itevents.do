import { toEventMonthFormat } from './date'

/**
 *
 * @param {FullEventPublicData} event The event we need to normalize
 * @see ./utils/fragments.js#FullEventPublicData
 */
export const normalizeEvent = event => ({
  id: event.id,
  details: {
    name: event.eventName,
    description: event.description,
    link: event.link,
    type: event.eventType,
    start: event.start,
    month: toEventMonthFormat(event.start),
    end: event.end,
    duration: event.duration,
    place: event.place,
  },
  speaker: {
    name: event.speaker,
  },
})
