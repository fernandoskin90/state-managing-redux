import { ResponseFetch } from './character.types'

export enum CharacterFetch {
  FETCH_CHARACTER_REQUEST = 'FETCH_CHARACTER_REQUEST',
  FETCH_CHARACTER_SUCCESS = 'FETCH_CHARACTER_SUCCESS',
  FETCH_CHARACTER_FAILURE = 'FETCH_CHARACTER_FAILURE',
}

export interface FetchCharacterRequest {
  type: typeof CharacterFetch.FETCH_CHARACTER_REQUEST
}
export interface FetchCharacterSuccess {
  type: typeof CharacterFetch.FETCH_CHARACTER_SUCCESS
  payload: ResponseFetch
}

export interface FetchCharacterFailire {
  type: typeof CharacterFetch.FETCH_CHARACTER_FAILURE
  payload: { error: string }
}

export type CharactersActions =
  | FetchCharacterRequest
  | FetchCharacterSuccess
  | FetchCharacterFailire
