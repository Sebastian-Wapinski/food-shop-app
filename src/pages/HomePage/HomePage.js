import React from 'react'

import { StyledHomePage } from './HomePage.styled'
import { Helmet } from 'react-helmet-async'

import Header from '../../components/Header/Header'
import NavBar from '../../components/NavBar/NavBar'

export const HomePage = () => {
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
    </StyledHomePage>
  )
}

export default HomePage
