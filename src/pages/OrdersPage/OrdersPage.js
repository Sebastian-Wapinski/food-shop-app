import React from 'react'

import {
  StyledOrdersPage,
  StyledTitle,
  StyledOrdersContainer
} from './OrdersPage.styled'
import { Helmet } from 'react-helmet-async'
import { createOrdersData } from '../../helper/helper'
import { useDispatch, useSelector } from 'react-redux'
import { useAuthUser } from '../../contexts/UserContext'
import RenderOrders from '../../components/RenderOrders/RenderOrders'
import { database } from '../../firebaseConfig'
import { onValue, ref } from 'firebase/database'

export const OrdersPage = () => {
  const [ordersData, setOrdersData] = React.useState(null)
  const { visitedLinks, firebaseData } = useSelector(state => state.cacheFirebaseData)
  const dispatch = useDispatch()
  const { userId } = useAuthUser()

  React.useEffect(() => {
    const databaseRef = ref(database, `/orders/loggedIn/${userId}`)

    return onValue(databaseRef, (snapshot) => {
      const rawData = snapshot.val()
      const data = createOrdersData(rawData)
      setOrdersData(data)
    })
  }, [dispatch, firebaseData, userId, visitedLinks])

  return (
    <StyledOrdersPage>
      <Helmet >
        <title>Orders</title>
        <meta
          name={'Orders'}
          content={'Displays orders'}
        />
      </Helmet>
      {
      ordersData ?
        <>
          <StyledTitle
            variant={'h2'}
          >
            Orders
          </StyledTitle>
          <StyledOrdersContainer>
            {
              ordersData.map(order => {
                return (
                  <RenderOrders
                    key={order.id}
                    orderData={order}
                  />
                )
              })
            }
          </StyledOrdersContainer>
        </>
        :
        <StyledTitle
          variant={'h2'}
        >
          No Orders Added Yet
        </StyledTitle>
      }
    </StyledOrdersPage>
  )
}

export default OrdersPage
