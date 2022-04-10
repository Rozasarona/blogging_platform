import React, { useState } from 'react';
import './SignInForm.css';

function SignInForm({ onLoginUser }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const inputHandler = setState => event => setState(event.target.value);

    const formSubmitHandler = event => {
        event.preventDefault();
        onLoginUser && onLoginUser({
            email,
            password
        });
    };

    return (
        <form className = "sign_form" action = "url" method = "post" onSubmit={formSubmitHandler}>
            <div className="form-title">
                <h3>Sign in</h3>
            </div>
            <div className="input-title">
                Email address
            </div>
            <input type = "email" placeholder="Email address" onInput={inputHandler(setEmail)} value={email} />
            <div className="input-title">
                Password
            </div>
            <input type = "password" placeholder="Password" onInput={inputHandler(setPassword)} value={password} />
            <button href="#" className="create_btn" type="submit">
                Login
            </button>
            <div className="form_footer">
                <span>Already have an account?</span>
                <a href="#">Sign in</a>
            </div>
        </form>);
}

export default SignInForm;

