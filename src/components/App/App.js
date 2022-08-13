import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import ArticleList from '../ArticleList/ArticleList';
import ArticleView from '../ArticleView/ArticleView';
import Header from '../Header/Header';
import NewArticle from '../NewArticle/NewArticle';
import SignInForm from '../SignInForm/SignInForm';
import SignUpForm from '../SignUpForm/SignUpForm';

import * as api from '../../conduit-api-client-sdk';
import * as constants from '../../app/constants';
import { setUserName, setEmail, setToken } from '../../app/slices/authenticationSlice';

import './App.css';

function App () {
    const dispatch = useDispatch();
    const onCreateUser = async (user) => {
        const client = new api.UserAndAuthenticationApi(null, constants.API_BASE_PATH);
        try {
            const result = await client.createUser({
                user: {
                    username: user.userName,
                    email: user.email,
                    password: user.password
                }
            });
            dispatch(setUserName(result.user.username));
            dispatch(setEmail(result.user.email));
            dispatch(setToken(result.user.token));
        } catch (response) {
            if (response.status > 400 && response.status < 500) {
                const { errors } = await response.json();
                return errors;
            }
            console.error(response);
        }
    };

    const onLoginUser = async (user) => {
        const client = new api.UserAndAuthenticationApi(null, constants.API_BASE_PATH);
        try {
            const result = await client.login({
                user: {
                    email: user.email,
                    password: user.password
                }
            });
            dispatch(setUserName(result.user.username));
            dispatch(setEmail(result.user.email));
            dispatch(setToken(result.user.token));
        } catch (response) {
            if (response.status > 400 && response.status < 500) {
                const { errors } = await response.json();
                return errors;
            }
            console.error(response);
        }
    };

    const onCreateArticle = async (article) => {
        const client = new api.ArticlesApi(null, constants.API_BASE_PATH);
        await client.createArticle({
            artricle: {
                title: article.title,
                description: article.description,
                text: article.text,
                tags: article.tags
            }
        });
    };

    const { token } = useSelector(state => state.authentication);

    const list = (<ArticleList />);
    return (
        <div className="wrapper">
            <Header />
            <Switch>
                <Route exact path='/'>{list}</Route>
                <Route exact path='/articles'>{list}</Route>
                <Route path="/articles/:slug"><ArticleView /></Route>
                <Route path="/sign-up">
                    {token ? <Redirect to="/" /> : <SignUpForm onCreateUser={onCreateUser} />}
                </Route>
                <Route path="/sign-in">
                    {token ? <Redirect to="/" /> : <SignInForm onLoginUser={onLoginUser} />}
                </Route>
                <Route path="/"><NewArticle onCreateArticle={onCreateArticle} /></Route>
            </Switch>
        </div>
    );
}

export default App;
