import React from 'react'

import { useSelector } from 'react-redux'

import { StyledCart } from './Cart.styled'

export const Cart = () => {
  const products = useSelector((state) => state.cart)

  console.log(products)

  return (
    <StyledCart>
      Cart
    </StyledCart>
  )
}
export default Cart
