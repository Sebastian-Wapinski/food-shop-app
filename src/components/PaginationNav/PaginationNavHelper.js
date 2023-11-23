const setForThreePages = (pageNumber, currentPageNumber, pages) => {
  return (
    pageNumber === 1 ||
    pageNumber === pages ||
    pageNumber === currentPageNumber ||
    pageNumber === currentPageNumber + 1 ||
    pageNumber === currentPageNumber - 1 ||
    pageNumber === currentPageNumber + 2 ||
    pageNumber === currentPageNumber - 2 ||
    pageNumber === currentPageNumber + 3 ||
    pageNumber === currentPageNumber - 3
  )
}

const setForTwoPages = (pageNumber, currentPageNumber, pages) => {
  return (
    pageNumber === 1 ||
    pageNumber === pages ||
    pageNumber === currentPageNumber ||
    pageNumber === currentPageNumber + 1 ||
    pageNumber === currentPageNumber - 1 ||
    pageNumber === currentPageNumber + 2 ||
    pageNumber === currentPageNumber - 2
  )
}

const setForOnePageAndAnother = (pageNumber, currentPageNumber, pages) => {
  return (
    pageNumber === 1 ||
    pageNumber === pages ||
    pageNumber === currentPageNumber ||
    pageNumber === currentPageNumber + 1 ||
    pageNumber === currentPageNumber - 1
  )
}

export const setRenderPagesNumbersDependsOnPageNumber = (pageNumber, currentPageNumber, pages) => {
  if (currentPageNumber === 1 || currentPageNumber === pages) {
    return (
      setForThreePages(pageNumber, currentPageNumber, pages)
    )
  }

  if (currentPageNumber === 2 || currentPageNumber === (pages - 1)) {
    return (
      setForTwoPages(pageNumber, currentPageNumber, pages)
    )
  }

  return (
    setForOnePageAndAnother(pageNumber, currentPageNumber, pages)
  )
}

export const setActiveValue = (currentPageNumber, index) => {
  if (currentPageNumber === (index + 1)) {
    return true
  } else {
    return false
  }
}

export const calculatePagesAmount = (length, pageLimit) => {
  return Math.ceil((isNaN(length) ? 0 : length) / pageLimit)
}
