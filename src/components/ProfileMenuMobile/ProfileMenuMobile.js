import React from 'react'
import PropTypes from 'prop-types'

import {
  StyledProfileMenuMobile,
  StyledButton,
  StyledMenuContainer,
  StyledTitle,
  StyledMainMenu,
  StyledName
} from './ProfileMenuMobile.styled'
import { NavLink } from 'react-router-dom'

export const ProfileMenuMobile = (props) => {
  const {
    showProfile,
    setShowProfile,
    onClickLogout
  } = props

  return (
    <StyledProfileMenuMobile>
      <StyledButton
        variant={'customText'}
        onClick={() => setShowProfile(false)}
        $showMenu={showProfile}
      >
        GO BACK
      </StyledButton>
      <StyledMenuContainer>
        <StyledTitle
          variant={'h2'}
        >
          Menu:
        </StyledTitle>
        <StyledMainMenu>
          <NavLink
            to={'/profile/orders'}
            onClick={() => setShowProfile(false)}
          >
            <StyledName
              variant={'body1'}
            >
              Orders
            </StyledName>
          </NavLink>
          <NavLink
            to={'/'}
            onClick={() => {
              setShowProfile(false)
              onClickLogout()
            }}
          >
            <StyledName
              variant={'body1'}
            >
              Log Out
            </StyledName>
          </NavLink>
        </StyledMainMenu>
      </StyledMenuContainer>
    </StyledProfileMenuMobile>
  )
}

ProfileMenuMobile.propTypes = {
  showProfile: PropTypes.bool,
  setShowProfile: PropTypes.func,
  onClickLogout: PropTypes.func
}

export default ProfileMenuMobile
