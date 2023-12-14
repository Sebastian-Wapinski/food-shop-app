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
import { useAuthFunc } from '../../contexts/AuthFuncContext'
import { useAuthUser } from '../../contexts/UserContext'

export const ProfileMenuMobile = (props) => {
  const {
    showProfile,
    setShowProfile
  } = props

  const { onClickLogout } = useAuthFunc()
  const { userEmail } = useAuthUser()

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
          <StyledName
            variant={'body1'}
          >
            {userEmail}
          </StyledName>
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
  setShowProfile: PropTypes.func
}

export default ProfileMenuMobile
