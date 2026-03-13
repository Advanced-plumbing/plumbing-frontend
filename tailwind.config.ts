import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    blue: "#247af5",
                },
            },
            fontFamily: {
                jakarta: ["var(--font-jakarta)", "sans-serif"],
            },
        },
    },
    plugins: [],
};
export default config;