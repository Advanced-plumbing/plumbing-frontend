"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./AppleScroll.module.css";

gsap.registerPlugin(ScrollTrigger);

export const AppleScroll = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current!;
        const context = canvas.getContext("2d")!;

        const frameCount = 534;
        const images: HTMLImageElement[] = [];

        const currentFramePath = (index: number) =>
            `/frames/frame_${String(index).padStart(4, "0")}.jpg`;

        // 🔥 preload
        for (let i = 0; i < frameCount; i++) {
            const img = new Image();
            img.src = currentFramePath(i + 1);
            images.push(img);
        }

        // 🔥 STOPS (tus escenas)
        const stops = [0, 186, 325, 435, 533];

        // ✅ DEFINE PRIMERO
        let currentIndex = 0;
        let targetFrame = stops[0];
        let currentFrame = stops[0];
        let isAnimating = false;

        // 🎯 RENDER (ahora sí funciona)
        const render = () => {
            const img = images[Math.floor(currentFrame)];
            if (!img) return;

            const canvasWidth = canvas.width;
            const canvasHeight = canvas.height;

            const scale = Math.max(
                canvasWidth / img.width,
                canvasHeight / img.height
            );

            const drawWidth = img.width * scale;
            const drawHeight = img.height * scale;

            const x = (canvasWidth - drawWidth) / 2;
            const y = (canvasHeight - drawHeight) / 2;

            context.clearRect(0, 0, canvasWidth, canvasHeight);
            context.drawImage(img, x, y, drawWidth, drawHeight);
        };

        // 📱 resize con DPR (pro)
        const resizeCanvas = () => {
            const dpr = window.devicePixelRatio || 1;

            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;

            canvas.style.width = `${window.innerWidth}px`;
            canvas.style.height = `${window.innerHeight}px`;

            context.setTransform(dpr, 0, 0, dpr, 0, 0);

            render();
        };

        const disableScroll = () => {
            document.body.style.overflow = "hidden";
        };

        const enableScroll = () => {
            document.body.style.overflow = "";
        };

        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();

        images[0].onload = render;

        // 🎯 detectar scroll
        ScrollTrigger.create({
            trigger: wrapperRef.current,
            start: "top top",
            end: "+=200%",
            pin: true,
            scrub: false,
            snap: {
                snapTo: 1 / (stops.length - 1),
                duration: 0.3,
            },
            onUpdate: (self) => {
                const progress = self.progress;
                const section = Math.round(progress * (stops.length - 1));

                if (section !== currentIndex && !isAnimating) {
                    currentIndex = section;

                    gsap.to({}, {
                        duration: 2,
                        ease: "power4.out",

                        onStart: () => {
                            isAnimating = true;
                            disableScroll(); // 🔒 bloquea scroll real
                        },

                        onUpdate: function () {
                            targetFrame = gsap.utils.interpolate(
                                currentFrame,
                                stops[currentIndex],
                                this.progress()
                            );
                        },

                        onComplete: () => {
                            currentFrame = stops[currentIndex];
                            isAnimating = false;
                            enableScroll(); // 🔓 libera scroll
                        }
                    });
                }
            }
        });

        // 🔥 LOOP DE INERCIA (LA MAGIA)
        const animate = () => {
            currentFrame += (targetFrame - currentFrame) * 0.08;

            render();
            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            ScrollTrigger.getAll().forEach(st => st.kill());
        };

    }, []);

    return (
        <div ref={wrapperRef} style={{ height: "500vh" }}>
            <canvas
                ref={canvasRef}
                style={{
                    position: "sticky",
                    top: 0,
                    width: "100%",
                    height: "100%",
                }}
            />
        </div>
    );
};