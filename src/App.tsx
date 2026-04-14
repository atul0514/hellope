import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";

import LoginPage from "./authpages/LoginPage.tsx";
import AdminMainPage from "./admin/AdminMainPage.tsx";

import { useAuthContext } from "./context/AuthContext";

function App() {

    const { token } = useAuthContext();

    return (

        <Routes>

            {/* Login route */}
            <Route
                path="/"
                element={
                    token
                        ? <Navigate to="/admin" replace />
                        : <LoginPage />
                }
            />

            {/* Protected admin route */}
            <Route
                path="/admin"
                element={
                    token
                        ? <AdminMainPage />
                        : <Navigate to="/" replace />
                }
            />

        </Routes>

    );
}

export default App;