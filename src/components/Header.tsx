"use client"
import { useEffect, useRef } from "react";

export default function Header() {
    const headerRef = useRef<HTMLElement>(null);
    const brandRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLDivElement>(null);
    const navRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let target = 0;
        let current = 0;
        let raf: number | null = null;
        const lerp = (from: number, to: number, t: number) => from + (to - from) * t;

        const handleScroll = () => {
            target = Math.min(1, window.scrollY / 100);

            if (raf === null) {
                raf = requestAnimationFrame(tick);
            }
        };

        let last: number | null = null;

        const tick = (now: number) => {
            const dt = last ? (now - last) / 1000 : 1 / 60;
            last = now;
            current += (target - current) * (1 - Math.exp(-10 * dt));

            const header = headerRef.current;
            if (header) {
                header.style.height = `${lerp(200, 130, current)}px`;
                header.style.transform = `translateY(${lerp(0, -30, current)}px)`;
            }

            const brand = brandRef.current;
            if (brand) {
                brand.style.height = `${lerp(120, 70, current)}px`;
                brand.style.transform = `translateX(-50%) translateY(${lerp(0, -40, current)}px)`;
                brand.style.width = `min(${lerp(650, 1000, current)}px, 100% - 30px)`;
            }

            const logo = logoRef.current;
            if (logo) {
                logo.style.fontSize = `${lerp(80, 60, current)}px`;
            }

            const nav = navRef.current;
            if (nav) {
                nav.style.width = `min(${lerp(650, 1000, current)}px, 100% - 30px)`;
                nav.style.transform = `translateX(-50%) translateY(${lerp(0, -90, current)}px)`;
            }

            if (Math.abs(target - current) > 0.001) {
                raf = requestAnimationFrame(tick);
            }
            else {
                current = target;
                raf = null;
                last = null
            }
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true});

        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (raf !== null) {
                cancelAnimationFrame(raf);
            }
        };
    }, [])

    return (
        <>
            <div className="top">
            </div>
            <header className="header" ref={headerRef}>
                <div className="overlay"></div>
            </header>
            <div className="brand" ref={brandRef}>
                <div className="raz" ref={logoRef}>
                    raaz4n
                </div>
            </div>
            <div className="nav" ref={navRef}>
                <div className="link">
                    ~/
                </div>
                <div className="link">
                    ~/blog
                </div>
                <div className="link">
                    ~/art
                </div>
                <div className="link">
                    ~/projects
                </div>
            </div>
        </>
    )
}