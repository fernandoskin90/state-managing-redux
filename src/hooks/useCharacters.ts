import { fetchCharacters } from '@/redux'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

export const useCharacters = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCharacters())
  }, [])
}
