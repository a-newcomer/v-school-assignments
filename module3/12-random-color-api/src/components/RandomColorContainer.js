import React from 'react'
import RandomColorComponent from './RandomColorComponent'

function RandomColorContainer() {

    return(
        <div className="container">
            <RandomColorComponent />
            <RandomColorComponent />
            <RandomColorComponent />
        </div>
    )
}


export default RandomColorContainer