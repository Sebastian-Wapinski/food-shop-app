import styled from 'styled-components'
import Typography from '../Typography/Typography'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { responsiveSizes } from '../style/responsiveSizes'

const DefaultStyledCartProduct = styled.div`
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

@media (max-width: ${responsiveSizes.mediumSizeCart}) {
  padding: 0.5rem 0;
  align-items: center;
}
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

@media (max-width: ${responsiveSizes.mediumSizeCart}) {
  padding: 0.5rem 0;
}
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

@media (max-width: ${responsiveSizes.mediumSizeCart}) {
  padding: 0.5rem 0;
}
`

const StyledButtonContainer = styled.div`
display: flex;
align-items: center;

@media (max-width: ${responsiveSizes.mediumSizeCart}) {
  padding: 1rem 0;
}
`

const StyledErrorMessage = styled(Typography)`
display: block;
font-size: 0.8rem;
`

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
font-size: 1.5rem;
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
  StyledButtonContainer,
  StyledErrorMessage,
  StyledFontAwesomeIcon
}
