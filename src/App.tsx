import { MantineProvider } from '@mantine/core'
// import { useSelector } from 'react-redux'
import './App.css'
import { useCharacters } from '@/hooks'
import { useSelector } from 'react-redux'
import { allCharacters } from '@/features'
// import { allCharacters } from './features'

function App() {
  const data = useSelector(allCharacters)
  useCharacters()
  console.log({ data })

  // console.log({ status, info, results })
  return (
    <MantineProvider>
      <div className='App'>
        <h1>React State Managing with Redux</h1>
      </div>
    </MantineProvider>
  )
}

export default App
