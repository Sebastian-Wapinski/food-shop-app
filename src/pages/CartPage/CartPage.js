import React from 'react'

import {
  StyledTitle,
  StyledInfoContainer,
  StyledProductsAndTotalPriceLayout,
  StyledCartPage,
  StyledAdditionalInformation,
  StyledPayWithStripe,
  StyledShippingForm,
  StyledDeliveryMethodsContainer,
  StyledPaymentMethodsContainer
} from './CartPage.styled'
import Cart from '../../modules/Cart/Cart'
import TotalPrice from '../../components/TotalPrice/TotalPrice'
import { FormProvider, useForm } from 'react-hook-form'
import RenderFormInputs from '../../components/RenderFormInputs/RenderFormInputs'
import RenderMethods from '../../components/RenderMethods/RenderMethods'
import { deliveryMethodsData } from '../../data/deliveryMethodsData'
import { useSelector } from 'react-redux'
import { actionAddToCartDeliveryType, actionAddToCartPaymentType } from '../../modules/Cart/Cart.actions'
import { paymentMethodsData } from '../../data/paymentMethodsData'

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
  const [additionalInformation, setAdditionalInformation] = React.useState('')

  const { deliveryId, products, paymentId } = useSelector(state => state.cart)

  const onSubmit = handleSubmit((data, e) => {
    reset()
    console.log(data, 'data')
    console.log(products, 'products')
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
            <RenderFormInputs/>
          </FormProvider>
        </StyledShippingForm>
        <StyledDeliveryMethodsContainer>
          <RenderMethods
            data={deliveryMethodsData}
            methodsName={'delivery'}
            checkedId={deliveryId}
            action={actionAddToCartDeliveryType}
          />
        </StyledDeliveryMethodsContainer>
        <StyledPaymentMethodsContainer>
          <RenderMethods
            data={paymentMethodsData}
            methodsName={'payment'}
            checkedId={paymentId}
            action={actionAddToCartPaymentType}
          />
        </StyledPaymentMethodsContainer>
        <StyledAdditionalInformation
          value={additionalInformation}
          onChange={(e) => {
            setAdditionalInformation(() => e.target.value)
          }}
          placeholder={'Additional Information:'}
        >

        </StyledAdditionalInformation>
        <StyledPayWithStripe>
          <button
            type={'submit'}
            onClick={onSubmit}
          >
            Pay With Stripe
          </button>
        </StyledPayWithStripe>
      </StyledInfoContainer>
    </StyledCartPage>
  )
}
export default CartPage
