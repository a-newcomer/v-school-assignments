import React from "react"
import Button from './Button'

function Navbar() {
    return (
        <div className="darkTheme navbarHolder">
            <div className="logoHolder">
                <a href="#">Logo Goes Here</a>
            </div>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Sample Post</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <Button />
            </nav>
        </div>
    )
}

export default Navbar