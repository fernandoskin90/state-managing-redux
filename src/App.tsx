import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { NavBar } from '@/Components'
import { Container } from './app.styles'

const HomePage = lazy(async () => await import('./pages/Home'))
const CharacterPage = lazy(async () => await import('./pages/CharacterPage'))

function App() {
  return (
    <Router>
      <Container>
        <Suspense fallback={<div>Loading...</div>}>
          <NavBar />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/character/:id' element={<CharacterPage />} />
          </Routes>
        </Suspense>
      </Container>
    </Router>
  )
}

export default App
