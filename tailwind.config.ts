import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#011A1B", // Dark Teal 950
                foreground: "#E0F2F1", // Teal 50
                primary: {
                    DEFAULT: "#14B8A6", // Teal 500 (Verde Agua)
                    foreground: "#ffffff",
                },
                secondary: {
                    DEFAULT: "#0D9488", // Teal 600
                    foreground: "#ffffff",
                },
                accent: {
                    teal: "#2DD4BF",
                    dark: "#042f2e",
                },
                border: "rgba(20, 184, 166, 0.1)",
            },
            fontFamily: {
                sans: ["Roboto", "sans-serif"],
                display: ["Oswald", "sans-serif"],
            },
        },
    },
    plugins: [],
}

export default config