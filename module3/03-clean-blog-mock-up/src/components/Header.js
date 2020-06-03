import React from 'react'
import Navbar from './Navbar'

function Header() {
    return (
        <div className="headerOuter">
            <Navbar />
            <div className="headerInner">
                <h1>Clean Blog</h1>
                <h3 className="subHeading">A Blog Theme by Start Bootstrap</h3>
            </div>
        </div>
    )
}

export default Header