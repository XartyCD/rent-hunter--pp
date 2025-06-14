// src/features/counter/counterSlice.ts
import { createSlice } from "@reduxjs/toolkit"

interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Экспортируем экшены
export const { increment, decrement, incrementByAmount } = counterSlice.actions

// Экспортируем редьюсер
export default counterSlice.reducer
