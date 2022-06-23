import React from 'react';
import { useForm } from 'react-hook-form';

import './SignInForm.css';

function SignInForm({ onLoginUser }) {
    const requiredErrorMessage = attribute => `${attribute} must be specified`;
    const fields = {
        userName: [
            "userName", {
                required: requiredErrorMessage("Username"),
                minLength: {
                    value: 3,
                    message: "Username must be minimum of 3 characters"
                },
                maxLength: {
                    value: 20,
                    message: "Username must be maximum of 20 characters"
                }
            }
        ],
        email: [
            "email", {
                required: requiredErrorMessage("Email address"),
                pattern: {
                    value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: "Email address is invalid"
                }
            }
        ],
        password: [
            "password", {
                required: requiredErrorMessage("Password"),
                minLength: {
                    value: 6,
                    message: "Password must be minimum of 6 characters"
                },
                maxLength: {
                    value: 40,
                    message: "Password must be maximum of 40 characters"
                }
            }
        ],
        repeatPassword: [
            "repeatPassword", {
                validate: value => {
                    const values = getValues();
                    return values.password === value || "'Password' and 'Repeat Password' must match";
                }
            }
        ],
        agreement: [
            "agreement", {
                required: "You should give us your agreement for processing you personal information"
            }
        ]
    };

    const { register, handleSubmit, formState: { errors }, getValues, setError } = useForm();
    const onSubmit = async data => {
        const errors = await onLoginUser(data);
        if(errors) {
            if(errors.username) {
                setError(fields.userName[0], { type: "custom", message: errors.username }, { shouldFocus: true });
            } else if(errors.email) {
                setError(fields.email[0], { type: "custom", message: errors.email }, { shouldFocus: true });
            } else if(errors.password) {
                setError(fields.password[0], { type: "custom", message: errors.password }, { shouldFocus: true });
            } else {
                console.error(errors);
            }
        }
    };

    const getClass = propertyName => errors[propertyName] ? "error" : undefined;
    const errorMessage = propertyName => {
        const propError = errors[propertyName]
        if (propError) {
            return (<span className="error-message">{propError.message}</span>)
        }
    };

    return (
        <form className = "login_form" action = "url" method = "post" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-title">
                <h2>Sign In</h2>
            </div>
            <div className="input-title">
                Email address
            </div>
            <input
                {...register(...fields.email)}
                className={getClass(...fields.email)}
                placeholder="Email address" />
            {errorMessage(...fields.email)}
            <div className="input-title">
                Password
            </div>
            <input
                {...register(...fields.password)}
                className={getClass(...fields.password)}
                type="password"
                placeholder="Password" />
            {errorMessage(...fields.password)}
            <button className="login_btn" type="submit">
                Login
            </button>
            <div className="form_footer">
                <span>Don't have an account? </span>
                <a href="/">Sign up</a>
            </div>
        </form>);
}

export default SignInForm;
