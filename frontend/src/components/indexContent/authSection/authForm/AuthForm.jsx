import React from 'react';
import {useFormik} from 'formik';
import auth_logo from "../../../../image/auth_logo.svg";


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
                               styleName="text-field__label  " htmlFor="username">
                            Введите логин или E-mail
                        </label>
                    </p>
                    <input className="flex-shrink-0 w-[500px] h-[2.5rem] rounded-[50px] bg-[#fefefe]" id="username"
                           type="text" name="username"
                           value={formik.values.username} onChange={formik.handleChange}/>
                </div>
                <div className="ml-[138px] mr-[138px] mt-[25px]">
                    <p styleName="text-field">
                        <label className="text-white font-['Montserrat'] text-[24px] leading-[normal] ml-[25px]"
                               styleName="text-field__label m-[100px]" htmlFor="password">
                            Введите пароль
                        </label>
                    </p>
                    <input className="flex-shrink-0 w-[500px] h-[2.5rem] rounded-[50px] bg-[#fefefe] ml-[10px]"
                           id="password" type="text" name="password"
                           value={formik.values.password} onChange={formik.handleChange}/>
                </div>




                <div className="">
                    <input className="text-black font-['Montserrat'] text-5xl font-bold leading-[normal] ml-auto mr-auto w-[750px] mt-[25px]"
                           id="enter-check" value={'Вход'} type="button" name="newAccount"
                           checked={formik.values.newAccount} onChange={formik.handleChange}/>
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