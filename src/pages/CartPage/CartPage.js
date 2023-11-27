import React from 'react'

import {
  StyledTitle,
  StyledInfoContainer,
  StyledProductsAndTotalPriceLayout,
  StyledCartPage,
  StyledShippingContainer,
  StyledNote,
  StyledPayWithStripe
} from './CartPage.styled'
import Cart from '../../modules/Cart/Cart'
import TotalPrice from '../../components/TotalPrice/TotalPrice'

export const CartPage = () => {
  return (
    <StyledCartPage>
      <StyledTitle
        variant={'h2'}
      >
        Cart
      </StyledTitle>
      <StyledInfoContainer>
        <StyledProductsAndTotalPriceLayout>
          <Cart />
          <TotalPrice />
        </StyledProductsAndTotalPriceLayout>
        <StyledShippingContainer>
          <ShippingForm />
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
    </StyledCartPage>
  )
}
export default CartPage
