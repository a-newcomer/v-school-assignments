import React from 'react'

function Image(props) {
    return(
        <figure>
            <img src={props.img} />
            <figcaption>{props.caption}</figcaption>
        </figure>
    )
}

export default Image