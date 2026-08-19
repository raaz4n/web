import DitherStrip from "@/components/DitherStrip";

export default function Home() {
  return (
    <main className="main">
        <section className="start">
            <div className="welcome-overlay"/>
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
                            security researcher • cs @  <span style={{ color: '#005cba' }}>mtsu</span>
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
        <section className="section dark" style={{ "--section-z": 39, borderTop: '2px solid #777' } as React.CSSProperties}>
            <div className="section-inner">
                <div className="section-copy-wrap">
                    <article className="section-copy">
                        <h1>Who am I?</h1>
                        <p>Hi there! My name's Raazan (I also go by <span style={{ fontFamily: 'LythMono', fontSize: '18px'}}>raaz4n</span> online).</p>
                        <p>I'm a security researcher currently studying at <span style={{ color: '#005cba' }}>MTSU</span>.</p>
                        <p>Find more about me <strong><a style={{ textDecoration: 'underline' }} href="/about" rel="noreferrer noopener">here.</a></strong></p>
                    </article>
                </div>
                <div className="section-stage" aria-hidden="true">
                    <img src="/photos/pexels-tu-nguyen.png" />
                </div>
            </div>
        </section>
        <DitherStrip height={56} />
        <section className="section light flip" style={{ "--section-z": 39 } as React.CSSProperties}>
            <div className="section-inner">
                <div className="section-copy-wrap">
                    <article className="section-copy">
                        <h1>Selected works.</h1>
                        <a href="/blog/newweb">New website</a>
                        <br/>
                        <a href="/blog/r3turn">r3turn</a>
                    </article>
                </div>
                <div className="section-stage" aria-hidden="true">
                    <img src="/photos/placeholder.png" />
                </div>
            </div>
        </section>
        <DitherStrip height={56} flip reverse />
        <footer className="footer">
            <div className="footer-links">
                <a href="mailto:rkd2y@mtmail.mtsu.edu" aria-label="Email" title="Email">
                <span className="footer-icon">{"\uF0E0"}</span>
                </a>
                <a href="https://github.com/raaz4n" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub">
                <span className="footer-icon">{"\uF09B"}</span>
                </a>
                <a href="https://linkedin.com/in/raazan" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
                <span className="footer-icon">{"\uF0E1"}</span>
                </a>
            </div>
            <p className="footer-quote">^^ socials ^^</p>
        </footer>
    </main>
  );
}
