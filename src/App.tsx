import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'

function App() {
  const dispatch = useDispatch()
  const { data } = useSelector((state: any) => state.test)
  useEffect(() => {
    dispatch({ type: 'CHARACTER_SUCCESS' })
  }, [])
  return (
    <div className='App'>
      <h1>React State Managing with Redux</h1>
      {JSON.stringify(data, null, 2)}
    </div>
  )
}

export default App
