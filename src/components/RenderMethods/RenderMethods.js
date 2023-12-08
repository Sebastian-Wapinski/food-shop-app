import React from 'react'
import PropTypes from 'prop-types'

import {
  StyledRenderMethods,
  RadioContainer,
  StyledInput,
  StyledLabel,
  StyledErrorsMessage
} from './RenderMethods.styled'
import { actionChangeProductQuantity } from '../../modules/Cart/Cart.actions'
import { checkIsLinkVisited, setDataFromFirebaseDatabase } from '../../helper/helper'
import { createData } from '../../pages/ProductsPage/ProductsPageHelper'
import { useDispatch, useSelector } from 'react-redux'
import { actionAddData } from '../../modules/CacheFirebaseData/CacheFirebaseData.actions'

export const RenderMethods = (props) => {
  const {
    data,
    methodsName,
    checkedId,
    action,
    errorMessage
  } = props

  const [methods, setMethods] = React.useState(null)

  const dispatch = useDispatch()
  const { visitedLinks, firebaseData } = useSelector(state => state.cacheFirebaseData)

  React.useEffect(() => {
    const isVisited = checkIsLinkVisited(visitedLinks, firebaseData, `/method/${methodsName}`, setMethods)
    if (isVisited) return
    dispatch(setDataFromFirebaseDatabase(data, createData, setMethods, actionAddData, `/method/${methodsName}`))
  }, [data, dispatch, firebaseData, methodsName, visitedLinks])

  return (
    <StyledRenderMethods>
      {
      methods ?
        methods.map(method => {
          const { id, labelName, value } = method
          return (
            <RadioContainer
              key={`RenderMethods/${id}`}
            >
              <StyledInput
                type={'radio'}
                name={methodsName}
                id={id}
                value={value}
                checked={id === checkedId}
                onChange={() => {
                  dispatch(action(method))
                  dispatch(actionChangeProductQuantity())
                }}
              />
              <StyledLabel
                htmlFor={id}
                variant={'radio'}
              >
                {labelName}
              </StyledLabel>
            </RadioContainer>
          )
        })
        :
        null
      }
      {
          errorMessage && <StyledErrorsMessage variant={'errorMessageForm'}>{errorMessage}</StyledErrorsMessage>
      }
    </StyledRenderMethods>
  )
}

RenderMethods.propTypes = {
  data: PropTypes.string,
  methodsName: PropTypes.string,
  checkedId: PropTypes.string,
  action: PropTypes.func,
  errorMessage: PropTypes.string
}

export default RenderMethods
