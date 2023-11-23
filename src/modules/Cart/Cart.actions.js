import { ADD_TO_CART, DECREASE_QUANTITY, DELETE_FROM_CART, INCREASE_QUANTITY } from './Cart.types'

export const actionAddToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product
  }
}

export const actionDeleteFromCart = (id) => {
  return {
    type: DELETE_FROM_CART,
    payload: id
  }
}

export const actionIncreaseQuantity = (id) => {
  return {
    type: INCREASE_QUANTITY,
    payload: id
  }
}

export const actionDecreaseQuantity = (id) => {
  return {
    type: DECREASE_QUANTITY,
    payload: id
  }
}
