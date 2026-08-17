"use client";

import { useEffect, useRef } from "react";

export default function DitherStrip({
    cell = 4,
    height = 56,
    flip = false,
    reverse = false,
} : {
    cell?: number;
    height?: number;
    flip?: boolean;
    reverse?: boolean;
}) {
    const wrapRef = useRef<HTMLDivElement>(null);
    const canvasA = useRef<HTMLCanvasElement>(null);
    const canvasB = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const draw = (canvas: HTMLCanvasElement | null, fromVar: string, toVar: string) => {
            const wrap = wrapRef.current;
            if (!canvas || !wrap) {
                return;
            }
            const style = getComputedStyle(wrap);
            const from = style.getPropertyValue(fromVar).trim();
            const to = style.getPropertyValue(toVar).trim();
            const rect = canvas.getBoundingClientRect();
            const cols = Math.ceil(rect.width / cell);
            const rows = Math.ceil(rect.height / cell);
            canvas.width = cols;
            canvas.height = rows;
            const ctx = canvas.getContext("2d")!;
            for (let y = 0; y < rows; y++) {
                for (let x = 0; x < cols; x++){
                    const progress = x / cols;
                    const threshold = Math.floor(progress * 64);
                    const noise = flip ? ((x - y) % 64 + 64) % 64 : (x + y) % 64;
                    ctx.fillStyle = reverse
                        ? (noise < threshold ? from : to)
                        : (noise < threshold ? to : from);
                    ctx.fillRect(x, y, 1, 1);
                }
            }
        };

        const redraw = () => {
            draw(canvasA.current, "--dither-dark-from", "--dither-dark-to");
            draw(canvasB.current, "--dither-light-from", "--dither-light-to");
        };

        redraw();
        window.addEventListener("resize", redraw);
        return () => window.removeEventListener("resize", redraw);
    }, [cell]);

    return (
        <div ref={wrapRef} style={{ height, position: "relative", overflow: "hidden" }} aria-hidden="true">
            <canvas ref={canvasA} className="dither-a"
                style={{ width: "100%", height: "100%", display: "block", imageRendering: "pixelated" }} />
            <canvas ref={canvasB} className="dither-b"
                style={{ width: "100%", height: "100%", display: "block", imageRendering: "pixelated", position: "absolute", inset: 0 }} />
        </div>
    );
}