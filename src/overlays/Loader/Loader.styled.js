import styled from 'styled-components'

const DefaultStyledLoader = styled.div`
position: fixed;
top: 0;
left: 0;
z-index: 999999;
display: flex;
justify-content: center;
align-items: center;
background-color: rgba(0, 0, 0, 0.4);
width: 100%;
height: 100%;
`

const StyledLoader = styled(DefaultStyledLoader)(
  props => props.style
)

export { StyledLoader }
