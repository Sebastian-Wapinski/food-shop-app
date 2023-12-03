import styled from 'styled-components'
import Typography from '../Typography/Typography'
import { responsiveSizes } from '../style/responsiveSizes'

const DefaultStyledCartProductDeliveryPayment = styled.div`
display: flex;
justify-content: space-between;
padding: 0.5rem 0.5rem;
margin: 0.5rem 0.5rem;
width: 80%;

@media (max-width: ${responsiveSizes.mediumSizeCart}) {
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid ${props => props.theme.mainColor};
}
`

const StyledCartProductDeliveryPayment = styled(DefaultStyledCartProductDeliveryPayment)(
  props => props.style
)

const StyledName = styled(Typography)`
display: flex;
justify-content: center;
align-items: center;
height: 4.688rem;
`

const StyledPrice = styled(Typography)`
display: flex;
justify-content: center;
align-items: center;
font-size: 2rem;
width: 7rem;
margin-right: 5rem;

@media (max-width: ${responsiveSizes.mediumSizeCart}) {
  margin-right: 0;
  padding-bottom: 2rem;
}
`

export {
  StyledCartProductDeliveryPayment,
  StyledName,
  StyledPrice
}
