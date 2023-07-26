import { library } from './data/books.json'
import { useFilter } from './hooks/useFilter'
import { ReadingListProvider } from './context/readingList'
import { ReadingList } from './components/ReadingList'
import { Books } from './components/Books'
import { Header } from './components/Header'

function App () {
  const { filteredBooks } = useFilter()
  const booksFiltered = filteredBooks(library)

  return (
    <ReadingListProvider>
      <main className='container'>
        <Header books={booksFiltered} />
        <Books books={booksFiltered} />
        <ReadingList />
      </main>
    </ReadingListProvider>
  )
}

export default App
