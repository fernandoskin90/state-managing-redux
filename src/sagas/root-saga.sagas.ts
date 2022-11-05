import { all } from 'redux-saga/effects'
import { whatcherCharacter } from './character'

export function* rootSaga() {
  yield all([whatcherCharacter()])
}
