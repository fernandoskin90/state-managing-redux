import { BASE_URL } from '@/constants'
import { ResponseFetch } from '@/types'
import axios, { AxiosResponse } from 'axios'
export const getCharacters = async (
  searcQuery?: string
): Promise<AxiosResponse<ResponseFetch>> => {
  const url = searcQuery
    ? `${BASE_URL}/character/?name=${searcQuery.toLowerCase()}`
    : `${BASE_URL}/character`

  return await axios.get<ResponseFetch>(url)
}
