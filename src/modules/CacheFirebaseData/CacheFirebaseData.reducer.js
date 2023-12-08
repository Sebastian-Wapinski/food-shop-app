import { ADD_DATA } from './CacheFirebaseData.types'

const initState = {
  visitedLinks: [],
  firebaseData: {}
}

const reducer = (state = initState, actions) => {
  switch (actions.type) {
    case ADD_DATA: {
      return {
        ...state,
        visitedLinks: [...state.visitedLinks, actions.payload.link],
        firebaseData: {
          ...state.firebaseData,
          [actions.payload.link]: [...actions.payload.data]
        }
      }
    }

    default:
      return state
  }
}

export default reducer
