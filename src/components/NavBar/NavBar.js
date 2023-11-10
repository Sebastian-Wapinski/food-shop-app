import React from 'react'

import {
  StyledNavBar,
  StyledZeroFloorNavUl,
  StyledZeroFloorNavLi,
  StyledNavContainer,
  StyledFirstFloorNavUl,
  StyledFirstFloorNavLi,
  StyledSecondFloorNavUl
} from './NavBar.styled'

import { ref, onValue } from 'firebase/database'
import { database } from '../../firebaseConfig'
import { createNavData } from '../../helper/helper'

export const NavBar = () => {
  const [navListData, setNavListData] = React.useState(null)
  const [isMenuShow, setIsMenuShow] = React.useState(false)
  const [activeTab, setActiveTab] = React.useState('')
  const [menu, setMenu] = React.useState([])

  React.useEffect(() => {
    const navListRef = ref(database, '/navList')

    onValue(navListRef, (snapshot) => {
      const rawData = snapshot.val()
      const data = createNavData(rawData)
      setNavListData(data)
    })
  }, [])

  console.log(navListData, 'navListData')

  const searchMenuList = (e, data) => {
    const { id: onMouseElemId } = e.target

    return data.find(item => {
      return item.id === onMouseElemId
    })
  }

  const create0FloorNavList = (data) => {
    return data.map(tag => {
      const { name, id, hasSubcategory } = tag
      return (
        <StyledZeroFloorNavLi
          $isActiveTab={name === activeTab}
          id={id}
          key={id}
          onMouseEnter={hasSubcategory
            ? (e) => {
                const searchedMenuList = searchMenuList(e, navListData)
                setMenu(searchedMenuList)
                setIsMenuShow(true)
                setActiveTab(name)
              }
            : null}
          onMouseLeave={() => {
            setIsMenuShow(false)
            setActiveTab('')
          }}
        >
          {name}
        </StyledZeroFloorNavLi>
      )
    })
  }

  const create1FloorNavList = React.useCallback((menu) => {
    return menu.menuList.map(tag => {
      const { name, id, hasSubcategory } = tag
      console.log(hasSubcategory, tag, 'tag')
      return (
        <StyledFirstFloorNavLi
          id={id}
          key={id}
        >
          {name}
        </StyledFirstFloorNavLi>
      )
    })
  }, [])

  console.log(menu, 'menu')

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
              setActiveTab('')
            }}
          >
            <StyledFirstFloorNavUl>
              {
              create1FloorNavList(menu)
            }
            </StyledFirstFloorNavUl>
            <StyledSecondFloorNavUl>
              jest
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
