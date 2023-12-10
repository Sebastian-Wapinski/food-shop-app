import styled from 'styled-components'
import Typography from '../Typography/Typography'
import Button from '../Button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const DefaultStyledLoginForm = styled.form`
margin: 1rem;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
position: relative;
`

const StyledLoginForm = styled(DefaultStyledLoginForm)(
  props => props.style
)

const StyledFormContainer = styled.div`
margin: 1rem 0;
`

const StyledTypography = styled(Typography)`
margin: 1rem 0;
`

const StyledButton = styled(Button)`
margin: 0.5rem 0;
width: 80%;
`

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
color: ${props => props.theme.mainColor};
font-size: 2rem;

&:hover {
  cursor: pointer;
}
`

const StyledImgContainer = styled.div`
position: relative;
width: 100%;
display: flex;
justify-content: flex-end;
align-items: center;
`

export {
  StyledLoginForm,
  StyledTypography,
  StyledButton,
  StyledFormContainer,
  StyledFontAwesomeIcon,
  StyledImgContainer
}
