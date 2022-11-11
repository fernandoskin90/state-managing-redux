import { ResponseFetch } from './character.types'
import { LoadingStatus } from './loading.types'

export interface CharacterInitialState {
  error: string | null
  info: ResponseFetch['info']
  characters: ResponseFetch['results']
  loading: LoadingStatus
}
