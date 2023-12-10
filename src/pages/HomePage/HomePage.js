/* eslint-disable no-unused-vars */
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

import { signIn, signUp, checkIfUserIsLoggedIn, sendPasswordResetEmail, logOut, updateUser, getUserData as getUserDataAPICall } from '../../auth'
import { signInWithFirebaseSDK } from '../../firebaseConfig'
import { useAuthUser } from '../../contexts/UserContext'

export const HomePage = () => {
  const [navListData, setNavListData] = React.useState(null)
  const { visitedLinks, firebaseData } = useSelector(state => state.cacheFirebaseData)
  const dispatch = useDispatch()
  const location = useLocation()

  const [isLoading, setIsLoading] = React.useState(true)
  const [hasError, setHasError] = React.useState(false)
  const [errorMessage, setErrorMessage] = React.useState('')
  const [isInfoDisplayed, setIsInfoDisplayed] = React.useState(false)
  const [infoMessage, setInfoMessage] = React.useState('')

  const {
    userId,
    isUserLoggedIn,
    clearUser,
    setUser
  } = useAuthUser()

  const handleAsyncAction = React.useCallback(async (asyncAction) => {
    setIsLoading(() => true)
    try {
      await asyncAction()
    } catch (error) {
      setHasError(() => true)
      setErrorMessage(() => error.message || error.data.error.message)
    } finally {
      setIsLoading(() => false)
    }
  }, [])

  const getUserData = React.useCallback(async () => {
    const user = await getUserDataAPICall()

    setUser({
      id: user.localId,
      email: user.email
    })
  }, [setUser])

  const onClickLogin = React.useCallback(async (email, password) => {
    handleAsyncAction(async () => {
      await signIn(email, password)
      await Promise.all([
        signInWithFirebaseSDK(email, password),
        getUserData()
      ])
    })
  }, [getUserData, handleAsyncAction])

  const onClickCreateAccount = React.useCallback(async (createAccountEmail, createAccountRepeatPassword) => {
    handleAsyncAction(async () => {
      await signUp(createAccountEmail, createAccountRepeatPassword)
      setIsInfoDisplayed(() => true)
      setInfoMessage(() => 'User account created. User is logged in')
      await getUserData()
    })
  }, [getUserData, handleAsyncAction])

  const onClickRecover = React.useCallback(async (email) => {
    handleAsyncAction(async () => {
      await sendPasswordResetEmail(email)
      setIsInfoDisplayed(() => true)
      setInfoMessage(() => 'Check Your inbox!')
      await getUserData()
    })
  }, [getUserData, handleAsyncAction])

  React.useEffect(() => {
    const isVisited = checkIsLinkVisited(visitedLinks, firebaseData, '/navList', setNavListData)
    if (isVisited) return
    dispatch(setDataFromFirebaseDatabase('/navList', createNavData, setNavListData, actionAddData, '/navList'))
  }, [dispatch, firebaseData, visitedLinks])

  React.useEffect(() => {
    (
      async () => {
        handleAsyncAction(async () => {
          const userIsLoggedIn = await checkIfUserIsLoggedIn()
          if (userIsLoggedIn) {
            await getUserData()
          }
        })
      }
    )()
    // mount only
  }, [getUserData, handleAsyncAction])

  return (
    <StyledHomePage>
      <Helmet>
        <title>FOOD SHOP</title>
        <meta
          name={'Home-page'}
          content={'Icons with navBar and most popular tabs'}
        />
      </Helmet>
      <Header
        onClickLogin={onClickLogin}
        onClickCreateAccount={onClickCreateAccount}
        onClickRecover={onClickRecover}
      />
      <NavBar
        navListData={navListData}
      />
      {
        location.pathname === '/' ?
          <HomePageContent />
          :
          null
      }
      <Outlet />
      <Footer />
    </StyledHomePage>
  )
}

export default HomePage
