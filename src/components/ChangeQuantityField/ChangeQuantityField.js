import React from 'react'
import PropTypes from 'prop-types'

import { StyledChangeQuantityField } from './ChangeQuantityField.styled'

export const ChangeQuantityField = (props) => {
  const {
    productQuantity,
    setProductQuantity,
    type
  } = props

  return (
    <StyledChangeQuantityField
      value={productQuantity}
      onChange={(e) => setProductQuantity(Number(e.target.value))}
      type={type}
    />
  )
}

ChangeQuantityField.propTypes = {
  setProductQuantity: PropTypes.func,
  productQuantity: PropTypes.number,
  type: PropTypes.string
}

export default ChangeQuantityField
