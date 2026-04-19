/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: 
            {
                brandBlue: "#0B2A8A",
                brandLightBlue: "#1E88E5",
                brandOrange: "#FF7A18",
                brandGreen: "#1FA55B",
                brandDark: "#0F172A",
            },

        },
    },
    plugins: [],
}