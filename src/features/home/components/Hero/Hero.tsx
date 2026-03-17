"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useMousePosition } from "@/shared/hooks/use-mouse-position";
import styles from "./Hero.module.css";

export const Hero = () => {
    const { x, y } = useMousePosition();
    const [maskSize, setMaskSize] = useState(120);
    const [scrollY, setScrollY] = useState(0);

    // Trackear scroll
    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const updateSize = () => {
            setMaskSize(window.innerWidth < 768 ? 80 : 120);
        };
        updateSize();
        window.addEventListener("resize", updateSize);
        return () => window.removeEventListener("resize", updateSize);
    }, []);

    // Coordenadas ajustadas al scroll
    const adjustedY = y + scrollY;

    return (
        <section className={styles.hero}>
            {/* CAPA 1: Tuberías */}
            <div className={styles.layerPipes}>
                <Image
                    src="/images/pipe-hero-alt-v3.jpg"
                    alt="Plumbing internal structure"
                    fill
                    priority
                    className="object-cover"
                />
            </div>

            {/* CAPA 2: Pared (Con la Máscara) */}
            {/* CAPA 2: Pared (Con la Máscara Cuadrada) */}
            <div
                className={styles.layerWall}
                style={{
                    /* MÁSCARA CUADRADA (Polygon Clipping):
                       Creamos un hueco cuadrado definiendo un camino que recorre los bordes externos
                       y luego "dibuja" el cuadrado interior en sentido contrario.

                    clipPath: `polygon(
                        0% 0%, 100% 0%, 100% 100%, 0% 100%, 
                        0% ${y - maskSize}px, 
                        ${x - maskSize}px ${y - maskSize}px, 
                        ${x - maskSize}px ${y + maskSize}px, 
                        ${x + maskSize}px ${y + maskSize}px, 
                        ${x + maskSize}px ${y - maskSize}px, 
                        0% ${y - maskSize}px
                    )`*/

                    /* OPCIÓN CÍRCULO:*/
                       maskImage: `radial-gradient(circle ${maskSize}px at ${x}px ${adjustedY}px, transparent 50%, black 100%)`,
                       WebkitMaskImage: `radial-gradient(circle ${maskSize}px at ${x}px ${adjustedY}px, transparent 50%, black 100%)`

                }}
            >
                <Image
                    src="/images/wall-hero.jpg"
                    alt="Clean wall"
                    fill
                    priority
                    className="object-cover"
                />
            </div>

            {/* CAPA 4: LUPA */}
            <div
                className={styles.magnifier}
                style={{
                    left: `${x}px`,
                    top: `${adjustedY}px`,
                    width: `${maskSize * 4}px`,   // era maskSize * 2 + 80
                    height: `${maskSize * 4}px`,  // era maskSize * 2 + 80
                }}
            >
                <Image
                    src="/images/magnifier.png"
                    alt="Magnifier"
                    fill
                    className={styles.magnifierImg}
                />
            </div>

            {/* CAPA 3: CONTENIDO TEXTUAL */}
            <div className={styles.contentContainer}>
                <div className={styles.textWrapper}>
                    <h1 className={styles.title}>
                        Complete Residential Plumbing Services Tailored to Your Home
                    </h1>
                    <p className={styles.description}>
                        Trusted professionals providing durable solutions for every plumbing challenge.
                    </p>
                    <button className={styles.ctaButton}>
                        Request an Estimate
                    </button>
                </div>
            </div>
        </section>
    );
};