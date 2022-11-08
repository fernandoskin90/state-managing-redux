import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useCharacters } from '@/hooks'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux'
import { NavBar } from '@/Components'
import { Container } from './app.styles'

const HomePage = lazy(async () => await import('./pages/Home'))
const CharacterPage = lazy(async () => await import('./pages/CharacterPage'))

function App() {
  const { characters, error, loading, info } = useSelector(
    (state: RootState) => state.characters
  )
  useCharacters()

  console.log({ characters, error, loading, info })
  return (
    <Router>
      <Container>
        <Suspense fallback={<div>Loading...</div>}>
          <NavBar />
          <section>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/character/:id' element={<CharacterPage />} />
            </Routes>
          </section>
        </Suspense>
      </Container>
    </Router>
  )
}

export default App
