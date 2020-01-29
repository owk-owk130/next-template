import { combineReducers } from "redux"
import { configureStore } from "@reduxjs/toolkit"

import nameReducer from "./test"
import countReducer from './counter'

const reducer = combineReducers({
    name: nameReducer,
    counter: countReducer
})

export const setupStore = () => {
    return configureStore({reducer})
}
