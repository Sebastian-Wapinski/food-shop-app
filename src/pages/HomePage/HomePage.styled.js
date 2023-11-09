import styled from 'styled-components'

const DefaultStyledHomePage = styled.div`

`

const StyledHomePage = styled(DefaultStyledHomePage)(
  props => props.style
)

export { StyledHomePage }
