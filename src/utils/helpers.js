import path from 'ramda/es/path'
import groupBy from 'ramda/es/groupBy'

export const groupEventsByMonth = groupBy(path(['details', 'month']))
