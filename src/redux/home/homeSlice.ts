import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface zoneArray {
  city: string
  time: string
}

interface homeState {
  name: zoneArray[]
  listTimeZone: zoneArray[]
}

const initialState: homeState = {
  name: [],
  listTimeZone: []
}

export const homeSlice = createSlice({
  name: 'homes',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<zoneArray[]>) => {
      state.name = action.payload
    },
    setAllTimeZone: (state, action: PayloadAction<zoneArray[]>) => {
      state.listTimeZone = action.payload
    }
  }
})

export default homeSlice
