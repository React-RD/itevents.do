import React from 'react'
import PropTypes from 'prop-types'

import { useConfig } from '../ConfigContext'
import { Month } from './Month'

export const Calendar = ({ showModal, events }) => {
  const { limitMonthInTheFuture = 1 } = useConfig()
  return Object.keys(events)
    .slice(0, limitMonthInTheFuture)
    .map(month => (
      <Month
        events={events[month]}
        showModal={showModal}
        date={month}
        key={month}
      />
    ))
}

Calendar.propTypes = {
  showModal: PropTypes.func.isRequired,
  events: PropTypes.shape({}),
}
