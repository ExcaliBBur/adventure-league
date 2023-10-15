import HeaderMain from "./mainContent/HeaderMain";
import MainContent from "./mainContent/MainContent";
import BankInfo from "./mainContent/BankInfo";
import StudentContent from "./mainContent/StudentContent";
import News from "./mainContent/News";
export function MainPage() {
    return (
        <div>
            <HeaderMain />
            <MainContent />
            <BankInfo />
            <StudentContent />
            <News />
        </div>
    )
}

export default MainPage;