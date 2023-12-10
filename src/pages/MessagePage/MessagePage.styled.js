import styled from 'styled-components'
import Typography from '../../components/Typography/Typography'
import Button from '../../components/Button/Button'
import { responsiveSizes } from '../../components/style/responsiveSizes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const DefaultStyledMessagePage = styled.div`
position: fixed;
top: 0;
left: 0;
z-index: 500;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
`

const StyledMessagePage = styled(DefaultStyledMessagePage)(
  props => props.style
)

const StyledDarkOverlay = styled.div`
position: fixed;
top: 0;
left: 0;
z-index: 500;
display: flex;
justify-content: center;
align-items: center;
background-color: rgba(0, 0, 0, 0.4);
width: 100%;
height: 100%;
`

const StyledMessageContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 2rem;
width: ${responsiveSizes.mobileMenu};
min-height: 37rem;
background-color: ${props => props.theme.firstBackground};
z-index: 501;
`

const StyledTypography = styled(Typography)`
margin: 2rem 0;
text-align: center;
`

const StyledButton = styled(Button)`
width: 100%;
`

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
color: ${props => props.theme.mainColor};
font-size: 5rem;
`

export {
  StyledMessagePage,
  StyledTypography,
  StyledButton,
  StyledFontAwesomeIcon,
  StyledMessageContainer,
  StyledDarkOverlay
}
