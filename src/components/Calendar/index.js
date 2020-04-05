import React from 'react'
import PropTypes from 'prop-types'

import { Month } from './Month'

export const Calendar = ({ showModal, events }) =>
  Object.keys(events).map(month => (
    <Month
      events={events[month]}
      showModal={showModal}
      date={month}
      key={month}
    />
  ))

Calendar.propTypes = {
  showModal: PropTypes.func.isRequired,
  events: PropTypes.shape({}),
}
