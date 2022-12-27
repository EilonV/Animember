import { configureStore } from '@reduxjs/toolkit'
import animeReducer from '../features/anime/animeSlice'

export const store = configureStore({
  reducer: {
    anime: animeReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})