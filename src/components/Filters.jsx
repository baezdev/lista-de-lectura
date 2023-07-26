import { useId } from 'react'
import { useFilter } from '../hooks/useFilter'
import { getGeneres } from '../helpers/generes'

export const Filters = ({ genreLength }) => {
  const generesId = useId()
  const { setFilters, filters } = useFilter()
  const allGeneres = getGeneres()

  const handleChangeGenre = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      genre: event.target.value
    }))
  }

  return (
    <div>
      <p>Filtrar por género</p>
      <select name={generesId} id={generesId} onChange={handleChangeGenre}>
        <option value="Todos">Todos</option>
        {allGeneres.map(genre => (
          <option
            value={genre}
            key={genre}
          >
            {genre}
          </option>
        ))}
      </select>
      {filters.genre !== 'Todos' && <p>{genreLength} Libros encontrados</p>}
    </div>
  )
}
