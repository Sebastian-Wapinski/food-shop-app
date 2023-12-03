import styled from 'styled-components'
import Typography from '../../components/Typography/Typography'
import { responsiveSizes } from '../../components/style/responsiveSizes'

const DefaultStyledPaymentStatusPage = styled.div`
min-height: calc(100vh - 234.59px);
`

const StyledPaymentStatusPage = styled(DefaultStyledPaymentStatusPage)(
  props => props.style
)

const StyledTitle = styled(Typography)`
display: block;
padding: 1.5rem 2rem;
width: 100%;
border-bottom: 1px solid ${props => props.theme.secondTextColor};

@media (max-width: ${responsiveSizes.mediumSize}) {
  text-align: center;
  text-indent: 0;
}
`

export { StyledPaymentStatusPage, StyledTitle }
