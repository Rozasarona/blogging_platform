import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ArticleCard from '../ArticleCard/ArticleCard';
import './ArticleView.css';


function ArticleView() {
    const {slug} = useParams();
    const article = useSelector(state => state.articleList.articlesBySlug[slug]);
    return ((article && <ArticleCard
        title={article.title}
        favoritesCount={article.favoritesCount}
        tagList={article.tagList}
        description={article.description}
        author={article.author}
        createdAt={article.createdAt}
        body={article.body}
        slug={article.slug}
    />) || null);
}

export default ArticleView;