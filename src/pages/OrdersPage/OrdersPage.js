import React from 'react'

import {
  StyledOrdersPage,
  StyledTitle,
  StyledOrdersContainer
} from './OrdersPage.styled'
import { Helmet } from 'react-helmet-async'

export const OrdersPage = () => {
  return (
    <StyledOrdersPage>
      <Helmet >
        <title>Orders</title>
        <meta
          name={'Orders'}
          content={'Displays orders'}
        />
      </Helmet>
      <StyledTitle
        variant={'h2'}
      >
        Orders
      </StyledTitle>
      <StyledOrdersContainer>

      </StyledOrdersContainer>
    </StyledOrdersPage>
  )
}

export default OrdersPage
