"use client";

import { useEffect, useState } from "react";

export default function ThemeButton() {
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        const saved = document.documentElement.getAttribute("data-theme") === "light";
        if (saved) {
            setTheme("light");
        }
        else {
            setTheme("dark");
        }
    }, []);

    const toggleTheme = () => {
        let next;
        if (theme === "dark") {
            next = "light";
        }
        else {
            next = "dark";
        }
        setTheme(next);
        localStorage.setItem("theme", next);
        document.documentElement.setAttribute("data-theme", next);
    };

    return (
        <button className={`theme-btn ${theme}`} onClick={toggleTheme} aria-label="Toggle theme">
            <span className="moon">
                ⏾
            </span>
            <span className="sun">
                ✴︎
            </span>
        </button>
    );
}