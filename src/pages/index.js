import React, { useState } from 'react'
import { Box, Text, Anchor } from 'grommet'
import { Calendar } from '../components/Calendar'

import { Hero } from '../components/Hero'
import { Layout } from '../components/PageLayout'

import { ModalEvent } from '../components/ModalEvent'
import { useActiveEvents } from '../hooks/queries'
import { groupEventsByMonth } from '../utils/helpers'

const CalendarPage = () => {
  const [currentDay, setIsCurrentDay] = useState(new Date())
  const [eventsOfTheDay, setEventsOfTheDay] = useState([])
  const [showModal, setShowModal] = useState(false)
  const events = useActiveEvents(groupEventsByMonth)
  const toggleModal = (eventsForThisDay, selectedCalendarDate) => {
    setShowModal(!showModal)
    setEventsOfTheDay(eventsForThisDay)
    setIsCurrentDay(selectedCalendarDate)
  }

  return (
    <Layout>
      <Hero />
      <Box id="calendars" animation="fadeIn">
        <Calendar showModal={toggleModal} events={events} />
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
