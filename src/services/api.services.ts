import { BASE_URL } from '@/constants'
import { ResponseFetch } from '@/types'
import axios, { AxiosResponse } from 'axios'

export const getCharacters = async (): Promise<
  AxiosResponse<ResponseFetch>
> => {
  return await axios.get<ResponseFetch>(`${BASE_URL}/character`, {
    headers: { 'Content-Type': 'application/json' },
  })
}
