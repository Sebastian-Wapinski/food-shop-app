import React from 'react'
import PropTypes from 'prop-types'

import {
  StyledIconLogin,
  StyledImgContainer,
  StyledFontAwesomeIcon,
  StyledParagraph
} from './IconLogin.styled'
import { Link } from 'react-router-dom'
import { useAuthUser } from '../../contexts/UserContext'
import UserActions from '../UserActions/UserActions'
import ProfileMenu from '../ProfileMenu/ProfileMenu'
import { iconsData } from '../../data/iconsData'
import { faUser } from '@fortawesome/free-regular-svg-icons'

export const IconLogin = (props) => {
  const {
    setShowLogInMenu,
    setShowProfile,
    setShowProfileMenu,
    showLogInMenu,
    showProfileMenu
  } = props

  const { isUserLoggedIn } = useAuthUser()
  const { logIn } = iconsData

  return (
    <>
      <Link to={isUserLoggedIn ? '/profile/orders' : null}>
        <StyledIconLogin
          onClick={() => {
            if (!isUserLoggedIn) {
              setShowLogInMenu(true)
            } else {
              setShowProfile(true)
            }
          }
          }
          onMouseEnter={isUserLoggedIn ? () => setShowProfileMenu(true) : null}
          onMouseLeave={isUserLoggedIn ? () => setShowProfileMenu(false) : null}
        >
          <StyledImgContainer>
            <StyledFontAwesomeIcon
              icon={faUser}
            />
          </StyledImgContainer>
          <StyledParagraph>
            {
            isUserLoggedIn ?
              'Profile'
              :
              logIn.name
            }
          </StyledParagraph>
        </StyledIconLogin>
      </Link>
      {
          showLogInMenu && !isUserLoggedIn ?
            <UserActions
              authenticationOperationInit={'logIn'}
              setShowLogInMenu={setShowLogInMenu}
            />
            :
            null
        }
      {
          showProfileMenu ?
            <ProfileMenu
              setShowProfileMenu={setShowProfileMenu}
            />
            :
            null
        }
    </>
  )
}

IconLogin.propTypes = {
  setShowLogInMenu: PropTypes.func,
  setShowProfile: PropTypes.func,
  setShowProfileMenu: PropTypes.func,
  showLogInMenu: PropTypes.bool,
  showProfileMenu: PropTypes.bool
}

export default IconLogin
