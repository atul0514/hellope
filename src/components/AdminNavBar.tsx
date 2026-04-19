import { memo, useEffect, useRef, useState } from "react";
import { MdNotifications, MdLogout, MdWallet } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { appName } from "../utils/helper.ts";
import { useAuthContext } from "../context/AuthContext";
import api from "../api/axios.ts";

function AdminNavBar() {

    const [openMenu, setOpenMenu] = useState(false);
    const [walletBalance, setWalletBalance] = useState<number>(0);
    const [username, setUserName] = useState("User");

        useEffect(() => {

        const storedName =
            localStorage.getItem("userName");

        if (storedName) {

            setUserName(storedName);

        }

        }, []);

    const navigate = useNavigate();
    const menuRef = useRef<HTMLDivElement>(null);

    const { logout } = useAuthContext();


    /**
     * Fetch wallet balance of logged-in user
     */
    useEffect(() => {

        const fetchBalance = async () => {

            try {

                const userId =
                    localStorage.getItem("userId");

                if (!userId) {

                    console.warn(
                        "UserId missing from localStorage"
                    );

                    return;

                }

                const response = await api.get(
                    "/FundTransfer/Get-User-balance",
                    {
                        params: {
                            userid: Number(userId)
                        }
                    }
                );


                /**
                 * Flexible backend response support
                 */
                const balance =
                    response.data?.balance ??
                    response.data?.data?.balance ??
                    response.data?.Data?.Balance ??
                    0;

                setWalletBalance(Number(balance));

            } catch (error: any) {

                console.error(
                    "Balance API ERROR:",
                    error?.response?.data ||
                    error.message
                );

            }

        };

        fetchBalance();

    }, []);


    /**
     * Logout handler
     */
    const handleLogout = () => {

        logout();

        navigate("/", {
            replace: true,
        });

    };

    return (

        <header className="h-14 bg-white flex items-center justify-between px-4 sm:px-6 shadow-md relative">

            {/* LEFT SIDE */}
            <h1 className="font-semibold text-primary text-sm sm:text-base">
                Welcome to {appName}
            </h1>


            {/* RIGHT SIDE */}
            <div className="flex items-center gap-3 sm:gap-4">

                {/* Notification Icon */}
                <div className="w-8 h-8 rounded-full bg-bg flex items-center justify-center cursor-pointer shadow-sm">
                    <MdNotifications size={20} />
                </div>


                {/* Wallet Balance */}
                <div className="hidden sm:flex items-center gap-2 px-2 py-1 rounded-full bg-bg shadow-sm">

                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                        <MdWallet size={20} />
                    </div>

                    <span className="text-sm font-medium text-black">

                        ₹{walletBalance}

                    </span>

                </div>


                {/* Profile Section */}
                <div className="hidden sm:flex items-center gap-2 px-2 py-1 rounded-full bg-bg shadow-sm">

                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                        {username.charAt(0).toUpperCase()}
                    </div>

                    <span className="text-sm font-medium text-black">
                        {username}
                    </span>

                </div>


                {/* Desktop Logout Button */}
                <button
                    onClick={handleLogout}
                    className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-md text-red-600 hover:bg-red-50 transition shadow-sm"
                >
                    <MdLogout size={18} />
                </button>


                {/* Mobile Profile Button */}
                <button
                    className="sm:hidden w-9 h-9 rounded-full bg-bg flex items-center justify-center shadow-sm"
                    onClick={() =>
                        setOpenMenu(!openMenu)
                    }
                >
                    A
                </button>

            </div>


            {/* Mobile Dropdown Menu */}
            {
                openMenu && (

                    <div
                        ref={menuRef}
                        className="absolute top-14 right-4 w-56 bg-white shadow-2xl rounded-xl z-50 overflow-hidden animate-fadeIn"
                    >

                        <button
                            onClick={handleLogout}
                            className="w-full flex items-center gap-2 px-4 py-3 text-red-600 hover:bg-red-50 transition"
                        >

                            <MdLogout size={18} />

                            <span className="font-medium">
                                Logout
                            </span>

                        </button>

                    </div>

                )
            }

        </header>


    );

}

export default memo(AdminNavBar);