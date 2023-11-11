import React from 'react'

import { StyledIcons, StyledIconContainer, StyledImg, StyledParagraph } from './Icons.styled'
import { iconsData } from './iconsData'
import { Link } from 'react-router-dom'

export const Icons = () => {
  return (
    <StyledIcons>
      {
        iconsData.map(icon => {
          const { name, img, alt, id } = icon
          return (
            <Link
              to={name === 'Log In' ? null : name.toLowerCase()}
              key={id}
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
      }
    </StyledIcons>
  )
}

export default Icons
