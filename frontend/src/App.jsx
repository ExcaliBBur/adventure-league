import {MainPage} from "./components/mainPage/MainPage";
import IndexContent from "./components/indexContent/IndexContent";
import "./style.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
    return (
    <div className="App">
        <h1>Application</h1>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />}> </Route>
                <Route path="/login" element={<IndexContent />}> </Route>
            </Routes>
        </BrowserRouter>
    </div>
    );
}

export default App;
