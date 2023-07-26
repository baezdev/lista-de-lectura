import { useContext } from 'react'
import { FiltersContext } from '../context/filters'

export const useFilter = () => {
  const { filters, setFilters } = useContext(FiltersContext)

  const filteredBooks = (books) => {
    return books.filter(({ book }) => {
      return filters.genre === 'Todos' || book.genre === filters.genre
    })
  }

  return {
    filteredBooks,
    setFilters,
    filters
  }
}
