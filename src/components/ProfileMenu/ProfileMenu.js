import React from 'react'
import PropTypes from 'prop-types'

import {
  StyledProfileMenu,
  StyledUl,
  StyledLi,
  StyledLink,
  StyledUserLi
} from './ProfileMenu.styled'
import { useAuthUser } from '../../contexts/UserContext'
import { useAuthFunc } from '../../contexts/AuthFuncContext'

export const ProfileMenu = (props) => {
  const {
    setShowProfileMenu
  } = props

  const {
    userEmail
  } = useAuthUser()

  const { onClickLogout } = useAuthFunc()

  return (
    <StyledProfileMenu
      onMouseEnter={() => setShowProfileMenu(true)}
      onMouseLeave={() => setShowProfileMenu(false)}
    >
      <StyledUl>
        <StyledUserLi>
          {userEmail}
        </StyledUserLi>
        <StyledLink
          to={'/profile/orders'}
        >
          <StyledLi>
            Orders
          </StyledLi>
        </StyledLink>
        <StyledLink
          to={'/'}
        >
          <StyledLi
            onClick={() => {
              onClickLogout()
              setShowProfileMenu(false)
            }}
          >
            Log Out
          </StyledLi>
        </StyledLink>
      </StyledUl>
    </StyledProfileMenu>
  )
}

ProfileMenu.propTypes = {
  setShowProfileMenu: PropTypes.func
}

export default ProfileMenu
