import React from 'react'
import logo from '../assets/logo.png'
import pipes from '../assets/maze-of-pipes-2.jpg'
import {Link} from 'react-router-dom'

function Header() {
    const bgImg = "url('"+ pipes +"')"
    return(
        <header style={{backgroundImage: `url("${pipes}")`}}>
            <div className="headerInner" >
                <div className="branding">
                    <img src={logo} alt="Ann's Kitty-love logo" />
                    <h1>React Roto Router</h1>
                </div>
                <nav>
                    <Link className="link" to="/" >Home</Link>
                    <Link className="link" to="/about" >About</Link>
                    <Link className="link" to="/services" >Services</Link>
                </nav>
            </div>
        </header>
        
    )
}

export default Header