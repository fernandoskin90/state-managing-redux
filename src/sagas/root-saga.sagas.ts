import { all } from 'redux-saga/effects'
import { whatcherCharacter, whatcherCharacterByName } from './character'

export function* rootSaga() {
  yield all([whatcherCharacter(), whatcherCharacterByName()])
}
