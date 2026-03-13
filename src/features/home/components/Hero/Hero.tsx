"use client";
import { useMousePosition } from "@/shared/hooks/use-mouse-position";
import Image from "next/image";

export const Hero = () => {
    const { x, y } = useMousePosition();
    const size = 200;

    return (
        <section className="relative h-screen w-full overflow-hidden">

            {/* CAPA 1: Tuberías (Fondo Real) */}
            <div className="absolute inset-0">
                <Image
                    src="/images/pipes.jpg"
                    alt="Plumbing internal structure"
                    fill
                    priority
                    className="object-cover"
                />
            </div>

            {/* CAPA 2: Pared (Máscara) */}
            <div
                className="absolute inset-0 z-10"
                style={{
                    maskImage: `radial-gradient(circle ${size}px at ${x}px ${y}px, transparent 100%, black 100%)`,
                    WebkitMaskImage: `radial-gradient(circle ${size}px at ${x}px ${y}px, transparent 100%, black 100%)`
                }}
            >
                <Image
                    src="/images/wall.jpg"
                    alt="Clean wall"
                    fill
                    priority
                    className="object-cover"
                />


            </div>

            <div className="relative z-20 container mx-auto px-6 flex flex-col justify-center h-full pointer-events-none">
                <h1 className="text-6xl font-bold text-[#247af5] max-w-2xl leading-tight">
                    Advanced Plumbing <br /> & HVAC
                </h1>
                <p className="mt-6 text-gray-600 max-w-md text-lg">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </p>
                <button className="mt-8 bg-[#247af5] text-white px-8 py-3 rounded-full font-semibold pointer-events-auto hover:bg-blue-600 transition-colors">
                    Sign Up
                </button>
            </div>

        </section>
    );
};

{/* CONTENIDO TEXTUAL */}
<div className="container mx-auto px-6 pointer-events-none">
    <h1 className="text-6xl font-bold text-[#247af5] max-w-2xl leading-tight">
        Lorem ipsum dolor sit <br /> amet, consectetuer
    </h1>
    <p className="mt-6 text-gray-600 max-w-md text-lg">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
    </p>
    <button className="mt-8 bg-[#247af5] text-white px-8 py-3 rounded-full font-semibold pointer-events-auto hover:bg-blue-600 transition-colors">
        Sign Up
    </button>
</div>
