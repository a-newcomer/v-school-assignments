import React from 'react';
//import logo from '../assets/logo.png';

function Header (){
    return (
        <header>
        {/* <nav>
          <div className="branding">
            <img src={logo} alt="Ann's Kitty-love logo" />
            <h1>Ann's Portfolio</h1>
          </div>
        </nav> */}
        <section id="grid-container" className="hero">
        <ul className="upper-grid">
                <li className="box box2"><a href="portfolio.html">portfolio</a></li>
                <li className="box box3"><a href="about.html">about me</a></li>
                <li className="box box4"><a href="contact.html">contact me</a></li>
                <li className="box box5 color big-type">Portfolio</li>
                
            </ul>
            <div className="main-grid">
                <div className="upper-left">
                    <div className="vert">a.f.newcomer@gmail.com</div>
                </div>
                <div className="upper-right big-type">React<br />PHP WordPress JavaScript HTML5 CSS3</div>
                <div className="center-left big-type"><span>A. Newcomer's</span>Skills<br />Work &<br />Experience<span className="benefits-sizing" ></span></div>
                <div className="center-bottom-left">Do you need: Web design? A leg up with your online presence? SEO? Online Marketing? Shoot me an email!</div>
                <div className="center-bottom-right">Some of my technical skills include: HTML, CSS, PHP, JavaScript, WordPress customization and troubleshooting, Java, some React.js, project management</div>
            </div> 

        </section>
        </header>
    )
}


export default Header;