import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import ArticleCard from '../ArticleCard/ArticleCard';

import * as articleService from '../../services/articleService';

import './ArticleView.css';

function ArticleView() {
    const {slug} = useParams();
    const articleListState = useSelector(state => state.articleList);
    const article = articleListState.articlesBySlug[slug];
    const dispatch = useDispatch();
    useEffect(() => {
        if (!article) {
            articleService.LoadArticle(dispatch)(slug);
        }
    }, [slug]);
    return ((article &&
        <div className='main'>
            <ArticleCard
                title={article.title}
                favoritesCount={article.favoritesCount}
                tagList={article.tagList}
                description={article.description}
                author={article.author}
                createdAt={article.createdAt}
                body={article.body}
                slug={article.slug}
            />
        </div>
    ) || null);
}

export default ArticleView;