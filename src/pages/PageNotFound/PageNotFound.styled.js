import styled from 'styled-components'
import Button from '../../components/Button/Button'

const DefaultStyledPageNotFound = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
height: 100vh;
`

const StyledPageNotFound = styled(DefaultStyledPageNotFound)(
  props => props.style
)

const StyledParagraph = styled.p`
font-size: 2rem;
color: ${props => props.theme.primaryTextColor};
`

const StyledButton = styled(Button)`
margin: 0.5rem 0;
padding: 0.8rem 4rem;
align-self: center;

@media (max-width: 10rem) {
  position: relative;
  top: 0;
  left: 0;
  padding: 0.8rem 4rem;
  margin: 1rem 0;
  font-weight: 600;
  font-size: 0.8rem;
}
`

export { StyledPageNotFound, StyledParagraph, StyledButton }
