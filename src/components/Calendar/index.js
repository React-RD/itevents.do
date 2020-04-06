import React from 'react'
import PropTypes from 'prop-types'

import { useConfig } from '../ConfigContext'
import { toEventMonthFormat } from '../../utils/date'

import { Month } from './Month'

export const Calendar = ({ showModal, events }) => {
  const { limitMonthInTheFuture = 1 } = useConfig()
  const MONTHS = Object.keys(events)
  const currentMonth = toEventMonthFormat(new Date())
  const currentMonthIndex =
    MONTHS.indexOf(currentMonth) >= 0 ? MONTHS.indexOf(currentMonth) : 0
  return MONTHS.slice(currentMonthIndex, limitMonthInTheFuture).map(month => (
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
