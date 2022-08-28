import {combineReducers, configureStore } from "@reduxjs/toolkit";
import newsSlice from "./newsSlice";
import snackbarSlice from "./snackbarSlice";

const rootReducer = combineReducers({
    news: newsSlice,
    snackbar: snackbarSlice
});

export const store = configureStore({
    reducer: rootReducer,
});
