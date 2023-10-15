import arrow1 from "../../../image/Arrow1.svg"
import arrow2 from "../../../image/Arrow2.svg"
export function News() {
    return (
        <div>
            <div className="flex w-[100%]">
                <h1 className="text-[48px] text-white font-['Montserrat'] ml-[45px]">
                    Новости
                </h1>
                <button className="ml-[1400px] mt-5 w-[11.75rem] h-[3.3125rem] rounded-[0.9375rem] bg-[#014e94] hover:bg-[#F11312] duration-300">
                    <span className="text-[24px] text-white font-['Montserrat']">
                        Все новости
                    </span>
                </button>
            </div>
            <div className="flex justify-center">
                <div className="w-[500px] h-[500px] bg-btn_color m-20">
                </div>
                <div className="w-[500px] h-[500px] bg-btn_color m-20">
                </div>
                <div className="w-[500px] h-[500px] bg-btn_color m-20">
                </div>
            </div>
            <div className="flex justify-center">
                <div>
                    <button>
                        <img src={arrow2} className="mt-5 mr-2"/>
                    </button>
                </div>
                <div>
                    <h1 className="text-[48px] text-white font-['Montserrat']">
                        1/3
                    </h1>
                </div>
                <div>
                    <button>
                        <img src={arrow1} className="mt-5 ml-2)"/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default News;