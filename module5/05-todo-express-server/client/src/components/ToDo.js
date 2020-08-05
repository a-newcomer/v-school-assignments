import React from 'react'
//import toDoRouter from '../../../routes/toDoRouter'

function ToDo(props) {
    console.log(props)
    return(
        <div className="toDoCard">
            <h2>{props.name}</h2>
    <p>{props.description}</p>
        </div>
    )
}

export default ToDo