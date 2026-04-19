import { useState } from "react";
import { appName } from "../utils/helper.ts";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";
import logo from "../assets/logo.png";

export default function LoginPage() {

    const navigate = useNavigate();

    const loginMutation = useLogin();   

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);

    const [errors, setErrors] = useState<any>({});

    const validate = () => {

        const err: any = {};

        if (!userName)
            err.userName = "Username required";

        if (!password)
            err.password = "Password required";

        setErrors(err);

        return Object.keys(err).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {

        e.preventDefault();

        if (!validate()) return;

        loginMutation.mutate(
            {
                userName,
                password,
            },
            {
                onSuccess: () => {

                    console.log("Login success");

                    navigate("/admin", {
                        replace: true,
                    });
                },

                onError: (error) => {

                    console.log("Login failed", error);
                    alert("Invalid credentials");

                },
            }
        );
    };

    return (
        <div className="min-h-screen flex bg-bg">

            <div className="hidden md:flex w-1/2 bg-primary font-bold text-white items-center justify-center">

                <div className="text-center px-10">
                    <h1 className="text-2xl font-bold mb-4">
                        Welcome to {appName}
                    </h1>
                    

                    <p className="text-sm opacity-90">
                        AI-led New India's Leading Fintech
                    </p>
                </div>

            </div>

            <div className="w-full md:w-1/2 flex items-center justify-center px-6">

                <div className="w-full max-w-md bg-white shadow-xl rounded-xl p-8">

                    <div className="flex items-center justify-center">
                        {/* <h2 className="text-primary font-bold text-xl">
                            {appName}
                        </h2> */}
                        <img
                        src={logo}
                        alt="Udaanpe"
                        className="h-32 "
                        data-aos="zoom-in"
                        />
                    </div>

                    <h3 className="text-lg text-center font-semibold mb-1">
                        Internet Banking Login
                    </h3>

                    <p className="text-sm text-center 1875remtext-gray-500 mb-3">
                        Sign in to your UdaaanPe account securely
                    </p>

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-4"
                    >

                        {/* Username */}
                        <div>

                            <input
                                type="text"
                                placeholder="Username"
                                className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-primary outline-none"
                                value={userName}
                                onChange={(e) =>
                                    setUserName(e.target.value)
                                }
                            />

                            {errors.userName && (

                                <p className="text-red-500 text-xs mt-1">

                                    {errors.userName}

                                </p>
                            )}

                        </div>


                        {/* Password */}
                        <div className="relative">

                            <input
                                type={
                                    show
                                        ? "text"
                                        : "password"
                                }
                                placeholder="Password"
                                className="w-full border rounded-lg p-2 pr-10 focus:ring-2 focus:ring-primary outline-none"
                                value={password}
                                onChange={(e) =>
                                    setPassword(e.target.value)
                                }
                            />

                            <button
                                type="button"
                                onClick={() =>
                                    setShow(!show)
                                }
                                className="absolute right-3 top-2.5 text-gray-500"
                            >
                                {show ? "🙈" : "👁"}
                            </button>

                            {errors.password && (

                                <p className="text-red-500 text-xs mt-1">

                                    {errors.password}

                                </p>
                            )}

                        </div>


                        <button
                            type="submit"
                            className="w-full bg-primary text-white py-2 rounded-lg hover:opacity-90 transition"
                        >

                            {loginMutation.isPending
                                ? "Logging in..."
                                : "SIGN IN"}

                        </button>

                    </form>

                </div>
            </div>
        </div>
    );
}