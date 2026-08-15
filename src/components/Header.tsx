"use client"
import { useEffect, useRef } from "react";

export default function Header() {
    console.log("Header RENDER");
    const headerRef = useRef<HTMLElement>(null);
    const brandRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLDivElement>(null);
    const navRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        console.log("Header EFFECT ran");
        const handleScroll = () => {
            console.log("handleScroll", window.scrollY);
            const progress = Math.min(1, window.scrollY / 100);
            
            const lerp = (from: number, to: number, t: number) => from + (to - from) * t;

            const header = headerRef.current;
            if (header) {
                header.style.height = `${lerp(200, 130, progress)}px`;
                header.style.transform = `translateY(${lerp(0, -30, progress)}px)`;
            }

            const brand = brandRef.current;
            if (brand) {
                brand.style.height = `${lerp(120, 70, progress)}px`;
                brand.style.transform = `translateX(-50%) translateY(${lerp(0, -40, progress)}px)`;
                brand.style.width = `min(${lerp(650, 1000, progress)}px, 100% - 30px)`;
            }

            const logo = logoRef.current;
            if (logo) {
                logo.style.fontSize = `${lerp(80, 60, progress)}px`;
            }

            const nav = navRef.current;
            if (nav) {
                nav.style.width = `min(${lerp(650, 1000, progress)}px, 100% - 30px)`;
                nav.style.transform = `translateX(-50%) translateY(${lerp(0, -90, progress)}px)`
            }
        }

        window.addEventListener("scroll", handleScroll, { passive: true});
        return () => window.removeEventListener("scroll", handleScroll);
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