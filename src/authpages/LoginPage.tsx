import { useState } from "react"
import {appName} from "../utils/helper.ts";
import {useNavigate} from "react-router-dom";

export default function LoginPage() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [show, setShow] = useState(false)

    const [errors, setErrors] = useState<{ email?: string; password?: string }>({})

    // 🔥 validation
    const validate = () => {
        const err: any = {}

        if (!email) err.email = "Email is required"
        else if (!/\S+@\S+\.\S+/.test(email)) err.email = "Invalid email"

        if (!password) err.password = "Password is required"
        else if (password.length < 6) err.password = "Min 6 characters"

        setErrors(err)
        return Object.keys(err).length === 0
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (validate()) {
            console.log("Login success", { email, password })
            navigate("/admin",{replace:true});
        }
    }

    return (
        <div className="min-h-screen flex bg-bg">

            {/* LEFT SIDE */}
            <div className="hidden md:flex w-1/2 bg-primary font-bold text-white relative items-center justify-center">

                <div className="text-center px-10">
                    <h1 className="text-2xl font-bold mb-4">
                       Welcome to {appName}
                    </h1>

                    <p className="text-sm opacity-90">
                        Smart hiring experience powered by automation and intelligence.
                    </p>
                </div>

            </div>

            {/* RIGHT SIDE */}
            <div className="w-full md:w-1/2 flex items-center justify-center px-6">

                <div className="w-full max-w-md bg-white shadow-xl rounded-xl p-8">

                    {/* LOGO */}
                    <div className="text-center mb-6">
                        <h2 className="text-primary font-bold text-xl">
                            {appName}
                        </h2>
                    </div>

                    <h3 className="text-lg font-semibold mb-1">
                        Login
                    </h3>

                    <p className="text-sm text-gray-500 mb-6">
                        Login to your account
                    </p>

                    {/* FORM */}
                    <form onSubmit={handleSubmit} className="space-y-4">

                        {/* EMAIL */}
                        <div>
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-primary outline-none"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {errors.email && (
                                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                            )}
                        </div>

                        {/* PASSWORD */}
                        <div className="relative">

                            <input
                                type={show ? "text" : "password"}
                                placeholder="Password"
                                className="w-full border rounded-lg p-2 pr-10 focus:ring-2 focus:ring-primary outline-none"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />

                            {/* 👁 toggle */}
                            <button
                                type="button"
                                onClick={() => setShow(!show)}
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

                        {/* remember + forgot */}
                        <div className="flex justify-between text-sm">
                            <label className="flex items-center gap-2">
                                <input type="checkbox" />
                                Remember me
                            </label>

                            <span className="text-primary cursor-pointer">
                Reset Password?
              </span>
                        </div>

                        {/* BUTTON */}
                        <button
                            type="submit"
                            className="w-full bg-primary text-white py-2 rounded-lg hover:opacity-90 transition "
                        >
                            SIGN IN
                        </button>

              {/*          <p className="text-center text-sm mt-4">*/}
              {/*              Don’t have an account?{" "}*/}
              {/*              <span className="text-secondary cursor-pointer">*/}
              {/*  Join Now*/}
              {/*</span>*/}
              {/*          </p>*/}

                    </form>
                </div>
            </div>
        </div>
    )
}