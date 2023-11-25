import React from 'react'
import PropTypes from 'prop-types'

import CardButton from '../CardButton/CardButton'
import ChangeQuantityField from '../ChangeQuantityField/ChangeQuantityField'

import { StyledChangeProductQuantityComplex } from './ChangeProductQuantityComplex.styled'

export const ChangeProductQuantityComplex = (props) => {
  const {
    decreaseProductQuantity,
    increaseProductQuantity,
    productQuantity,
    setProductQuantity,
    valueOnEmptyField,
    setIsError
  } = props

  return (
    <StyledChangeProductQuantityComplex>
      <CardButton
        variant={'changeQuantity'}
        onClick={decreaseProductQuantity}
      >
        -
      </CardButton>
      <ChangeQuantityField
        productQuantity={productQuantity}
        setProductQuantity={setProductQuantity}
        setIsError={setIsError}
        valueOnEmptyField={valueOnEmptyField}
      />
      <CardButton
        variant={'changeQuantity'}
        onClick={increaseProductQuantity}
      >
        +
      </CardButton>
    </StyledChangeProductQuantityComplex>
  )
}

ChangeProductQuantityComplex.propTypes = {
  decreaseProductQuantity: PropTypes.func,
  increaseProductQuantity: PropTypes.func,
  productQuantity: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf([''])
  ]),
  setProductQuantity: PropTypes.func,
  setIsError: PropTypes.func,
  valueOnEmptyField: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf([''])
  ])
}

export default ChangeProductQuantityComplex
