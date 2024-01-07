import React from 'react'

import { StyledHomePage } from './HomePage.styled'
import { Helmet } from 'react-helmet-async'

import Header from '../../components/Header/Header'
import NavBar from '../../components/NavBar/NavBar'
import { Outlet, useLocation } from 'react-router'
import HomePageContent from './HomePageContent/HomePageContent'
import Footer from '../../components/Footer/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { actionAddData } from '../../modules/CacheFirebaseData/CacheFirebaseData.actions'
import { checkIsLinkVisited, createNavData, setDataFromFirebaseDatabase } from '../../helper/helper'

import { checkIfUserIsLoggedIn } from '../../auth'
import Loader from '../../overlays/Loader/Loader'
import MessagePage from '../MessagePage/MessagePage'
import { useAuthFunc } from '../../contexts/AuthFuncContext'

export const HomePage = () => {
  const [navListData, setNavListData] = React.useState(null)
  const { visitedLinks, firebaseData } = useSelector(state => state.cacheFirebaseData)
  const dispatch = useDispatch()
  const location = useLocation()

  const {
    isLoading,
    hasError,
    message,
    isInfoDisplayed,
    setHasError,
    setMessage,
    getUserData,
    dismissError,
    dismissMessage
  } = useAuthFunc()

  React.useEffect(() => {
    const isVisited = checkIsLinkVisited(visitedLinks, firebaseData, '/navList', setNavListData)
    if (isVisited) return
    dispatch(setDataFromFirebaseDatabase('/navList', createNavData, setNavListData, actionAddData, '/navList'))
  }, [dispatch, firebaseData, visitedLinks])

  React.useEffect(() => {
    (
      async () => {
        try {
          const userIsLoggedIn = await checkIfUserIsLoggedIn()
          if (userIsLoggedIn) {
            await getUserData()
          }
        } catch (error) {
          setHasError(() => true)
          setMessage(() => error.message || error.data.error.message)
        }
      }
    )()
  }, [getUserData, setMessage, setHasError])

  return (
    <StyledHomePage>
      <Helmet>
        <title>FOOD SHOP</title>
        <meta
          name={'Home-page'}
          content={'Icons with navBar and most popular tabs'}
        />
      </Helmet>
      <Header />
      <NavBar
        navListData={navListData}
      />
      {
        location.pathname === '/' && <HomePageContent />
      }
      <Outlet />
      <Footer />

      {
        isLoading ?
          <Loader />
          :
          null
        }

      {
        isInfoDisplayed || hasError ?
          <MessagePage
            message={message}
            iconVariant={isInfoDisplayed ? 'info' : hasError ? 'error' : null}
            buttonLabel={isInfoDisplayed ? 'OK' : hasError ? 'GO BACK' : null}
            dismissInfo={isInfoDisplayed ? dismissMessage : hasError ? dismissError : null}
          />
          :
          null
        }
    </StyledHomePage>
  )
}

export default HomePage
