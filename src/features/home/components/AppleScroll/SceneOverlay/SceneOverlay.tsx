"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./SceneOverlay.module.css";

interface Tag {
    label: string;
    top: string;
    left: string;
    lineX: number; // ← número, no string
    lineY: number;
}

interface Scene {
    id: number;
    verticalAlign?: "top" | "center"; // ← nuevo
    content: string;   // HTML directo
    tags?: Tag[];
}

const scenes: Scene[] = [
    {
        id: 0,
        verticalAlign: "center",
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
        verticalAlign: "center",
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
            { label: "Material decay",      top: "12%", left: "62%", lineX: -40, lineY: 60  },
            { label: "Flow restriction",    top: "50%", left: "32%", lineX: 60,  lineY: -30 },
            { label: "Structural weakness", top: "68%", left: "55%", lineX: -50, lineY: -40 },
        ],
    },
    {
        id: 2,
        verticalAlign: "center",
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
            { label: "Pressure loss",  top: "52%", left: "8%",  lineX: 80,  lineY: -60 },
            { label: "Water waste",    top: "22%", left: "72%", lineX: -60, lineY: 80 },
            { label: "Hidden damage",  top: "62%", left: "52%", lineX: -40, lineY: -50 },
        ],
    },
    {
        id: 3,
        verticalAlign: "center",
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
            { label: "Blocked flow",  top: "15%", left: "58%", lineX: -40, lineY: 70 },
            { label: "Slow drainage", top: "55%", left: "18%", lineX: 60,  lineY: -35 },
            { label: "System backup", top: "70%", left: "56%", lineX: -50, lineY: -45 },
        ],
    },
    {
        id: 4,
        verticalAlign: "top",
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
            { label: "Smooth flow",          top: "35%", left: "60%", lineX: -50, lineY: 40 },
            { label: "Leak-free system",     top: "72%", left: "20%", lineX: 60,  lineY: -40 },
            { label: "Long-term durability", top: "72%", left: "54%", lineX: -40, lineY: -40 },
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
                    <div
                        className={styles.contentContainer}
                        style={{
                            justifyContent: scene.verticalAlign === "top" ? "flex-start" : "center",
                            paddingTop: scene.verticalAlign === "top" ? "5%" : "0",
                        }}
                    >
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
                            {/* SVG con dimensiones reales — no más width/height 0 */}
                            <svg
                                className={styles.tagSvg}
                                xmlns="http://www.w3.org/2000/svg"
                                style={{
                                    position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    overflow: "visible",
                                    width: "1px",
                                    height: "1px",
                                    zIndex: 0,
                                }}
                            >
                                <line
                                    x1="0"
                                    y1="0"
                                    x2={tag.lineX}
                                    y2={tag.lineY}
                                    stroke="rgba(26,26,46,0.5)"
                                    strokeWidth="1.2"
                                />
                                <circle
                                    cx={tag.lineX}
                                    cy={tag.lineY}
                                    r="2.5"
                                    fill="#1a1a2e"
                                    opacity="0.5"
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