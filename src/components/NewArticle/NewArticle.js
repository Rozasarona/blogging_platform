import React, { useState } from "react";
import './NewArticle.css';


function NewArticle(onCreateArticle) {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [text, setText] = useState('');
    const [tags, setTags] = useState('');

    const inputHandler = setState => event => setState(event.target.value);

    const formSubmitHandler = event => {
        event.preventDefault();
        onCreateArticle && onCreateArticle({
            title,
            description,
            text,
            tags
        });
    };

    return(
        <form class = "newArticle_form" action = "url" method = "post" onSubmit={formSubmitHandler}>
                <div class="form-title">
                    <h3>Create new article</h3>
                </div>
                <input  type = "text" placeholder="Title" onInput={inputHandler(setTitle)} value={title} />
                <div class="input-title">
                    Title 
                </div>
                <input  type = "text" placeholder="Description" onInput={inputHandler(setDescription)} value={description} />
                <div class="input-title">
                    Short description
                </div>
                <input  type = "text" placeholder="Title" onInput={inputHandler(setText)} value={text} /> 
                <div class="input-title">
                    Text
                </div>
                <textarea placeholder="Text"></textarea>
                <div class="newArticle_footer">
                    <div class="input-title">
                        Tags
                    </div>
                    <div class="footer_string">
                        <input  type = "text" placeholder="Tag">
                        <a href="#" class="signup_btn">
                            Delete
                        </a> 
                    </div>
                    <div class="footer_string">
                        <input  type = "text" placeholder="Tag">                    
                        <a href="#" class="signup_btn">
                            Delete
                        </a> 
                        <a href="#" class="addTag_btn">
                            Add tag
                        </a>
                    </div>
                    <a href="#" class="create_btn">
                        Send
                    </a>
                </div>
            </form>
    );
}

export default NewArticle;