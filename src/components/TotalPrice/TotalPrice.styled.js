import styled from 'styled-components'
import Typography from '../Typography/Typography'

const DefaultStyledTotalPrice = styled.div`
position: absolute;
left: 0;
top: 80%;
display: flex;
justify-content: flex-end;
width: 100%;
padding: 2rem 3rem 2rem 2rem;
background-color: ${props => props.theme.firstBackgroundColor};
`

const StyledTotalPrice = styled(DefaultStyledTotalPrice)(
  props => props.style
)

const StyledTotalPriceTitle = styled(Typography)`
display: block;
padding-right: 2rem;
`

const StyledTotalPriceAmount = styled(Typography)`
display: block;
font-size: 2rem;
`

export {
  StyledTotalPrice,
  StyledTotalPriceTitle,
  StyledTotalPriceAmount
}
