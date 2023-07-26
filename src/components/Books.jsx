import { useReadingList } from '../hooks/useReadingList'

export const Books = ({ books }) => {
  const { addToReadingList, readingList } = useReadingList()
  const checkInReadingList = (book) => readingList.some(({ ISBN }) => ISBN === book.ISBN)

  return (
    <ul className='books'>
      {books.map(({ book }) => {
        const isInReadingList = checkInReadingList(book)

        return (
          <li key={book.ISBN}>
            <button
              className={`${!isInReadingList ? 'book' : 'book disabled'}`}
              onClick={() => addToReadingList(book)}
              disabled={isInReadingList}
            >
              <img src={book.cover} alt={book.title} />
            </button>
          </li>
        )
      })}
    </ul>
  )
}
