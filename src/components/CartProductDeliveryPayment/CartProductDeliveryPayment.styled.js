import styled from 'styled-components'
import Typography from '../Typography/Typography'

const DefaultStyledCartProductDeliveryPayment = styled.div`
display: flex;
justify-content: space-between;
padding: 0.5rem 0.5rem;
margin: 0.5rem 0.5rem;
width: 80%;
height: 4.688rem;
`

const StyledCartProductDeliveryPayment = styled(DefaultStyledCartProductDeliveryPayment)(
  props => props.style
)

const StyledName = styled(Typography)`
display: flex;
justify-content: center;
align-items: center;
`

const StyledPrice = styled(Typography)`
display: flex;
justify-content: center;
align-items: center;
font-size: 2rem;
width: 7rem;
margin-right: 5rem;
`

export {
  StyledCartProductDeliveryPayment,
  StyledName,
  StyledPrice
}
