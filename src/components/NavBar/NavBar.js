import React from 'react'

import {
  StyledNavBar,
  StyledZeroFloorNavUl,
  StyledZeroFloorNavLi
} from './NavBar.styled'

import { searchMenuList } from './NavBarHelper'
import NestedTabs from '../NestedTabs/NestedTabs'
import { checkIsNameEqualHomeIfNotReturnName, createNavData, setDataFromFirebaseDatabase } from '../../helper/helper'

export const NavBar = () => {
  const [navListData, setNavListData] = React.useState(null)
  const [isMenuShow, setIsMenuShow] = React.useState(false)
  const [menu, setMenu] = React.useState({})
  const [zeroFloorName, setZeroFloorName] = React.useState('')
  const [firstFloorName, setFirstFloorName] = React.useState('')

  React.useEffect(() => {
    setDataFromFirebaseDatabase('/navList', createNavData, setNavListData)
  }, [])

  const onMouseEnterZeroFloorHandler = React.useCallback((e, name, menuList) => {
    const searchedMenuList = searchMenuList(e, navListData)
    setMenu(searchedMenuList)
    setIsMenuShow(true)
    setZeroFloorName(name.toLowerCase())
    const firstTabName = menuList[0].name
    setFirstFloorName(firstTabName)
  }, [navListData])

  const create0FloorNavList = React.useCallback((data) => {
    return data.map(tag => {
      const { name, id, hasSubcategory, menuList } = tag
      const onMouseEnterCallback = hasSubcategory ? (e) => onMouseEnterZeroFloorHandler(e, name, menuList) : null
      return (
        <StyledZeroFloorNavLi
          id={id}
          key={id}
          to={checkIsNameEqualHomeIfNotReturnName(name)}
          onClick={() => setIsMenuShow(false)}
          onMouseEnter={onMouseEnterCallback}
          onMouseLeave={() => setIsMenuShow(false)}
        >
          {name}
        </StyledZeroFloorNavLi>
      )
    })
  }, [onMouseEnterZeroFloorHandler])

  return (
    navListData !== null ?
      <StyledNavBar>
        <StyledZeroFloorNavUl>
          {
            create0FloorNavList(navListData)
          }
        </StyledZeroFloorNavUl>
        <NestedTabs
          isMenuShow={isMenuShow}
          setIsMenuShow={setIsMenuShow}
          menu={menu}
          zeroFloorName={zeroFloorName}
          firstFloorName={firstFloorName}
          setFirstFloorName={setFirstFloorName}
        />
      </StyledNavBar>
      :
      <StyledNavBar />
  )
}

export default NavBar
