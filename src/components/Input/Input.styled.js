import styled from 'styled-components'

const DefaultStyledInput = styled.input`
width: 100%;
padding: 0.5rem;
background-color: ${props => props.theme.firstBackground};
border: ${props => props.theme.mainColor};
outline: none;
color: ${props => props.theme.secondTextColor};
font-weight: 600;
font-size: 0.95rem;
text-align: center;

&::placeholder {
  color: ${props => props.theme.mainColorLighterShade};
  font-weight: 400;
}
`

const StyledInput = styled(DefaultStyledInput)(
  props => props.style
)

const StyledErrorsMessage = styled.p`
width: 100%;
padding: 0.5rem;
color: ${props => props.theme.errorMessage};
font-weight: 600;
font-size: 0.8rem;
text-align: center;
`

export { StyledInput, StyledErrorsMessage }
