import {useState} from "react";
import arrowUp from "../../../image/ArrowUp.svg"
import arrowDown from "../../../image/ArrowDown.svg"
import list from "../../../list.json"
export function Test() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <div>
                <div>
                    <h1 className="text-white font-['Montserrat-Thin'] text-5xl leading-[normal] ml-20">
                        Тесты
                    </h1>
                    <div className="justify-center flex font-['Montserrat'] text-[#FFFFFF] bg-btn_color">
                        <div className="h-[800px] w-[2000px]  rounded-2xl mt-[50px]">
                            <div className="ml-5 mt-5 place-items-center relative flex flex-col items-center w-[340px] h-[340px] rounded-lg">
                                <button onClick={() => setIsOpen((prev) => !prev)}
                                        className="bg-[#0086FF] p-4 w-full flex items-center justify-between font-bold text-lg rounded-lg tracking-wider border-4 border-transparent active:border-[#FFFFFF] duration-300 active:text-[#FFFFFF]">
                                    Выберите предмет
                                    {!isOpen ? (
                                        <img src={arrowDown} />
                                    ) : (<img src={arrowUp} />
                                    )}

                                    {isOpen && (
                                        <div className="bg-[#0086FF] absolute top-20 flex flex-col items-start rounded-lg p-2 w-full">
                                            {list.map((item, i) => (
                                                <div className="w-full hover:bg-[#88C7FF] cursor-pointer rounded-r-lg border-l-transparent">
                                                    <h3>
                                                        {item.subject}
                                                    </h3>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Test