import React, { useEffect } from 'react';
import { Pagination } from 'antd';
import ArticleCard from '../ArticleCard/ArticleCard';
import './ArticleList.css';
import * as api from '../../conduit-api-client-sdk';
import { useDispatch, useSelector } from 'react-redux';
import { setArticles } from '../../app/slices/articleListSlice';

function ArticleList() {
    const { currentPageNumber, articles } = useSelector((state) => state.articleList);
    const dispatch = useDispatch();

    useEffect(() => {
        const articlesApi = new api.ArticlesApi(null, 'https://kata.academy:8021/api');
        const fetchData = async () => {
            const result = await articlesApi.getArticles(undefined, undefined, undefined, 5, (currentPageNumber - 1) * 5);
            dispatch(setArticles(result.articles));
        };
        fetchData().catch(console.error);
    }, [ dispatch, currentPageNumber ]);

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
                    />))
                }
            </div>
        </main>
        <div className="paginationContainer">
        <Pagination />
    </div>
    </>);
}

export default ArticleList;