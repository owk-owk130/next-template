import { createSlice } from "@reduxjs/toolkit"

const slice = createSlice({
    name: 'testUser',
    initialState: 'nextjs',
    reducers: {
        setName: (state, action) => {
            return Object.assign({}, state, { name: action.payload })
        },
        clearName: (state, action) => {
            return Object.assign({}, state, { name: "" })
        }
    }
})

export const { setName, clearName } = slice.actions

export default slice.reducer