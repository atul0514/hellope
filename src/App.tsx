import "./App.css";

import { Route, Routes, Navigate } from "react-router-dom";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import HomePage from "./front/pages/HomePage.tsx";
import ContactPage from "./front/pages/ContactPage.tsx";
import PrivacyPage from "./front/pages/PrivacyPolicyPage.tsx";
import TermsPage from "./front/pages/TermsConditionsPage.tsx";
import RefundPage from "./front/pages/RefundPage.tsx";
import GrivancePage from "./front/pages/GrievancePage.tsx";
import LoginPage from "./authpages/LoginPage.tsx";
import AdminMainPage from "./admin/AdminMainPage.tsx";

import { useAuthContext } from "./context/AuthContext";

function App() {

    const { token } = useAuthContext();


    /* INITIALIZE AOS ON APP LOAD */

    useEffect(() => {

        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
            offset: 80
        });

    }, []);


    return (

        <Routes>

            {/* Home page */}
            <Route path="/" element={<HomePage />} />


            {/* Contact page */}
            <Route path="/contact" element={<ContactPage />} />


            {/* Terms page */}
            <Route path="/terms-conditions" element={<TermsPage />} />


            {/* Privacy page */}
            <Route path="/privacy-policy" element={<PrivacyPage />} />


            {/* Refund page */}
            <Route path="/refund-cancellation" element={<RefundPage />} />


            {/* Grievance page */}
            <Route path="/grievance-redressal" element={<GrivancePage />} />


            {/* Login route */}
            <Route
                path="/login"
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