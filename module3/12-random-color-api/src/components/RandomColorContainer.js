import React from 'react'
import RandomColorComponent from './RandomColorComponent'
//move state up into this component, and using state, set the interval on the get request for the color value, and using that render 12 containers into an array during component did mount. See Marcus' code

function RandomColorContainer() {
    let rCC = []
    for(let i=0; i < 12; i++){
        rCC.push(<RandomColorComponent />)
    }
    
    return(
        <div className="container">
            {/* <RandomColorComponent /> */}
            {rCC}
        </div>
    )
}


export default RandomColorContainer