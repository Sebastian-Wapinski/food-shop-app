import styled from 'styled-components'
import { responsiveSizes } from '../../components/style/responsiveSizes'

const DefaultStyledSignUpPage = styled.div`
width: ${responsiveSizes.mobileMenu};
min-height: 37rem;
background-color: ${props => props.theme.firstBackground};
z-index: 501;
`

const StyledSignUpPage = styled(DefaultStyledSignUpPage)(
  props => props.style
)

export { StyledSignUpPage }
