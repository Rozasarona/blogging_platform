import React from 'react';
import './Header.css';

function Header () {
    return(

        <header className="header">
            <div className="app_title">Realworld Blog</div>
            <div className="sign_btns">
                <a href="#" classclassName="btn">
                    Sign In 
                </a>
                <a href="#" classclassName="btn">
                    Sing Up
                </a>
            </div>
        </header>
    );
}

export default Header;