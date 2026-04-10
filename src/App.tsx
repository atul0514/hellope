import './App.css'
import {Route, Routes} from "react-router-dom";
import LoginPage from "./authpages/LoginPage.tsx";
import AdminMainPage from "./admin/AdminMainPage.tsx";

function App() {


    return (
        <>
            <Routes>

                <Route path="/" element={<LoginPage/>}/>

                <Route path="/admin" element={<AdminMainPage/>}/>




            </Routes>


        </>
    )
}

export default App
