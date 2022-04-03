import React from 'react';
import ArticleList from '../ArticleList/ArticleList';
import Header from '../Header/Header';
import * as sdk from '../../conduit-api-client-sdk';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import ArticleView from '../ArticleView/ArticleView';


class App extends React.Component {

    apiTest = async () => {
        const client = new sdk.ArticlesApi(null, "https://api.realworld.io/api");
        debugger;
        console.log(await client.getArticles());
    };

    render() {
        const list = (<ArticleList />);
        return (
            <div className="wrapper">
                <Header />
                <Switch>
                    <Route exact path='/'>{list}</Route>
                    <Route exact path='/articles'>{list}</Route>
                    <Route path="/articles/:slug"><ArticleView /></Route>
                </Switch>
            </div>
        );
    }
}


export default App;