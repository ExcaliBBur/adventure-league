import React from 'react';
import {useFormik} from 'formik';
import auth_logo from "../../../../image/auth_logo.svg";

const validate = values => {
    const errors = {};
    if (!values.username) {
        errors.username = 'Поле обязательное для заполнения!';
    } else if (values.username.length > 15) {
        errors.username = 'Должно быть меньше 15 символов';
    }

    if (!values.password) {
        errors.password = 'Поле обязательное для заполнения!';
    } else if (values.password.length > 20) {
        errors.password = 'Должно быть меньше 20 символов';
    }

    return errors;
};

const AuthForm = (props) => {
    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        }
    });

    return (
        <div className="w-[750px] mb-[125px]">
            <form onSubmit={formik.handleSubmit}>
                <div className="flex m-auto justify-center align-middle text-center">
                    <div className="text-white font-['Montserrat'] text-[48px] font-bold leading-[normal] text-center ml-[138px] mt-[100px] flex mr-[138px]">
                        Совкомбанк ID
                        <img className="w-[50px] ml-[10px]" src={auth_logo}/>
                    </div>
                </div>
                <div className="ml-[138px] mr-[138px] mt-[25px]">
                    <p styleName="text-field">
                        <label className="text-white font-['Montserrat'] text-[24px] leading-[normal] ml-[50px]"
                               htmlFor="username">
                            Введите логин или E-mail
                        </label>
                    </p>
                    <input className="flex-shrink-0 w-[500px] h-[2.5rem] rounded-[50px] bg-[#fefefe]" id="username"
                           type="text" name="username"
                           value={formik.values.username} onChange={formik.handleChange}/>
                    {formik.errors.username ? <div>{formik.errors.username}</div> : null}
                </div>

                <div className="ml-[138px] mr-[138px] mt-[25px]">
                    <p styleName="text-field">
                        <label className="text-white font-['Montserrat'] text-[24px] leading-[normal] ml-[25px]"
                               htmlFor="password">
                            Введите пароль
                        </label>
                    </p>
                    <input className="flex-shrink-0 w-[500px] h-[2.5rem] rounded-[50px] bg-[#fefefe] ml-[10px]"
                           id="password" type="text" name="password"
                           value={formik.values.password} onChange={formik.handleChange}/>
                    {formik.errors.password ? <div>{formik.errors.password}</div> : null}
                </div>


                <div>
                    <input className="text-black font-['Montserrat'] text-5xl font-bold leading-[normal] ml-auto mr-auto w-[750px] mt-[25px]"
                           id="enter-check" value={'Вход'} type="submit" name="newAccount"/>
                </div>

                <div className="enter">
                    <input
                        class="text-white text-center font-['Montserrat'] text-5xl leading-[normal] underline uppercase ml-auto mr-auto w-[750px] mt-[25px] mb-[25px]"
                        value={'Регистрация'} type="button" name="registerAccount"
                        checked={formik.values.newAccount} onChange={formik.handleChange}/>
                </div>
            </form>
        </div>
    );
}

export default AuthForm;