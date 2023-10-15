import React from 'react';
import AuthFormContainer from './authForm/AuthForm';

const AuthSection = (props) => {
    return (
        <section styleName="section" className="content-section_auth">
            <h2 className="theme section-header">
                <span className="section-header__text_auth">
                  Авторизация
                </span>
            </h2>
            <AuthFormContainer/>
        </section>
    );
}

export default AuthSection;