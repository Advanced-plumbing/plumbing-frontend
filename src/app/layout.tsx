import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from 'next/font/google'
import { Montserrat } from 'next/font/google';
import localFont from 'next/font/local';
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
    subsets: ["latin"],
    variable: "--font-jakarta", // Esta variable es la que usa el config de arriba
});

const montserrat = Montserrat({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-montserrat',
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
        /* Limpiamos la cadena de clases eliminando los backticks internos y llaves extra */
        <html lang="en" className={`${jakarta.variable} ${erasFont.variable} ${montserrat.variable}`}>
        <body className="font-jakarta antialiased">
        {children}
        </body>
        </html>
    );
}