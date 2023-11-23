import { ADD_TO_CART } from './Cart.types'

const initState = {
  products: []
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        products: [
          ...state.products,
          {
            ...action.payload
          }
        ]
      }
    default:
      return state
  }
}

export default reducer
