import React from 'react'

function Info(props) {
    return(
        <div>
            <h1>{props.header}</h1>
            <p>{props.body}</p>
        </div>
    )
}

export default Info