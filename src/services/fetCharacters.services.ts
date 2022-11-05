import { BASE_URL } from '@/constants'
import { ResponseFetch } from '@/types'
import axios, { AxiosResponse } from 'axios'

type Query = Record<string, string>

export const getCharacters = async (
  query?: Query
): Promise<AxiosResponse<ResponseFetch>> => {
  return await axios.get<ResponseFetch>(`${BASE_URL}/character`)
}
