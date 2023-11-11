import styled from 'styled-components'

const DefaultStyledHomePageContent = styled.div`

`

const StyledHomePageContent = styled(DefaultStyledHomePageContent)(
  props => props.style
)

const StyledImg = styled.div`
    background-image: url(./vegetables.jpg);
    /* background-repeat: no-repeat;
    background-size: cover;
    background-position: center; */
    width: 100px;
    height: 100px;
`

export { StyledHomePageContent, StyledImg }
