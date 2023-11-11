import React from 'react'

import {
  StyledNavBar,
  StyledZeroFloorNavUl,
  StyledZeroFloorNavLi,
  StyledNavContainer,
  StyledFirstFloorNavUl,
  StyledFirstFloorNavLi,
  StyledSecondFloorNavUl,
  StyledSecondFloorNavLi
} from './NavBar.styled'

import { ref, onValue } from 'firebase/database'
import { database } from '../../firebaseConfig'
import { createNavData } from '../../helper/helper'

export const NavBar = () => {
  const [navListData, setNavListData] = React.useState(null)
  const [isMenuShow, setIsMenuShow] = React.useState(false)
  const [menu, setMenu] = React.useState([])
  const [firstFloorName, setFirstFloorName] = React.useState('')

  React.useEffect(() => {
    const navListRef = ref(database, '/navList')

    onValue(navListRef, (snapshot) => {
      const rawData = snapshot.val()
      const data = createNavData(rawData)
      setNavListData(data)
    })
  }, [])

  const searchMenuList = (e, data) => {
    const { id: onMouseElemId } = e.target

    return data.find(item => {
      return item.id === onMouseElemId
    })
  }

  const create0FloorNavList = (data) => {
    return data.map(tag => {
      const { name, id, hasSubcategory, menuList } = tag
      return (
        <StyledZeroFloorNavLi
          id={id}
          key={id}
          onMouseEnter={hasSubcategory
            ? (e) => {
                const searchedMenuList = searchMenuList(e, navListData)
                setMenu(searchedMenuList)
                setIsMenuShow(true)

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
  }

  const create1FloorNavList = React.useCallback((menu) => {
    return menu.menuList.map(tab => {
      const { name, id } = tab
      return (
        <StyledFirstFloorNavLi
          id={id}
          key={id}
          onMouseEnter={() => setFirstFloorName(name)}
        >
          {name}
        </StyledFirstFloorNavLi>
      )
    })
  }, [])

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
        >
          {name}
        </StyledSecondFloorNavLi>
      )
    })
  }, [firstFloorName])

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
            onMouseEnter={(e) => {
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
