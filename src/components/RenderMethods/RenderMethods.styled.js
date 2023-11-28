import styled from 'styled-components'

const DefaultStyledRenderMethods = styled.div`

`

const StyledRenderMethods = styled(DefaultStyledRenderMethods)(
  props => props.style
)

const RadioContainer = styled.div`

`

const StyledInput = styled.input`

`

const StyledLabel = styled.label`

`
export {
  StyledRenderMethods,
  RadioContainer,
  StyledInput,
  StyledLabel
}
