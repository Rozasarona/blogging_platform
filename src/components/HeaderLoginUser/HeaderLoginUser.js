import React from 'react';
import './HeaderLoginUser.css';
import { Link } from 'react-router-dom';


function HeaderLoginUser () {

    return(

        <div className="options">
            <a href="#" class="create-article_btn">
                Create article
            </a>
            <span class="name">John Doe</span>
            <div class="photo">
                <img src="./photo.png">
            </div>
            <a href="#" class="logout_btn">
                Log Out
            </a>
        </div>
    );
}

export default HeaderLoginUser;      