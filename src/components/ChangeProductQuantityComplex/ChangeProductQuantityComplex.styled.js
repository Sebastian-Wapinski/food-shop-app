import styled from 'styled-components'

const DefaultStyledChangeProductQuantityComplex = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

const StyledChangeProductQuantityComplex = styled(DefaultStyledChangeProductQuantityComplex)(
  props => props.style
)

export { StyledChangeProductQuantityComplex }
