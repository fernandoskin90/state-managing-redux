import { AppDispatch } from '@/app'
import { setResults, setStatus, Status } from '@/features'
import { getCharacters } from '@/services'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

export const useCharacters = () => {
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    const fetchCharacters = async () => {
      dispatch(setStatus(Status.LOADING))
      const { data } = await getCharacters()
      dispatch(setResults(data))
      dispatch(setStatus(Status.SUCCEEDED))
    }

    fetchCharacters()
  }, [])
}
