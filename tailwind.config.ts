import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#020617", // Dark Blue/Slate 950
                foreground: "#fafafa",
                primary: {
                    DEFAULT: "#FF7F50", // Action Orange
                    foreground: "#ffffff",
                },
                secondary: {
                    DEFAULT: "#1E3A8A", // Dark Blue Accent
                    foreground: "#ffffff",
                },
                accent: {
                    orange: "#FF7F50",
                    blue: "#1E3A8A",
                },
                border: "rgba(255,255,255,0.08)",
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