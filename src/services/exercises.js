import { useFetch } from '../hooks'
import { constants, adapters } from '../utils'

export const getMinMax = () => {
  const requestState = useFetch(
    `${constants.BASE_URL}/minmax`,
    adapters.mappedMinMax
  )
  return requestState
}

export const getRanges = () => {
  const requestState = useFetch(
    `${constants.BASE_URL}/ranges`,
    adapters.mappedRanges
  )
  return requestState
}
