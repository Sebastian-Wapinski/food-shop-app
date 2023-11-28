import React from 'react'
import PropTypes from 'prop-types'

import { useSelector } from 'react-redux'

import { StyledProductsContainer } from './Cart.styled'
import CartProduct from '../../components/CartProduct/CartProduct'

export const Cart = (props) => {
  const { className } = props
  const { products } = useSelector((state) => state.cart)

  return (
    products.length !== 0 ?
      <StyledProductsContainer
        className={className}
      >
        {
            products.map(product => {
              const { id, isDelivery, isPayment } = product
              if (isDelivery || isPayment) return null
              return (
                <CartProduct
                  key={id}
                  product={product}
                />
              )
            })
          }
      </StyledProductsContainer>
      :
      null
  )
}

Cart.propTypes = {
  className: PropTypes.string
}

export default Cart
