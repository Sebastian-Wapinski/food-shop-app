import React from 'react'
import PropTypes from 'prop-types'

import CardButton from '../CardButton/CardButton'
import ChangeQuantityField from '../ChangeQuantityField/ChangeQuantityField'

export const ChangeProductQuantityComplex = (props) => {
  const {
    decreaseProductQuantity,
    increaseProductQuantity,
    productQuantity,
    setProductQuantity,
    setIsError
  } = props

  return (
    <>
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
        type={'number'}
      />
      <CardButton
        variant={'changeQuantity'}
        onClick={increaseProductQuantity}
      >
        +
      </CardButton>
    </>
  )
}

ChangeProductQuantityComplex.propTypes = {
  decreaseProductQuantity: PropTypes.func,
  increaseProductQuantity: PropTypes.func,
  productQuantity: PropTypes.number,
  setProductQuantity: PropTypes.func,
  setIsError: PropTypes.func
}

export default ChangeProductQuantityComplex
