import React from 'react'

function Target(props) {
    const listStyle = {backgroundImage: "url(" + props.info.image + ")"}
    return(
        <li className="target" 
        style={listStyle} >
            <h3>{props.info.name}</h3>
        </li>
    )
}

export default Target