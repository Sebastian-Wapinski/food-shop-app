import React from 'react'

import {
  StyledTitle,
  StyledInfoContainer,
  StyledProductsAndTotalPriceLayout,
  StyledCartPage,
  StyledNote,
  StyledPayWithStripe,
  StyledShippingForm
} from './CartPage.styled'
import Cart from '../../modules/Cart/Cart'
import TotalPrice from '../../components/TotalPrice/TotalPrice'
import { FormProvider, useForm } from 'react-hook-form'
import RenderInputs from '../../components/RenderInputs/RenderInputs'

export const CartPage = () => {
  const methods = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      firstName: '',
      lastName: '',
      streetName: '',
      streetNumber: '',
      zipCode: '',
      city: '',
      eMail: '',
      phoneNumber: ''
    }
  })

  const { handleSubmit, reset } = methods

  const onSubmit = handleSubmit((data, e) => {
    reset()
    console.log(data, 'data')
  })

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
        <StyledShippingForm
          onSubmit={onSubmit}
          autoComplete={'off'}
        >
          <FormProvider
            {...methods}
          >
            <RenderInputs/>
          </FormProvider>
        </StyledShippingForm>
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
