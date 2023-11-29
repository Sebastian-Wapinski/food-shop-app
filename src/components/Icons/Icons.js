import React from 'react'

import { StyledIcons, StyledIconContainer, StyledImg, StyledParagraph, CartIconProductsQuantity } from './Icons.styled'
import { iconsData } from '../../data/iconsData'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import PreviewCartOverlay from '../../overlays/PreviewCartOverlay/PreviewCartOverlay'

export const Icons = () => {
  const [showPreviewCartOverlay, setShowPreviewCartOverlay] = React.useState(false)

  const { products, productsQuantity } = useSelector(state => state.cart)
  const location = useLocation()

  const { logIn, favorites, cart } = iconsData
  return (
    <StyledIcons>
      <StyledIconContainer>
        <StyledImg
          src={logIn.img}
          alt={logIn.alt}
        />
        <StyledParagraph>
          {logIn.name}
        </StyledParagraph>
      </StyledIconContainer>
      <Link
        to={favorites.path}
      >
        <StyledIconContainer>
          <StyledImg
            src={favorites.img}
            alt={favorites.alt}
          />
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
          <StyledImg
            src={cart.img}
            alt={cart.alt}
          />
          <StyledParagraph>
            {cart.name}
          </StyledParagraph>
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
  )
}

export default Icons
