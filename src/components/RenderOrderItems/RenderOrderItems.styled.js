import styled from 'styled-components'
import Typography from '../Typography/Typography'

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
`

const StyledImg = styled.img`
width: 6.25rem;
height: 4.688rem;
`

const StyledName = styled(Typography)`
display: block;
min-width: 23rem;
`

const StyledPriceForSingleUnit = styled(Typography)`
display: block;
`

const StyledQuantity = styled(Typography)`
display: block;
`

const StyledTotalAmount = styled(Typography)`
display: block;
font-size: 1.5rem;
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
