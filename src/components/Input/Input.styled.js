import styled, { css } from 'styled-components'
import Typography from '../Typography/Typography'

const DefaultStyledInput = styled.input`

${
props => props.type === 'text' && css`
width: 100%;
padding: 0.5rem;
background-color: ${props => props.theme.firstBackground};
border: 1px solid ${props => props.theme.mainColor};
outline: none;
color: ${props => props.theme.secondTextColor};
font-weight: 400;
font-size: 0.95rem;
text-align: left;

&::placeholder {
  color: ${props => props.theme.mainColorLighterShade};
}
`
}

${
props => props.type === 'radio' && css`
appearance: none;
-webkit-appearance: none;
-moz-appearance: none;

&:before {
  content: '';
  display: block;
  width: 1rem;
  height: 1rem;
  border: 1px solid ${props => props.theme.mainColor};
  background: ${props => props.theme.firstBackground};
  cursor: pointer;

  transition: all 0.1s ease;
}

&:checked:before {
  background-color: ${props => props.theme.mainColor};
  cursor: not-allowed;
}
`
}

`

const StyledInput = styled(DefaultStyledInput)(
  props => props.style
)

const StyledErrorsMessage = styled(Typography)`
display: block;
width: 100%;
text-align: center;
padding: 0.2rem 0;
`

export { StyledInput, StyledErrorsMessage }
