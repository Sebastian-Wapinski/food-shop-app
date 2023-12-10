import React from 'react'
import PropTypes from 'prop-types'

import {
  StyledIcons,
  StyledIconContainer,
  StyledParagraph,
  CartIconProductsQuantity,
  StyledImgContainer,
  StyledFontAwesomeIcon,
  StyledDarkOverlay,
  StyledMenuBackground
} from './Icons.styled'
import { iconsData } from '../../data/iconsData'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import PreviewCartOverlay from '../../overlays/PreviewCartOverlay/PreviewCartOverlay'

import { faHeart, faUser } from '@fortawesome/free-regular-svg-icons'
import { faBars, faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import MenuMobile from '../MenuMobile/MenuMobile'
import UserActions from '../UserActions/UserActions'
import { useAuthUser } from '../../contexts/UserContext'
import ProfileMenu from '../ProfileMenu/ProfileMenu'

export const Icons = (props) => {
  const {
    onClickLogin,
    onClickCreateAccount,
    onClickRecover
  } = props

  const [showPreviewCartOverlay, setShowPreviewCartOverlay] = React.useState(false)
  const [showMenu, setShowMenu] = React.useState(false)
  const [showLogInMenu, setShowLogInMenu] = React.useState(false)
  const [showProfileMenu, setShowProfileMenu] = React.useState(false)

  const { products, productsQuantity } = useSelector(state => state.cart)
  const location = useLocation()

  const {
    // userEmail,
    isUserLoggedIn
  } = useAuthUser()

  const { logIn, favorites, cart, menu } = iconsData
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
        <Link to={isUserLoggedIn ? '/profile/orders' : null}>
          <StyledIconContainer
            onClick={() => setShowLogInMenu(true)}
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
          </StyledIconContainer>
        </Link>
        {
          showLogInMenu && !isUserLoggedIn ?
            <UserActions
              authenticationOperationInit={'logIn'}
              setShowLogInMenu={setShowLogInMenu}
              onClickLogin={onClickLogin}
              onClickCreateAccount={onClickCreateAccount}
              onClickRecover={onClickRecover}
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
      {
          showMenu ?
            <>
              <StyledDarkOverlay
                $showMenu={showMenu}
                onClick={() => {
                  setShowMenu(false)
                }}
              />
              <StyledMenuBackground
                $showMenu={showMenu}
              >
                <MenuMobile
                  setShowMenu={setShowMenu}
                  showMenu={showMenu}
                />
              </StyledMenuBackground>
            </>
            :
            <>
              <StyledDarkOverlay
                $showMenu={showMenu}
                onClick={() => {
                  setShowMenu(false)
                }}
              />
              <StyledMenuBackground
                $showMenu={showMenu}
              />
            </>
        }
    </>
  )
}

Icons.propTypes = {
  onClickLogin: PropTypes.func,
  onClickCreateAccount: PropTypes.func,
  onClickRecover: PropTypes.func
}

export default Icons
