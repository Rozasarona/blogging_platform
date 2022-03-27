import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header () {
    return(

        <header className="header">
            <Link to='/' className="logo">Realworld Blog</Link>
            <div className="authentication">
                <a href="#" className="signin_btn">
                    Sign In 
                </a>
                <a href="#" className="signup_btn">
                    Sign Up
                </a>
            </div>
        </header>
    );
}

export default Header;