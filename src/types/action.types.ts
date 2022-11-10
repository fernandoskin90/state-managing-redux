import { ResponseFetch } from './character.types'

export enum CharacterFetch {
  FETCH_CHARACTER_REQUEST = 'FETCH_CHARACTER_REQUEST',
  FETCH_CHARACTER_SUCCESS = 'FETCH_CHARACTER_SUCCESS',
  FETCH_CHARACTER_FAILURE = 'FETCH_CHARACTER_FAILURE',
  FETCH_CHARACTERS_REQUEST = 'FETCH_CHARACTERS_REQUEST',
  FETCH_CHARACTER_BY_NAME = 'FETCH_CHARACTER_BY_NAME',
  FETCH_CHARACTER_BY_NAME_REQUEST = 'FETCH_CHARACTER_BY_NAME_REQUEST',
  FETCH_CHARACTER_BY_NAME_SUCCESS = 'FETCH_CHARACTER_BY_NAME_SUCCESS',
  FETCH_CHARACTER_BY_NAME_FAILURE = 'FETCH_CHARACTER_BY_NAME_FAILURE',
}

export interface FetchCharacterRequest {
  type: typeof CharacterFetch.FETCH_CHARACTER_REQUEST
}
export interface FetchCharacterSuccess {
  type: typeof CharacterFetch.FETCH_CHARACTER_SUCCESS
  payload: ResponseFetch
}

export interface FetchCharacterByNameSuccess {
  type: typeof CharacterFetch.FETCH_CHARACTER_BY_NAME_SUCCESS
  payload: ResponseFetch
}

export interface FetchCharacterFailire {
  type: typeof CharacterFetch.FETCH_CHARACTER_FAILURE
  payload: { error: string }
}

export interface FetchCharacterByNameFailire {
  type: typeof CharacterFetch.FETCH_CHARACTER_BY_NAME_FAILURE
  payload: { error: string }
}

export interface FetchCharacterNameRequest {
  type: typeof CharacterFetch.FETCH_CHARACTER_BY_NAME_REQUEST
  searchQuery: string
}

export type CharactersActions =
  | FetchCharacterRequest
  | FetchCharacterSuccess
  | FetchCharacterFailire
  | FetchCharacterNameRequest
  | FetchCharacterByNameFailire
  | FetchCharacterByNameSuccess
