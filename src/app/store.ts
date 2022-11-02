import { characterSlice } from '@/features'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    characters: characterSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
