import React, { useEffect } from 'react';
import { Pagination, Alert, Spin } from 'antd';
import ArticleCard from '../ArticleCard/ArticleCard';
import './ArticleList.css';
import * as api from '../../conduit-api-client-sdk';
import { useDispatch, useSelector } from 'react-redux';
import * as constants from '../../app/constants';
import { setArticlesAndTotalCount, setCurrentPageNumber, setLoading, setAlertVisibility } from '../../app/slices/articleListSlice';
import 'antd/dist/antd.css';

function ArticleList() {
    const { currentPageNumber, articles, totalCount, loading, alertIsVisible } = useSelector((state) => state.articleList);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setLoading(true));
        const articlesApi = new api.ArticlesApi(null, constants.API_BASE_PATH);
        let triesCount = 0;
        const fetchData = async () => {
            if(triesCount >= 10) {
                dispatch(setLoading(false));
                dispatch(setAlertVisibility(true));
                return;
            }
            const result = await articlesApi.getArticles(undefined, undefined, undefined, constants.ARTICLE_LIST_PAGE_SIZE, (currentPageNumber - 1) * constants.ARTICLE_LIST_PAGE_SIZE);
            dispatch(setArticlesAndTotalCount(result));
            dispatch(setLoading(false));
        };
        const errorHandler = () => {
            triesCount++;
            fetchData().catch(errorHandler);
        };
        fetchData().catch(errorHandler);
    }, [ dispatch, currentPageNumber ]);

    const onPaginationChange = (page) => {
        dispatch(setCurrentPageNumber(page));
    }

    return(<>
        {loading && <div className='loading-indicator'><Spin /></div>}
        {alertIsVisible && <Alert type="error" message="Не удалось загрузить список статей" description="Попробуйте обновить страничку" banner />}
        <main className="main">
            <div className="articles">
                {articles.map(article => (
                    <ArticleCard
                        key={article.slug}
                        title={article.title}
                        favoritesCount={article.favoritesCount}
                        tagList={article.tagList}
                        description={article.description}
                        author={article.author}
                        createdAt={article.createdAt} 
                        slug={article.slug}
                    />))
                }
            </div>
        </main>
        <div className="paginationContainer">
        {(totalCount > constants.ARTICLE_LIST_PAGE_SIZE) && <Pagination 
            size="small"
            pageSize={constants.ARTICLE_LIST_PAGE_SIZE}
            total={totalCount}
            showSizeChanger={false}
            current={currentPageNumber}
            onChange={onPaginationChange} 
        />}
    </div>
    </>);
}

export default ArticleList;