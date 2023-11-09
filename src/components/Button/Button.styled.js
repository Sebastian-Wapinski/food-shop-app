import styled from 'styled-components'

const DefaultStyledButton = styled.button`
display: flex;
align-self: flex-start;

padding: 1rem 1.5rem;
margin: 2rem 0;
border-radius: 12px;
font-weight: 600;
background-color: ${props => props.theme.forthBackground};
color: ${props => props.theme.primaryBackground};
transition: all 0.3s ease-in-out;
border: 1px solid transparent;

&:hover {
  background-color: ${props => props.theme.primaryBackground};
  color: ${props => props.theme.forthBackground};
  border: 1px solid ${props => props.theme.forthBackground};
  cursor: pointer;
}
`

const StyledButton = styled(DefaultStyledButton)(
  props => props.style
)

export { StyledButton }
