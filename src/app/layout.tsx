import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from 'next/font/google'
import localFont from 'next/font/local';
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
    subsets: ["latin"],
    variable: "--font-jakarta", // Esta variable es la que usa el config de arriba
});

// Definimos la fuente Eras Medium
const erasFont = localFont({
    src: './fonts/erasmd.ttf', // <--- Minúsculas
    variable: '--font-eras',
    display: 'swap',
});

export const metadata: Metadata = {
  title: "Advanced Plumbing team",
  description: "Trusted professionals providing durable solutions for every plumbing challenge.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        /* Agregamos la variable de Eras aquí */
        <html lang="en" className={`${jakarta.variable} ${erasFont.variable}`}>
        <body className="font-jakarta">
        {children}
        </body>
        </html>
    );
}