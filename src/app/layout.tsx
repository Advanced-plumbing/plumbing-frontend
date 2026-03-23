import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from 'next/font/google'
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
    subsets: ["latin"],
    variable: "--font-jakarta", // Esta variable es la que usa el config de arriba
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
      <html lang="en" className={jakarta.variable}>
      <body className="font-jakarta">
        {children}
      </body>
    </html>
  );
}
