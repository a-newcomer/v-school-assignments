import React from 'react'
//currently this component is not in use
function Button(props) {
        return (
            <button className={`btn btn${props.cssClass}`} onClick={props.btnFunc} >Click Me</button>
        )
    }

export default Button