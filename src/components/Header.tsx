"use client"

export default function Header() {
    return (
        <>
            <header className="header">
                <div className="overlay"></div>
            </header>
            <div className="brand">
                <div className="raz">
                    raaz4n
                </div>
            </div>
            <div className="nav">
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