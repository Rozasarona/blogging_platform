import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

function Header () {
    return(
        <header className="header">
            <Link to='/' className="logo">Realworld Blog</Link>
            <div className="options">
                <Link to='/sign-in' className="signin_btn">Sign In</Link>
                <Link to='/sign-up' className="signup_btn">Sign Up</Link>
            </div>
        </header>
    );
}

export default Header;
