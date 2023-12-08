import React from 'react'
import PropTypes from 'prop-types'

import {
  StyledNavBar,
  StyledZeroFloorNavUl,
  StyledZeroFloorNavLi
} from './NavBar.styled'

import { searchMenuList } from './NavBarHelper'
import NestedTabs from '../NestedTabs/NestedTabs'
import { checkIsNameEqualHomeIfNotReturnName } from '../../helper/helper'

export const NavBar = (props) => {
  const {
    navListData
  } = props

  const [isMenuShow, setIsMenuShow] = React.useState(false)
  const [menu, setMenu] = React.useState({})
  const [zeroFloorName, setZeroFloorName] = React.useState('')
  const [firstFloorName, setFirstFloorName] = React.useState('')

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
          data-testid={id}
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

NavBar.propTypes = {
  navListData: PropTypes.array
}

export default NavBar
