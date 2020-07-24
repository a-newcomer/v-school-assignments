import React from 'react'

function Email(props) {
    return(
        <div>
            <h1>{props.header}</h1>
            <button>{props.btnText}</button>
        </div>
    )
}

export default Email