import styled from 'styled-components'
import { responsiveSizes } from '../../components/style/responsiveSizes'
import Typography from '../../components/Typography/Typography'

const DefaultStyledCartPage = styled.div`
min-height: calc(100vh - 234.59px);
width: ${responsiveSizes.pageWidth};
`

const StyledCartPage = styled(DefaultStyledCartPage)(
  props => props.style
)

const StyledTitle = styled(Typography)`
display: block;
padding: 1.5rem 2rem;
width: 100%;
border-bottom: 1px solid ${props => props.theme.secondTextColor};
`

const StyledInfoContainer = styled.div`
margin-top: 2rem;
grid-column-gap: 3rem;
grid-row-gap: 2rem;
display: grid;
grid-template-columns: 3fr 1fr;
grid-template-rows: 25rem 10rem;
grid-template-areas: 
'StyledProductsContainer StyledShippingContainer'
'StyledNote StyledPayWithStripe';
`
const StyledProductsAndTotalPriceLayout = styled.div`
position: relative;
grid-area: StyledProductsContainer;
border: 1px solid ${props => props.theme.secondTextColor};
height: 25rem;
`

const StyledNote = styled.div`
grid-area: StyledNote;
border: 1px solid ${props => props.theme.secondTextColor};
`

const StyledPayWithStripe = styled.div`
grid-area: StyledPayWithStripe;
border: 1px solid ${props => props.theme.secondTextColor};
display: flex;
justify-content: center;
align-items: center;
`

const StyledShippingForm = styled.form`
grid-area: StyledShippingContainer;
border: 1px solid ${props => props.theme.secondTextColor};
`

export {
  StyledCartPage,
  StyledTitle,
  StyledInfoContainer,
  StyledProductsAndTotalPriceLayout,
  StyledNote,
  StyledPayWithStripe,
  StyledShippingForm
}
