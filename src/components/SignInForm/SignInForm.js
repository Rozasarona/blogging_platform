import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import * as helpers from '../../utils/helpers';

import './SignInForm.css';

function SignInForm({ onLoginUser }) {
    const fields = {
        email: [
            "email", {
                required: helpers.ComposeRequiredErrorMessage("Email address"),
                pattern: {
                    value: helpers.EmailRegex,
                    message: "Email address is invalid"
                }
            }
        ],
        password: [
            "password", {
                required: helpers.ComposeRequiredErrorMessage("Password")
            }
        ],
    };

    const { register, handleSubmit, formState: { errors }, setError } = useForm();

    const onSubmit = async data => {
        const errors = await onLoginUser(data);
        if(errors) {
            if(errors.email) {
                setError(fields.email[0], { type: "custom", message: `Email ${errors.email}` }, { shouldFocus: true });
            } else if(errors.password) {
                setError(fields.password[0], { type: "custom", message: `Password ${errors.password}` }, { shouldFocus: true });
            } else {
                console.error(errors);
                setCommonErrors(Object.keys(errors).map(key => `${key} ${errors[key]}`));
            }
        } else {
            setCommonErrors([]);
        }
    };

    const [commonErrors, setCommonErrors] = useState([]);

    const getClass = propertyName => errors[propertyName] ? "error" : undefined;
    const errorMessage = propertyName => {
        const propError = errors[propertyName]
        if (propError) {
            return (<span className="error-message">{propError.message}</span>)
        }
    };

    return (
        <form className = "signin_form" action = "url" method = "post" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-title">
                <h3>Sign in</h3>
            </div>
            {!!commonErrors.length && (<div className="validation-summary"><ul>{commonErrors.map(message => (<li>{message}</li>))}</ul></div>)}
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
                type = "password"
                placeholder="Password" />
            <button href="#" className="create_btn" type="submit">
                Login
            </button>
            <div className="form_footer">
                <span>Already have an account?</span>
                <a href="/"> Sign in</a>
            </div>
        </form>);
}

export default SignInForm;
