import man from "../../../image/man.svg";
export function MainContent() {
    return (
        <div>
            <div className="w-[1600] h-[921] bg-[url('./image/net.svg')] bg-cover flex">
                <div className="animate-text_ani translate-x-[-150%]">
                    <h1 className="font-['3270'] text-white text-left leading-[normal] text-[120px] pt-[120px] pl-[90px]">
                        Поступление
                    </h1>
                    <h1 className="font-['3270'] text-white text-left leading-[normal] text-[120px] pl-[90px]">
                        Абитуриентов
                    </h1>
                    <div>
                        <button className="flex-shrink-0 w-[18.5rem] h-[4.375rem] rounded-[0.9375rem] bg-[#014e94] mt-[150px] ml-[300px] hover:bg-[#F11312] duration-300">
                            <span className="text-white text-center font-['Montserrat'] text-4xl leading-[normal]">
                                Подать заявку
                            </span>
                        </button>
                    </div>
                </div>
                <div className="ml-[200px] mt-[50px] animate-photo_ani translate-x-[150%]">
                    <img src={man} />
                </div>
            </div>

        </div>
    )
}

export default MainContent