import { ADD_TO_CART, ADD_TO_CART_DELIVERY_TYPE, ADD_TO_CART_PAYMENT_TYPE, CHANGE_PRODUCT_QUANTITY, CLEAR_STATE, DECREASE_QUANTITY, DELETE_FROM_CART, INCREASE_QUANTITY, SET_NEW_QUANTITY } from './Cart.types'

const initState = {
  products: [],
  productsQuantity: 0,
  totalPrice: 0,
  addedToCartProduct: {},
  deliveryId: '',
  paymentId: ''
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TO_CART:{
      return {
        ...state,
        addedToCartProduct: { ...action.payload },
        products: [
          ...state.products,
          {
            ...action.payload
          }
        ]
      }
    }

    case DECREASE_QUANTITY:{
      return {
        ...state,
        productsQuantity: state.productsQuantity - 1,
        totalPrice: state.products.reduce((acc, product) => {
          if (product.id === action.payload) {
            return acc + ((product.quantity - 1) * product.price)
          }

          return acc + (product.quantity * product.price)
        }, 0),
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
    }

    case INCREASE_QUANTITY:{
      return {
        ...state,
        productsQuantity: state.productsQuantity + 1,
        totalPrice: state.products.reduce((acc, product) => {
          if (product.id === action.payload) {
            return acc + ((product.quantity + 1) * product.price)
          }

          return acc + (product.quantity * product.price)
        }, 0),
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
    }

    case SET_NEW_QUANTITY:{
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
    }

    case DELETE_FROM_CART:{
      return {
        ...state,
        products: state.products.filter(product => {
          return product.id !== action.payload
        })
      }
    }

    case CHANGE_PRODUCT_QUANTITY:{
      return {
        ...state,
        totalPrice: state.products.reduce((acc, product) => {
          const { price, isDelivery, isPayment, quantity } = product
          if (isDelivery || isPayment) {
            return acc + price
          }
          return acc + (quantity * price)
        }, 0),
        productsQuantity: state.products.reduce((acc, product) => {
          const { quantity } = product
          return acc + quantity
        }, 0)
      }
    }

    case ADD_TO_CART_DELIVERY_TYPE: {
      const isDeliveryAddedToCart = state.products.find(product => product.isDelivery)

      if (isDeliveryAddedToCart) {
        return {
          ...state,
          deliveryId: action.payload.id,
          products: state.products.map(product => {
            const { isDelivery } = product
            if (isDelivery) {
              return action.payload
            }

            return product
          })
        }
      }

      return {
        ...state,
        deliveryId: action.payload.id,
        products: [
          ...state.products,
          {
            ...action.payload
          }
        ]
      }
    }

    case ADD_TO_CART_PAYMENT_TYPE: {
      const isPaymentAddedToCart = state.products.find(product => product.isPayment)

      if (isPaymentAddedToCart) {
        return {
          ...state,
          paymentId: action.payload.id,
          products: state.products.map(product => {
            const { isPayment } = product
            if (isPayment) {
              return action.payload
            }

            return product
          })
        }
      }

      return {
        ...state,
        paymentId: action.payload.id,
        products: [
          ...state.products,
          {
            ...action.payload
          }
        ]
      }
    }

    case CLEAR_STATE: {
      return {
        products: [],
        productsQuantity: 0,
        totalPrice: 0,
        addedToCartProduct: {},
        deliveryId: '',
        paymentId: ''
      }
    }

    default:
      return state
  }
}

export default reducer
