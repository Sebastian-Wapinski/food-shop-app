import React from 'react'
import PropTypes from 'prop-types'

import {
  StyledRenderOrders,
  StyledOrderContainer,
  StyledBasicInfoContainer,
  StyledDate,
  StyledId,
  StyledAmountTotal,
  StyledExtendedInfoContainer,
  StyledFormContainer,
  StyledItemsContainer,
  StyledArrow,
  StyledFontAwesomeIcon,
  StyledFormInfo,
  StyledPaymentStatus
} from './RenderOrders.styled'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import RenderOrderItems from '../RenderOrderItems/RenderOrderItems'

export const RenderOrders = (props) => {
  const {
    orderData
  } = props

  const { amountTotal, created, email, id, metadata, paymentStatus, processedLineItems } = orderData
  const { additionalInformation, city, line1, name, paymentId, phone, postal_code: postalCode } = metadata

  const date = new Date(created * 1000)

  const [showExtendedInfo, setShowExtendedInfo] = React.useState(false)

  return (
    <StyledRenderOrders>
      <StyledOrderContainer
        key={id}
      >
        <StyledBasicInfoContainer>
          <StyledDate
            variant={'body1'}
          >
            {date.toLocaleString()}
          </StyledDate>
          <StyledPaymentStatus>
            {paymentStatus}
          </StyledPaymentStatus>
          <StyledId
            variant={'body1'}
          >
            Id: {id}
          </StyledId>
          <StyledAmountTotal
            variant={'body1'}
          >
            {amountTotal}€
          </StyledAmountTotal>
          <StyledArrow
            variant={'customText'}
            onClick={() => setShowExtendedInfo(!showExtendedInfo)}
          >
            {showExtendedInfo ? <StyledFontAwesomeIcon icon={faAngleUp}/> : <StyledFontAwesomeIcon icon={faAngleDown}/>}
          </StyledArrow>
        </StyledBasicInfoContainer>
        {
              showExtendedInfo ?
                <StyledExtendedInfoContainer>
                  <StyledFormContainer>
                    <StyledFormInfo variant={'cardBody1'}>Name: {name}</StyledFormInfo>
                    <StyledFormInfo variant={'cardBody1'}>Email: {email}</StyledFormInfo>
                    <StyledFormInfo variant={'cardBody1'}>Street: {line1}</StyledFormInfo>
                    <StyledFormInfo variant={'cardBody1'}>City: {city}</StyledFormInfo>
                    <StyledFormInfo variant={'cardBody1'}>Postal code: {postalCode}</StyledFormInfo>
                    <StyledFormInfo variant={'cardBody1'}>Phone: {phone}</StyledFormInfo>
                    <StyledFormInfo variant={'cardBody1'}>PaymentId: {paymentId}</StyledFormInfo>
                    <StyledFormInfo variant={'cardBody1'}>Additional Information: {additionalInformation}</StyledFormInfo>
                  </StyledFormContainer>
                  <StyledItemsContainer>
                    <RenderOrderItems items={processedLineItems} />
                  </StyledItemsContainer>
                </StyledExtendedInfoContainer>
                :
                null
              }
      </StyledOrderContainer>
    </StyledRenderOrders>
  )
}

RenderOrders.propTypes = {
  orderData: PropTypes.object
}

export default RenderOrders
