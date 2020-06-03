import React from 'react'

function Button(props) {
    return( 
        <button onClick={props.clickHandler} >Roll Dice</button>
    )
}

export default Button