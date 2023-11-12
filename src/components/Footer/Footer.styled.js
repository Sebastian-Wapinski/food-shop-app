import styled from 'styled-components'
import Typography from '../Typography/Typography'

const DefaultStyledFooter = styled.div`
width: 100%;
background-color: ${props => props.theme.mainColor};
margin-top: 2rem;
`

const StyledFooter = styled(DefaultStyledFooter)(
  props => props.style
)

const TextContainer = styled(Typography)`
display: flex;
justify-content: center;
align-items: center;
padding: 1rem 0;
`

export { StyledFooter, TextContainer }
