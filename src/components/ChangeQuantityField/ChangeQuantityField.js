import React from 'react'
import PropTypes from 'prop-types'

import { StyledChangeQuantityField } from './ChangeQuantityField.styled'

export const ChangeQuantityField = (props) => {
  const {
    productQuantity,
    setProductQuantity,
    valueOnEmptyField,
    setIsError
  } = props

  const handleQuantityChange = (e) => {
    const value = e.target.value
    setIsError(false)
    if (/^\d*$/.test(value) && value === '') {
      setProductQuantity(e.target.value)
    } else if (/^\d*$/.test(value)) {
      setProductQuantity(Number(e.target.value))
    }
  }

  const handleQuantityBlur = () => {
    if (productQuantity === '') {
      setProductQuantity(valueOnEmptyField)
    }
  }

  return (
    <StyledChangeQuantityField
      value={productQuantity}
      onChange={handleQuantityChange}
      onBlur={handleQuantityBlur}
    />
  )
}

ChangeQuantityField.propTypes = {
  setProductQuantity: PropTypes.func,
  setIsError: PropTypes.func,
  productQuantity: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf([''])
  ]),
  valueOnEmptyField: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf([''])
  ])
}

export default ChangeQuantityField
