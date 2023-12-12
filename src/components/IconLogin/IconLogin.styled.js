import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled, { css } from 'styled-components'
import { responsiveSizes } from '../style/responsiveSizes'

const DefaultStyledIconLogin = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

${
  props => props.$menu === true && css`
  display: none;

  @media (max-width: ${responsiveSizes.mediumSize}) {
    display: flex;
  }
  `
}

&:hover {
  cursor: pointer;
}
`

const StyledIconLogin = styled(DefaultStyledIconLogin)(
  props => props.style
)

const StyledParagraph = styled.p`
color: ${props => props.theme.secondTextColor};
`

const StyledImgContainer = styled.div`
position: relative;
width: 3.125rem;
height: 3.125rem;
display: flex;
justify-content: center;
align-items: center;
`

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
color: ${props => props.theme.mainColor};
font-size: 2.5rem;

@media (max-width: ${responsiveSizes.mediumSize}) {
  font-size: 2rem;
}
`

export {
  StyledIconLogin,
  StyledImgContainer,
  StyledFontAwesomeIcon,
  StyledParagraph
}
