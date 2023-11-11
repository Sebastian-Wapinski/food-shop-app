/* eslint-disable no-unused-vars */
import React from 'react'

import {
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
} from './NavBar.styled'

import { ref, onValue } from 'firebase/database'
import { database } from '../../firebaseConfig'
import { checkIsNameEqualHomeIfNotReturnName, createNavData, searchMenuList } from './NavBarHelper'

export const NavBar = () => {
  const [navListData, setNavListData] = React.useState(null)
  const [isMenuShow, setIsMenuShow] = React.useState(false)
  const [menu, setMenu] = React.useState([])
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

  const create0FloorNavList = React.useCallback((data) => {
    return data.map(tag => {
      const { name, id, hasSubcategory, menuList } = tag

      return (
        <StyledZeroFloorNavLi
          id={id}
          key={id}
          to={checkIsNameEqualHomeIfNotReturnName(name)}
          onMouseEnter={hasSubcategory
            ? (e) => {
                const searchedMenuList = searchMenuList(e, navListData)
                setMenu(searchedMenuList)
                setIsMenuShow(true)

                setZeroFloorName(name.toLowerCase())

                const firstTabName = menuList[0].name
                setFirstFloorName(firstTabName)
              }
            : null}
          onMouseLeave={() => {
            setIsMenuShow(false)
          }}
        >
          {name}
        </StyledZeroFloorNavLi>
      )
    })
  }, [navListData])

  const create1FloorNavList = React.useCallback((menu) => {
    return menu.menuList.map(tab => {
      const { name, id } = tab
      return (
        <StyledFirstFloorNavLi
          id={id}
          key={id}
          to={`${zeroFloorName}/${firstFloorName.toLowerCase()}`}
          onMouseEnter={() => setFirstFloorName(name)}
        >
          {name}
        </StyledFirstFloorNavLi>
      )
    })
  }, [firstFloorName, zeroFloorName])

  const create2FloorNavList = React.useCallback((menu) => {
    const secondFloorData = menu.menuList.find(tab => {
      return tab.name === firstFloorName
    })

    const secondFloorMenuList = secondFloorData.menuList

    return secondFloorMenuList.map(tab => {
      const { name, id } = tab
      return (
        <StyledSecondFloorNavLi
          id={id}
          key={id}
          to={`${zeroFloorName}/${firstFloorName.toLowerCase()}/${name.toLowerCase()}`}
        >
          {name}
        </StyledSecondFloorNavLi>
      )
    })
  }, [firstFloorName, zeroFloorName])

  return (
    navListData !== null ?
      <StyledNavBar>
        <StyledZeroFloorNavUl>
          {
            create0FloorNavList(navListData)
          }
        </StyledZeroFloorNavUl>
        {
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
        }
      </StyledNavBar>
      :
      null
  )
}

export default NavBar
