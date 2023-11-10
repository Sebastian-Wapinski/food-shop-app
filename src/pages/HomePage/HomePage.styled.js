import styled from 'styled-components'

const DefaultStyledHomePage = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100%;
`

const StyledHomePage = styled(DefaultStyledHomePage)(
  props => props.style
)

export { StyledHomePage }
