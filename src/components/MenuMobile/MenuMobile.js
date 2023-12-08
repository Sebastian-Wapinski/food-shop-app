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
import { checkIsLinkVisited, checkIsNameEqualHomeIfNotReturnName, createNavData, setDataFromFirebaseDatabase } from '../../helper/helper'
import { useDispatch, useSelector } from 'react-redux'
import { actionAddData } from '../../modules/CacheFirebaseData/CacheFirebaseData.actions'

export const MenuMobile = (props) => {
  const {
    setShowMenu,
    showMenu
  } = props

  const [navListData, setNavListData] = React.useState(null)
  const dispatch = useDispatch()

  const { visitedLinks, firebaseData } = useSelector(state => state.cacheFirebaseData)
  React.useEffect(() => {
    const isVisited = checkIsLinkVisited(visitedLinks, firebaseData, '/navList', setNavListData)
    if (isVisited) return
    dispatch(setDataFromFirebaseDatabase('/navList', createNavData, setNavListData, actionAddData, '/navList'))
  }, [dispatch, firebaseData, visitedLinks])

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
