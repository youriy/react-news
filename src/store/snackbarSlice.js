import {createSlice} from "@reduxjs/toolkit";

const snackbarSlice = createSlice({
    name: "snackbar",
    initialState: {
        message: null,
        status: null,
        open: false,
    },
    reducers: {
        snackbarClose(state) {
            state.open = false;
        },
        snackbarShow(state, action) {
            state.status = action.payload.status;
            state.message = action.payload.message;
            state.open = true;
        }
    }
});

export default snackbarSlice.reducer
export const {snackbarShow, snackbarClose} = snackbarSlice.actions
