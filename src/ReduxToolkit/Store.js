import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {composeWithDevTools} from "redux-devtools-extension";
import ReducerUserAuth from "./ReducerUserAuth";
import thunk from "redux-thunk";
import {logger} from "redux-logger/src";
import ReducerUserGetByEmail from "./ReducerUserGetByEmail";
import ReducerImgur from "./ReducerImgur";
import ReducerFilter from "./ReducerFilter";


const rootReducer = combineReducers({
    userAuth: ReducerUserAuth,
    getUserInform: ReducerUserGetByEmail,
    postImgur: ReducerImgur,
    filterSlice: ReducerFilter
})

export const store = configureStore({
    reducer: rootReducer,
    devTools: composeWithDevTools,
    middleware: [thunk, logger]
})