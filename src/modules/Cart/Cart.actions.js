import { ADD_TO_CART, ADD_TO_CART_DELIVERY_TYPE, ADD_TO_CART_PAYMENT_TYPE, CHANGE_PRODUCT_QUANTITY, CLEAR_STATE, DECREASE_QUANTITY, DELETE_FROM_CART, INCREASE_QUANTITY, SET_NEW_QUANTITY } from './Cart.types'

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

export const actionAddToCartDeliveryType = (deliveryType) => {
  return {
    type: ADD_TO_CART_DELIVERY_TYPE,
    payload: deliveryType
  }
}

export const actionAddToCartPaymentType = (paymentType) => {
  return {
    type: ADD_TO_CART_PAYMENT_TYPE,
    payload: paymentType
  }
}

export const actionClearState = () => {
  return {
    type: CLEAR_STATE
  }
}
