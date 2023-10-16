import main_logo from "../../../image/main_logo.svg";

export function HeaderPersonal() {
    return (
        <header>
            <div className="flex w-[1850px] h-[6.6875rem] rounded-[25px]">
                <div className="flex m-auto justify-center align-middle text-center hover:scale-125 duration-500 cursor-default">
                    <div className="w-[17.5rem] text-white font-['Montserrat-SemiBold'] text-[2.6rem] font-bold leading-[normal]">Совкомбанк</div>
                    <span>
                        <img src={main_logo} />
                    </span>
                </div>
                <div className="flex m-auto justify-center align-middle text-center">
                    <button className="w-[1.6875rem] opacity-[0.45] text-white font-['Montserrat-Thin'] text-2xl leading-[normal] hover:opacity-100">
                    <span>
                        Тесты
                    </span>
                    </button>
                </div>
                <div className="flex m-auto justify-center align-middle text-center">
                    <button className="w-[16.125rem] opacity-[0.45] text-white font-['Montserrat-Thin'] text-2xl leading-[normal] hover:opacity-100">
                    <span>
                        Учебные материалы
                    </span>
                    </button>
                </div>
                <div className="flex m-auto justify-center align-middle text-center">
                    <button className="w-[15.6875rem] opacity-[0.45] text-white font-['Montserrat-Thin'] text-2xl leading-[normal] hover:opacity-100">
                    <span>
                        Домашние задания
                    </span>
                    </button>
                </div>
                <div className="flex mb-auto ml-auto mt-auto justify-center align-middle text-center">
                    <div className="text-white font-['Montserrat'] text-4xl leading-[normal]">
                        <h1>Привет, <span className="text-btn_color">Студент</span></h1>
                        <h1>Твоя группа - <span className="text-btn_color">120</span></h1>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HeaderPersonal