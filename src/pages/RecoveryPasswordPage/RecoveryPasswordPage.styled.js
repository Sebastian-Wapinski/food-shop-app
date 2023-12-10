import styled from 'styled-components'
import { responsiveSizes } from '../../components/style/responsiveSizes'

const DefaultStyledRecoveryPasswordPage = styled.div`
width: ${responsiveSizes.mobileMenu};
height: 40rem;
background-color: ${props => props.theme.firstBackground};
z-index: 501;
`

const StyledRecoveryPasswordPage = styled(DefaultStyledRecoveryPasswordPage)(
  props => props.style
)

export { StyledRecoveryPasswordPage }
