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
                // Ahora 'font-sans' usará Eras por defecto
                sans: ["var(--font-eras)", "sans-serif"],
                eras: ["var(--font-eras)", "sans-serif"],
                jakarta: ["var(--font-jakarta)", "sans-serif"],
            }
        },
    },
    plugins: [],
};
export default config;