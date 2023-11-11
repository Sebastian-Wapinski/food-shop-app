export const findSecondFloorData = (menu, firstFloorName) => {
  return menu.menuList.find(tab => {
    return tab.name === firstFloorName
  })
}
