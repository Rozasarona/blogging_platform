import { configureStore } from "@reduxjs/toolkit";
import articleListSlice from "./slices/articleListSlice";

export const store = configureStore({
    reducer: {
        articleList: articleListSlice
    },
});