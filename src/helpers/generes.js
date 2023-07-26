import { library } from '../data/books.json'

export const getGeneres = () => {
  const generes = library.map(({ book }) => book.genre)
  const allGeneres = new Set(generes)
  return Array.from(allGeneres)
}
