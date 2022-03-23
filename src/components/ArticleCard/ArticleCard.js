import React  from "react";
import './ArticleCard.css';
import like from './like.png';
import avatar from './photo.png';

function ArticleCard() {

    return(
        <article className="articleCard">
        <div className="article_header">
            <div className="article_header-title">
                <div className="title_container">
                    <h3>Some article title</h3> 
                    <div className="likes">
                        <img src= { like } alt="like" /> <span>12</span>
                    </div>
                </div>
                <ul className="title_tags">
                    <li className="btn_tag">Tag1</li>
                    <li className="btn_tag">Tag2</li>
                    <li className="btn_tag">Some tag</li>
                </ul>
            </div>
            <div className="article_header-info">
                <div className="article_header-info_content">
                    <span className="name">John Doe</span><br />
                    <span className="articleDate">March 5, 2020</span>
                </div>
                <img src= { avatar } alt="avatar" />
            </div> 
        </div>
        <div className="article_preamble">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
    </article> 
    );
}


export default ArticleCard;