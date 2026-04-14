import {type ComponentType, useState} from "react";

import {
    MdDashboard,
    MdPeople,
    MdSettings,
    MdSwapHoriz,
    MdReceipt,
} from "react-icons/md";

import { HiOutlineChevronLeft, HiOutlineMenuAlt2 } from "react-icons/hi";

import AdminNavBar from "../components/AdminNavBar.tsx";

import AdminDashBoardPage from "./adminpages/AdminDashBoardPage.tsx";
import AdminCustomersPage from "./adminpages/AdminCustomersPage.tsx";
import AdminTransfersPage from "./adminpages/AdminTransfersPage.tsx";
import AdminTransactionsPage from "./adminpages/AdminTransactionsPage.tsx";
import AdminSettingsPage from "./adminpages/AdminSettingsPage.tsx";

type PageKey =
    | "Dashboard"
    | "Customers"
    | "Transfer"
    | "Transactions"
    | "Settings";

export default function AdminMainPage() {
    const [open, setOpen] = useState(true);
    const [active, setActive] = useState<PageKey>("Dashboard");

    const components: Record<PageKey, ComponentType> = {
        Dashboard: AdminDashBoardPage,
        Customers: AdminCustomersPage,
        Transfer: AdminTransfersPage,
        Transactions: AdminTransactionsPage,
        Settings: AdminSettingsPage,
    };

    const ActiveComponent = components[active];

    const menuItem =
        "flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer text-sm transition-all";

    return (
        <div className="flex h-screen overflow-hidden bg-white">

            {/* Sidebar */}
            <aside className={`bg-navbg h-full flex flex-col transition-all duration-300 ${open ? "w-64" : "w-20"}`}>

                <div className="p-4 flex justify-between border-b border-white/10">
                    <button onClick={() => setOpen(!open)} className="text-black text-xl">
                        {open ? <HiOutlineChevronLeft /> : <HiOutlineMenuAlt2 />}
                    </button>
                </div>

                <nav className="p-2 mt-4 space-y-2">

                    <div onClick={() => setActive("Dashboard")} className={`${menuItem} ${active === "Dashboard" ? "bg-primary text-white" : "text-black"}`}>
                        <MdDashboard size={22} />
                        {open && "Dashboard"}
                    </div>

                    <div onClick={() => setActive("Customers")} className={`${menuItem} ${active === "Customers" ? "bg-primary text-white" : "text-black"}`}>
                        <MdPeople size={22} />
                        {open && "Customers"}
                    </div>

                    <div onClick={() => setActive("Transfer")} className={`${menuItem} ${active === "Transfer" ? "bg-primary text-white" : "text-black"}`}>
                        <MdSwapHoriz size={22} />
                        {open && "Transfer"}
                    </div>

                    <div onClick={() => setActive("Transactions")} className={`${menuItem} ${active === "Transactions" ? "bg-primary text-white" : "text-black"}`}>
                        <MdReceipt size={22} />
                        {open && "Transactions"}
                    </div>

                    <div onClick={() => setActive("Settings")} className={`${menuItem} ${active === "Settings" ? "bg-primary text-white" : "text-black"}`}>
                        <MdSettings size={22} />
                        {open && "Settings"}
                    </div>

                </nav>
            </aside>

            {/* MAIN */}
            <div className="flex-1 flex flex-col border-l">

                <AdminNavBar />

                <main className="flex-1 p-6 overflow-y-auto">
                    <div className="bg-white p-6 rounded-xl shadow min-h-full">
                        <ActiveComponent />
                    </div>
                </main>

            </div>
        </div>
    );
}