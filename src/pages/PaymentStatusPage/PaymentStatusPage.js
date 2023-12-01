import React from 'react'

import { StyledPaymentStatusPage, StyledTitle } from './PaymentStatusPage.styled'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { actionClearState } from '../../modules/Cart/Cart.actions'
import { Helmet } from 'react-helmet-async'

export const PaymentStatusPage = () => {
  const { paymentStatus } = useParams()

  const dispatch = useDispatch()

  if (paymentStatus === 'payment-status-success') {
    dispatch(actionClearState())
  }

  return (
    <StyledPaymentStatusPage>
      <Helmet>
        <title>Payment Status</title>
        <meta
          name={'Payment Status'}
          content={'Payment Status'}
        />
      </Helmet>
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
