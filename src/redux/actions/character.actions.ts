import {
  CharacterFetch,
  FetchCharacterFailire,
  FetchCharacterRequest,
  FetchCharacterSuccess,
  ResponseFetch,
} from '@/types'

export const fetchCharacters = (): FetchCharacterRequest => ({
  type: CharacterFetch.FETCH_CHARACTER_REQUEST,
})

export const fetchCharactersSuccess = (
  data: ResponseFetch
): FetchCharacterSuccess => ({
  type: CharacterFetch.FETCH_CHARACTER_SUCCESS,
  payload: data,
})

export const fetchCharactersFailure = (
  error: string
): FetchCharacterFailire => ({
  type: CharacterFetch.FETCH_CHARACTER_FAILURE,
  payload: { error },
})
