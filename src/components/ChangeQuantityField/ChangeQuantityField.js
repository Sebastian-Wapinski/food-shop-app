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

  return (
    <StyledChangeQuantityField
      value={productQuantity}
      onChange={(e) => {
        const value = e.target.value
        setIsError(false)
        if (/^\d*$/.test(value) && value === '') {
          setProductQuantity(e.target.value)
        } else if (/^\d*$/.test(value)) {
          setProductQuantity(Number(e.target.value))
        }
      }}
      onBlur={() => {
        if (productQuantity === '') {
          setProductQuantity(valueOnEmptyField)
        }
      }}
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
