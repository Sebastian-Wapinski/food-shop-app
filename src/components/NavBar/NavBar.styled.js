import styled, { css } from 'styled-components'
import { responsiveSizes } from '../style/responsiveSizes'
import { NavLink } from 'react-router-dom'

const DefaultStyledNavBar = styled.div`
display: flex;
justify-content: center;
width: 100%;
background-color: ${props => props.theme.mainColor};
position: relative;
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
font-size: 1rem;
transition: all 0.2s ease-in-out;
color: ${props => props.theme.firstTextColor};

&:hover {
  background-color: ${props => props.theme.firstBackground};
  color: ${props => props.theme.secondTextColor};
  cursor: pointer;
}
`

const StyledNavContainer = styled.div`
transition: all 0.2s ease-in-out;
height: 0;
position: absolute;
top: 100%;
left: 0;
width: 100%;

${
  props => props.$isActive && css`
  height: 20rem;
  box-shadow: 0px 20px 30px -20px ${props => props.theme.mainColor};
  display: grid;
  justify-content: center;
  grid-template-columns: 20% 1% 79%;
  grid-template-rows: 20% 80%;
  grid-template-areas: 
  "StyledFirstFloorNavUlArea StyledVerticalLineArea StyledTabTitleArea"
  "StyledFirstFloorNavUlArea StyledVerticalLineArea StyledSecondFloorNavUlArea";
  `
}
`

const StyledFirstFloorNavUl = styled.ul`
display: grid;
grid-area: StyledFirstFloorNavUlArea;
grid-template-columns: 1fr;
grid-template-rows: 3rem;
padding: 1rem;
`

const StyledFirstFloorNavLi = styled(NavLink)`
list-style-type: none;
display: grid;
align-self: start;
padding: 1rem 2rem;
width: 100%;
cursor: pointer;
transition: all 0.2s ease-in-out;
position: relative;
color: ${props => props.theme.secondTextColor};

&:hover{
  color: ${props => props.theme.thirdTextColor};
  &::after {
    content: ">";
    position: absolute;
    top: 50%;
    right: 1rem;
    transform: translateY(-50%);
    font-size: 1.3rem;
  }
}
`

const StyledSecondFloorNavUl = styled.ul`
list-style-type: none;
display: grid;
grid-area: StyledSecondFloorNavUlArea;
grid-template-columns: repeat(4, 1fr);
grid-template-rows: repeat(4, 1fr);
grid-auto-flow: column;
padding: 2rem 2rem;
gap: 0.5rem;
`

const StyledSecondFloorNavLi = styled(NavLink)`
display: grid;
padding: 1rem 3rem 1rem 0;
cursor: pointer;
color: ${props => props.theme.secondTextColor};
transition: all 0.2s ease-in-out;

&:hover{
  color: ${props => props.theme.thirdTextColor};
}
`

const StyledTabTitle = styled.div`
display: grid;
grid-area: StyledTabTitleArea;
align-self: flex-start;
padding: 1rem 2rem;
margin: 1rem 0;
width: 90%;
font-size: 1.5rem;
border-bottom: 1px solid ${props => props.theme.mainColor};
color: ${props => props.theme.secondTextColor};
`

const StyledVerticalLine = styled.div`
display: grid;
grid-area: StyledVerticalLineArea;
border-left: 1px solid ${props => props.theme.mainColor};
margin: 1rem 0;
`

export {
  StyledNavBar,
  StyledZeroFloorNavUl,
  StyledZeroFloorNavLi,
  StyledNavContainer,
  StyledFirstFloorNavUl,
  StyledFirstFloorNavLi,
  StyledSecondFloorNavUl,
  StyledSecondFloorNavLi,
  StyledVerticalLine,
  StyledTabTitle
}
