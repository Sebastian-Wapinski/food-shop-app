import React from 'react'

import {
  StyledIconCart,
  StyledImgContainer,
  StyledFontAwesomeIcon,
  CartIconProductsQuantity,
  StyledParagraph
} from './IconCart.styled'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { iconsData } from '../../data/iconsData'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import PreviewCartOverlay from '../../overlays/PreviewCartOverlay/PreviewCartOverlay'

export const IconCart = () => {
  const [showPreviewCartOverlay, setShowPreviewCartOverlay] = React.useState(false)

  const { cart } = iconsData

  const { products, productsQuantity } = useSelector(state => state.cart)
  const location = useLocation()

  return (
    <>
      <Link
        to={cart.path}
        onMouseEnter={() => {
          setShowPreviewCartOverlay(true)
        }}
        onMouseLeave={() => {
          setShowPreviewCartOverlay(false)
        }}
      >
        <StyledIconCart>
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
        </StyledIconCart>
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
    </>
  )
}

export default IconCart
