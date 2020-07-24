import React from "react"
import {UserContextConsumer} from "./userContext"

function Header() {
    return (
        <header>
            <UserContextConsumer>
                {userObj => (
                    <p>Welcome, {userObj.username}!</p>
                )}
            </UserContextConsumer>
        </header>
    )
}

export default Header
