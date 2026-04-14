import { memo, useEffect, useRef, useState } from "react";
import { MdNotifications, MdLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { appName } from "../utils/helper.ts";
import { useAuthContext } from "../context/AuthContext";

function AdminNavBar() {

    const [openMenu, setOpenMenu] = useState(false);

    const navigate = useNavigate();

    const menuRef = useRef<HTMLDivElement>(null);

    const { logout } = useAuthContext();

    useEffect(() => {

        const handleResize = () => {

            const isDesktop = window.innerWidth >= 640;

            if (isDesktop) {
                setOpenMenu(false);
            }

        };

        window.addEventListener("resize", handleResize);

        return () =>
            window.removeEventListener("resize", handleResize);

    }, []);

    const handleLogout = () => {

        // remove token from context + localStorage
        logout();

        // redirect to login page
        navigate("/", {
            replace: true,
        });

    };

    console.log("Calling Navbar");

    return (

        <header className="h-14 bg-white flex items-center justify-between px-4 sm:px-6 shadow-md relative">

            {/* LEFT */}
            <h1 className="font-semibold text-primary text-sm sm:text-base">
                Welcome to {appName}
            </h1>

            {/* RIGHT */}
            <div className="flex items-center gap-3 sm:gap-4">

                {/* Notification */}
                <div className="w-8 h-8 rounded-full bg-bg flex items-center justify-center cursor-pointer shadow-sm">
                    <MdNotifications size={20} />
                </div>

                {/* PROFILE */}
                <div className="hidden sm:flex items-center gap-2 px-2 py-1 rounded-full bg-bg shadow-sm">

                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                        A
                    </div>

                    <span className="text-sm font-medium text-black">
                        Admin User
                    </span>

                </div>

                {/* DESKTOP LOGOUT */}
                <button
                    onClick={handleLogout}
                    className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-md text-red-600 hover:bg-red-50 transition shadow-sm"
                >
                    <MdLogout size={18} />
                    Logout
                </button>

                {/* MOBILE PROFILE BUTTON */}
                <button
                    className="sm:hidden w-9 h-9 rounded-full bg-bg flex items-center justify-center shadow-sm"
                    onClick={() =>
                        setOpenMenu(!openMenu)
                    }
                >
                    A
                </button>

            </div>

            {/* MOBILE DROPDOWN */}
            {openMenu && (

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

            )}

        </header>

    );

}

export default memo(AdminNavBar);