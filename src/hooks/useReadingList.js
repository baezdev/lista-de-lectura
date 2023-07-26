import { useContext } from 'react'
import { ReadingListContext } from '../context/readingList'

export const useReadingList = () => {
  const readingList = useContext(ReadingListContext)

  if (readingList === undefined) {
    throw new Error('La lista de lectura no se puede usar')
  }

  return readingList
}
