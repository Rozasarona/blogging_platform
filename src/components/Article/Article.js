import React from 'react';
import '../ArticleCard/ArticleCard.css';


function Article() {

    return(
        <article class="article">
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
                    <img src= { photo } alt="photo" />
                </div> 
            </div>
            <div className="article_preamble">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
            <div class="article_content">
                <h2>Est Ampyciden pater patent</h2>
                <h3>Amor saxa inpiger</h3>
                <p>Lorem markdownum Stygias neque is referam fudi, breve per. Et Achaica tamen: nescia ista occupat, illum se ad potest humum et.</p>

                <h3>Qua deos has fontibus</h3>
                <p>Recens nec ferro responsaque dedere armenti opes momorderat pisce, vitataque et fugisse. Et iamque incipiens, qua huius suo omnes ne pendentia citus pedum.</p>

                <h3>Quamvis pronuba</h3>
                <p>Ulli labore facta. Io cervis non nosterque nullae, vides: aethere Delphice subit, tamen Romane ob cubilia Rhodopen calentes librata! Nihil populorum flava, inrita? Sit hic nunc, hoc formae Esse illo? Umeris eram similis, crudelem de est relicto ingemuit finiat Pelia uno cernunt Venus draconem, hic, Methymnaeae.
                    <ol>
                        <li> Clamoribus haesit tenentem iube Haec munera</li>
                        <li> Vincla venae</li>
                        <li> Paris includere etiam tamen</li>
                        <li> Superi te putria imagine Deianira</li>
                        <li> Tremore hoste Esse sed perstat capillis siqua</li>
                    </ol>
                </p>
            </div>
        </article>
    );
}


export default Article;