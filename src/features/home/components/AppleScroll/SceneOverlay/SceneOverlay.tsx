"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./SceneOverlay.module.css";

interface Tag {
    label: string;
    top: string;   // % del viewport — donde está el LABEL
    left: string;  // % del viewport — donde está el LABEL
    // El punto TARGET en % del viewport (donde apunta la línea)
    targetTop: string;
    targetLeft: string;
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
                Plumbing you can trust, <span class="scene-accent">results that last.</span>
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
            { label: "Material decay",
                top: "12%",  left: "80%",
                targetTop: "25%",  targetLeft: "62%",   // apunta al top de la tubería oxidada
            },
            { label: "Flow restriction",
                top: "63%",  left: "35%",
                targetTop: "45%", targetLeft: "58%",   // apunta al centro de la tubería
            },
            { label: "Structural weakness",
                top: "72%",  left: "82%",
                targetTop: "95%", targetLeft: "60%",   // apunta al bottom de la tubería
            },
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
            { label: "Pressure loss",
                top: "75%",  left: "18%",
                targetTop: "85%", targetLeft: "37%",
            },
            { label: "Water waste",
                top: "70%",  left: "85%",
                targetTop: "40%", targetLeft: "65%",
            },
            { label: "Hidden damage",
                top: "62%",  left: "52%",
                targetTop: "68%", targetLeft: "40%",
            },
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
            { label: "Blocked flow",
                top: "15%",  left: "83%",
                targetTop: "32%", targetLeft: "65%",
            },
            { label: "Slow drainage",
                top: "70%",  left: "40%",
                targetTop: "85%", targetLeft: "63%",
            },
            { label: "System backup",
                top: "70%",  left: "90%",
                targetTop: "95%", targetLeft: "68%",
            },
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
            { label: "Smooth flow",
                top: "35%",  left: "90%",
                targetTop: "50%", targetLeft: "70%",
            },
            { label: "Leak-free system",
                top: "90%",  left: "45%",
                targetTop: "65%", targetLeft: "20%",
            },
            { label: "Long-term durability",
                top: "90%",  left: "80%",
                targetTop: "70%", targetLeft: "58%",
            },
        ],
    },
];

const TagLine = ({ tag }: { tag: Tag }) => {
    const svgRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
        const update = () => {
            const svg = svgRef.current;
            if (!svg) return;

            const vw = window.innerWidth;
            const vh = window.innerHeight;

            const labelX = parseFloat(tag.left) / 100 * vw;
            const labelY = parseFloat(tag.top) / 100 * vh;
            const targetX = parseFloat(tag.targetLeft) / 100 * vw;
            const targetY = parseFloat(tag.targetTop) / 100 * vh;

            // Delta desde el centro del label hasta el target
            const dx = targetX - labelX;
            const dy = targetY - labelY;

            // Codo en el punto medio del recorrido
            const elbowX = dx / 2;
            const elbowY = 0;

            const line = svg.querySelector("polyline");
            const dot = svg.querySelector("circle");

            if (line) line.setAttribute("points", `0,0 ${elbowX},${elbowY} ${dx},${dy}`);
            if (dot) {
                dot.setAttribute("cx", String(dx));
                dot.setAttribute("cy", String(dy));
            }
        };

        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, [tag]);

    return (
        <div
            className={styles.tag}
            style={{ top: tag.top, left: tag.left }}
        >
            <svg
                ref={svgRef}
                xmlns="http://www.w3.org/2000/svg"
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    overflow: "visible",
                    width: "1px",
                    height: "1px",
                    zIndex: 0,
                    pointerEvents: "none",
                }}
            >
                <polyline
                    points="0,0 0,0 0,0"
                    fill="none"
                    stroke="rgba(26,26,46,0.45)"
                    strokeWidth="1.2"
                />
                <circle cx="0" cy="0" r="2.5" fill="#1a1a2e" opacity="0.45" />
            </svg>
            <span className={styles.tagLabel}>{tag.label}</span>
        </div>
    );
};

interface Props {
    currentScene: number;
}

export const SceneOverlay = ({ currentScene }: Props) => {
    const sceneRefs = useRef<(HTMLDivElement | null)[]>([]);
    const overlayRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        scenes.forEach((_, i) => {
            const el = sceneRefs.current[i];
            if (!el) return;

            if (i === currentScene) {
                const textEl = el.querySelector(`.${styles.textWrapper}`);
                const tagEls = el.querySelectorAll(`.${styles.tag}`);
                const allChildren = el.querySelectorAll(`.${styles.textWrapper}, .${styles.tag}`);

                gsap.killTweensOf([el, ...Array.from(allChildren)]);
                gsap.set(el, { opacity: 1, pointerEvents: "auto" });

                // Texto aparece primero
                gsap.set(textEl, { opacity: 0, y: 24 });
                gsap.to(textEl, {
                    opacity: 1,
                    y: 0,
                    duration: 0.55,
                    ease: "power3.out",
                    delay: 0.2,  // ← delay del texto
                });

                // Tags aparecen después
                gsap.set(tagEls, { opacity: 0, y: 24 });
                gsap.to(tagEls, {
                    opacity: 1,
                    y: 0,
                    duration: 0.55,
                    ease: "power3.out",
                    stagger: 0.15,
                    delay: 1,  // ← delay de los tags (más tarde que el texto)
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
                        {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
                    </div>
                    // En el JSX, reemplaza el bloque de tags:
                    {scene.tags?.map((tag, j) => {
                        // Calculamos en render — el SVG conecta label → target en %
                        return (
                            <TagLine
                                key={j}
                                tag={tag}
                            />
                        );
                    })}
                </div>
            ))}
        </div>
    );
};