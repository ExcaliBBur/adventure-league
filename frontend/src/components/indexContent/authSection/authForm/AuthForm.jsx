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

                <div className="w-[792px] text-white font-['Montserrat'] text-8xl font-bold leading-[normal] text-center p-[40px]">
                    Совкомбанк ID
                </div>

                <p styleName="text-field">
                    <label className="text-white font-['Montserrat'] text-5xl leading-[normal]" styleName="text-field__label  " htmlFor="username">
                        Введите логин или E-mail
                    </label>
                    <input className="flex-shrink-0 w-[500px] h-[5rem] rounded-[50px] bg-[#fefefe]"  id="username" type="text" name="username"
                           value={formik.values.username} onChange={formik.handleChange} />
                </p>
                <br />

                <p styleName="text-field">
                    <label className="text-white font-['Montserrat'] text-5xl leading-[normal]" styleName="text-field__label m-[100px]" htmlFor="password">
                        Введите пароль
                    </label>
                    <input className="flex-shrink-0 w-[500px] h-[5rem] rounded-[50px] bg-[#fefefe] ml-[200px]" id="password" type="text" name="password"
                           value={formik.values.password} onChange={formik.handleChange} />
                </p>


                <div styleName="enter">
                    <input className="text-black font-['Montserrat'] text-5xl font-bold leading-[normal] pl-[450px]" id="enter-check" value={'Вход'} type="button" name="newAccount"
                           checked={formik.values.newAccount} onChange={formik.handleChange} />
                </div>

                <div styleName="enter">
                    <input class="text-white text-center font-['Montserrat'] text-5xl leading-[normal] underline uppercase pl-[330px]" value={'Авторизация'} type="button" name="registerAccount"
                           checked={formik.values.newAccount} onChange={formik.handleChange} />
                </div>
            </form>
        </div>
    );
}

export default AuthForm;