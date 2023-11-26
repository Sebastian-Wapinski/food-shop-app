import React from 'react'

import { useSelector } from 'react-redux'

import {
  StyledCart,
  StyledTitle,
  StyledInfoContainer,
  StyledProductsContainer,
  StyledShippingContainer,
  StyledNote,
  StyledPayWithStripe
} from './Cart.styled'
import CartProduct from '../../components/CartProduct/CartProduct'

export const Cart = () => {
  const { products, productsQuantity } = useSelector((state) => state.cart)

  console.log(products, productsQuantity)

  return (
    <StyledCart>
      <StyledTitle
        variant={'h2'}
      >
        Cart
      </StyledTitle>
      <StyledInfoContainer>
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
        <StyledShippingContainer>
          Shipping
        </StyledShippingContainer>
        <StyledNote>
          Note
        </StyledNote>
        <StyledPayWithStripe>
          <button>
            Pay With Stripe
          </button>
        </StyledPayWithStripe>
      </StyledInfoContainer>
    </StyledCart>
  )
}
export default Cart
