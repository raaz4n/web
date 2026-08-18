"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const QUOTES = [
    {
        parts: [
            { text: 'Time to mix drinks and change lives.', color: "#B32F6C" },
        ],
    },
    {
        parts: [
            { text: "The best part of working close is you get to hear every beautiful sound.", color: "red" },
        ],
    },
    {
        parts: [
            { text: "You thought you were better than me?!", color: "orange" },
        ]
    },
    {
        parts: [
            { text: "A MAN'S DREAM... WILL NEVER DIE!", color: "gold" },
        ]
    },
    {
        parts: [
            { text: "Let's make this right as rain.", color: "#5655b8" },
        ]
    },
    {
        parts: [
            { text: "Guardians make their own fate.", color: "white" },
        ]
    },
];

const LINKS = [
  { href: "/", label: "~/" },
  { href: "/about", label: "~/about"},
  { href: "/blog", label: "~/blog" },
  { href: "/art", label: "~/art" },
  { href: "/projects", label: "~/projects" },
];

export default function Header() {
    const headerRef = useRef<HTMLElement>(null);
    const brandRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLDivElement>(null);
    const navRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();

    useEffect(() => {
        let target = 0;
        let slow = 0;
        let mid = 0;
        let fast = 0;

        let raf: number | null = null;
        let last: number | null = null;
        let isMobile = window.innerWidth <= 1000;
        const lerp = (from: number, to: number, t: number) => from + (to - from) * t;

        const handleScroll = () => {
            target = isMobile ? 1 : Math.min(1, window.scrollY / 100);

            if (raf === null) {
                raf = requestAnimationFrame(tick);
            }
        };

        const onResize = () => {
            isMobile = window.innerWidth <= 1000;
            handleScroll();
        };

        const tick = (now: number) => {
            const dt = last ? (now - last) / 1000 : 1 / 60;
            last = now;
            
            slow += (target - slow) * (1 - Math.exp(-8 * dt));
            mid += (target - mid) * (1 - Math.exp(-10 * dt));
            fast += (target - fast) * (1 - Math.exp(-12 * dt));

            const header = headerRef.current;
            if (header) {
                header.style.height = `${lerp(200, 130, slow)}px`;
                header.style.transform = `translateY(${lerp(0, -30, slow)}px)`;
            }

            const brand = brandRef.current;
            if (brand) {
                brand.style.height = `${lerp(120, 70, fast)}px`;
                brand.style.transform = `translateX(-50%) translateY(${lerp(0, -40, fast)}px)`;
                brand.style.width = `min(${lerp(650, 1000, fast)}px, 100% - 30px)`;
            }

            const logo = logoRef.current;
            if (logo) {
                logo.style.fontSize = `${lerp(80, 60, mid)}px`;
            }

            const nav = navRef.current;
            if (nav) {
                nav.style.width = `min(${lerp(650, 1000, mid)}px, 100% - 30px)`;
                nav.style.transform = `translateX(-50%) translateY(${lerp(0, -90, mid)}px)`;
            }

            const settled =
                Math.abs(target - slow) < 0.001 &&
                Math.abs(target - mid) < 0.001 &&
                Math.abs(target - fast) < 0.001;

            if (!settled) {
                raf = requestAnimationFrame(tick);
            }
            else {
                slow = mid = fast = target;
                raf = null;
                last = null;
            }
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true});
        window.addEventListener("resize", onResize);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", onResize);
            if (raf !== null) {
                cancelAnimationFrame(raf);
            }
        };
    }, [])

    return (
        <>
            <div className="top">
                <div className="ticker">
                    <div className="tickerTrack">
                        {[...QUOTES, ...QUOTES, ...QUOTES, ...QUOTES, ...QUOTES, ...QUOTES].map((quote, i) => (
                            <span key={i} className="tickerQuote">
                                {quote.parts.map((part, j) => (
                                <span key={j} style={{ color: part.color }}>
                                    {part.text}
                                </span>
                                ))}
                                <span className="tickerSep">~</span>
                            </span>
                            ))}
                    </div>
                </div>
            </div>
            <header className="header" ref={headerRef}>
                <div className="overlay"></div>
            </header>
            <div className="brand" ref={brandRef}>
                <div className="brand-bg">
                    <div className="brand-bg-track">
                        <img src="/photos/range.png" alt="" />
                        <img src="/photos/range.png" alt="" />
                    </div>
                </div>
                <div className="raz" ref={logoRef}>
                    raaz4n
                </div>
            </div>
            <div className="nav" ref={navRef}>
                {LINKS.map((link) => (
                <Link
                    key={link.href}
                    href={link.href}
                    className={`link ${pathname === link.href ? "active" : ""}`}
                >
                    {link.label}
                </Link>
                ))}
            </div>
        </>
    )
}