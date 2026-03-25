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
                // Eras como fuente principal (Brand)
                sans: ["var(--font-eras)", "sans-serif"],
                eras: ["var(--font-eras)", "sans-serif"],
                // Jakarta para elementos de UI
                jakarta: ["var(--font-jakarta)", "sans-serif"],
                // Montserrat para descripciones y lectura
                montserrat: ["var(--font-montserrat)", "sans-serif"],
            }
        },
    },
    plugins: [],
};
export default config;