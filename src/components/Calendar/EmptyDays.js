import PropTypes from 'prop-types'
import React from 'react'

import range from 'ramda/es/range'

import { CalendarBox } from './CalendarBox'
import { Query } from '../Query'

export const EmptyDays = ({ days }) => (
  <Query sizes={['small']} inverse>
    {range(0, days).map(x => (
      <CalendarBox
        key={x}
        background="calendar-empty-background"
        border={{ color: 'calendar-empty-border' }}
        square
      />
    ))}
  </Query>
)

EmptyDays.propTypes = {
  days: PropTypes.number.isRequired,
}
