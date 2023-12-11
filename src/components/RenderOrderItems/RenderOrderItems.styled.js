import styled from 'styled-components'
import Typography from '../Typography/Typography'
import { responsiveSizes } from '../style/responsiveSizes'

const DefaultStyledRenderOrderItems = styled.div`

`

const StyledRenderOrderItems = styled(DefaultStyledRenderOrderItems)(
  props => props.style
)

const StyledItemContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 1rem;
margin: 1rem;
border: 1px solid ${props => props.theme.mainColor};

@media (max-width: ${responsiveSizes.mediumSizeCart}) {
  flex-direction: column;
  justify-content: center;
}
`

const StyledImg = styled.img`
width: 6.25rem;
height: 4.688rem;

@media (max-width: ${responsiveSizes.pageWidth}) {
  width: 4.688rem;
  height: 3.516rem;
}
`

const StyledName = styled(Typography)`
display: block;
min-width: 23rem;

@media (max-width: ${responsiveSizes.pageWidth}) {
  font-size: 1rem;
  min-width: 0;
}

@media (max-width: ${responsiveSizes.mediumSizeCart}) {
  inline-size: 15rem;
  overflow-wrap: break-word;
  text-align: center;
  padding: 1rem 0;
}
`

const StyledPriceForSingleUnit = styled(Typography)`
display: block;

@media (max-width: ${responsiveSizes.pageWidth}) {
  font-size: 0.8rem;
}
`

const StyledQuantity = styled(Typography)`
display: block;

@media (max-width: ${responsiveSizes.pageWidth}) {
  font-size: 0.8rem;
}

@media (max-width: ${responsiveSizes.mediumSizeCart}) {
  padding: 1rem 0;
}
`

const StyledTotalAmount = styled(Typography)`
display: block;
font-size: 1.5rem;

@media (max-width: ${responsiveSizes.pageWidth}) {
  font-size: 1.2rem;
}
`

export {
  StyledRenderOrderItems,
  StyledItemContainer,
  StyledImg,
  StyledName,
  StyledPriceForSingleUnit,
  StyledQuantity,
  StyledTotalAmount
}
