import { ref, onValue } from 'firebase/database'
import { database } from '../firebaseConfig'

export const setDataFromFirebaseDatabase = (path, dataCreator, dataSetter) => {
  const databaseRef = ref(database, path)

  onValue(databaseRef, (snapshot) => {
    const rawData = snapshot.val()
    const data = dataCreator(rawData)
    dataSetter(data)
  })
}

export const checkIsNameEqualHomeIfNotReturnName = (name) => {
  if (name.toLowerCase() === 'home') return '/'
  if (name.toLowerCase() === 'products') return '/products/page/1'
  return name.toLowerCase()
}

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
