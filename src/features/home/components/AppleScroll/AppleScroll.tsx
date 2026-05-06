"use client";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./AppleScroll.module.css";
import { SceneOverlay } from "@/features/home/components/AppleScroll/SceneOverlay/SceneOverlay";

const isMobile = () =>
    typeof window !== "undefined" && window.innerWidth <= 768;

export const AppleScroll = () => {
    const [currentScene, setCurrentScene] = useState(0);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [mobile, setMobile] = useState(false);

    // Detectar mobile en el cliente
    useEffect(() => {
        setMobile(isMobile());
        const onResize = () => setMobile(isMobile());
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    // ── MOBILE: video en loop ────────────────────────────────
    useEffect(() => {
        if (!mobile) return;
        const video = videoRef.current;
        if (!video) return;
        video.play().catch(() => {});
    }, [mobile]);

    // ── DESKTOP: lógica original con canvas ─────────────────
    useEffect(() => {
        if (mobile) return;

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
        const burstFrameCount = 56;
        let burstCurrentFrame = 0;

        for (let i = 0; i < frameCount; i++) {
            const img = new Image();
            img.src = `/plumbing-webp/plumbing_blur${String(i + 1).padStart(4, "0")}.webp`;
            images.push(img);
        }

        for (let i = 145; i <= 200; i++) {
            const img = new Image();
            img.src = `/burst-webp/blur${String(i).padStart(4, "0")}.webp`;
            burstImages.push(img);
        }

        let currentIndex = 0;
        const animationTarget = { frame: 0 };
        let isAnimating = false;

        const render = () => {
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
            if (isAnimating || currentIndex !== 2 || burstImages.length === 0) {
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
            burstCurrentFrame = (burstCurrentFrame + 0.5) % burstImages.length;
        };

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
        let animationFrameId: number;

        const animate = () => {
            render();
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

        const goToScene = (index: number) => {
            if (isAnimating) return;
            if (index < 0 || index >= stops.length) return;
            if (index === currentIndex) return;

            isAnimating = true;
            currentIndex = index;
            setCurrentScene(index);

            if (index === 2) burstCurrentFrame = 0;

            gsap.to({ val: canvasOffsetY }, {
                val: index === stops.length - 1 ? 95 : 0,
                duration: 1.4,
                delay: index === stops.length - 1 ? 0.4 : 0,
                ease: "none",
                onUpdate: function () {
                    canvasOffsetY = this.targets()[0].val;
                },
            });

            gsap.to(animationTarget, {
                frame: stops[index],
                duration: 2,
                ease: "none",
                onUpdate: render,
                onComplete: () => {
                    isAnimating = false;
                },
            });
        };

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
            window.removeEventListener("mousemove", onMouseMove);
            wrapper.removeEventListener("wheel", onWheel);
            wrapper.removeEventListener("touchstart", onTouchStart);
            wrapper.removeEventListener("touchend", onTouchEnd);
            cancelAnimationFrame(animationFrameId);
        };
    }, [mobile]);

    // ── MOBILE: render video ─────────────────────────────────
    if (mobile) {
        return (
            <div className={styles.wrapper} data-header-theme="dark">
                <video
                    ref={videoRef}
                    className={styles.mobileVideo}
                    src="/animation/animation.mp4"
                    muted
                    autoPlay
                    loop
                    playsInline
                    disablePictureInPicture
                    preload="auto"
                />
                <SceneOverlay currentScene={0} />
            </div>
        );
    }

    // ── DESKTOP: render canvas ───────────────────────────────
    return (
        <div ref={wrapperRef} className={styles.wrapper} data-header-theme="dark">
            <canvas ref={canvasRef} className={styles.canvas} />
            <SceneOverlay currentScene={currentScene} />
        </div>
    );
};