import { createContext, useState } from 'react'

export const FiltersContext = createContext()

export const FiltersProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    genre: 'Todos'
  })

  return (
    <FiltersContext.Provider value={{
      filters,
      setFilters
    }}>
      {children}
    </FiltersContext.Provider>
  )
}
