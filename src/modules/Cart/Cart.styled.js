import styled from 'styled-components'

const DefaultStyledCart = styled.div`

`

const StyledCart = styled(DefaultStyledCart)(
  props => props.style
)

export { StyledCart }
