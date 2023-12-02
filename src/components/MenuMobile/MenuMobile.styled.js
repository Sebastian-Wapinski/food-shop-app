import styled from 'styled-components'
import Button from '../Button/Button'
import { NavLink } from 'react-router-dom'
import Typography from '../Typography/Typography'

const DefaultStyledMenuMobile = styled.div`
min-height: 100vh;
height: 100%;
overflow-y: scroll;
`

const StyledMenuMobile = styled(DefaultStyledMenuMobile)(
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

const StyledNavItem = styled(NavLink)`

`

const StyledSubcategory = styled.div`
display: flex;
align-items: flex-start;
flex-direction: column;
margin-left: 1rem;
`

const StyledSubcategoryName = styled(NavLink)`

`

const StyledSubcategoryContainer = styled.div`
padding: 0.5rem 0;
margin-left: 1rem;
`

const StyledDisplayMenuContainer = styled.div`
padding: 0.5rem 0;
margin-left: 1rem;
`

const StyledName = styled(Typography)`

`

export {
  StyledMenuMobile,
  StyledButton,
  StyledMenuContainer,
  StyledTitle,
  StyledMainMenu,
  StyledNavItem,
  StyledSubcategory,
  StyledSubcategoryName,
  StyledSubcategoryContainer,
  StyledDisplayMenuContainer,
  StyledName
}
