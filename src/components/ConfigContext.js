import React from 'react'
import PropTypes from 'prop-types'
import appConfig from '../../appConfig'

const DEFAULT_CONFIG = {
  title: 'It.events - DO',
  subTitle: '',
  formLink: 'https://airtable.com/shrankQ1KW1zTeyBf',
  maxAmountEvents: 2,
  limitMonthInTheFuture: 2,
}

const { Provider, Consumer } = React.createContext(DEFAULT_CONFIG)

const ConfigProvider = ({ children }) => (
  <Provider value={appConfig}>{children}</Provider>
)

ConfigProvider.propTypes = {
  children: PropTypes.node,
}

const ConfigContext = {
  Provider: ConfigProvider,
  Consumer,
}

export default ConfigContext
