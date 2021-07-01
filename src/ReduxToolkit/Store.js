import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {composeWithDevTools} from "redux-devtools-extension";
import ReducerUserAuth from "./ReducerUserAuth";
import thunk from "redux-thunk";
import {logger} from "redux-logger/src";
import ReducerUserGetByEmail from "./ReducerUserGetByEmail";


const rootReducer = combineReducers({
    userAuth: ReducerUserAuth,
    getUserInform: ReducerUserGetByEmail
})

export const store = configureStore({
    reducer: rootReducer,
    devTools: composeWithDevTools,
    middleware: [thunk, logger]
})