import styled from 'styled-components'
import Label from '../Label/Label'
import Input from '../Input/Input'

const DefaultStyledRenderInputs = styled.div`

`

const StyledRenderInputs = styled(DefaultStyledRenderInputs)(
  props => props.style
)

const StyledInputContainer = styled.div`

`

const StyledLabel = styled(Label)`
  
`

const StyledInput = styled(Input)`

`

export { StyledRenderInputs, StyledLabel, StyledInput, StyledInputContainer }
