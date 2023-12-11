import styled from 'styled-components'
import Button from '../Button/Button'
import Typography from '../Typography/Typography'

const DefaultStyledProfileMenuMobile = styled.div`
min-height: 100vh;
height: 100%;
overflow-y: scroll;
`

const StyledProfileMenuMobile = styled(DefaultStyledProfileMenuMobile)(
  props => props.style
)

const StyledButton = styled(Button)`
margin: 2rem 1rem;
`

const StyledMenuContainer = styled.div`

`

const StyledTitle = styled(Typography)`
margin-left: 1rem;
`

const StyledMainMenu = styled.div`
display: flex;
align-items: flex-start;
flex-direction: column;
`

const StyledName = styled(Typography)`
display: block;
padding: 0.5rem;
margin-left: 1rem;

&:hover {
  cursor: pointer;
}
`

export {
  StyledProfileMenuMobile,
  StyledButton,
  StyledMenuContainer,
  StyledTitle,
  StyledMainMenu,
  StyledName
}
