import React from 'react'

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

export const Icons = () => {
  const [showPreviewCartOverlay, setShowPreviewCartOverlay] = React.useState(false)
  const [showMenu, setShowMenu] = React.useState(false)
  const [showLogInMenu, setShowLogInMenu] = React.useState(false)

  const { products, productsQuantity } = useSelector(state => state.cart)
  const location = useLocation()

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
        <StyledIconContainer
          onClick={() => setShowLogInMenu(true)}
        >
          <StyledImgContainer>
            <StyledFontAwesomeIcon
              icon={faUser}
            />
          </StyledImgContainer>
          <StyledParagraph>
            {logIn.name}
          </StyledParagraph>
        </StyledIconContainer>
        {
          showLogInMenu ?
            <UserActions
              authenticationOperationInit={'logIn'}
              setShowLogInMenu={setShowLogInMenu}
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

export default Icons
