import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentPageNumber: 1,
    totalCount: 0,
    articles: [],
    articlesBySlug: {}
};

export const articleListSlice = createSlice({
    name: 'articleList',
    initialState,
    reducers: {
        setCurrentPageNumber: (state, action) => {
            state.currentPageNumber = action.payload;
        },
        setArticles: (state, action) => {
            state.articles = action.payload;
            state.articlesBySlug = action.payload.reduce((dict, article) => {
                dict[article.slug] = article;
                return dict;
            }, {});
         }
    }
});

export const { setCurrentPageNumber, setArticlesAndTotalCount } = articleListSlice.actions;

export default articleListSlice.reducer;