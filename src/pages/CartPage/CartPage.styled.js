import styled from 'styled-components'
import { responsiveSizes } from '../../components/style/responsiveSizes'
import Typography from '../../components/Typography/Typography'
import CardButton from '../../components/CardButton/CardButton'

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
border: 1px solid ${props => props.theme.mainColor};
height: 25rem;
`

const StyledAdditionalInformation = styled.textarea`
resize: none;
padding: 0.5rem;
grid-area: StyledAdditionalInformation;
border: 1px solid ${props => props.theme.mainColor};
min-height: 5rem;

&::placeholder {
color: ${props => props.theme.mainColorLighterShade};
}
`

const StyledPayWithStripe = styled(CardButton)`
grid-area: StyledPayWithStripe;
display: flex;
justify-content: center;
align-items: center;
min-height: 3rem;
margin: 0;
`

const StyledShippingForm = styled.form`
grid-area: StyledShippingContainer;
min-height: 38rem;
`

const StyledDeliveryMethodsContainer = styled.div`
grid-area: StyledDeliveryMethods;
`

const StyledPaymentMethodsContainer = styled.div`
grid-area: StyledPaymentMethods;
`

const StyledMinorTitle = styled(Typography)`
display: block;
border-bottom: 1px solid ${props => props.theme.mainColor};
font-size: 1.5rem;
padding: 1rem;
`

const StyledInfo = styled(Typography)`
display: block;
border-bottom: 1px solid ${props => props.theme.secondTextColor};
padding: 1.5rem 2rem;
width: 100%;
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
  StyledPaymentMethodsContainer,
  StyledMinorTitle,
  StyledInfo
}
