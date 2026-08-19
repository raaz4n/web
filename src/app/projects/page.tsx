import Link from "next/link";

const PROJECTS = [
    { name: "r3turn (completed)", period: "2026", image: "/photos/r3turn.png", href: "/blog/r3turn?from=projects" },
    { name: "Hoshi (postponed)", period: "? - ?", image: "/hoshi/hoshilogo.png", href: "/art" },
    { name: "Fayzit (postponed)", period: "? - ?", image: "/photos/fayzit.png", href: "/blog/fayzit?from=projects", target: "_blank", rel: "noopener noreferrer" },
    { name: "Portfolio website (outdated)", period: "2025 - 2026", image: "/photos/portfolio.jpg", href: "/blog/portfolio?from=projects" },
    { name: "Aeris (completed)", period: "2025", image: "/photos/aeris.png", href: "/blog/aeris?from=projects" },
    { name: "websiteCheck.py (completed)", period: "2025", image: "/photos/websitecheck.png", href: "/blog/websitecheck?from=projects" },
];

export default function Projects() {
    return (
        <main className="main">
            <article className="page">
                <h1 className="page-title" data-text="~/projects">~/projects</h1>
                <p className="art-intro">Apps, scripts, bots, and more things I'm working on.</p>

                <div className="projects-grid">
                    {PROJECTS.map((p) => {
                    const inner = (
                        <>
                        <img src={p.image} alt={p.name} />
                        <span className="project-card-bar">
                            <span>{p.name}</span>
                            <span className="project-card-period">{p.period}</span>
                        </span>
                        </>
                    );
                    return p.href ? (
                        <Link key={p.name} href={p.href} className="project-card">
                        {inner}
                        </Link>
                    ) : (
                        <div key={p.name} className="project-card">
                        {inner}
                        </div>
                    );
                    })}
                </div>
            </article>
        </main>
    );
}