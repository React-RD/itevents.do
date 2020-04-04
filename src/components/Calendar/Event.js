import React from 'react'
import PropTypes from 'prop-types'

import { Box, Text } from 'grommet'

export const Event = ({ name, hasPast }) => {
  const background = hasPast
    ? 'calendar-past-event-background'
    : 'calendar-event-background'
  const textColor = hasPast ? 'calendar-past-event-text' : 'calendar-event-text'

  return (
    <Box round="xsmall" background={background} pad="2px">
      <Text size="small" truncate color={textColor} a11yTitle="Event name">
        {name}
      </Text>
    </Box>
  )
}

Event.propTypes = {
  name: PropTypes.string.isRequired,
  hasPast: PropTypes.bool,
}
