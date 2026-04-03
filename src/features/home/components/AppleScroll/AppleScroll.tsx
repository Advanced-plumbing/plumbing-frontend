"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./AppleScroll.module.css";

export const AppleScroll = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // ── Parallax con mouse ───────────────────────────────
        let mouseX = 0;
        let mouseY = 0;
        let currentX = 0;
        let currentY = 0;

        const PARALLAX_STRENGTH = 25; // px máximo de desplazamiento
        const LERP_SPEED = 0.05;       // suavidad (más bajo = más lento)

        const onMouseMove = (e: MouseEvent) => {
            // Normalizar de -1 a 1 según posición en pantalla
            mouseX = (e.clientX / window.innerWidth - 0.5) * -2;  // invertido
            mouseY = (e.clientY / window.innerHeight - 0.5) * -2; // invertido
        };

        window.addEventListener("mousemove", onMouseMove);


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
            // Lerp del frame (ya lo tenías)
            currentFrame += (targetFrame - currentFrame) * 0.08;
            render();

            // Lerp del parallax
            currentX += (mouseX * PARALLAX_STRENGTH - currentX) * LERP_SPEED;
            currentY += (mouseY * PARALLAX_STRENGTH - currentY) * LERP_SPEED;

            const time = Date.now() / 1000;
            const floatY = Math.sin(time * 0.6) * 12;
            const floatX = Math.sin(time * 0.4) * 6; // frecuencia diferente para que no sea lineal

            canvas.style.transform = `scale(1.08) translate(${currentX + floatX}px, ${currentY + floatY}px)`;

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
            window.removeEventListener("mousemove", onMouseMove);
        };
    }, []);

    return (
        // height: 100vh — ya NO necesitas 500vh
        <div ref={wrapperRef} className={styles.wrapper} data-header-theme="dark">
            <canvas ref={canvasRef} className={styles.canvas} />
        </div>
    );
};