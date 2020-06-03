import React from "react"
import Pet from './Pet'

function Friend(props) 
    const petComponents = props.friends.pets.map(pet => 
        <Pet key={pet.name + props.friends.pets.indexOf(pet)} pets={pet} />
        )
    return (
        <div className="friend">
            <h2>{props.friends.name}</h2>
            <h3>{`${props.friends.name} has ${props.friends.pets.length} ${props.friends.pets.length > 1? "pets": "pet"}: `}</h3>
            {petComponents}

        </div>
    )
}


export default Friend