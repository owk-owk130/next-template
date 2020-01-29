import { createSlice } from "@reduxjs/toolkit"

const slice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        increment: (state) => {
            return state + 1
        },
        decrement: (state) => {
            return state - 1
        }
    }
})

export const { increment, decrement } = slice.actions

export default slice.reducer