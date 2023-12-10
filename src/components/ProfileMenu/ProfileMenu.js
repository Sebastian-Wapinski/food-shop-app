import React from 'react'
import PropTypes from 'prop-types'

import {
  StyledProfileMenu,
  StyledUl,
  StyledLi,
  StyledLink
} from './ProfileMenu.styled'

export const ProfileMenu = (props) => {
  const {
    setShowProfileMenu
  } = props

  return (
    <StyledProfileMenu
      onMouseEnter={() => setShowProfileMenu(true)}
      onMouseLeave={() => setShowProfileMenu(false)}
    >
      <StyledUl>
        <StyledLink
          to={'/profile/orders'}
        >
          <StyledLi
            onClick={() => console.log('li')}
          >
            Orders
          </StyledLi>
        </StyledLink>
        <StyledLi
          onClick={() => console.log('logOut')}
        >
          Log Out
        </StyledLi>
      </StyledUl>
    </StyledProfileMenu>
  )
}

ProfileMenu.propTypes = {
  setShowProfileMenu: PropTypes.func
}

export default ProfileMenu
