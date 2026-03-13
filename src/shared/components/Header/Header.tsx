"use client";
import { useState, useEffect } from "react";

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-4" : "bg-transparent py-6"}`}>
            <div className="container mx-auto flex justify-between items-center px-6">
                <div className="text-[#247af5] font-bold text-xl uppercase tracking-wider">
                    Advanced Plumbing
                </div>
                <nav className="hidden md:flex gap-8 text-sm font-medium">
                    {["Home", "About", "Method", "Services", "Process"].map((item) => (
                        <a key={item} href="#" className={isScrolled ? "text-gray-800" : "text-gray-600"}>
                            {item}
                        </a>
                    ))}
                </nav>
                <button className="bg-[#247af5] text-white px-6 py-2 rounded-full flex items-center gap-2 hover:opacity-90 transition-opacity">
                    Get in touch <span className="text-lg">→</span>
                </button>
            </div>
        </header>
    );
};