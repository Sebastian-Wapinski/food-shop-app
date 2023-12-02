import React from 'react'

import { StyledHeader, StyledContainer } from './Header.styled'
import Icons from '../Icons/Icons'
import Logo from './Logo'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <StyledHeader>
      <Link
        to={'/'}
      >
        <Logo />
      </Link>
      <StyledContainer>
        <Icons />
      </StyledContainer>
    </StyledHeader>
  )
}

export default Header
