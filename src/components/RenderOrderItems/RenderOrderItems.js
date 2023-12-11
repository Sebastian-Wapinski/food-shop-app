import React from 'react'
import PropTypes from 'prop-types'

import {
  StyledRenderOrderItems,
  StyledItemContainer,
  StyledImg,
  StyledName,
  StyledPriceForSingleUnit,
  StyledQuantity,
  StyledTotalAmount
} from './RenderOrderItems.styled'

export const RenderOrderItems = (props) => {
  const {
    items
  } = props

  return (
    <StyledRenderOrderItems>
      {
        items.map(item => {
          const { dividedPrice, img, name, quantity } = item

          const totalPrice = quantity * dividedPrice

          return (
            <StyledItemContainer
              key={`StyledItemContainer/product/${name}`}
            >
              <StyledImg
                src={img[0]}
                alt={name}
              />
              <StyledName
                variant={'cardH1'}
              >
                {name}
              </StyledName>
              <StyledPriceForSingleUnit
                variant={'cardBody1'}
              >
                {dividedPrice}€ for 1kg
              </StyledPriceForSingleUnit>
              <StyledQuantity
                variant={'cardBody1'}
              >
                x{quantity}
              </StyledQuantity>
              <StyledTotalAmount
                variant={'cardH1'}
              >
                {totalPrice}€
              </StyledTotalAmount>
            </StyledItemContainer>
          )
        })
      }
    </StyledRenderOrderItems>
  )
}

RenderOrderItems.propTypes = {
  items: PropTypes.array
}

export default RenderOrderItems
