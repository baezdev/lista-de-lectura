import { Filters } from './filters'
import { library } from '../data/books.json'
import { useReadingList } from '../hooks/useReadingList'

export const Header = ({ books }) => {
  const { readingList } = useReadingList()
  const booksAvailable = library.length - readingList.length
  return (
    <header>
      <h1>{booksAvailable} Libros disponibles</h1>
      {readingList.length > 0 &&
        <p>{readingList.length} en la lista de lectura</p>
      }
      <Filters genreLength={books.length}/>
    </header>
  )
}
