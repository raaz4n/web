"use client";

import { useEffect, useState } from "react";

const IMAGES = [
  {
    src: "/hoshi/hoshilogo.png",
    alt: "Hoshi logo",
    caption: "The logo for my 2D space-adventure game known as Hoshi. \
    This logo represents the main character - Hoshi, as well as all of the worlds that she explores. \
    It is also known as the Kanji 星, which translates to \"star\".",
  },
  {
    src: "/hoshi/spi2.png",
    alt: "Planet Spî",
    caption: "This image represents one of the many worlds that Hoshi will explore. \
    The planet known as Spî is a large and deserted planet with oddities like none other. \
    Covered by vast white sand and oceans, this world can cause a feeling of unease.",
  },
  {
    src: "/hoshi/world.png",
    alt: "World map",
    caption: "This is the first portion of the game, including 3 planets and a sort of space hub.",
  },
];

export default function Art() {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false);
            if (e.key === "ArrowLeft") setIndex((i) => (i + IMAGES.length - 1) % IMAGES.length);
            if (e.key === "ArrowRight") setIndex((i) => (i + 1) % IMAGES.length);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open]);

    return (
        <main className="main">
            <article className="page">
            <h1 className="page-title" data-text="~/art">~/art</h1>
            <p className="art-intro">
                A collection of 2D pixel art albums, exploring environments, and small visual experiments.
            </p>
            <div className="projects-grid">
                <button
                    className="project-card art-album"
                    onClick={() => { setIndex(0); setOpen(true); }}
                >
                    <img src="/hoshi/hoshilogo.png" alt="Hoshi album cover" />
                    <span className="project-card-bar">
                    <span>Hoshi (postponed)</span>
                    <span className="project-card-period">{IMAGES.length} images</span>
                    </span>
                </button>
            </div>
            {open && (
                <div className="lightbox" onClick={() => setOpen(false)}>
                    <div className="lightbox-stage" onClick={(e) => e.stopPropagation()}>
                        <img src={IMAGES[index].src} alt={IMAGES[index].alt} />
                        <p className="lightbox-caption">{IMAGES[index].caption}</p>
                    </div>
                    <button
                    className="lightbox-nav prev"
                    onClick={(e) => { e.stopPropagation(); setIndex((i) => (i + IMAGES.length - 1) % IMAGES.length); }}
                    aria-label="Previous image"
                    >‹</button>
                    <button
                    className="lightbox-nav next"
                    onClick={(e) => { e.stopPropagation(); setIndex((i) => (i + 1) % IMAGES.length); }}
                    aria-label="Next image"
                    >›</button>
                    <button className="lightbox-close" onClick={() => setOpen(false)} aria-label="Close">×</button>
                </div>
            )}
            </article>
        </main>
    );
}