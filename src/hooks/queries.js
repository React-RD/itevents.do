import { graphql, useStaticQuery } from 'gatsby'

import map from 'ramda/es/map'
import compose from 'ramda/es/compose'
import identity from 'ramda/es/identity'
import prop from 'ramda/es/prop'

import { normalizeEvent } from '../utils/normalizers'

export const useActiveEvents = (mapper = identity) => {
  const prepareData = map(compose(normalizeEvent, prop('data')))
  const data = useStaticQuery(graphql`
    {
      allAirtable(
        filter: { table: { eq: "Calendar" }, data: { Approved: { eq: true } } }
        sort: { fields: data___Start, order: ASC }
      ) {
        nodes {
          data {
            ...FullEventPublicData
          }
        }
      }
    }
  `)
  const result = mapper(prepareData(data.allAirtable.nodes))
  return result
}
