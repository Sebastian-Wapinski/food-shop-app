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
grid-row-gap: 1rem;
display: grid;
grid-template-columns: 1.5fr 1.5fr 1fr;
grid-template-areas: 
'StyledProductsContainer StyledProductsContainer StyledShippingContainer'
'StyledDeliveryMethods StyledPaymentMethods StyledShippingContainer'
'StyledDeliveryMethods StyledPaymentMethods StyledAdditionalInformation'
'StyledDeliveryMethods StyledPaymentMethods StyledPayWithStripe';
`
const StyledProductsAndTotalPriceLayout = styled.div`
position: relative;
grid-area: StyledProductsContainer;
border: 1px solid ${props => props.theme.secondTextColor};
height: 25rem;
`

const StyledAdditionalInformation = styled.textarea`
resize: none;
padding: 0.5rem;
grid-area: StyledAdditionalInformation;
border: 1px solid ${props => props.theme.secondTextColor};
min-height: 5rem;
`

const StyledPayWithStripe = styled.div`
grid-area: StyledPayWithStripe;
border: 1px solid ${props => props.theme.secondTextColor};
display: flex;
justify-content: center;
align-items: center;
min-height: 3rem;
`

const StyledShippingForm = styled.form`
grid-area: StyledShippingContainer;
border: 1px solid ${props => props.theme.secondTextColor};
min-height: 38rem;
`

const StyledDeliveryMethodsContainer = styled.div`
grid-area: StyledDeliveryMethods;
border: 1px solid ${props => props.theme.secondTextColor};
`

const StyledPaymentMethodsContainer = styled.div`
grid-area: StyledPaymentMethods;
border: 1px solid ${props => props.theme.secondTextColor};
`

export {
  StyledCartPage,
  StyledTitle,
  StyledInfoContainer,
  StyledProductsAndTotalPriceLayout,
  StyledAdditionalInformation,
  StyledPayWithStripe,
  StyledShippingForm,
  StyledDeliveryMethodsContainer,
  StyledPaymentMethodsContainer
}
