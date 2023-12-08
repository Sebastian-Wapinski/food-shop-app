import { ADD_DATA } from './CacheFirebaseData.types'

export const actionAddData = (data, link) => {
  return {
    type: ADD_DATA,
    payload: {
      data,
      link
    }
  }
}
