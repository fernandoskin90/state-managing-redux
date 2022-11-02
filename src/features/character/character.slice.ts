import { RootState } from '@/app'
import { ResponseFetch } from '@/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export enum Status {
  IDLE = 'idle',
  LOADING = 'loading',
  SUCCEEDED = 'succeeded',
  FAIL = 'failed',
}

interface CharacterState {
  charactersInfo: ResponseFetch
  status: Status
}

const initialState: CharacterState = {
  charactersInfo: {
    info: {
      count: 0,
      pages: 0,
      next: '',
      prev: null,
    },
    results: [],
  },
  status: Status.IDLE,
}

// export const fetchCharacters = createAsyncThunk(
//   'characters/fetchCharacters',
//   async () => {
//     const characters = await getCharacters()
//     return characters
//   }
// )

export const characterSlice = createSlice({
  name: 'characterSlice',
  initialState,
  reducers: {
    setResults: (state, action: PayloadAction<ResponseFetch>) => {
      state.charactersInfo = action.payload
    },
    setStatus: (state, action: PayloadAction<Status>) => {
      state.status = action.payload
    },
  },
  // extraReducers: {
  //   [fetchCharacters.pending.type]: (state) => {
  //     state.status = Status.LOADING
  //   },
  //   [fetchCharacters.fulfilled.type]: (state, action) => {
  //     state.status = Status.SUCCEEDED
  //     state.charactersInfo = {
  //       info: action.payload.data.info,
  //       results: action.payload.data.results,
  //     }
  //   },
  //   [fetchCharacters.rejected.type]: (state, action) => {
  //     console.log({ state, action })
  //   },
  // },
})

export const { setResults, setStatus } = characterSlice.actions

export const allCharacters = (state: RootState) => state.characters
