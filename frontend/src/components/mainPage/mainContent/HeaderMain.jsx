import main_logo from '../../../image/main_logo.svg';
import {useNavigate} from "react-router-dom";
export function HeaderMain() {
    const navigate = useNavigate()

    const navigateToMain = () => {
        navigate('/')
    }

    const navigateToLogin = () => {
        navigate('/login')
    }

    return (
        <header className="translate-y-[-150%] animate-ani">
            <div className="flex w-[1850px] h-[6.6875rem] rounded-[25px]">
                <div className="flex m-auto justify-center align-middle text-center hover:scale-125 duration-500 cursor-default">
                    <div className="w-[17.5rem] text-white font-['Montserrat-SemiBold'] text-[2.6rem] font-bold leading-[normal]">
                        <h1 onClick={navigateToMain}>
                            Совкомбанк
                        </h1>
                    </div>
                    <span onClick={navigateToMain}>
                        <img src={main_logo} />
                    </span>
                </div>
                <div className="flex m-auto justify-center align-middle text-center">
                    <button className="w-[12.6875rem] opacity-[0.45] text-white font-['Montserrat-Thin'] text-2xl leading-[normal] hover:opacity-100">
                    <span>
                        Абитуриентам
                    </span>
                    </button>
                </div>
                <div className="flex m-auto justify-center align-middle text-center">
                    <button className="w-[9.125rem] opacity-[0.45] text-white font-['Montserrat-Thin'] text-2xl leading-[normal] hover:opacity-100">
                    <span>
                        Студентам
                    </span>
                    </button>
                </div>
                <div className="flex m-auto justify-center align-middle text-center">
                    <button className="w-[12.6875rem] opacity-[0.45] text-white font-['Montserrat-Thin'] text-2xl leading-[normal] hover:opacity-100">
                    <span>
                        Новости
                    </span>
                </button>
                </div>
                <div className="flex mb-auto ml-auto mt-auto justify-center align-middle text-center">
                    <div className="text-white font-['Montserrat'] text-4xl leading-[normal]">
                        <button className="w-[23.75rem] h-[4.3125rem] rounded-[0.9375rem] bg-[#014e94] hover:bg-[#F11312] duration-300" onClick={navigateToLogin}>
                            Личный кабинет
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HeaderMain;