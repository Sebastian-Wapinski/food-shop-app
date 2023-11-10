import styled, { css } from 'styled-components'
import { responsiveSizes } from '../style/responsiveSizes'

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
const StyledZeroFloorNavLi = styled.li`
padding: 0.8rem 1rem;
font-size: 1rem;
transition: all 0.2s ease-in-out;

&:hover {
  background-color: ${props => props.theme.firstBackground};
  cursor: pointer;
}

${
  props => props.$isActiveTab && css`
  background-color: ${props => props.theme.firstBackground};
  `
}
`

const StyledNavContainer = styled.div`
transition: all 0.4s ease-in-out;
min-height: 0;
position: absolute;
top: 100%;
left: 0;
width: 100%;

${
  props => props.$isActive && css`
  min-height: 20rem;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  box-shadow: 0px 20px 40px -5px ${props => props.theme.mainColor};
  display: flex;
  justify-content: center;
  `
}
`

const StyledFirstFloorNavUl = styled.ul`
display: flex;
justify-content: flex-start;
align-items: flex-start;
flex-direction: column;
flex-basis: 20%;
`

const StyledFirstFloorNavLi = styled.li`
list-style-type: none;
padding: 1rem 2rem;
width: 100%;
cursor: pointer;
transition: all 0.2s ease-in-out;

&:hover{
  background-color: ${props => props.theme.mainColor};
}
`

const StyledSecondFloorNavUl = styled.ul`
display: flex;
flex-basis: 80%;
`

export {
  StyledNavBar,
  StyledZeroFloorNavUl,
  StyledZeroFloorNavLi,
  StyledNavContainer,
  StyledFirstFloorNavUl,
  StyledFirstFloorNavLi,
  StyledSecondFloorNavUl
}
