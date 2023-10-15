import MainPage from "./components/mainPage/MainPage";
import IndexContent from "./components/indexContent/IndexContent";
import PersonalPage from "./components/personalAccountPage/PersonalPage";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import "./style.css";

function App() {
    return (
    <div className="App">
        <h1>Application</h1>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />}> </Route>
                <Route path="/login" element={<IndexContent />}> </Route>
                <Route path="/personal" element={<PersonalPage />}> </Route>
            </Routes>
        </BrowserRouter>
    </div>
    );
}

export default App;
