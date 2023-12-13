import styled from 'styled-components'
import { responsiveSizes } from '../../components/style/responsiveSizes'
import Typography from '../../components/Typography/Typography'
import Button from '../../components/Button/Button'

const DefaultStyledCartPage = styled.div`
min-height: calc(100vh - 234.59px);
width: ${responsiveSizes.pageWidth};

@media (max-width: ${responsiveSizes.pageWidth}) {
  width: ${responsiveSizes.mediumSize};
}

@media (max-width: ${responsiveSizes.mediumSizeCart}) {
  width: ${responsiveSizes.mobileMenu};
}
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
'StyledDeliveryMethods StyledPaymentMethods StyledPayWithStripeContainer';

@media (max-width: ${responsiveSizes.pageWidth}) {
  grid-template-columns: 1.5fr 1.5fr;
  grid-template-areas: 
  'StyledDeliveryMethods StyledPaymentMethods'
  'StyledProductsContainer StyledProductsContainer'
  'StyledShippingContainer StyledShippingContainer'
  'StyledAdditionalInformation StyledAdditionalInformation'
  'StyledPayWithStripeContainer StyledPayWithStripeContainer';
}

@media (max-width: ${responsiveSizes.mediumSizeCart}) {
  grid-column-gap: 0;
  grid-template-columns: 1fr;
  grid-template-areas: 
  'StyledDeliveryMethods'
  'StyledPaymentMethods'
  'StyledProductsContainer'
  'StyledShippingContainer'
  'StyledAdditionalInformation'
  'StyledPayWithStripeContainer';
}
`

const StyledProductsAndTotalPriceLayout = styled.div`
position: relative;
grid-area: StyledProductsContainer;
border: 1px solid ${props => props.theme.mainColor};
height: 25rem;

@media (max-width: ${responsiveSizes.mediumSizeCart}) {
  width: ${responsiveSizes.mobileMenu};
}
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

@media (max-width: ${responsiveSizes.mediumSizeCart}) {
  width: ${responsiveSizes.mobileMenu};
}
`

const StyledPayWithStripe = styled(Button)`
display: flex;
justify-content: center;
align-items: center;
min-height: 3rem;
margin: 0;
width: 100%;

@media (max-width: ${responsiveSizes.mediumSizeCart}) {
  width: ${responsiveSizes.mobileMenu};
}
`

const StyledShippingForm = styled.form`
grid-area: StyledShippingContainer;
min-height: 38rem;

@media (max-width: ${responsiveSizes.mediumSizeCart}) {
  width: ${responsiveSizes.mobileMenu};
}
`

const StyledDeliveryMethodsContainer = styled.div`
grid-area: StyledDeliveryMethods;

@media (max-width: ${responsiveSizes.mediumSizeCart}) {
  width: ${responsiveSizes.mobileMenu};
}
`

const StyledPaymentMethodsContainer = styled.div`
grid-area: StyledPaymentMethods;

@media (max-width: ${responsiveSizes.mediumSizeCart}) {
  width: ${responsiveSizes.mobileMenu};
}
`

const StyledMinorTitle = styled(Typography)`
display: block;
border-bottom: 1px solid ${props => props.theme.mainColor};
font-size: 1.5rem;
padding: 1rem;

@media (max-width: ${responsiveSizes.mediumSizeCart}) {
  width: ${responsiveSizes.mobileMenu};
}
`

const StyledInfo = styled(Typography)`
display: block;
border-bottom: 1px solid ${props => props.theme.secondTextColor};
padding: 1.5rem 2rem;
width: 100%;

@media (max-width: ${responsiveSizes.mediumSizeCart}) {
  width: ${responsiveSizes.mobileMenu};
}
`

const StyledErrorsMessage = styled(Typography)`
display: block;
width: 100%;
text-align: center;
padding: 0.5rem 0;
`

const StyledStripeButtonContainer = styled.div`
grid-area: StyledPayWithStripeContainer;
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
  StyledInfo,
  StyledErrorsMessage,
  StyledStripeButtonContainer
}
