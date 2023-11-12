import React from 'react'

import {
  StyledNavBar,
  StyledZeroFloorNavUl,
  StyledZeroFloorNavLi
} from './NavBar.styled'

import { ref, onValue } from 'firebase/database'
import { database } from '../../firebaseConfig'
import { checkIsNameEqualHomeIfNotReturnName, createNavData, searchMenuList } from './NavBarHelper'
import NestedTabs from '../NestedTabs/NestedTabs'

export const NavBar = () => {
  const [navListData, setNavListData] = React.useState(null)
  const [isMenuShow, setIsMenuShow] = React.useState(false)
  const [menu, setMenu] = React.useState({})
  const [zeroFloorName, setZeroFloorName] = React.useState('')
  const [firstFloorName, setFirstFloorName] = React.useState('')

  React.useEffect(() => {
    const navListRef = ref(database, '/navList')

    onValue(navListRef, (snapshot) => {
      const rawData = snapshot.val()
      const data = createNavData(rawData)
      setNavListData(data)
    })
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
      null
  )
}

export default NavBar
