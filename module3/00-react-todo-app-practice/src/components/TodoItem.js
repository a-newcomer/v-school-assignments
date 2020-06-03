import React from "react"

function TodoItem(props) {
   let ifCompleted = props.toDo.completed? {textDecoration: "line-through", color: "#888", fontStyle: "italic"}:{textDecoration: "none", color: "#444"}
        return (
            <div className="todo-item" style={ifCompleted}>
                <input type="checkbox" checked={props.toDo.completed} onChange={()=> {props.changeHandled(props.toDo.id)}}/>
                <p>{props.toDo.text}</p>
            </div>
        )
    
}

export default TodoItem