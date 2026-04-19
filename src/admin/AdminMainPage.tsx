import { type ComponentType, useState } from "react";
import logo from "../assets/udpelogo.webp";
import {
    MdDashboard,
    MdPerson,
    MdVerifiedUser,
    MdAccountBalanceWallet,
    MdSwapHoriz,
    MdSend,
    MdQrCode,
    MdInput,
    MdAssessment,
    MdUploadFile,
    MdMenuBook,
    MdSupportAgent,
    MdPeople,
    MdReceipt,
    MdSettings
} from "react-icons/md";

import { HiOutlineChevronLeft, HiOutlineMenuAlt2 } from "react-icons/hi";

import AdminNavBar from "../components/AdminNavBar.tsx";

import AdminDashBoardPage from "./adminpages/AdminDashBoardPage.tsx";
import AdminCustomersPage from "./adminpages/AdminCustomersPage.tsx";
import AdminTransfersPage from "./adminpages/AdminTransfersPage.tsx";
import AdminTransactionsPage from "./adminpages/AdminTransactionsPage.tsx";
import AdminSettingsPage from "./adminpages/AdminSettingsPage.tsx";


/*---API USER Pages---*/
import UserProfilePage from "./apiuser/UserProfilePage.tsx";
import UserWalletpage from "./apiuser/WalletPage.tsx";
import UserPayoutPage from "./apiuser/PayoutPage.tsx";
import UserQuickTransferPage from "./apiuser/QuickBankTransferPage.tsx";
import UserQuickUpiPage from "./apiuser/QuickUPIPage.tsx";
import UserPayinPage from "./apiuser/PayinsPage.tsx";
import UserReportpage from "./apiuser/ReportPage.tsx";
import UserLedgerPage from "./apiuser/LedgerPage.tsx";
import UserSupportPage from "./apiuser/SupportPage.tsx";



/* fallback pages */

const DummyPage = ({ title }: { title: string }) => (
    <div className="text-lg font-semibold">{title}</div>
);


type PageKey =
    | "Dashboard"
    | "Profile"
    | "KYC"
    | "Wallet"
    | "Payout"
    | "QuickTransfer"
    | "QuickUPI"
    | "Payin"
    | "Report"
    | "UploadReport"
    | "Ledger"
    | "Customers"
    | "Transfer"
    | "Transactions"
    | "Settings"
    | "Developer"
    | "EToken"
    | "Support";


export default function AdminMainPage() {

    const [open, setOpen] = useState(true);

    const [active, setActive] = useState<PageKey>("Dashboard");


    const components: Record<PageKey, ComponentType> = {

        Dashboard: AdminDashBoardPage,

        Customers: AdminCustomersPage,
        Transfer: AdminTransfersPage,
        Transactions: AdminTransactionsPage,
        Settings: AdminSettingsPage,

        /*---Api User---*/
        Profile: UserProfilePage,
        Wallet: UserWalletpage,
        Payout:UserPayoutPage,
        QuickTransfer:UserQuickTransferPage,
        QuickUPI:UserQuickUpiPage,
        Payin:UserPayinPage,
        Report: UserReportpage,
        Ledger:UserLedgerPage,
        Support:UserSupportPage,
        
        
        KYC: () => <DummyPage title="KYC Verification" />,
        UploadReport: () => <DummyPage title="Upload Report Page" />,
        Developer: () => <DummyPage title="Developer Page" />,
        EToken: () => <DummyPage title="E-Token Page" />

    };


    const ActiveComponent = components[active];

    const sectionTitle =
        "text-xs text-gray-600 uppercase tracking-wide px-4 mt-6 mb-2";


    return (

        <div className="flex h-screen overflow-hidden bg-white">

            {/* SIDEBAR */}

            <aside
                className={`bg-navbg text-white flex flex-col transition-all duration-300 ${open ? "w-64" : "w-20"
                    }`}
            >

                {/* TOGGLE BUTTON */}

                <div className="p-4 flex justify-between border-b border-white/10">

                    <button
                        onClick={() => setOpen(!open)}
                        className="text-gray-600 text-xl"
                    >
                        {open ? <HiOutlineChevronLeft /> : <HiOutlineMenuAlt2 />}
                    </button>
                    <img
                        src={logo}
                        alt="Udaanpe logo"
                        className="h-10"
                        />

                </div>


                <nav className="p-2 overflow-y-auto">


                    {/* MAIN MENU */}

                    {open && <p className={sectionTitle}>MAIN MENU</p>}

                    <SidebarItem {...{ open, active, setActive }} label="Dashboard" icon={<MdDashboard />} />

                    <SidebarItem {...{ open, active, setActive }} label="Profile" icon={<MdPerson />} />

                    <SidebarItem {...{ open, active, setActive }} label="KYC" icon={<MdVerifiedUser />} />

                    <SidebarItem {...{ open, active, setActive }} label="Wallet" icon={<MdAccountBalanceWallet />} />

                    <SidebarItem {...{ open, active, setActive }} label="Payout" icon={<MdSwapHoriz />} />

                    <SidebarItem {...{ open, active, setActive }} label="QuickTransfer" icon={<MdSend />} />

                    <SidebarItem {...{ open, active, setActive }} label="QuickUPI" icon={<MdQrCode />} />

                    <SidebarItem {...{ open, active, setActive }} label="Payin" icon={<MdInput />} />

                    <SidebarItem {...{ open, active, setActive }} label="Report" icon={<MdAssessment />} />

                    <SidebarItem {...{ open, active, setActive }} label="UploadReport" icon={<MdUploadFile />} />

                    <SidebarItem {...{ open, active, setActive }} label="Ledger" icon={<MdMenuBook />} />


                    {/* ADMIN TOOLS (OLD MENU) */}

                    {open && <p className={sectionTitle}>ADMIN TOOLS</p>}

                    <SidebarItem {...{ open, active, setActive }} label="Customers" icon={<MdPeople />} />

                    <SidebarItem {...{ open, active, setActive }} label="Transfer" icon={<MdSwapHoriz />} />

                    <SidebarItem {...{ open, active, setActive }} label="Transactions" icon={<MdReceipt />} />

                    <SidebarItem {...{ open, active, setActive }} label="Settings" icon={<MdSettings />} />


                    {/* API DOCUMENT */}

                    {open && <p className={sectionTitle}>API DOCUMENT</p>}

                    <SidebarItem {...{ open, active, setActive }} label="Developer" icon={<MdMenuBook />} />

                    <SidebarItem {...{ open, active, setActive }} label="EToken" icon={<MdVerifiedUser />} />

                    <div
                        onClick={() =>
                            window.open(
                                "https://www.udaaanpe.com/swagger/index.html",
                                "_blank"
                            )
                        }
                        className="flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer text-gray-600 hover:bg-white/10"
                    >
                        <MdMenuBook />
                        {open && "Swagger Docs"}
                    </div>


                    {/* SUPPORT */}

                    {open && <p className={sectionTitle}>SUPPORT</p>}

                    <SidebarItem {...{ open, active, setActive }} label="Support" icon={<MdSupportAgent />} />

                </nav>

            </aside>


            {/* MAIN CONTENT */}

            <div className="flex-1 flex flex-col border-l">

                <AdminNavBar />

                <main className="flex-1 p-3 overflow-y-auto">

                    <div className="bg-slate-50 p-6 rounded-xl shadow min-h-full">

                        <ActiveComponent />

                    </div>

                </main>

            </div>

        </div>

    );

}


function SidebarItem({ open, active, setActive, label, icon }: any) {

    return (

        <div
            onClick={() => setActive(label)}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer transition-all
            ${active === label
                    ? "bg-primary text-white"
                    : "text-gray-600 hover:bg-white/10"
                }`}
        >

            {icon}

            {open && label}

        </div>

    );

}