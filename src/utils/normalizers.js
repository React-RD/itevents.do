import format from 'date-fns/format'
/**
 *
 * @param {FullEventPublicData} event The event we need to normalize
 * @see ./utils/fragments.js#FullEventPublicData
 */
export const normalizeEvent = event => ({
  details: {
    name: event.eventName,
    description: event.description,
    link: event.link,
    type: event.eventType,
    start: event.start,
    month: format(event.start, 'M/YYYY'),
    end: event.end,
    duration: event.duration,
    place: event.place,
  },
  speaker: {
    name: event.speaker,
  },
})
