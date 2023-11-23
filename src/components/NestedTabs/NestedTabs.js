import React from 'react'
import PropTypes from 'prop-types'

import {
  StyledNavContainer,
  StyledFirstFloorNavUl,
  StyledFirstFloorNavLi,
  StyledSecondFloorNavUl,
  StyledSecondFloorNavLi,
  StyledVerticalLine,
  StyledTabTitle
} from './NestedTabs.styled'
import { findSecondFloorData } from './NestedTabsHelper'

export const NestedTabs = (props) => {
  const {
    isMenuShow,
    setIsMenuShow,
    menu,
    zeroFloorName,
    firstFloorName,
    setFirstFloorName
  } = props

  const returnNavLi = React.useCallback((ComponentsName, id, name, path, onMouseEnterCallback) => {
    return (
      <ComponentsName
        id={id}
        key={id}
        to={path}
        onMouseEnter={onMouseEnterCallback}
        onClick={() => setIsMenuShow(false)}
      >
        {name}
      </ComponentsName>
    )
  }, [setIsMenuShow])

  const create1FloorNavList = React.useCallback((menu) => {
    const firstFloorMenuList = menu.menuList
    const newPath = `${zeroFloorName}/${firstFloorName.toLowerCase()}/page/1`
    return firstFloorMenuList.map(tab => {
      const { name, id } = tab
      return (
        returnNavLi(StyledFirstFloorNavLi, id, name, newPath, () => setFirstFloorName(name))
      )
    })
  }, [firstFloorName, returnNavLi, setFirstFloorName, zeroFloorName])

  const create2FloorNavList = React.useCallback((menu) => {
    const secondFloorData = findSecondFloorData(menu, firstFloorName)
    const secondFloorMenuList = secondFloorData.menuList

    return secondFloorMenuList.map(tab => {
      const { name, id } = tab
      const newPath = `${zeroFloorName}/${firstFloorName.toLowerCase()}/${name.toLowerCase()}/page/1`
      return (
        returnNavLi(StyledSecondFloorNavLi, id, name, newPath)
      )
    })
  }, [firstFloorName, returnNavLi, zeroFloorName])

  return (
    isMenuShow ?
      <StyledNavContainer
        $isActive={true}
        onMouseEnter={() => {
          setIsMenuShow(true)
        }}
        onMouseLeave={() => {
          setIsMenuShow(false)
        }}
      >
        <StyledFirstFloorNavUl>
          {
              create1FloorNavList(menu)
            }
        </StyledFirstFloorNavUl>
        <StyledVerticalLine />
        <StyledTabTitle>
          {firstFloorName}
        </StyledTabTitle>
        <StyledSecondFloorNavUl>
          {
              create2FloorNavList(menu)
            }
        </StyledSecondFloorNavUl>
      </StyledNavContainer>
      :
      <StyledNavContainer $isActive={false}/>
  )
}

NestedTabs.propTypes = {
  isMenuShow: PropTypes.bool,
  setIsMenuShow: PropTypes.func,
  menu: PropTypes.object,
  zeroFloorName: PropTypes.string,
  firstFloorName: PropTypes.string,
  setFirstFloorName: PropTypes.func
}

export default NestedTabs
