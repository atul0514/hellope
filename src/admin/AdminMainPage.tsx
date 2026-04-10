import {useState} from "react";

import {MdPerson,  MdDashboard, MdSettings} from "react-icons/md";
import {HiOutlineChevronLeft, HiOutlineMenuAlt2} from "react-icons/hi";
import LoginPage from "../authpages/LoginPage.tsx";
import AdminNavBar from "../components/AdminNavBar.tsx";
import AdminDashBoardPage from "./adminpages/AdminDashBoardPage.tsx";
import AdminCustomersPage from "./adminpages/AdminCustomersPage.tsx";
import AdminSettingsPage from "./adminpages/AdminSettingsPage.tsx";


const menu = [
    { name: "Dashboard", icon: MdDashboard, component: AdminDashBoardPage },
    { name: "Customers", icon: MdPerson, component: AdminCustomersPage },

    { name: "Settings", icon: MdSettings, component: AdminSettingsPage },
];

export default function AdminMainPage() {
    const [open, setOpen] = useState(true);
    const [active, setActive] = useState("Dashboard");
    const ActiveComponent = menu.find((m) => m.name === active)?.component || LoginPage;

    return (
        <>

            <div className="flex h-screen  overflow-hiddenbg-white ">

                {/* Sidebar */}
                <aside
                    className={`bg-navbg h-full transition-all duration-300 flex flex-col ${
                        open ? "w-64" : "w-20"
                    }`}
                >
                    {/* Header */}
                    <div className="p-4 flex items-center justify-between border-b border-white/10">
                        {/*{open && (*/}
                        {/*    <span className="font-bold text-black text-lg"></span>*/}
                        {/*)}*/}

                        <button
                            onClick={() => setOpen(!open)}
                            className="text-black text-xl"
                        >
                            {open ? <HiOutlineChevronLeft /> : <HiOutlineMenuAlt2 />}
                        </button>
                    </div>

                    {/* Menu */}
                    <nav className="p-2 mt-4 space-y-2">
                        {menu.map((item) => {
                            const isActive = active === item.name;
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.name}
                                    onClick={() => setActive(item.name)}
                                    className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-all
              ${
                                        isActive
                                            ? "bg-primary text-white"
                                            : "hover:bg-white/10 text-black"
                                    }
            `}
                                >
                                    <Icon size={22}/>
                                    {open && <span className="text-sm">{item.name}</span>}
                                </div>
                            );
                        })}
                    </nav>
                </aside>

                {/* RIGHT SIDE AREA */}
                <div className="flex-1 flex flex-col bg-white text-black border-l border-black/10 shadow-lg">

                    {/* Navbar */}
                    {/*<header className="h-14 flex items-center justify-between px-6 border-b bg-white shadow-sm">*/}
                    {/*    <h1 className="font-semibold text-primary">{active}</h1>*/}

                    {/*    <div className="flex items-center gap-3">*/}
                    {/*        <div*/}
                    {/*            className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">*/}
                    {/*            A*/}
                    {/*        </div>*/}
                    {/*        <span className="text-sm font-medium">Admin</span>*/}
                    {/*    </div>*/}
                    {/*</header>*/}
                    <AdminNavBar />

                    {/* Content */}
                    <main className="flex-1 overflow-y-auto p-6 bg-bg">

                        <div className="bg-white p-6 rounded-xl shadow min-h-full">
                            <ActiveComponent />
                        </div>

                    </main>
                </div>
            </div>
        </>
    );
}