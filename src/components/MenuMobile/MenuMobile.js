import React from 'react'
import PropTypes from 'prop-types'

import {
  StyledMenuMobile,
  StyledButton,
  StyledMenuContainer,
  StyledTitle,
  StyledMainMenu,
  StyledNavItem,
  StyledSubcategory,
  StyledSubcategoryName,
  StyledSubcategoryContainer,
  StyledDisplayMenuContainer,
  StyledName
} from './MenuMobile.styled'
import { checkIsNameEqualHomeIfNotReturnName, createNavData, setDataFromFirebaseDatabase } from '../../helper/helper'

export const MenuMobile = (props) => {
  const {
    setShowMenu,
    showMenu
  } = props

  const [navListData, setNavListData] = React.useState(null)

  React.useEffect(() => {
    setDataFromFirebaseDatabase('/navList', createNavData, setNavListData)
  }, [])

  const displaySubcategory = React.useCallback((hasSubcategory, menuList, parentName = null) => {
    const splitParentName = parentName.split('/')
    const createParentName = splitParentName.slice(0, -2).join('/')
    const createPath = (name) => `${createParentName}/${name.toLowerCase()}/page/1`

    return (
      hasSubcategory ?
        <StyledSubcategory>
          {
              menuList.map(item => {
                const { name, id, hasSubcategory, menuList } = item
                return (
                  <StyledSubcategoryContainer
                    key={`${id}/${name}`}
                  >
                    <StyledSubcategoryName
                      to={createPath(name)}
                      onClick={() => setShowMenu(false)}
                    >
                      <StyledName
                        variant={'body1'}
                      >
                        {name}
                      </StyledName>
                    </StyledSubcategoryName>
                    {
                        displaySubcategory(hasSubcategory, menuList, createPath(name))
                      }
                  </StyledSubcategoryContainer>
                )
              })
            }
        </StyledSubcategory>
        :
        null
    )
  }, [setShowMenu])

  const displayMenu = React.useCallback((navListData) => {
    return navListData.map(navItem => {
      const { name, id, hasSubcategory, menuList } = navItem

      return (
        <StyledDisplayMenuContainer
          key={`${id}/${name}`}
        >
          <StyledNavItem
            to={checkIsNameEqualHomeIfNotReturnName(name)}
            onClick={() => setShowMenu(false)}
          >
            <StyledName
              variant={'body1'}
            >
              {name}
            </StyledName>
          </StyledNavItem>
          {
            displaySubcategory(hasSubcategory, menuList, `${name.toLowerCase()}/page/1`)
          }
        </StyledDisplayMenuContainer>
      )
    })
  }, [displaySubcategory, setShowMenu])

  return (
    <StyledMenuMobile>
      <StyledButton
        variant={'customText'}
        onClick={() => setShowMenu(false)}
        $showMenu={showMenu}
      >
        GO BACK
      </StyledButton>
      <StyledMenuContainer>
        <StyledTitle
          variant={'h2'}
        >
          Menu:
        </StyledTitle>
        <StyledMainMenu>
          {
            navListData ?
              displayMenu(navListData)
              :
              null
            }
        </StyledMainMenu>
      </StyledMenuContainer>
    </StyledMenuMobile>
  )
}

MenuMobile.propTypes = {
  setShowMenu: PropTypes.func,
  showMenu: PropTypes.bool
}

export default MenuMobile
