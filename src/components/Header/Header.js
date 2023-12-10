import React from 'react'
import PropTypes from 'prop-types'

import { StyledHeader, StyledContainer } from './Header.styled'
import Icons from '../Icons/Icons'
import Logo from './Logo'
import { Link } from 'react-router-dom'

export const Header = (props) => {
  const {
    onClickLogin,
    onClickCreateAccount,
    onClickRecover
  } = props

  return (
    <StyledHeader>
      <Link
        to={'/'}
      >
        <Logo />
      </Link>
      <StyledContainer>
        <Icons
          onClickLogin={onClickLogin}
          onClickCreateAccount={onClickCreateAccount}
          onClickRecover={onClickRecover}
        />
      </StyledContainer>
    </StyledHeader>
  )
}

Header.propTypes = {
  onClickLogin: PropTypes.func,
  onClickCreateAccount: PropTypes.func,
  onClickRecover: PropTypes.func
}

export default Header
