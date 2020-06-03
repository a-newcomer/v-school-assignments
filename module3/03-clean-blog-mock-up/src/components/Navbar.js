import React from "react"

function Navbar() {
    return (
        <div className="navbarHolder">
            <div className="logoHolder">
                <a href="#">Start Bootstrap</a>
            </div>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Sample Post</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar