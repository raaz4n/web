export default function About() {
    return (
        <main className="main">
            <article className="page">
                <h1 className="page-title" data-text="~/about">~/about</h1>

                <h2>About me</h2>
                <p>hi! welcome to my personal website! :]</p>

                <p>i'm a grad student studying CS @ <span style={{ color: '#005cba' }}>MTSU</span>. i enjoy reverse engineering, pentesting, researching, and building.</p>

                <br/>

                <p>lets connect!</p>
                <a href="https://github.com/raaz4n" target="_blank" rel="noopener noreferrer">github</a> ✦ <a href="https://linkedin.com/in/raazan" target="_blank" rel="noopener noreferrer">linkedin</a>

                <br/>
                <br/>
                <br/>

                <p>interested in my skills?</p>
                <a style={{ color: 'var(--resume)' }} href="/files/portfolio.pdf" target="_blank" rel="noreferrer noopener">my resume ░</a>

                <h2>at present</h2>
                <li>looking for a position involved in cybersecurity</li>
                <li>studying for my CS masters with a cybersecurity concentration</li>
                <li>constantly learning new things</li>
                <li>pentesting for companies</li>
                <li>creating projects</li>
                <li>working on cars</li>

                <h2>interests</h2>
                <ul style={{ color: 'var(--interests)' }}>
                    <li>tech: <span> reverse engineering, pentesting, networking, Kali, C/C++, IDA Pro, Burp Suite, ZAP, Golang, Python</span></li>
                    <li>games: <span>cs2, deadlock, yume nikki, ds3, minecraft, elden ring, osu, kovaaks, mw2, ut/dr, va-11 hall-a, csgo</span></li>
                    <li>music:<span> nujabes, uyama hiroto, shing02, camellia, LUV, madeon, daft punk, mf doom</span></li>
                    <li>series:<span> hxh, andor, opm, bcs, one piece, jojo</span></li>
                    <li>art:<span> frantisek kupka, kanicoro (@_k256), yoshihiro togashi</span></li>
                    <li>personal: <span>stargazing, cold brew coffee (important), cars, cats, keyboards, drawing, photography, gym, being great</span></li>
                </ul>

            </article>
        </main>
    );
}