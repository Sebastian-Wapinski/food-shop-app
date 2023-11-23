import styled from 'styled-components'

const DefaultStyledButtonsChangingPages = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

const StyledButtonsChangingPages = styled(DefaultStyledButtonsChangingPages)(
  props => props.style
)

const StyledButton = styled.button`
padding:  0.2rem 0.2rem;
margin:  0.5rem 0.5rem;
border: 1px solid ${props => props.theme.mainColor};
background: ${props => props.theme.firstBackground};
color: ${props => props.theme.mainColor};
transition: all 0.1s ease-in-out;
width: 100%;
max-width: 2.5rem;
text-align: center;
font-size: 1.5rem;

&:hover {
  cursor: pointer;
  background: ${props => props.theme.mainColor};
  color: ${props => props.theme.firstBackground};
}

&:disabled {
  background: ${props => props.theme.firstBackground};
  color: ${props => props.theme.mainColor};
  cursor: not-allowed;
}
`

const StyledPagesInfo = styled.p`
color: ${props => props.theme.mainColor};
`

export { StyledButtonsChangingPages, StyledButton, StyledPagesInfo }
