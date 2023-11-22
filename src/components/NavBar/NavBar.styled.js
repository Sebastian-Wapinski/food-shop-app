import styled from 'styled-components'
import { responsiveSizes } from '../style/responsiveSizes'
import { NavLink } from 'react-router-dom'

const DefaultStyledNavBar = styled.div`
display: flex;
justify-content: center;
width: 100%;
background-color: ${props => props.theme.mainColor};
position: sticky;
top: 0;
min-height: 2.787rem;
z-index: 9999;
`

const StyledNavBar = styled(DefaultStyledNavBar)(
  props => props.style
)

const StyledZeroFloorNavUl = styled.ul`
list-style-type: none;
display: flex;
width: 100%;
max-width: ${responsiveSizes.pageWidth};
padding: 0 1rem;
`
const StyledZeroFloorNavLi = styled(NavLink)`
padding: 0.8rem 1rem;
transition: all 0.2s ease-in-out;
color: ${props => props.theme.firstTextColor};

&:hover {
  background-color: ${props => props.theme.firstBackground};
  color: ${props => props.theme.secondTextColor};
  cursor: pointer;
}
`

export {
  StyledNavBar,
  StyledZeroFloorNavUl,
  StyledZeroFloorNavLi
}
