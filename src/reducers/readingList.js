export const INITIAL_STATE = JSON.parse(localStorage.getItem('readingList')) || []
export const ACTION_TYPES = {
  ADD_TO_READING_LIST: 'add_to_reading_list',
  REMOVE_TO_READING_LIST: 'remove_to_reading_list'
}

export const readingListReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action

  if (type === ACTION_TYPES.ADD_TO_READING_LIST) {
    const newState = [...state, payload]
    localStorage.setItem('readingList', JSON.stringify(newState))
    return newState
  }

  if (type === ACTION_TYPES.REMOVE_TO_READING_LIST) {
    const isbn = payload
    const newState = state.filter(({ ISBN }) => ISBN !== isbn)
    localStorage.setItem('readingList', JSON.stringify(newState))

    return newState
  }

  return state
}
