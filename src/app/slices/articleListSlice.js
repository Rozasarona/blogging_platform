import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentPageNumber: 1,
    articles: []
};

export const articleListSlice = createSlice({
    name: 'articleList',
    initialState,
    reducers: {
        setCurrentPageNumber: (state, action) => {
            state.currentPageNumber = action.payload;
        },
        setArticles: (state, action) => {
           state.articles = [...action.payload];
        }
    }
});

export const { setCurrentPageNumber, setArticles } = articleListSlice.actions;

export default articleListSlice.reducer;