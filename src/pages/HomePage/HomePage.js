import React from 'react'

import { StyledHomePage } from './HomePage.styled'
import { Helmet } from 'react-helmet-async'

import Header from '../../components/Header/Header'
import NavBar from '../../components/NavBar/NavBar'
import { Outlet, useLocation } from 'react-router'
import HomePageContent from './HomePageContent/HomePageContent'
import Footer from '../../components/Footer/Footer'

export const HomePage = () => {
  const location = useLocation()

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
      <NavBar />
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
