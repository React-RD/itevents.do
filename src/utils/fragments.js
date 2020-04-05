import { graphql } from 'gatsby'

export const AcceptedEvents = graphql`
  fragment FullEventPublicData on AirtableData {
    community: Community
    description: Description
    duration: Duration
    end: End
    link: URL
    eventName: Name
    eventType: Event_type
    place: Location
    speaker: Speaker
    start: Start
  }
`
