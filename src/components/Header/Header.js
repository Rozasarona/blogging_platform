import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header () {
    return(

        <header className="header">
            <Link to='/' className="logo">Realworld Blog</Link>
            <div className="options">
                <a href="://localhost:3000" className="signin_btn">
                    Sign In
                </a>
                {/* <a href="://localhost:3000" className="signup_btn">Sign Up</a> */}
                <Link to='/sign-up' className="signup_btn">Sign Up</Link>
            </div>
        </header>
    );
}

export default Header;