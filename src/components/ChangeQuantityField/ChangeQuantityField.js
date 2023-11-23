import React from 'react'
import PropTypes from 'prop-types'

import { StyledChangeQuantityField } from './ChangeQuantityField.styled'

export const ChangeQuantityField = (props) => {
  const {
    productQuantity,
    setProductQuantity,
    setIsError,
    type
  } = props

  return (
    <StyledChangeQuantityField
      value={productQuantity}
      onChange={(e) => {
        setIsError(false)
        setProductQuantity(Number(e.target.value))
      }}
      type={type}
    />
  )
}

ChangeQuantityField.propTypes = {
  setProductQuantity: PropTypes.func,
  setIsError: PropTypes.func,
  productQuantity: PropTypes.number,
  type: PropTypes.string
}

export default ChangeQuantityField
