import React from 'react';
import ArticleList from '../ArticleList/ArticleList';
import Header from '../Header/Header';
import * as sdk from '../../conduit-api-client-sdk';
import './App.css';


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
                <button onClick={this.apiTest}>Тык!</button>
                <ArticleList />
            </div>
        );
    }
}


export default App;