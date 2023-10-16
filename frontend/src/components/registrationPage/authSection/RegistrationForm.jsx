import auth_logo from "../../../image/auth_logo.svg";
import React from "react";
import {useNavigate} from "react-router-dom";

export function RegistrationForm() {
    const navigate = useNavigate();

    const navigateToMain = () => {
        navigate("/");
    }

    const navigateToPersonal = () => {
        navigate("/personal");
    }

    return (
        <div className="justify-center flex">
            <div className="ml-[50%] mr-[50%]">
                <div className="bg-[#0086FF] h-[750px]  w-[750px] rounded-2xl mt-[75px] align-middle text-center">
                    <div className="text-white font-['Montserrat'] text-[48px] font-bold leading-[normal] text-center ml-[138px] mt-[100px] flex mr-[138px] justify-center">
                        <h1 className="mt-10 cursor-pointer" onClick={navigateToMain}>
                            Совкомбанк ID
                        </h1>
                        <img className="w-[50px] ml-[10px] mt-10 cursor-pointer" src={auth_logo} onClick={navigateToMain} />
                    </div>
                    <div className="justify-center flex-shrink-0 mt-10">
                        <h1 className="text-white font-['Montserrat'] text-[24px] leading-[normal]">
                            Введите имя
                        </h1>
                        <input
                            className="flex-shrink-0 w-[500px] h-[2.5rem] rounded-[50px] bg-[#fefefe] pl-5 font-['Montserrat']"
                            id="username"
                            type="text" name="username"/>
                    </div>
                    <div className="justify-center flex-shrink-0 mt-[30px]">
                        <h1 className="text-white font-['Montserrat'] text-[24px] leading-[normal]">
                            Введите Фамилию
                        </h1>
                        <input
                            className="flex-shrink-0 w-[500px] h-[2.5rem] rounded-[50px] bg-[#fefefe] pl-5 font-['Montserrat']"
                            id="username"
                            type="text" name="username"/>
                    </div>
                    <div className="justify-center flex-shrink-0 mt-[30px]">
                        <h1 className="text-white font-['Montserrat'] text-[24px] leading-[normal]">
                            Введите Логин или E-mail
                        </h1>
                        <input
                            className="flex-shrink-0 w-[500px] h-[2.5rem] rounded-[50px] bg-[#fefefe] pl-5 font-['Montserrat']"
                            id="username"
                            type="text" name="username"/>
                    </div>
                    <div className="justify-center flex-shrink-0 mt-[30px]">
                        <h1 className="text-white font-['Montserrat'] text-[24px] leading-[normal]">
                            Введите Пароль
                        </h1>
                        <input
                            className="flex-shrink-0 w-[500px] h-[2.5rem] rounded-[50px] bg-[#fefefe] pl-5 font-['Montserrat']"
                            id="username"
                            type="password" name="username"/>
                    </div>
                    <div className="justify-center flex-shrink-0 mt-[30px]">
                        <h1 className="text-white font-['Montserrat'] text-[24px] leading-[normal]">
                            Повторите Пароль
                        </h1>
                        <input
                            className="flex-shrink-0 w-[500px] h-[2.5rem] rounded-[50px] bg-[#fefefe] pl-5 font-['Montserrat']"
                            id="username"
                            type="password" name="username"/>
                    </div>
                    <div className="justify-center flex-shrink-0">
                        <button className="w-[300px] h-[50px] bg-[#FFFFFF] rounded-3xl mt-[50px] hover:scale-125 duration-300" onClick={navigateToPersonal}>
                            <h1 className="text-black font-bold font-['Montserrat'] text-[24px] leading-[normal]">
                                Регистрация
                            </h1>
                        </button>
                    </div>
                </div>
                <div>
                    <h3 className="text-white font-['Montserrat'] text-[24px] leading-[normal] mt-[100px]">
                        © 2004-2023, ПАО «Совкомбанк» Все права защищены Генеральная лицензия Банка России №963 от 5
                        декабря 2014 г.
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default RegistrationForm;