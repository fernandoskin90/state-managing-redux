import { fetchCharactersFailure, fetchCharactersSuccess } from '@/redux'
import { getCharacters } from '@/services'
import { CharacterFetch } from '@/types'
import { call, put, takeEvery } from 'redux-saga/effects'

export function* getCharacter() {
  try {
    const { data } = yield call(getCharacters)
    yield put(fetchCharactersSuccess(data))
  } catch (error) {
    yield put(fetchCharactersFailure('Faild to Fetch'))
  }
  // yield put({ type: 'Fetch characters', message: 'hola' })
}

export function* whatcherCharacter() {
  yield takeEvery(CharacterFetch.FETCH_CHARACTER_REQUEST, getCharacter)
}
