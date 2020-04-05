const appConfig = require('./appConfig')
require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/media`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'itevents-do',
        short_name: 'iteventsdo',
        start_url: '/',
        background_color: appConfig.theme.background,
        theme_color: appConfig.theme.brand,
        display: 'minimal-ui',
        icon: 'media/icon.svg',
      },
    },
    {
      resolve: 'gatsby-source-airtable',
      options: {
        apiKey: process.env.AIRTABLE_API_KEY,
        tables: [
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: 'Calendar',
          },
        ],
      },
    },
    'gatsby-plugin-offline',
  ],
}
