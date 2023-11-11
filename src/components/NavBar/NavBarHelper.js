export const createNavData = (rawData) => {
  const array = Object.entries(rawData)
  return array.map(item => {
    const key = item[0]
    const value = item[1]
    const { hasSubcategory, menuList } = value

    if (hasSubcategory === true && menuList) {
      const subcategoryNavData = createNavData(menuList)
      return {
        ...value,
        id: key,
        menuList: subcategoryNavData
      }
    }

    return {
      ...value,
      id: key
    }
  })
}

export const searchMenuList = (e, data) => {
  const { id: onMouseElemId } = e.target

  return data.find(item => {
    return item.id === onMouseElemId
  })
}

export const checkIsNameEqualHomeIfNotReturnName = (name) => {
  if (name.toLowerCase() === 'home') return '/'
  return name.toLowerCase()
}
