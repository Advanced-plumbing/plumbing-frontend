"use client";
import { useState } from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./AppleScroll.module.css";
import { SceneOverlay} from "@/features/home/components/AppleScroll/SceneOverlay/SceneOverlay";


export const AppleScroll = () => {
    const [currentScene, setCurrentScene] = useState(0);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // ── Parallax con mouse ───────────────────────────────
        let mouseX = 0;
        let mouseY = 0;
        let currentX = 0;
        let currentY = 0;

        const PARALLAX_STRENGTH = 25;
        const LERP_SPEED = 0.05;

        const onMouseMove = (e: MouseEvent) => {
            mouseX = (e.clientX / window.innerWidth - 0.5) * -2;
            mouseY = (e.clientY / window.innerHeight - 0.5) * -2;
        };

        window.addEventListener("mousemove", onMouseMove);

        const canvas = canvasRef.current!;
        const ctx = canvas.getContext("2d")!;
        const wrapper = wrapperRef.current!;

        const frameCount = 285;
        const images: HTMLImageElement[] = [];
        const stops = [0, 80, 141, 216, 280];

        const burstImages: HTMLImageElement[] = [];
        const burstFrameCount = 56; // De 145 a 200 son aprox 56 frames
        let burstCurrentFrame = 0;

        // Preload imágenes
        for (let i = 0; i < frameCount; i++) {
            const img = new Image();
            img.src = `/plumbing-webp/plumbing_blur${String(i + 1).padStart(4, "0")}.webp`;
            images.push(img);
        }

        for (let i = 145; i <= 200; i++) {
            const img = new Image();
            // Ajusta el padding según tus archivos (si es burst0145 usa padStart 4)
            img.src = `/burst-webp/blur${String(i).padStart(4, "0")}.webp`;
            burstImages.push(img);
        }

        let currentIndex = 0;

        // Objeto de control animable por GSAP para controlar el frame actual
        const animationTarget = { frame: 0 };
        let isAnimating = false;

        // ── Render ──────────────────────────────────────────
        const render = () => {
            // Redondeamos el valor flotante que nos da GSAP al entero más cercano
            const frameIndex = Math.floor(animationTarget.frame);
            const img = images[frameIndex];
            if (!img?.complete) return;

            const cw = canvas.width / (window.devicePixelRatio || 1);
            const ch = canvas.height / (window.devicePixelRatio || 1);
            const scale = Math.max(cw / img.width, ch / img.height);
            const dw = img.width * scale;
            const dh = img.height * scale;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, (cw - dw) / 2, (ch - dh) / 2, dw, dh);
        };

        const renderBurst = () => {
            // CAMBIO CLAVE: Solo renderizamos si NO estamos animando
            // y si el índice actual es el de la escena del agua (2).
            if (isAnimating || currentIndex !== 2 || burstImages.length === 0) {
                // Opcional: Resetear el frame del loop para que siempre
                // empiece de cero al detenerse la tubería.
                burstCurrentFrame = 0;
                return;
            }

            const img = burstImages[Math.floor(burstCurrentFrame)];
            if (!img?.complete) return;

            const cw = canvas.width / (window.devicePixelRatio || 1);
            const ch = canvas.height / (window.devicePixelRatio || 1);
            const scale = Math.max(cw / img.width, ch / img.height);
            const dw = img.width * scale;
            const dh = img.height * scale;

            ctx.drawImage(img, (cw - dw) / 2, (ch - dh) / 2, dw, dh);

            // Lógica de Loop
            burstCurrentFrame = (burstCurrentFrame + 0.5) % burstImages.length;
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

        let canvasOffsetY = 0;

        // ── Bucle de Animación (Solo encargado de Parallax y Redraw continuo) ──
        let animationFrameId: number;
        const animate = () => {
            render(); // Dibuja el frame que GSAP está actualizando en tiempo real
            renderBurst();

            currentX += (mouseX * PARALLAX_STRENGTH - currentX) * LERP_SPEED;
            currentY += (mouseY * PARALLAX_STRENGTH - currentY) * LERP_SPEED;

            const time = Date.now() / 1000;
            const floatY = Math.sin(time * 0.6) * 8;
            const floatX = Math.sin(time * 0.4) * 4;

            canvas.style.transform = `scale(1.08) translate(${currentX + floatX}px, ${currentY + floatY + canvasOffsetY}px)`;

            animationFrameId = requestAnimationFrame(animate);
        };
        animate();

        // ── Ir a escena (Manejo de curvas mediante GSAP de forma nativa) ──
        const goToScene = (index: number) => {
            if (isAnimating) return;
            if (index < 0 || index >= stops.length) return;
            if (index === currentIndex) return;

            isAnimating = true;
            currentIndex = index;
            setCurrentScene(index);

            if (index === 2) burstCurrentFrame = 0;

            // Movimiento de compensación vertical del Canvas en la última escena
            gsap.to({ val: canvasOffsetY }, {
                val: index === stops.length - 1 ? 95 : 0,
                duration: 1.4,
                delay: index === stops.length - 1 ? 0.4 : 0,
                ease: "none",
                onUpdate: function() {
                    canvasOffsetY = this.targets()[0].val;
                },
            });

            // ANIMACIÓN CLAVE: GSAP cambia de forma fluida el número de frame
            gsap.to(animationTarget, {
                frame: stops[index],
                duration: 2,          // Duración de la transición entre paradas
                ease: "none",
                onUpdate: render,       // Fuerza el renderizado por cada sutil cambio decimal
                onComplete: () => {
                    isAnimating = false;
                },
            });
        };

        // ── Wheel & Touch handlers ───────────────────────────
        let wheelAccum = 0;
        const WHEEL_THRESHOLD = 80;
        let touchStartY = 0;

        const onWheel = (e: WheelEvent) => {
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

        wrapper.addEventListener("wheel", onWheel, { passive: false });
        wrapper.addEventListener("touchstart", onTouchStart, { passive: true });
        wrapper.addEventListener("touchend", onTouchEnd, { passive: true });

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            wrapper.removeEventListener("wheel", onWheel);
            wrapper.removeEventListener("touchstart", onTouchStart);
            wrapper.removeEventListener("touchend", onTouchEnd);
            window.removeEventListener("mousemove", onMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        // height: 100vh — ya NO necesitas 500vh
        <div ref={wrapperRef} className={styles.wrapper} data-header-theme="dark">
            <canvas ref={canvasRef} className={styles.canvas} />
            <SceneOverlay currentScene={currentScene} /> {/* ← agregar */}
        </div>
    );
};