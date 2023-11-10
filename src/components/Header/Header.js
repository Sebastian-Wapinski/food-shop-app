import React from 'react'

import { StyledHeader, StyledContainer } from './Header.styled'
import Icons from '../Icons/Icons'
import Logo from './Logo'

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      {/* FilterAllProducts */}
      <StyledContainer>
        <Icons />
      </StyledContainer>
    </StyledHeader>
  )
}

export default Header
