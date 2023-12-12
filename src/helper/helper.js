import { ref, onValue } from 'firebase/database'
import { database } from '../firebaseConfig'

export const setDataFromFirebaseDatabase = (path, dataCreator, dataSetter, setReduxState, link, navigate) => (dispatch, getState) => {
  const databaseRef = ref(database, path)

  return onValue(databaseRef, (snapshot) => {
    const rawData = snapshot.val()
    if (rawData === null) return navigate('*')
    const data = dataCreator(rawData)
    dataSetter(data)
    dispatch(setReduxState(data, link))
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

export const createBasicData = (rawData) => {
  const array = Object.entries(rawData)
  return array.map(item => {
    const key = item[0]
    const value = item[1]

    return {
      ...value,
      orderId: key
    }
  })
}

export const checkIsLinkVisited = (visitedLinks, firebaseData, dataName, setData) => {
  const isThisLinkVisited = visitedLinks.find(visitedLink => visitedLink === dataName)

  if (isThisLinkVisited) {
    setData(firebaseData[dataName])
    return true
  }

  return false
}
