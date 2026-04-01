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
        const imageSeq = { frame: 0 };

        const currentFrame = (index: number) =>
            `/frames/frame_${String(index).padStart(4, "0")}.jpg`;

        // 🔥 PRELOAD
        for (let i = 0; i < frameCount; i++) {
            const img = new Image();
            img.src = currentFrame(i + 1);
            images.push(img);
        }

        // ✅ DEFINE render ANTES
        const render = () => {
            const img = images[Math.floor(imageSeq.frame)];
            if (!img) return;

            const canvasWidth = canvas.width;
            const canvasHeight = canvas.height;

            const imgWidth = img.width;
            const imgHeight = img.height;

            const scale = Math.max(
                canvasWidth / imgWidth,
                canvasHeight / imgHeight
            );

            const drawWidth = imgWidth * scale;
            const drawHeight = imgHeight * scale;

            const x = (canvasWidth - drawWidth) / 2;
            const y = (canvasHeight - drawHeight) / 2;

            context.clearRect(0, 0, canvasWidth, canvasHeight);
            context.drawImage(img, x, y, drawWidth, drawHeight);
        };

        // ✅ AHORA sí puedes usar render
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

        gsap.to(imageSeq, {
            frame: frameCount - 1,
            snap: "frame",
            ease: "none",
            scrollTrigger: {
                trigger: wrapperRef.current,
                start: "top top",
                end: "+=500%",
                scrub: 0.5,
                pin: true,
            },
            onUpdate: render,
        });

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