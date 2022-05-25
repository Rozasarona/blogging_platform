import React, { useState } from 'react'; 
import './SignUpForm.css';


function SignUpForm({ onCreateUser }) {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [agreement, setAgreement] = useState(false);

    const inputHandler = setState => event => setState(event.target.value);

    const formSubmitHandler = event => {
        event.preventDefault();
        onCreateUser && onCreateUser({
            userName,
            email,
            password
        });
    };

    return (
        <form className = "sign_form" action = "url" method = "post" onSubmit={formSubmitHandler}>
            <div className="form-title">
                <h3>Create new account</h3>
            </div>
            <div className="input-title">
                Username
            </div>
            <input type = "text" placeholder="Username" onInput={inputHandler(setUserName)} value={userName} />
            <div className="input-title">
                Email address
            </div>
            <input type = "email" placeholder="Email address" onInput={inputHandler(setEmail)} value={email} />
            <div className="input-title">
                Password
            </div>
            <input type = "password" placeholder="Password" onInput={inputHandler(setPassword)} value={password} />
            <div className="input-title">
                Repeat password
            </div>
            <input type = "password" placeholder="Password" onInput={inputHandler(setRepeatPassword)} value={repeatPassword} />
            <div className="band"></div>
            <div className="agreement">                
                <input type="checkbox" checked={agreement} onChange={event => setAgreement(event.target.checked)} />
                <label>I agree to the processing of my personal information</label>                
            </div>
            <button href="#" className="create_btn" type="submit">
                Create
            </button>
            <div className="form_footer">
                <span>Already have an account?</span>
                <a href="#"> Sign in</a>
            </div>
        </form>);
}

export default SignUpForm;
