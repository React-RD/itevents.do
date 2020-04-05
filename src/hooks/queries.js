import { graphql, useStaticQuery } from 'gatsby'

import map from 'ramda/es/map'
import compose from 'ramda/es/compose'
import identity from 'ramda/es/identity'

import { normalizeEvent } from '../utils/normalizers'

const getDataWithId = query => ({ id: query.id, ...query.data })
export const useActiveEvents = (mapper = identity) => {
  const prepareData = map(compose(normalizeEvent, getDataWithId))
  const data = useStaticQuery(graphql`
    {
      allAirtable(
        filter: { table: { eq: "Calendar" }, data: { Approved: { eq: true } } }
        sort: { fields: data___Start, order: ASC }
      ) {
        nodes {
          id
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
