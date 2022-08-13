import { configureStore } from "@reduxjs/toolkit";
import articleListSlice from "./slices/articleListSlice";
import authenticationSlice from "./slices/authenticationSlice";

export const store = configureStore({
    reducer: {
        articleList: articleListSlice,
        authentication: authenticationSlice
    },
});