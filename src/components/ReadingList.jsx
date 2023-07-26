import { useState } from 'react'
import { ReadIcon } from './Icons'
import { useReadingList } from '../hooks/useReadingList'

export const ReadingList = () => {
  const { readingList, removeToReadingList } = useReadingList()
  const [isOpenReadingList, setIsOpenReadingList] = useState(false)

  return (
    <>
      <button
        className='reading__list-button'
        aria-label='Lista de lectura'
        onClick={() => setIsOpenReadingList(!isOpenReadingList)}
      >
        {!isOpenReadingList ? <ReadIcon /> : '❌'}
      </button>
      <aside className='reading__list-container' style={{
        display: isOpenReadingList ? 'block' : 'none'
      }}>
        <h2>Lista de lectura</h2>
        {readingList.length === 0 && <span>No hay libros agregados</span>}
        <ul className='reading__list'>
          {readingList.map((book) => {
            return (
              <li
                key={book.ISBN}
              >
                <img src={book.cover} alt={book.title} />
                <button onClick={() => removeToReadingList(book.ISBN)}>❌</button>
              </li>
            )
          })}
        </ul>
      </aside>
    </>
  )
}
