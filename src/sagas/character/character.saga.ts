import { fetchCharactersFailure, fetchCharactersSuccess } from '@/redux'
import { getCharacters } from '@/services'
import { CharacterFetch } from '@/types'
import { call, put, takeLatest } from 'redux-saga/effects'

export function* getCharacter(action: any) {
  try {
    const { data } = yield call(getCharacters, '', action.urlRequest)
    yield put(fetchCharactersSuccess(data))
  } catch (error) {
    yield put(fetchCharactersFailure('Faild to Fetch'))
  }
}

export function* whatcherCharacter() {
  yield takeLatest(CharacterFetch.FETCH_CHARACTER_REQUEST, getCharacter)
}
