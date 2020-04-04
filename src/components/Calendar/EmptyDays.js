import PropTypes from 'prop-types'
import React from 'react'
import v4 from 'uuid/v4'

import { CalendarBox } from './CalendarBox'
import { Query } from '../Query'

export const EmptyDays = ({ days }) => (
  <Query sizes={['small']} inverse>
    {Array(days)
      .fill(null)
      .map(() => (
        <CalendarBox
          background="calendar-empty-background"
          border={{ color: 'calendar-empty-border' }}
          key={v4()}
          square
        />
      ))}
  </Query>
)

EmptyDays.propTypes = {
  days: PropTypes.number.isRequired,
}
