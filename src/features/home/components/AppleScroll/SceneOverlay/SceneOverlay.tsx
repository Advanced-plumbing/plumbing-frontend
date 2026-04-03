"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./SceneOverlay.module.css";

interface Tag {
    label: string;
    top: string;
    left: string;
    // Punto de origen de la línea relativo al tag (hacia dónde apunta)
    lineX: string; // px o % desde el tag hacia el target
    lineY: string;
}

interface Scene {
    id: number;
    content: string;   // HTML directo
    tags?: Tag[];
}

const scenes: Scene[] = [
    {
        id: 0,
        content: `
            <h2 class="scene-title">
                Plumbing you can trust,
                <span class="scene-accent">results that last.</span>
            </h2>
            <p class="scene-desc">
                From fast repairs to full installations, we keep your home or business
                running smoothly with trusted, <strong>long-lasting solutions.</strong>
            </p>
            <a href="#contact" class="scene-btn">Get in touch</a>
        `,
    },
    {
        id: 1,
        content: `
            <h2 class="scene-title">
                Corrosion
                <span class="scene-accent">Buildup</span>
            </h2>
            <p class="scene-desc">
                Internal pipe corrosion weakens material
                <strong>integrity over time,</strong> restricting flow and
                increasing the risk of cracks or system failure.
            </p>
        `,
        tags: [
            { label: "Material decay",      top: "12%", left: "62%", lineX: "-40px", lineY: "60px"  },
            { label: "Flow restriction",    top: "50%", left: "32%", lineX: "60px",  lineY: "-30px" },
            { label: "Structural weakness", top: "68%", left: "55%", lineX: "-50px", lineY: "-40px" },
        ],
    },
    {
        id: 2,
        content: `
            <h2 class="scene-title">
                Leak
                <span class="scene-accent">Detection</span>
            </h2>
            <p class="scene-desc">
                Small leaks often go unnoticed, leading to water damage,
                pressure loss, and higher
                <strong>utility costs if left untreated.</strong>
            </p>
        `,
        tags: [
            { label: "Pressure loss",  top: "52%", left: "8%",  lineX: "80px",  lineY: "-60px" },
            { label: "Water waste",    top: "22%", left: "72%", lineX: "-60px", lineY: "80px"  },
            { label: "Hidden damage",  top: "62%", left: "52%", lineX: "-40px", lineY: "-50px" },
        ],
    },
    {
        id: 3,
        content: `
            <h2 class="scene-title">
                Clog
                <span class="scene-accent">Formation</span>
            </h2>
            <p class="scene-desc">
                Debris, grease, and buildup can block water flow,
                causing slow drainage, backups, and
                <strong>potential pipe stress.</strong>
            </p>
        `,
        tags: [
            { label: "Blocked flow",  top: "15%", left: "58%", lineX: "-40px", lineY: "70px"  },
            { label: "Slow drainage", top: "55%", left: "18%", lineX: "60px",  lineY: "-35px" },
            { label: "System backup", top: "70%", left: "56%", lineX: "-50px", lineY: "-45px" },
        ],
    },
    {
        id: 4,
        content: `
            <h2 class="scene-title">
                Optimize
                <span class="scene-accent">Pipe system</span>
            </h2>
            <p class="scene-desc">
                A fully restored and <strong>precision-engineered</strong> piping system
                designed for maximum flow efficiency, structural integrity,
                and long-term reliability.
            </p>
        `,
        tags: [
            { label: "Smooth flow",          top: "35%", left: "60%", lineX: "-50px", lineY: "40px"  },
            { label: "Leak-free system",     top: "72%", left: "20%", lineX: "60px",  lineY: "-40px" },
            { label: "Long-term durability", top: "72%", left: "54%", lineX: "-40px", lineY: "-40px" },
        ],
    },
];

interface Props {
    currentScene: number;
}

export const SceneOverlay = ({ currentScene }: Props) => {
    const sceneRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        scenes.forEach((_, i) => {
            const el = sceneRefs.current[i];
            if (!el) return;

            if (i === currentScene) {
                const children = el.querySelectorAll(
                    `.${styles.textWrapper}, .${styles.tag}`
                );
                gsap.killTweensOf([el, ...Array.from(children)]);
                gsap.set(el, { opacity: 1, pointerEvents: "auto" });
                gsap.set(children, { opacity: 0, y: 24 });
                gsap.to(children, {
                    opacity: 1,
                    y: 0,
                    duration: 0.55,
                    ease: "power3.out",
                    stagger: 0.12,
                    delay: 0.15,
                });
            } else {
                gsap.killTweensOf(el);
                gsap.to(el, {
                    opacity: 0,
                    duration: 0.3,
                    ease: "power2.in",
                    onComplete: () => {
                        if (el) el.style.pointerEvents = "none";
                    },
                });
            }
        });
    }, [currentScene]);

    return (
        <div className={styles.overlay}>
            {scenes.map((scene, i) => (
                <div
                    key={scene.id}
                    ref={(el) => { sceneRefs.current[i] = el; }}
                    className={styles.scene}
                    style={{
                        opacity: i === 0 ? 1 : 0,
                        pointerEvents: i === 0 ? "auto" : "none",
                    }}
                >
                    {/* Contenido izquierda */}
                    <div className={styles.contentContainer}>
                        <div
                            className={styles.textWrapper}
                            dangerouslySetInnerHTML={{ __html: scene.content }}
                        />
                    </div>

                    {/* Tags con líneas diagonales SVG */}
                    {scene.tags?.map((tag, j) => (
                        <div
                            key={j}
                            className={styles.tag}
                            style={{ top: tag.top, left: tag.left }}
                        >
                            {/* SVG para la línea diagonal */}
                            <svg
                                className={styles.tagSvg}
                                style={{
                                    position: "absolute",
                                    overflow: "visible",
                                    top: "50%",
                                    left: "50%",
                                    width: 0,
                                    height: 0,
                                    pointerEvents: "none",
                                }}
                            >
                                <line
                                    x1="0" y1="0"
                                    x2={tag.lineX} y2={tag.lineY}
                                    stroke="rgba(26,26,46,0.4)"
                                    strokeWidth="1"
                                />
                                {/* Dot en el extremo de la línea */}
                                <circle
                                    cx={tag.lineX} cy={tag.lineY}
                                    r="3"
                                    fill="rgba(26,26,46,0.4)"
                                />
                            </svg>
                            <span className={styles.tagLabel}>{tag.label}</span>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};