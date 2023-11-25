import { ADD_TO_CART, DECREASE_QUANTITY, DELETE_FROM_CART, INCREASE_QUANTITY, SET_NEW_QUANTITY } from './Cart.types'

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
    case DECREASE_QUANTITY:
      return {
        ...state,
        products: state.products.map(product => {
          if (product.id === action.payload) {
            return {
              ...product,
              quantity: product.quantity - 1
            }
          }
          return product
        })
      }
    case INCREASE_QUANTITY:
      return {
        ...state,
        products: state.products.map(product => {
          if (product.id === action.payload.id) {
            return {
              ...product,
              quantity: product.quantity + action.payload.value
            }
          }
          return product
        })
      }

    case SET_NEW_QUANTITY:
      return {
        ...state,
        products: state.products.map(product => {
          if (product.id === action.payload.id) {
            return {
              ...product,
              quantity: Number(action.payload.value) || ''
            }
          }
          return product
        })
      }

    case DELETE_FROM_CART:
      return {
        ...state,
        products: state.products.filter(product => {
          return product.id !== action.payload
        })
      }

    default:
      return state
  }
}

export default reducer
