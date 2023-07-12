import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface homeState {
  name: string
}

const initialState: homeState = {
  name: '-'
}

export const homeSlice = createSlice({
  name: 'homes',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    }
  }
})

export default homeSlice
