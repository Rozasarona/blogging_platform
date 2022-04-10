import React from 'react';
import ArticleList from '../ArticleList/ArticleList';
import Header from '../Header/Header';
import * as api from '../../conduit-api-client-sdk';
import * as constants from '../../app/constants';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import ArticleView from '../ArticleView/ArticleView';
import SignUpForm from '../SignUpForm/SignUpForm';
import SignInForm from '../SignInForm/SignInForm';
import { use } from 'marked';


class App extends React.Component {

    onCreateUser = async (user) => {
        const client = new api.UserAndAuthenticationApi(null, constants.API_BASE_PATH);
        await client.createUser({
            user: {
                username: user.userName,
                email: user.email,
                password: user.password
            }
        });
    };

    onLoginUser = async (user) => {
        const client = new api.UserAndAuthenticationApi(null, constants.API_BASE_PATH);
        await client.login({
            user: {
                email: user.email,
                password: user.password
            }
        });
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
                    <Route path="/sign-up"><SignUpForm onCreateUser={this.onCreateUser} /></Route>
                    <Route path="/sign-in"><SignInForm onLoginUser= {this.onLoginUser} /></Route>
                </Switch>
            </div>
        );
    }
}


export default App;