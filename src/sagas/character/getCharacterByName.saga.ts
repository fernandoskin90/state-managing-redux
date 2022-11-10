import { fetchCharactersFailure, fetchCharacterByNameSuccess } from '@/redux'
import { getCharacters } from '@/services'
import { CharacterFetch } from '@/types'
import { call, put, takeLatest } from 'redux-saga/effects'

export function* getCharacterByName(action: any) {
  try {
    const { data } = yield call(getCharacters, action.searchQuery)
    yield put(fetchCharacterByNameSuccess(data))
  } catch (error) {
    yield put(fetchCharactersFailure('Faild to Fetch'))
  }
}

export function* whatcherCharacterByName() {
  yield takeLatest(
    CharacterFetch.FETCH_CHARACTER_BY_NAME_REQUEST,
    getCharacterByName
  )
}
