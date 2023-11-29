import styled from 'styled-components'
import Input from '../Input/Input'
import Label from '../Label/Label'
import Typography from '../Typography/Typography'

const DefaultStyledRenderMethods = styled.div`
padding: 1rem;
`

const StyledRenderMethods = styled(DefaultStyledRenderMethods)(
  props => props.style
)

const RadioContainer = styled.div`
margin-top: 1rem;
`

const StyledInput = styled(Input)`
`

const StyledLabel = styled(Label)`
margin: 1rem;
`

const StyledErrorsMessage = styled(Typography)`
display: block;
width: 100%;
padding: 0.5rem 0;
`

export {
  StyledRenderMethods,
  RadioContainer,
  StyledInput,
  StyledLabel,
  StyledErrorsMessage
}
