import React from 'react'
import PropTypes from 'prop-types'

import { Box, ResponsiveContext, css } from 'grommet'

export const CalendarBox = ({ square, children, onClick, ...rest }) => (
  <ResponsiveContext.Consumer>
    {size => (
      <Box
        onClick={onClick}
        height={square && size !== 'small' ? '8rem' : 'inherit'}
        width="calc(100% / 7)"
        fill={size === 'small' && 'horizontal'}
        css={css`
          cursor: ${onClick && 'pointer'};
        `}
        {...rest}
      >
        {children}
      </Box>
    )}
  </ResponsiveContext.Consumer>
)

CalendarBox.propTypes = {
  square: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func,
}
