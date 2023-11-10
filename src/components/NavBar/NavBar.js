import React from 'react'

import { StyledNavBar, StyledNavUl, StyledNavLi } from './NavBar.styled'
import { ref, onValue } from 'firebase/database'
import { database } from '../../firebaseConfig'
import { createNavData } from '../../helper/helper'

export const NavBar = () => {
  const [navListData, setNavListData] = React.useState(null)

  React.useEffect(() => {
    const navListRef = ref(database, '/navList')

    onValue(navListRef, (snapshot) => {
      const rawData = snapshot.val()
      const data = createNavData(rawData)
      setNavListData(data)
    })
  }, [])

  console.log(navListData, 'navListData')

  const createNavList = (data, floorNumber) => {
    return data.map(tag => {
      const { name, id, hasSubcategory, menuList } = tag

      if (hasSubcategory === true && menuList) {
        return (
          <StyledNavLi
            $floor={`${floorNumber}Floor`}
            key={id}
            onClick={() => console.log('jest')}
          >
            {name}
            <StyledNavUl
              $floorUl={`${floorNumber}Floor`}
            >
              {createNavList(menuList, (floorNumber + 1))}
            </StyledNavUl>
          </StyledNavLi>
        )
      }

      return (
        <StyledNavLi
          $floor={`${floorNumber}Floor`}
          key={id}
        >
          {name}
        </StyledNavLi>
      )
    })
  }

  return (
    navListData !== null ?
      <StyledNavBar>
        <StyledNavUl>
          {
            createNavList(navListData, 0)
          }
        </StyledNavUl>
      </StyledNavBar>
      :
      null
  )
}

export default NavBar
