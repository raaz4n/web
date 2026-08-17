export default function Home() {
  return (
    <main className="main">
        <section className="start">
            <div className="welcome">
                <div className="welcome-text-block">
                    <article className="welcome-text">
                        <div className="mb-4">
                            <h1 style={{ maxWidth: 'none', marginBottom: '0', paddingBottom: '0', textShadow: '0 -96px 0 #ffffff02, 0 -43px 0 #ffffff05, 0 -11px 0 #ffffff08, 0 12px 0 #ffffff08, 0 46px 0 #ffffff05, 0 100px 0 #ffffff02',
                            filter: 'drop-shadow(0 2px 0 #ffffff57) drop-shadow(0 0 3px #fff6) drop-shadow(0 0 10px #ffffff4d)', marginTop: '0', paddingLeft: '0', fontSize: '80px'
                            }}>Welcome</h1>
                            <p style={{ opacity: '.35' }}>to my website</p>
                        </div>
                        <p className="max-w-none">
                            reverse engineering, pentesting, scripting, and building.
                        </p>
                        <p className="min-h-42px">
                            small developer • cs @ mtsu
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
