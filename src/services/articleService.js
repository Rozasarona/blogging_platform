import * as api from '../conduit-api-client-sdk';
import * as constants from '../app/constants';
import {
    setAlertVisibility,
    setArticlesAndTotalCount,
    setLoading,
    saveArticle
} from '../app/slices/articleListSlice';
import withRetry from '../utils/retryDecorator';

const articlesApi = new api.ArticlesApi(null, constants.API_BASE_PATH);

export const LoadArticles = (dispatch, model) => (pageSize = constants.ARTICLE_LIST_PAGE_SIZE) => {
    dispatch(setLoading(true));
    withErrorHandling(dispatch)(() => GetArticlesAsync(model.currentPageNumber, pageSize))
        .then(result => dispatch(setArticlesAndTotalCount(result)))
        .finally(() => dispatch(setLoading(false)));
}

export const LoadArticle = dispatch => slug => {
    dispatch(setLoading(true));
    withErrorHandling(dispatch)(() => GetArticleBySlugAsync(slug))
        .then(result => dispatch(saveArticle(result.article)))
        .finally(() => dispatch(setLoading(false)));
}

const GetArticlesAsync = (pageNumber, pageSize) => withRetry(() => getArticlesAsync(pageNumber, pageSize));

const GetArticleBySlugAsync = slug => withRetry(() => getArticleBySlugAsync(slug));

const getArticlesAsync = (pageNumber, pageSize) =>
    articlesApi.getArticles(null, null, null, pageSize, (pageNumber - 1) * pageSize);

const getArticleBySlugAsync = slug => articlesApi.getArticle(slug);

const withErrorHandling = dispatch => fn => fn()
    .then(result => {
        dispatch(setAlertVisibility(false));
        return result;
    })
    .catch(err => {
        console.error(err);
        dispatch(setAlertVisibility(true));
    });
