import React, { useEffect } from 'react';
import { Pagination } from 'antd';
import ArticleCard from '../ArticleCard/ArticleCard';
import './ArticleList.css';
import * as api from '../../conduit-api-client-sdk';
import { useDispatch, useSelector } from 'react-redux';
import * as constants from '../../app/constants';
import { setArticlesAndTotalCount, setCurrentPageNumber } from '../../app/slices/articleListSlice';
import 'antd/dist/antd.css';

function ArticleList() {
    const { currentPageNumber, articles, totalCount } = useSelector((state) => state.articleList);
    const dispatch = useDispatch();

    useEffect(() => {
        const articlesApi = new api.ArticlesApi(null, constants.API_BASE_PATH);
        const fetchData = async () => {
            const result = await articlesApi.getArticles(undefined, undefined, undefined, constants.ARTICLE_LIST_PAGE_SIZE, (currentPageNumber - 1) * constants.ARTICLE_LIST_PAGE_SIZE);
            dispatch(setArticlesAndTotalCount(result));
        };
        fetchData().catch(console.error);
    }, [ dispatch, currentPageNumber ]);

    const onPaginationChange = (page) => {
        dispatch(setCurrentPageNumber(page));
    }

    return(<>
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
        <Pagination 
            size="small"
            pageSize={constants.ARTICLE_LIST_PAGE_SIZE}
            total={totalCount}
            showSizeChanger={false}
            current={currentPageNumber}
            onChange={onPaginationChange} 
        />
    </div>
    </>);
}

export default ArticleList;