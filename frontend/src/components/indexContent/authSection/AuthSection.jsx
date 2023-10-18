import React from 'react';
import AuthFormContainer from './authForm/AuthForm';

const AuthSection = (props) => {
    return (
        <section className="content-section_auth rounded-[15px]">
            <AuthFormContainer />
        </section>
    );
}

export default AuthSection;