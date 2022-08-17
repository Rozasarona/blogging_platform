import React from 'react';

import './HeaderLoginUser.css';
import avatar from './avatar.png'
import { ClearUserInfo } from '../../utils/helpers';

function HeaderLoginUser () {
    const logout = () => {
        ClearUserInfo();
    }
    return (
        <div className="options">
            <a href="/" className="create-article_btn">
                Create article
            </a>
            <span className="name">John Doe</span>
            <div className="photo">
                <img src={avatar} width="46" height="46" alt="" />
            </div>
            <a href="/" className="logout_btn" onClick={logout}>
                Log Out
            </a>
        </div>
    );
}

export default HeaderLoginUser;
