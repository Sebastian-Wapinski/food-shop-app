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
  StyledMinorTitle,
  StyledInfo
} from './CartPage.styled'
import Cart from '../../modules/Cart/Cart'
import TotalPrice from '../../components/TotalPrice/TotalPrice'
import { FormProvider, useForm } from 'react-hook-form'
import RenderFormInputs from '../../components/RenderFormInputs/RenderFormInputs'
import RenderMethods from '../../components/RenderMethods/RenderMethods'
import { useDispatch, useSelector } from 'react-redux'
import { actionAddToCartDeliveryType, actionAddToCartPaymentType, actionClearState } from '../../modules/Cart/Cart.actions'

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
      phone: ''
    }
  })

  const { handleSubmit, reset } = methods
  const [additionalInformation, setAdditionalInformation] = React.useState('')
  const [onSubmitClicked, setOnSubmitClicked] = React.useState(false)
  const dispatch = useDispatch()

  const { deliveryId, products, paymentId } = useSelector(state => state.cart)

  const onSubmit = handleSubmit((data, e) => {
    if (deliveryId.length === 0 || paymentId.length === 0) return

    const items = products.map((product) => {
      const { category, variety, producer, id, img, quantity, isDelivery, isPayment, labelName } = product

      if (isDelivery || isPayment) {
        return {
          name: labelName,
          id,
          quantity
        }
      }

      return {
        name: `${category}-${variety}-${producer}`,
        id,
        img,
        quantity
      }
    })

    const cart = {
      items,
      data,
      additionalInformation
    }

    fetch('https://us-central1-sw-food-shop-app.cloudfunctions.net/stripeConnection', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cart)
    })
      .then(res => {
        if (res.ok) return res.json()
        return res.json().then(json => Promise.reject(json))
      })
      .then(({ url }) => {
        window.location = url
      })
      .catch(e => {
        console.error(e.error)
      })

    reset()
    dispatch(actionClearState())
  })

  return (
    <StyledCartPage>
      {
        products.length !== 0 ?
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
                  data={'/deliveryMethods'}
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
                  data={'/paymentMethods'}
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
          :
          <StyledInfo
            variant={'h2'}
          >
            Your cart seems to be empty
          </StyledInfo>
      }
    </StyledCartPage>
  )
}
export default CartPage
