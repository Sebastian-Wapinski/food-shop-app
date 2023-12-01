import React from 'react'
import PropTypes from 'prop-types'

import Button from '../Button/Button'
import ChangeQuantityField from '../ChangeQuantityField/ChangeQuantityField'

import { StyledChangeProductQuantityComplex } from './ChangeProductQuantityComplex.styled'

export const ChangeProductQuantityComplex = (props) => {
  const {
    decreaseProductQuantity,
    increaseProductQuantity,
    productQuantity,
    setProductQuantity,
    valueOnEmptyField,
    setIsError,
    isDisabledPrevButton,
    isDisabledNextButton
  } = props

  return (
    <StyledChangeProductQuantityComplex>
      <Button
        variant={'changeQuantity'}
        onClick={decreaseProductQuantity}
        isDisabled={isDisabledPrevButton}
      >
        -
      </Button>
      <ChangeQuantityField
        productQuantity={productQuantity}
        setProductQuantity={setProductQuantity}
        setIsError={setIsError}
        valueOnEmptyField={valueOnEmptyField}
      />
      <Button
        variant={'changeQuantity'}
        onClick={increaseProductQuantity}
        isDisabled={isDisabledNextButton}
      >
        +
      </Button>
    </StyledChangeProductQuantityComplex>
  )
}

ChangeProductQuantityComplex.propTypes = {
  decreaseProductQuantity: PropTypes.func,
  isDisabledPrevButton: PropTypes.bool,
  isDisabledNextButton: PropTypes.bool,
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
