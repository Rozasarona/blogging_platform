import React  from "react";
import './ArticleCard.css';
import like from './like.png';

function ArticleCard({ title, favoritesCount, tagList, description, author, createdAt }) {

    return(
        <article className="articleCard">
        <div className="article_header">
            <div className="article_header-title">
                <div className="title_container">
                    <h3>{ title }</h3> 
                    <div className="likes">
                        <img src= { like } alt="like" /> <span>{ favoritesCount }</span>
                    </div>
                </div>
                <ul className="title_tags">
                    { tagList.map((tag, i) => (<li className="btn_tag" key = {i}>{ tag }</li>))}
                </ul>
            </div>
            <div className="article_header-info">
                <div className="article_header-info_content">
                    <span className="name">{ author.username }</span><br />
                    <span className="articleDate">{ new Date(createdAt).toLocaleDateString()}</span>
                </div>
                <img src= { author.image } alt="avatar" width = "46" height = "46" />
            </div> 
        </div>
        <div className="article_preamble">
            { description }
        </div>
    </article> 
    );
}


export default ArticleCard;