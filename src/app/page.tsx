export default function Home() {
  return (
    <main className="main">
        <section className="start">
            <div className="welcome">
                <div className="welcome-text-block">
                    <article className="welcome-text">
                        <div className="mb-4" style={{ color: 'var(--text-strong)'}}>
                            <h1 className="welcome-title" style={{ maxWidth: 'none', marginBottom: '0', paddingBottom: '0', marginTop: '0', paddingLeft: '0', fontSize: '80px'
                            }}>Welcome</h1>
                            <p style={{ opacity: '.75' }}>to my website</p>
                        </div>
                        <p className="max-w-none" style={{ color: 'var(--cream)' }}>
                            reverse engineering, pentesting, scripting, and building.
                        </p>
                        <p className="min-h-42px italic" style={{ color: 'var(--text-dim)'}}>
                            security researcher • CS @  <span style={{ color: '#005cba' }}>mtsu</span>
                        </p>
                    </article>
                </div>
                <div className="artpiece">
                    <div style={{ maxHeight: "min(var(--welcome-section-height), 760px)" }}>
                        <img className="artpiece-img" src="/photos/missingno.gif" alt="" />
                    </div>
                </div>
            </div>
        </section>
    </main>
  );
}
