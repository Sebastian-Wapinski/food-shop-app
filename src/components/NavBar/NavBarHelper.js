export const searchMenuList = (e, data) => {
  const { id: onMouseElemId } = e.target

  return data.find(item => {
    return item.id === onMouseElemId
  })
}
