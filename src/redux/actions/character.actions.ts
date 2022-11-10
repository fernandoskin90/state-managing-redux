import { FetchCharacterByNameSuccess } from './../../types/action.types'
import {
  CharacterFetch,
  FetchCharacterFailire,
  FetchCharacterNameRequest,
  FetchCharacterRequest,
  FetchCharacterSuccess,
  ResponseFetch,
} from '@/types'

export const fetchCharacters = (): FetchCharacterRequest => ({
  type: CharacterFetch.FETCH_CHARACTER_REQUEST,
})

export const fetchCharacterByName = (
  searchQuery: string
): FetchCharacterNameRequest => ({
  type: CharacterFetch.FETCH_CHARACTER_BY_NAME_REQUEST,
  searchQuery,
})

export const fetchCharactersSuccess = (
  data: ResponseFetch
): FetchCharacterSuccess => ({
  type: CharacterFetch.FETCH_CHARACTER_SUCCESS,
  payload: data,
})

export const fetchCharacterByNameSuccess = (
  data: ResponseFetch
): FetchCharacterByNameSuccess => ({
  type: CharacterFetch.FETCH_CHARACTER_BY_NAME_SUCCESS,
  payload: data,
})

export const fetchCharactersFailure = (
  error: string
): FetchCharacterFailire => ({
  type: CharacterFetch.FETCH_CHARACTER_FAILURE,
  payload: { error },
})
