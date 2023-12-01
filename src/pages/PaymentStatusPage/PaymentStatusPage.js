import React from 'react'

import { StyledPaymentStatusPage, StyledTitle } from './PaymentStatusPage.styled'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { actionClearState } from '../../modules/Cart/Cart.actions'

export const PaymentStatusPage = () => {
  const { paymentStatus } = useParams()

  const dispatch = useDispatch()

  if (paymentStatus === 'payment-status-success') {
    dispatch(actionClearState())
  }

  return (
    <StyledPaymentStatusPage>
      {
        paymentStatus === 'payment-status-canceled' ?
          <StyledTitle
            variant={'h2'}
          >
            Payment Process Canceled
          </StyledTitle>
          :
          null
      }
      {
        paymentStatus === 'payment-status-success' ?
          <StyledTitle
            variant={'h2'}
          >
            Payment Succeed
          </StyledTitle>
          :
          null
      }
    </StyledPaymentStatusPage>
  )
}

export default PaymentStatusPage
