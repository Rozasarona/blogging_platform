import React  from "react";
import { Link } from "react-router-dom";

import { format } from 'date-fns';
import { marked } from 'marked';

import './ArticleCard.css';
import like from './like.png';

function ArticleCard({ title, favoritesCount, tagList, description, author, createdAt, body, slug }) {
    const createdAtDate = new Date(createdAt);

    return(
        <article className="articleCard">
        <div className="article_header">
            <div className="article_header-title">
                <div className="title_container">
                    <h3><Link to={`/articles/${slug}`}>{title}</Link></h3>
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
                    <span className="articleDate">{ format(createdAtDate, 'MMMM d, yyyy')}</span>
                </div>
                <img src= { author.image } alt="avatar" width = "46" height = "46" />
            </div>
        </div>
        <div className="article_preamble">
            { description }
        </div>
        {body && <div className="article_content" dangerouslySetInnerHTML={{__html: marked.parse(body)}}></div>}
    </article>
    );
}

export default ArticleCard;
