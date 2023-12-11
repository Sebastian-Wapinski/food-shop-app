import React from 'react'

import {
  StyledOrdersPage,
  StyledTitle,
  StyledOrdersContainer
} from './OrdersPage.styled'
import { Helmet } from 'react-helmet-async'
import { checkIsLinkVisited, createOrdersData, setDataFromFirebaseDatabase } from '../../helper/helper'
import { useDispatch, useSelector } from 'react-redux'
import { actionAddData } from '../../modules/CacheFirebaseData/CacheFirebaseData.actions'
import { useAuthUser } from '../../contexts/UserContext'
import { useNavigate } from 'react-router'

export const OrdersPage = () => {
  const [ordersData, setOrdersData] = React.useState(null)
  const { visitedLinks, firebaseData } = useSelector(state => state.cacheFirebaseData)
  const dispatch = useDispatch()
  const { userId } = useAuthUser()
  const navigate = useNavigate()

  React.useEffect(() => {
    const isVisited = checkIsLinkVisited(visitedLinks, firebaseData, `/orders/loggedIn/${userId}`, setOrdersData)
    if (isVisited) return
    dispatch(setDataFromFirebaseDatabase(`/orders/loggedIn/${userId}`, createOrdersData, setOrdersData, actionAddData, `/orders/loggedIn/${userId}`, navigate))
  }, [dispatch, firebaseData, navigate, userId, visitedLinks])

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
      {
        ordersData ?
          <StyledOrdersContainer>
            <RenderOrders ordersData={ordersData} />
          </StyledOrdersContainer>
          :
          null
      }
    </StyledOrdersPage>
  )
}

export default OrdersPage
