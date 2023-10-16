import HeaderMain from "./mainContent/HeaderMain";
import MainContent from "./mainContent/MainContent";
import BankInfo from "./mainContent/BankInfo";
import StudentContent from "./mainContent/StudentContent";
import News from "./mainContent/News";
import ApplicationForm from "./mainContent/ApplicationForm";
export function MainPage() {

    return (
        <div>
            <div>
                <ApplicationForm />
            </div>
            <div>
                <HeaderMain />
                <MainContent />
                <BankInfo />
                <StudentContent />
                <News />
            </div>
        </div>

    )
}

export default MainPage;