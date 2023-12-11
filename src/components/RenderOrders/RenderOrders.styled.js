import styled from 'styled-components'
import Typography from '../Typography/Typography'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '../Button/Button'

const DefaultStyledRenderOrders = styled.div`

`

const StyledRenderOrders = styled(DefaultStyledRenderOrders)(
  props => props.style
)

const StyledOrderContainer = styled.div`
margin: 1rem 0;
padding: 2rem;
border: 1px solid ${props => props.theme.mainColor};
width: 100%;
`

const StyledBasicInfoContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
`

const StyledDate = styled(Typography)`
display: block;
`

const StyledPaymentStatus = styled(Typography)`
display: block;
`

const StyledId = styled(Typography)`
display: block;
`

const StyledAmountTotal = styled(Typography)`
display: block;
font-weight: 600;
`

const StyledExtendedInfoContainer = styled.div`
display: flex;
margin: 2rem 0 0 0;
`

const StyledFormContainer = styled.div`
display: flex;
justify-content: flex-start;
align-items: flex-start;
flex-direction: column;
flex-basis: 30%;
`

const StyledFormInfo = styled(Typography)`
padding: 0.5rem;
`

const StyledItemsContainer = styled.div`
width: 100%;
flex-basis: 70%;
`

const StyledArrow = styled(Button)`
padding: 0;
`

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
width: 1rem;
height: 1rem;
padding: 1rem;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.1s ease-in-out;

&:hover {
  color: ${props => props.theme.mainColor}
}
`

export {
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
}
