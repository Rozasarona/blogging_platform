import React from 'react';
import './Header.css';

function Header () {
    return(

        <header className="header">
            <a className="logo" href="#">Realworld Blog</a>
            <div className="authentication">
                <a href="#" classclassName="signin_btn">
                    Sign In 
                </a>
                <a href="#" classclassName="signup_btn">
                    Sign Up
                </a>
            </div>
        </header>
    );
}

export default Header;