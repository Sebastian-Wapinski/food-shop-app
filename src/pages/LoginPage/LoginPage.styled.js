import styled from 'styled-components'
import { responsiveSizes } from '../../components/style/responsiveSizes'

const DefaultStyledLoginPage = styled.div`
width: ${responsiveSizes.mobileMenu};
height: 40rem;
background-color: ${props => props.theme.firstBackground};
z-index: 501;
`

const StyledLoginPage = styled(DefaultStyledLoginPage)(
  props => props.style
)

export { StyledLoginPage }
