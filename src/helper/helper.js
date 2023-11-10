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
