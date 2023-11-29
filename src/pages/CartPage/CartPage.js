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
  StyledPaymentMethodsContainer,
  StyledMinorTitle
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
  const [onSubmitClicked, setOnSubmitClicked] = React.useState(false)

  const { deliveryId, products, paymentId } = useSelector(state => state.cart)

  const onSubmit = handleSubmit((data, e) => {
    if (deliveryId.length === 0 || paymentId.length === 0) return
    reset()
    console.log(data, 'data')
    console.log(products, 'products')
  })

  return (
    <StyledCartPage>
      <FormProvider
        {...methods}
      >
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
            <RenderFormInputs/>

          </StyledShippingForm>
          <StyledDeliveryMethodsContainer>
            <StyledMinorTitle
              variant={'h2'}
            >
              Delivery
            </StyledMinorTitle>
            <RenderMethods
              data={deliveryMethodsData}
              methodsName={'delivery'}
              checkedId={deliveryId}
              action={actionAddToCartDeliveryType}
              errorMessage={onSubmitClicked && deliveryId.length === 0 ? 'This field is required' : null}
            />
          </StyledDeliveryMethodsContainer>
          <StyledPaymentMethodsContainer>
            <StyledMinorTitle
              variant={'h2'}
            >
              Payment
            </StyledMinorTitle>
            <RenderMethods
              data={paymentMethodsData}
              methodsName={'payment'}
              checkedId={paymentId}
              action={actionAddToCartPaymentType}
              errorMessage={onSubmitClicked && paymentId.length === 0 ? 'This field is required' : null}
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
          <StyledPayWithStripe
            variant={'customText'}
            type={'submit'}
            onClick={() => {
              if (deliveryId.length === 0 || paymentId.length === 0) {
                setOnSubmitClicked(true)
              }
              onSubmit()
            }}
          >
            Pay With Stripe
          </StyledPayWithStripe>
        </StyledInfoContainer>
      </FormProvider>
    </StyledCartPage>
  )
}
export default CartPage
