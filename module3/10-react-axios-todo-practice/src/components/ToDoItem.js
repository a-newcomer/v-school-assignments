import React from 'react'

function ToDoItem(props) {
    return(
        <li className='toDoItem' >
            {props.itemData}
            {/* <h1>{props.title}</h1>
            <h2>{props.description}</h2>
            <p>{props.price}</p> */}
        </li>
    )
}

export default ToDoItem