import React, { PureComponent, useState } from 'react'
import { Box, Text, Anchor } from 'grommet'
import { StaticQuery, graphql } from 'gatsby'
import { Calendar } from '../components/Calendar'

import { Hero } from '../components/Hero'
import { Layout } from '../components/PageLayout'

import { ModalEvent } from '../components/ModalEvent'
import groupEventsByMonth from '../utils/groupEventsByMonth'
import ConfigContext from '../components/ConfigContext'

const AIRTABLE_QUERY = graphql`
  query eventsQuery {
    allAirtable {
      edges {
        node {
          id
          data {
            eventName: Name
            date: Start
            who: Speaker
            place: Location
            eventLink: Description
          }
        }
      }
    }
  }
`
const CalendarPage = () => {
  const [currentDay, setIsCurrentDay] = useState(new Date())
  const [eventsOfTheDay, setEventsOfTheDay] = useState([])
  const [showModal, setShowModal] = useState(false)

  const toggleModal = (eventsForThisDay, selectedCalendarDate) => {
    setShowModal(!showModal)
    setEventsOfTheDay(eventsForThisDay)
    setIsCurrentDay(selectedCalendarDate)
  }

  return (
    <Layout>
      <Hero />
      <Box id="calendars" animation="fadeIn">
        <ConfigContext.Consumer>
          {({ limitMonthInTheFuture }) => (
            <StaticQuery
              query={AIRTABLE_QUERY}
              render={data => (
                <Calendar
                  showModal={toggleModal}
                  events={groupEventsByMonth(data, limitMonthInTheFuture)}
                />
              )}
            />
          )}
        </ConfigContext.Consumer>
      </Box>

      <Text margin="medium">
        This site is powered by &nbsp;
        <Anchor href="https://t.me/reactRD/">
          <b>ReactRD </b>
        </Anchor>
        &nbsp; ❤
      </Text>

      {showModal && (
        <ModalEvent
          hideModal={toggleModal}
          currentDay={currentDay}
          events={eventsOfTheDay}
        />
      )}
    </Layout>
  )
}

export default CalendarPage
