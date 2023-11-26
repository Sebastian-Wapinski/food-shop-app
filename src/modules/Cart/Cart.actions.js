import { ADD_TO_CART, CHANGE_PRODUCT_QUANTITY, DECREASE_QUANTITY, DELETE_FROM_CART, INCREASE_QUANTITY, SET_NEW_QUANTITY } from './Cart.types'

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

export const actionIncreaseQuantity = (id, value = 1) => {
  return {
    type: INCREASE_QUANTITY,
    payload: {
      id,
      value
    }
  }
}

export const actionDecreaseQuantity = (id) => {
  return {
    type: DECREASE_QUANTITY,
    payload: id
  }
}

export const actionSetNewQuantity = (id, value) => {
  return {
    type: SET_NEW_QUANTITY,
    payload: {
      id,
      value
    }
  }
}

export const actionChangeProductQuantity = () => {
  return {
    type: CHANGE_PRODUCT_QUANTITY
  }
}
