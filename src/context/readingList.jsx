import { createContext, useReducer } from 'react'
import { ACTION_TYPES, INITIAL_STATE, readingListReducer } from '../reducers/readingList'

export const ReadingListContext = createContext()

export const ReadingListProvider = ({ children }) => {
  const [readingList, dispatch] = useReducer(readingListReducer, INITIAL_STATE)

  const addToReadingList = (book) => dispatch({
    type: ACTION_TYPES.ADD_TO_READING_LIST,
    payload: book
  })

  const removeToReadingList = (isbn) => dispatch({
    type: ACTION_TYPES.REMOVE_TO_READING_LIST,
    payload: isbn
  })

  return (
    <ReadingListContext.Provider value={{
      readingList,
      addToReadingList,
      removeToReadingList
    }}>
      {children}
    </ReadingListContext.Provider>
  )
}
