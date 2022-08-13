import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import HeaderLoginUser from '../HeaderLoginUser/HeaderLoginUser';

import './Header.css';

function Header () {
    const { token } = useSelector(state => state.authentication);
    const loggedIn = !!token;

    return(
        <header className="header">
            <Link to='/' className="logo">Realworld Blog</Link>
            {loggedIn
                ? <HeaderLoginUser />
                : (<div className="options">
                    <Link to='/sign-in' className="signin_btn">Sign In</Link>
                    <Link to='/sign-up' className="signup_btn">Sign Up</Link>
                </div>)
            }
        </header>
    );
}

export default Header;
