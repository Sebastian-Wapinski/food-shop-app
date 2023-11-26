import styled from 'styled-components'

const DefaultStyledIcons = styled.div`
position: relative;
display: flex;
justify-content: space-around;
width: 15rem;
`

const StyledIcons = styled(DefaultStyledIcons)(
  props => props.style
)

const StyledIconContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

const StyledImg = styled.img`

`

const StyledParagraph = styled.p`
color: ${props => props.theme.secondTextColor};
`

export { StyledIcons, StyledIconContainer, StyledImg, StyledParagraph }
