import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userName: '',
    email: '',
    token: null
};

export const authenticationSlice = createSlice({
    name: 'authentication',
    initialState,
    reducers: {
        setUserName: (state, action) => {
            state.userName = action.payload;
        },
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setToken: (state, action) => {
            state.token = action.payload;
        },
    }
});

export const { setUserName, setEmail, setToken } = authenticationSlice.actions;

export default authenticationSlice.reducer;
