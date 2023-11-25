export const decreaseProductQuantityValidation = (productQuantity, accessibility, setProductQuantity) => {
  if (productQuantity > accessibility) {
    setProductQuantity(accessibility)
    return true
  } else if (productQuantity <= 1) {
    setProductQuantity(1)
    return true
  } else {
    return false
  }
}

export const increaseProductQuantityValidation = (productQuantity, accessibility, setProductQuantity) => {
  if (productQuantity >= accessibility) {
    setProductQuantity(accessibility)
    return true
  } else if (productQuantity <= 0) {
    setProductQuantity(1)
    return true
  } else {
    return false
  }
}

export const setProductQuantityValidation = (productQuantity, accessibility, setProductQuantity) => {
  if (productQuantity > accessibility) {
    setProductQuantity(accessibility)
  } else if (productQuantity < 0) {
    setProductQuantity(1)
  }
}
