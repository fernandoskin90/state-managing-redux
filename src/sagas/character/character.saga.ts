import { getCharacters } from '@/services'
import { call, put, takeEvery } from 'redux-saga/effects'

export function* getCharacter() {
  try {
    const { data } = yield call(getCharacters)
    yield put({ type: 'Fetch characters', data })
  } catch (error) {
    yield put({ type: 'ERROR', error })
  }
  // yield put({ type: 'Fetch characters', message: 'hola' })
}

export function* whatcherCharacter() {
  yield takeEvery('CHARACTER_SUCCESS', getCharacter)
}
