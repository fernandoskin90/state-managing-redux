/* eslint-disable n/no-callback-literal */
/* eslint-disable @typescript-eslint/no-implied-eval */
import { ChangeEvent, FC, useState } from 'react'
import { InputAdornment } from '@material-ui/core'
import { Input, InputContainer, InputWrap } from './styles/input-search.styles'
import SearchIcon from '@mui/icons-material/Search'
import { useDispatch } from 'react-redux'
import { fetchCharacterByName } from '@/redux'

export const InputSearch: FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const dispatch = useDispatch()

  const debounce = (func: Function, timeout = 300) => {
    let timer: any
    return (...args: any[]) => {
      clearTimeout(timer)
      timer = setTimeout(() => {
        func.apply(this, args)
      }, timeout)
    }
  }
  const search = () => {
    dispatch(fetchCharacterByName(searchTerm))
  }
  const processDebounce = debounce(() => search())

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    processDebounce()
    setSearchTerm(e.target.value)
  }

  return (
    <InputContainer>
      <InputWrap>
        <Input
          value={searchTerm}
          onChange={handleOnChange}
          placeholder='Search by name ...'
          size='medium'
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </InputWrap>
    </InputContainer>
  )
}
