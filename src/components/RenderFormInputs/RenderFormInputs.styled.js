import styled from 'styled-components'
import Label from '../Label/Label'
import Input from '../Input/Input'

const DefaultStyledRenderFormInputs = styled.div`

`

const StyledRenderFormInputs = styled(DefaultStyledRenderFormInputs)(
  props => props.style
)

const StyledInputContainer = styled.div`

`

const StyledLabel = styled(Label)`
  
`

const StyledInput = styled(Input)`

`

export { StyledRenderFormInputs, StyledLabel, StyledInput, StyledInputContainer }
