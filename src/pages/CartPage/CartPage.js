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
  const [checkedDelivery, setCheckedDelivery] = React.useState('inStorePickup')

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
            <RenderFormInputs/>
          </FormProvider>
        </StyledShippingForm>
        <StyledDeliveryMethodsContainer>
          <RenderMethods
            data={deliveryMethodsData}
            methodsName={'delivery'}
            checkedId={checkedDelivery}
            setChecked={setCheckedDelivery}
          />
        </StyledDeliveryMethodsContainer>
        <StyledPaymentMethodsContainer>
          Payment
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
          <button>
            Pay With Stripe
          </button>
        </StyledPayWithStripe>
      </StyledInfoContainer>
    </StyledCartPage>
  )
}
export default CartPage
