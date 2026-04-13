import { useState } from "react";

import {
    MdDashboard,
    MdPeople,
    MdSettings,
    MdSwapHoriz,
    MdReceipt,
} from "react-icons/md";

import { HiOutlineChevronLeft, HiOutlineMenuAlt2 } from "react-icons/hi";

import LoginPage from "../authpages/LoginPage.tsx";
import AdminNavBar from "../components/AdminNavBar.tsx";

import AdminDashBoardPage from "./adminpages/AdminDashBoardPage.tsx";
import AdminCustomersPage from "./adminpages/AdminCustomersPage.tsx";
import AdminTransfersPage from "./adminpages/AdminTransfersPage.tsx";
import AdminTransactionsPage from "./adminpages/AdminTransactionsPage.tsx";
import AdminSettingsPage from "./adminpages/AdminSettingsPage.tsx";

/* Dummy fallback */
const TransactionsPage = () => <div>Transactions Page</div>;

export default function AdminMainPage() {
    const [open, setOpen] = useState(true);
    const [active, setActive] = useState("Dashboard");

    const components: any = {
        Dashboard: AdminDashBoardPage,
        Customers: AdminCustomersPage,
        Transfer: AdminTransfersPage, 
        Transactions: AdminTransactionsPage,
        Settings: AdminSettingsPage,
    };

    const ActiveComponent = components[active] || LoginPage;

    const menuItem =
        "flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer text-sm transition-all";

    return (
        <div className="flex h-screen overflow-hidden bg-white">

            {/* Sidebar */}
            <aside
                className={`bg-navbg h-full transition-all duration-300 flex flex-col ${
                    open ? "w-64" : "w-20"
                }`}
            >
                {/* Header */}
                <div className="p-4 flex items-center justify-between border-b border-white/10">
                    <button
                        onClick={() => setOpen(!open)}
                        className="text-black text-xl"
                    >
                        {open ? <HiOutlineChevronLeft /> : <HiOutlineMenuAlt2 />}
                    </button>
                </div>

                {/* Menu */}
                <nav className="p-2 mt-4 space-y-2">

                    <div
                        onClick={() => setActive("Dashboard")}
                        className={`${menuItem} ${
                            active === "Dashboard"
                                ? "bg-primary text-white"
                                : "hover:bg-white/10 text-black"
                        }`}
                    >
                        <MdDashboard size={22} />
                        {open && <span>Dashboard</span>}
                    </div>

                    <div
                        onClick={() => setActive("Customers")}
                        className={`${menuItem} ${
                            active === "Customers"
                                ? "bg-primary text-white"
                                : "hover:bg-white/10 text-black"
                        }`}
                    >
                        <MdPeople size={22} />
                        {open && <span>Customers</span>}
                    </div>

                    <div
                        onClick={() => setActive("Transfer")}
                        className={`${menuItem} ${
                            active === "Transfer"
                                ? "bg-primary text-white"
                                : "hover:bg-white/10 text-black"
                        }`}
                    >
                        <MdSwapHoriz size={22} />
                        {open && <span>Transfer</span>}
                    </div>

                    <div
                        onClick={() => setActive("Transactions")}
                        className={`${menuItem} ${
                            active === "Transactions"
                                ? "bg-primary text-white"
                                : "hover:bg-white/10 text-black"
                        }`}
                    >
                        <MdReceipt size={22} />
                        {open && <span>Transactions</span>}
                    </div>

                    <div
                        onClick={() => setActive("Settings")}
                        className={`${menuItem} ${
                            active === "Settings"
                                ? "bg-primary text-white"
                                : "hover:bg-white/10 text-black"
                        }`}
                    >
                        <MdSettings size={22} />
                        {open && <span>Settings</span>}
                    </div>

                </nav>
            </aside>

            {/* RIGHT SIDE */}
            <div className="flex-1 flex flex-col bg-white text-black border-l border-black/10 shadow-lg">

                <AdminNavBar />

                <main className="flex-1 overflow-y-auto p-6 bg-bg">
                    <div className="bg-white p-6 rounded-xl shadow min-h-full">
                        <ActiveComponent />
                    </div>
                </main>
            </div>
        </div>
    );
}