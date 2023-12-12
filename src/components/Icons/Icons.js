import React from 'react'
import PropTypes from 'prop-types'

import {
  StyledIcons,
  StyledIconContainer,
  StyledParagraph,
  StyledImgContainer,
  StyledFontAwesomeIcon
} from './Icons.styled'
import { iconsData } from '../../data/iconsData'
import { Link } from 'react-router-dom'

import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import MenuMobile from '../MenuMobile/MenuMobile'
import MobileLeftMenuWrapper from '../MobileLeftMenuWrapper/MobileLeftMenuWrapper'
import ProfileMenuMobile from '../ProfileMenuMobile/ProfileMenuMobile'
import IconLogin from '../IconLogin/IconLogin'
import IconCart from '../IconCart/IconCart'

export const Icons = (props) => {
  const {
    onClickLogin,
    onClickCreateAccount,
    onClickRecover,
    onClickLogout
  } = props

  const [showMenu, setShowMenu] = React.useState(false)
  const [showProfile, setShowProfile] = React.useState(false)
  const [showLogInMenu, setShowLogInMenu] = React.useState(false)
  const [showProfileMenu, setShowProfileMenu] = React.useState(false)

  const { favorites, menu } = iconsData
  return (
    <>
      <StyledIcons>
        <StyledIconContainer
          $menu={true}
          onClick={() => setShowMenu(true)}
        >
          <StyledImgContainer>
            <StyledFontAwesomeIcon
              icon={faBars}
            />
          </StyledImgContainer>
          <StyledParagraph>
            {menu.name}
          </StyledParagraph>
        </StyledIconContainer>
        <IconLogin
          setShowLogInMenu={setShowLogInMenu}
          setShowProfile={setShowProfile}
          setShowProfileMenu={setShowProfileMenu}
          showLogInMenu={showLogInMenu}
          showProfileMenu={showProfileMenu}
          onClickLogin={onClickLogin}
          onClickCreateAccount={onClickCreateAccount}
          onClickRecover={onClickRecover}
          onClickLogout={onClickLogout}
        />
        <Link
          to={favorites.path}
        >
          <StyledIconContainer>
            <StyledImgContainer>
              <StyledFontAwesomeIcon
                icon={faHeart}
              />
            </StyledImgContainer>
            <StyledParagraph>
              {favorites.name}
            </StyledParagraph>
          </StyledIconContainer>
        </Link>
        <IconCart />
      </StyledIcons>
      <MobileLeftMenuWrapper
        showWrapper={showMenu}
        setShowWrapper={setShowMenu}
      >
        <MenuMobile
          setShowMenu={setShowMenu}
          showMenu={showMenu}
        />
      </MobileLeftMenuWrapper>
      <MobileLeftMenuWrapper
        showWrapper={showProfile}
        setShowWrapper={setShowProfile}
      >
        <ProfileMenuMobile
          showProfile={showProfile}
          setShowProfile={setShowProfile}
          onClickLogout={onClickLogout}
        />
      </MobileLeftMenuWrapper>
    </>
  )
}

Icons.propTypes = {
  onClickLogin: PropTypes.func,
  onClickCreateAccount: PropTypes.func,
  onClickRecover: PropTypes.func,
  onClickLogout: PropTypes.func
}

export default Icons
