import './App.css'
import { useCharacters } from '@/hooks'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux'

function App() {
  const { characters, error, loading, info } = useSelector(
    (state: RootState) => state.characters
  )
  useCharacters()

  console.log({ characters, error, loading, info })
  return (
    <div className='App'>
      <h1>React State Managing with Redux</h1>
    </div>
  )
}

export default App
