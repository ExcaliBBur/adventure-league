import React from 'react';
import { useFormik } from 'formik';

const AuthForm = (props) => {
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
            newAccount: false
        },
        onSubmit: values => {
            if (values.newAccount) {
                props.register(values.username, values.password);
            } else {
                props.login(values.username, values.password);
            }
        },
        validateOnChange: false,
        validateOnBlur: false
    });

    return (
        <div styleName="form-container">
            <form onSubmit={formik.handleSubmit}>
                <p styleName="text-field">
                    <label className="flex-shrink-0 w-[1143px] h-[7.125rem] rounded-[50px] bg-[#fefefe]" styleName="text-field__label" htmlFor="username">
                        Введите логин или E-mail
                    </label>
                    <input className="flex-shrink-0 w-[500px] h-[5rem] rounded-[50px] bg-[#fefefe]"  id="username" type="text" name="username"
                           value={formik.values.username} onChange={formik.handleChange} />
                </p>
                <br />

                <p styleName="text-field">
                    <label className="flex-shrink-0 w-[1143px] h-[7.125rem] rounded-[50px] bg-[#fefefe]" styleName="text-field__label" htmlFor="password">
                        Введите пароль
                    </label>
                    <input className="flex-shrink-0 w-[1143px] h-[7.125rem] rounded-[50px] bg-[#fefefe]" id="password" type="text" name="password"
                           value={formik.values.password} onChange={formik.handleChange} />
                </p>


                <div styleName="enter">
                    <input className="text-black font-['Montserrat'] text-5xl font-bold leading-[normal]" id="enter-check" value={'Вход'} type="button" name="newAccount"
                           checked={formik.values.newAccount} onChange={formik.handleChange} />
                </div>

                <div styleName="enter">
                    <input class="text-white text-center font-['Montserrat'] text-5xl leading-[normal] underline uppercase" value={'Авторизация'} type="button" name="registerAccount"
                           checked={formik.values.newAccount} onChange={formik.handleChange} />
                </div>
            </form>
        </div>
    );
}

export default AuthForm;