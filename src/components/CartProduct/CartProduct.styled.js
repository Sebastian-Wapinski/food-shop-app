import styled from 'styled-components'
import Typography from '../Typography/Typography'

const DefaultStyledCartProduct = styled.div`
display: flex;
justify-content: space-between;
padding: 0.5rem 0.5rem;
margin: 0.5rem 0.5rem;
width: 80%;
`

const StyledCartProduct = styled(DefaultStyledCartProduct)(
  props => props.style
)

const StyledImg = styled.img`
width: 7.813rem;
height: 4.688rem;
`

const StyledContainerProductInfo = styled.div`
display: flex;
justify-content: center;
align-items: flex-start;
flex-direction: column;
width: 15rem;
`

const StyledName = styled(Typography)`
display: block;
padding-bottom: 0.5rem;
`

const StyledProducer = styled(Typography)`
display: block;
padding-bottom: 0.5rem;
`

const StyledUnitPrice = styled(Typography)`
display: block;
font-size: 0.7rem;
`

const StyledContainerPriceQuantity = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
flex-direction: column;
`

const StyledPrice = styled(Typography)`
display: flex;
justify-content: center;
align-items: center;
font-size: 2rem;
width: 7rem;
`

const StyledAccessibility = styled(Typography)`
display: block;
text-align: center;
font-size: 0.7rem;
`

const StyledCardButtonContainer = styled.div`
display: flex;
align-items: center;
`

const StyledErrorMessage = styled(Typography)`
display: block;
font-size: 0.8rem;
`

export {
  StyledCartProduct,
  StyledImg,
  StyledContainerProductInfo,
  StyledName,
  StyledProducer,
  StyledUnitPrice,
  StyledContainerPriceQuantity,
  StyledPrice,
  StyledAccessibility,
  StyledCardButtonContainer,
  StyledErrorMessage
}
