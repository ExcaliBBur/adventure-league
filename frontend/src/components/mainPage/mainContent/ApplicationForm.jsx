import React from "react";

export function ApplicationForm() {
    return (
        <div className="hidden">
            <div className="flex justify-center">
                <div className="w-[1200px] h-[1150px] absolute z-10 bg-[#060919] rounded-2xl border">
                    <div className="flex justify-center">
                        <h1 className="text-white font-bold font-['Montserrat'] text-[96px] leading-[normal]">
                            Подача заявки
                        </h1>
                    </div>
                    <div className="ml-10 text-center">
                        <h1 className="text-white font-['Montserrat'] text-[48px] leading-[normal] ">
                            ФИО
                        </h1>
                        <input className="flex-shrink-0 w-[1000px] h-[3rem] rounded-[50px] bg-[#fefefe] pl-5"
                               id="username"
                               type="text" name="username"/>
                    </div>
                    <div className="ml-10 text-center">
                        <h1 className="text-white font-['Montserrat'] text-[48px] leading-[normal] mt-5">
                            ФИО руководителя
                        </h1>
                        <input className="flex-shrink-0 w-[1000px] h-[3rem] rounded-[50px] bg-[#fefefe] pl-5"
                               id="username"
                               type="text" name="username"/>
                    </div>
                    <div className="ml-10 text-center">
                        <h1 className="text-white font-['Montserrat'] text-[48px] leading-[normal] mt-5">
                            Наименование подразделения
                        </h1>
                        <input className="flex-shrink-0 w-[1000px] h-[3rem] rounded-[50px] bg-[#fefefe] pl-5"
                               id="username"
                               type="text" name="username"/>
                    </div>
                    <div className="ml-10 text-center">
                        <h1 className="text-white font-['Montserrat'] text-[48px] leading-[normal] mt-5">
                            Текущая должность
                        </h1>
                        <input className="flex-shrink-0 w-[1000px] h-[3rem] rounded-[50px] bg-[#fefefe] pl-5"
                               id="username"
                               type="text" name="username"/>
                    </div>
                    <div className="ml-10 text-center">
                        <h1 className="text-white font-['Montserrat'] text-[48px] leading-[normal] mt-5">
                            Стаж работы
                        </h1>
                        <input className="flex-shrink-0 w-[1000px] h-[3rem] rounded-[50px] bg-[#fefefe] pl-5"
                               id="username"
                               type="text" name="username"/>
                    </div>
                    <div className="ml-10 text-center">
                        <h1 className="text-white font-['Montserrat'] text-[40px] leading-[normal] mt-5">
                            Личные достижения за последние 12 месяцев
                        </h1>
                        <input className="flex-shrink-0 w-[1000px] h-[3rem] rounded-[50px] bg-[#fefefe] pl-5"
                               id="username"
                               type="text" name="username"/>
                    </div>
                    <div className="ml-10 text-center">
                        <h1 className="text-white font-['Montserrat'] text-[48px] leading-[normal] mt-5">
                            Мотивационное письмо
                        </h1>
                        <input className="flex-shrink-0 w-[1000px] h-[3rem] rounded-[50px] bg-[#fefefe] pl-5"
                               id="username"
                               type="text" name="username"/>
                    </div>
                    <div className="ml-10 text-center">
                        <button
                            className="w-[300px] h-[75px] bg-[#FFFFFF] rounded-3xl mt-[50px] hover:scale-125 duration-300 text-5xl"
                            id="inter-check" name="newAccount">
                            <h1 className="text-black font-bold font-['Montserrat'] text-[48px] leading-[normal]">
                                Отправить
                            </h1>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ApplicationForm;