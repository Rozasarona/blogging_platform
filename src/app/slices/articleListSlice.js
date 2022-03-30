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
        setArticlesAndTotalCount: (state, action) => {
            state.totalCount = action.payload.articlesCount;
            state.articles = action.payload.articles;
            state.articlesBySlug = action.payload.articles.reduce((dict, article) => {
                dict[article.slug] = article;
                return dict;
            }, {});
         }
    }
});

export const { setCurrentPageNumber, setArticlesAndTotalCount } = articleListSlice.actions;

export default articleListSlice.reducer;