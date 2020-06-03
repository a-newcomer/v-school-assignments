import React from "react"

function Pet(props) {
    return (
        <div className="pet" >
            <p>{props.pets.name + " is a " + props.pets.breed + "."}</p>

        </div>
    )
}

export default Pet