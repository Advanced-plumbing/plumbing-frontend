"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./AppleScroll.module.css";

export const AppleScroll = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current!;
        const ctx = canvas.getContext("2d")!;
        const wrapper = wrapperRef.current!;

        const frameCount = 534;
        const images: HTMLImageElement[] = [];
        const stops = [0, 186, 325, 435, 533]; // tus escenas

        // Preload imágenes
        for (let i = 0; i < frameCount; i++) {
            const img = new Image();
            img.src = `/frames/frame_${String(i + 1).padStart(4, "0")}.jpg`;
            images.push(img);
        }

        let currentIndex = 0;
        let currentFrame = 0;
        let targetFrame = 0;
        let isAnimating = false;

        // ── Render ──────────────────────────────────────────
        const render = () => {
            const img = images[Math.round(currentFrame)];
            if (!img?.complete) return;

            const cw = canvas.width / (window.devicePixelRatio || 1);
            const ch = canvas.height / (window.devicePixelRatio || 1);
            const scale = Math.max(cw / img.width, ch / img.height);
            const dw = img.width * scale;
            const dh = img.height * scale;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, (cw - dw) / 2, (ch - dh) / 2, dw, dh);
        };

        // ── Resize ──────────────────────────────────────────
        const resizeCanvas = () => {
            const dpr = window.devicePixelRatio || 1;
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            canvas.style.width = `${window.innerWidth}px`;
            canvas.style.height = `${window.innerHeight}px`;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            render();
        };

        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();
        images[0].onload = render;

        // ── Animación de inercia ─────────────────────────────
        const animate = () => {
            currentFrame += (targetFrame - currentFrame) * 0.08;
            render();
            requestAnimationFrame(animate);
        };
        animate();

        // ── Ir a escena ──────────────────────────────────────
        const goToScene = (index: number) => {
            if (isAnimating) return;
            if (index < 0 || index >= stops.length) return;
            if (index === currentIndex) return;

            isAnimating = true;
            currentIndex = index;

            gsap.to({}, {
                duration: 1.5,
                ease: "power3.out",
                onUpdate: function () {
                    targetFrame = gsap.utils.interpolate(
                        currentFrame,
                        stops[currentIndex],
                        this.progress()
                    );
                },
                onComplete: () => {
                    targetFrame = stops[currentIndex];
                    currentFrame = stops[currentIndex];
                    isAnimating = false;
                },
            });
        };

        // ── Wheel handler — el corazón del fix ───────────────
        let wheelAccum = 0;
        const WHEEL_THRESHOLD = 80;
        let touchStartY = 0; // ← agrégalo aquí

        const onWheel = (e: WheelEvent) => {
            // Liberar solo si estás en la última escena Y la animación ya terminó
            if (currentIndex === stops.length - 1 && !isAnimating && e.deltaY > 0) return;
            if (currentIndex === 0 && !isAnimating && e.deltaY < 0) return;

            e.preventDefault();
            e.stopPropagation();

            if (isAnimating) return;

            wheelAccum += e.deltaY;

            if (wheelAccum > WHEEL_THRESHOLD) {
                wheelAccum = 0;
                goToScene(currentIndex + 1);
            } else if (wheelAccum < -WHEEL_THRESHOLD) {
                wheelAccum = 0;
                goToScene(currentIndex - 1);
            }
        };

        const onTouchStart = (e: TouchEvent) => {
            touchStartY = e.touches[0].clientY;
        };

        const onTouchEnd = (e: TouchEvent) => {
            const delta = touchStartY - e.changedTouches[0].clientY;
            if (Math.abs(delta) < 30) return;

            if (currentIndex === stops.length - 1 && !isAnimating && delta > 0) return;
            if (currentIndex === 0 && !isAnimating && delta < 0) return;

            if (isAnimating) return;
            goToScene(currentIndex + (delta > 0 ? 1 : -1));
        };

        // 🔑 Escuchar en el WRAPPER, no en window
        wrapper.addEventListener("wheel", onWheel, { passive: false });
        wrapper.addEventListener("touchstart", onTouchStart, { passive: true });
        wrapper.addEventListener("touchend", onTouchEnd, { passive: true });

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            wrapper.removeEventListener("wheel", onWheel);
            wrapper.removeEventListener("touchstart", onTouchStart);
            wrapper.removeEventListener("touchend", onTouchEnd);
        };
    }, []);

    return (
        // height: 100vh — ya NO necesitas 500vh
        <div ref={wrapperRef} className={styles.wrapper}>
            <canvas ref={canvasRef} className={styles.canvas} />
        </div>
    );
};