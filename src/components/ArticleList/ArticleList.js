import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Pagination, Alert, Spin } from 'antd';

import ArticleCard from '../ArticleCard/ArticleCard';

import * as articleService from '../../services/articleService';
import * as constants from '../../app/constants';
import { setCurrentPageNumber } from '../../app/slices/articleListSlice';

import './ArticleList.css';

function ArticleList() {
    const articleListState = useSelector(state => state.articleList);
    const { currentPageNumber, articles, totalCount, loading, alertIsVisible } = articleListState;
    const dispatch = useDispatch();

    useEffect(() => articleService.LoadArticles(dispatch, articleListState)(), [currentPageNumber]);

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
