import {
  CharacterFetch,
  CharacterInitialState,
  CharactersActions,
  LoadingStatus,
} from '@/types'

const initialState: CharacterInitialState = {
  error: null,
  loading: LoadingStatus.IDLE,
  info: {},
  characters: [],
}

export const characterReducer = (
  state = initialState,
  action: CharactersActions
) => {
  switch (action.type) {
    case CharacterFetch.FETCH_CHARACTER_REQUEST:
      return {
        ...state,
        loading: LoadingStatus.LOADING,
      }
    case CharacterFetch.FETCH_CHARACTER_SUCCESS:
      return {
        ...state,
        loading: LoadingStatus.SUCCEEDED,
        info: action.payload.info,
        characters: action.payload.results,
      }

    case CharacterFetch.FETCH_CHARACTER_FAILURE:
      return {
        ...state,
        loading: LoadingStatus.FAIL,
        error: action.payload.error,
      }

    default:
      return state
  }
}
