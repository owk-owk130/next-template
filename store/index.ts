import { combineReducers } from "redux"
import { configureStore } from "@reduxjs/toolkit"

import nameReducer from "./test"

const reducer = combineReducers({
    name: nameReducer
})

export const setupStore = () => {
    return configureStore({reducer})
}
