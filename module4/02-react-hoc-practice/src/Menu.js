import React from "react"
import {withToggle} from './hocs/withToggle'
    
    function Menu(props) {
        return (
            <div className="menu">
                <button onClick={props.toggle}>{props.on ? "Show" : "Hide"} Menu </button>
                <nav className="navList" style={{display: props.on ? "none" : "flex"}}>
                    <h6>Signed in as Coder123</h6>
                    <a>Your Profile</a>
                    <a>Your Repositories</a>
                    <a>Your Stars</a>
                    <a>Your Gists</a>
                </nav>
            </div>
        ) 
    }


export default withToggle(Menu)