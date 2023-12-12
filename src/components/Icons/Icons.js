import React from 'react'
import PropTypes from 'prop-types'

import {
  StyledIcons,
  StyledIconContainer,
  StyledParagraph,
  CartIconProductsQuantity,
  StyledImgContainer,
  StyledFontAwesomeIcon
} from './Icons.styled'
import { iconsData } from '../../data/iconsData'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import PreviewCartOverlay from '../../overlays/PreviewCartOverlay/PreviewCartOverlay'

import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faBars, faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import MenuMobile from '../MenuMobile/MenuMobile'
import MobileLeftMenuWrapper from '../MobileLeftMenuWrapper/MobileLeftMenuWrapper'
import ProfileMenuMobile from '../ProfileMenuMobile/ProfileMenuMobile'
import IconLogin from '../IconLogin/IconLogin'

export const Icons = (props) => {
  const {
    onClickLogin,
    onClickCreateAccount,
    onClickRecover,
    onClickLogout
  } = props

  const [showPreviewCartOverlay, setShowPreviewCartOverlay] = React.useState(false)
  const [showMenu, setShowMenu] = React.useState(false)
  const [showProfile, setShowProfile] = React.useState(false)
  const [showLogInMenu, setShowLogInMenu] = React.useState(false)
  const [showProfileMenu, setShowProfileMenu] = React.useState(false)

  const { products, productsQuantity } = useSelector(state => state.cart)
  const location = useLocation()

  const { favorites, cart, menu } = iconsData
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
        <Link
          to={cart.path}
          onMouseEnter={() => {
            setShowPreviewCartOverlay(true)
          }}
          onMouseLeave={() => {
            setShowPreviewCartOverlay(false)
          }}
        >
          <StyledIconContainer>
            <StyledImgContainer>
              <StyledFontAwesomeIcon
                icon={faBasketShopping}
              />
              {
              products ?
                <CartIconProductsQuantity
                  variant={'body2'}
                >
                  {productsQuantity}
                </CartIconProductsQuantity>
                :
                null
              }
            </StyledImgContainer>
            <StyledParagraph>
              {cart.name}
            </StyledParagraph>
          </StyledIconContainer>
        </Link>
        {
        showPreviewCartOverlay && products.length !== 0 && location.pathname !== '/cart' ?
          <PreviewCartOverlay
            onMouseEnter={() => {
              setShowPreviewCartOverlay(true)
            }}
            onMouseLeave={() => {
              setShowPreviewCartOverlay(false)
            }}
          />
          :
          null
        }
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
