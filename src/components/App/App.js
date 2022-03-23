import React from 'react';
import ArticleList from '../ArticleList/ArticleList';
import Header from '../Header/Header';
import './App.css';

class App extends React.Component {

    render() {
        return (
            <div className="wrapper">
                <Header />
                <ArticleList />
            </div>
        );
    }
}


export default App;