import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentPageNumber: 1,
    totalCount: 0,
    articles: [],
    articlesBySlug: {},
    loading: false,
    alertIsVisible: false
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
            }, state.articlesBySlug || {});
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setAlertVisibility: (state, action) => {
            state.alertIsVisible = action.payload;
        },
        saveArticle: (state, action) => {
            state.articlesBySlug[action.payload.slug] = action.payload;
        }
    }
});

export const { setCurrentPageNumber, setArticlesAndTotalCount, setLoading, setAlertVisibility, saveArticle } = articleListSlice.actions;

export default articleListSlice.reducer;