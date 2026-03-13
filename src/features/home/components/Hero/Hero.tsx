"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useMousePosition } from "@/shared/hooks/use-mouse-position";
import styles from "./Hero.module.css";

export const Hero = () => {
    const { x, y } = useMousePosition();
    const [maskSize, setMaskSize] = useState(120);

    // Ajustamos el tamaño del hueco según el dispositivo
    useEffect(() => {
        const updateSize = () => {
            if (window.innerWidth < 768) {
                setMaskSize(80); // Más pequeño en móvil
            } else {
                setMaskSize(120);
            }
        };
        updateSize();
        window.addEventListener("resize", updateSize);
        return () => window.removeEventListener("resize", updateSize);
    }, []);

    return (
        <section className={styles.hero}>
            {/* CAPA 1: Tuberías */}
            <div className={styles.layerPipes}>
                <Image
                    src="/images/pipe.jpg"
                    alt="Plumbing internal structure"
                    fill
                    priority
                    className="object-cover"
                />
            </div>

            {/* CAPA 2: Pared (Con la Máscara) */}
            <div
                className={styles.layerWall}
                style={{
                    maskImage: `radial-gradient(circle ${maskSize}px at ${x}px ${y}px, transparent 100%, black 100%)`,
                    WebkitMaskImage: `radial-gradient(circle ${maskSize}px at ${x}px ${y}px, transparent 100%, black 100%)`
                }}
            >
                <Image
                    src="/images/wall-alt.jpg"
                    alt="Clean wall"
                    fill
                    priority
                    className="object-cover"
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