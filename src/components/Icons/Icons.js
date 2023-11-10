import React from 'react'

import { StyledIcons, StyledIconContainer, StyledImg, StyledParagraph } from './Icons.styled'
import { iconsData } from './iconsData'

export const Icons = () => {
  return (
    <StyledIcons>
      {
        iconsData.map(icon => {
          const { name, img, alt, id } = icon
          return (
            <StyledIconContainer
              key={id}
            >
              <StyledImg
                src={img}
                alt={alt}
              />
              <StyledParagraph>
                {name}
              </StyledParagraph>
            </StyledIconContainer>
          )
        })
      }
    </StyledIcons>
  )
}

export default Icons
