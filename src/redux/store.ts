import { configureStore } from '@reduxjs/toolkit'
import homeReducer from './home/homeSlice'

const store = configureStore({ reducer: { homes: homeReducer.reducer } })

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export default store
