"use client";
import Image from "next/image";
import { useMousePosition } from "@/shared/hooks/use-mouse-position";
import styles from "./Hero.module.css";

export const Hero = () => {
    const { x, y } = useMousePosition();
    const size = 120; // Tamaño del hueco

    return (
        <section className={styles.hero}>

            {/* CAPA 1: Tuberías (Fondo Real) - z-0 (por defecto) */}
            <div className={styles.layerPipes}>
                <Image
                    src="/images/pipe.jpg"
                    alt="Plumbing internal structure"
                    fill
                    priority
                    className="object-cover"
                />
            </div>

            {/* CAPA 2: Pared (Con la Máscara) - z-10 */}
            <div
                className={styles.layerWall}
                style={{
                    maskImage: `radial-gradient(circle ${size}px at ${x}px ${y}px, transparent 100%, black 100%)`,
                    WebkitMaskImage: `radial-gradient(circle ${size}px at ${x}px ${y}px, transparent 100%, black 100%)`
                }}
            >
                <Image
                    src="/images/wall.jpg"
                    alt="Clean wall with furniture"
                    fill
                    priority
                    className="object-cover"
                />
            </div>

            {/* CAPA 3: CONTENIDO TEXTUAL (SUPERIOR) - z-20 */}
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