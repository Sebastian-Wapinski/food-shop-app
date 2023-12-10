import styled from 'styled-components'
import Typography from '../Typography/Typography'
import Button from '../Button/Button'

const DefaultStyledLoginForm = styled.form`
margin: 1rem;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
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

export {
  StyledLoginForm,
  StyledTypography,
  StyledButton,
  StyledFormContainer
}
