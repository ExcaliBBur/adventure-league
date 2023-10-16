import HeaderPersonal from "./personalContent/HeaderPersonal";
import StudentActivity from "./personalContent/StudentActivity";
import Test from "./personalContent/Test";
export function PersonalPage() {
    return (
        <div>
            <HeaderPersonal/>
            <StudentActivity />
            <Test />
        </div>
    )
}

export default PersonalPage;