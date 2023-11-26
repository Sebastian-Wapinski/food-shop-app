import React from 'react'

import { StyledIcons, StyledIconContainer, StyledImg, StyledParagraph } from './Icons.styled'
import { iconsData } from './iconsData'
import { Link } from 'react-router-dom'
import PreviewCartOverlay from '../../overlays/PreviewCartOverlay/PreviewCartOverlay'

export const Icons = () => {
  const [showPreviewCartOverlay, setShowPreviewCartOverlay] = React.useState(false)

  const { logIn, favorites, cart } = iconsData
  return (
    <StyledIcons>
      {/* {
        iconsData.map(icon => {
          const { name, img, alt, id } = icon
          return (
            <Link
              to={id === 'idLog' ? null : name.toLowerCase()}
              key={id}
              onMouseEnter={() => {
                if (id === 'idCart') {
                  console.log('mouse on')
                }
              }}
              onMouseLeave={() => {
                if (id === 'idCart') {
                  console.log('mouse off')
                }
              }}
            >
              <StyledIconContainer>
                <StyledImg
                  src={img}
                  alt={alt}
                />
                <StyledParagraph>
                  {name}
                </StyledParagraph>
              </StyledIconContainer>
            </Link>
          )
        })
      } */}
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
        </StyledIconContainer>
      </Link>
      {
        showPreviewCartOverlay ?
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
