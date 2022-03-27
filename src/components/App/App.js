import React from 'react';
import ArticleList from '../ArticleList/ArticleList';
import Header from '../Header/Header';
import * as sdk from '../../conduit-api-client-sdk';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import ArticleView from '../ArticleView/ArticleView';


class App extends React.Component {

    apiTest = async () => {
        const client = new sdk.ArticlesApi(null, "https://api.realworld.io/api");
        debugger;
        console.log(await client.getArticles());
    };

    render() {
        return (
            <div className="wrapper">
                <Header />
                <Routes>
                    <Route path='/' element={<ArticleList/>} />
                    <Route path='/articles' element={<ArticleList/>} />
                    <Route path="/articles/:slug" element={<ArticleView/>} />
                </Routes>
            </div>
        );
    }
}


export default App;