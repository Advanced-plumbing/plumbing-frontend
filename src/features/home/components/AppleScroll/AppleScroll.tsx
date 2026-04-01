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

        // 🔥 VARIABLES CLAVE
        let targetFrame = 0;   // lo que manda el scroll
        let currentFrame = 0;  // lo que se renderiza (suavizado)

        // 🎯 RENDER (cover perfecto)
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

        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();

        images[0].onload = render;

        // 🔥 GSAP → SOLO calcula el target
        ScrollTrigger.create({
            trigger: wrapperRef.current,
            start: "top top",
            end: "+=500%",
            pin: true,
            scrub: true,
            onUpdate: (self) => {
                targetFrame = self.progress * (frameCount - 1);
            }
        });

        // 🔥 LOOP DE INERCIA (LA MAGIA)
        const animate = () => {
            currentFrame += (targetFrame - currentFrame) * 0.08; // 👈 easing

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