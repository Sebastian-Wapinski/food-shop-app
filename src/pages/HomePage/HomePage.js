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

export const HomePage = () => {
  const [navListData, setNavListData] = React.useState(null)
  const { visitedLinks, firebaseData } = useSelector(state => state.cacheFirebaseData)
  const dispatch = useDispatch()
  const location = useLocation()

  React.useEffect(() => {
    const isVisited = checkIsLinkVisited(visitedLinks, firebaseData, '/navList', setNavListData)
    if (isVisited) return
    dispatch(setDataFromFirebaseDatabase('/navList', createNavData, setNavListData, actionAddData, '/navList'))
  }, [dispatch, firebaseData, visitedLinks])

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
