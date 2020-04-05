import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

import map from 'ramda/es/map'
import compose from 'ramda/es/compose'
import split from 'ramda/es/split'
import { Heading, Box } from 'grommet'
import { getDaysInMonth, getISODay, format } from 'date-fns'

import { Query } from '../Query'

import { Days } from './Days'
import { EmptyDays } from './EmptyDays'
import { Events } from './Events'
import { Weekdays } from './Weekdays'

const getMonthAndYear = compose(map(Number), split('/'))
export const Month = ({ events, date, showModal }) => {
  const [MONTH, YEAR] = useMemo(() => getMonthAndYear(date), [date])
  const CURRENT_MONTH = new Date(YEAR, MONTH - 1, 1)
  const FIRST_ISO_DAY = getISODay(CURRENT_MONTH)
  const MONTH_DAYS = getDaysInMonth(CURRENT_MONTH)
  const EMPTY_DAYS_END = 7 - ((FIRST_ISO_DAY + MONTH_DAYS) % 7)

  const PRETTY_DATE = format(CURRENT_MONTH, 'MMMM YYYY')
  const [PRETTY_MONTH, PRETTY_YEAR] = useMemo(
    () => PRETTY_DATE.split(' '),
    PRETTY_DATE,
  )

  return (
    <Box margin="medium">
      <Heading a11yTitle={`Month of ${PRETTY_DATE}`}>
        <strong>{PRETTY_MONTH}</strong>
        {` ${PRETTY_YEAR}`}
      </Heading>
      <Query sizes={['small']} inverse>
        <Weekdays />
      </Query>
      <Box direction="row" wrap>
        {FIRST_ISO_DAY !== 7 && <EmptyDays days={FIRST_ISO_DAY} />}
        <Days
          days={MONTH_DAYS}
          month={CURRENT_MONTH}
          events={events}
          showModal={showModal}
        />
        {EMPTY_DAYS_END !== 7 && <EmptyDays days={EMPTY_DAYS_END} />}
      </Box>
    </Box>
  )
}

Month.propTypes = {
  events: Events.propTypes.events,
  date: PropTypes.string,
  showModal: PropTypes.func.isRequired,
}
