import React from 'react'

import { useSelector } from 'react-redux'

import { StyledProductsContainer } from './Cart.styled'
import CartProduct from '../../components/CartProduct/CartProduct'

export const Cart = () => {
  const { products } = useSelector((state) => state.cart)

  return (
    products.length !== 0 ?
      <StyledProductsContainer>
        {
            products.map(product => {
              const { id } = product
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
export default Cart
