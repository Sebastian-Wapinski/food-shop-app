import styled from 'styled-components'
// import Input from '../Input/Input'
// import Label from '../Label/Label'

const DefaultStyledRenderMethods = styled.div`

`

const StyledRenderMethods = styled(DefaultStyledRenderMethods)(
  props => props.style
)

const RadioContainer = styled.div`

`

const StyledInput = styled.input`

`

const StyledLabel = styled.p`

`
export {
  StyledRenderMethods,
  RadioContainer,
  StyledInput,
  StyledLabel
}
