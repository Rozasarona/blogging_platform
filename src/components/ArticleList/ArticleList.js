import React from 'react';
import { Pagination } from 'antd';
import ArticleCard from '../ArticleCard/ArticleCard';
import './ArticleList.css';

function ArticleList() {

    return(<>
        <main className="main">
            <div className="articles">
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
            </div>
        </main>
        <div className="paginationContainer">
        <Pagination />
    </div>
    </>);
}

export default ArticleList;