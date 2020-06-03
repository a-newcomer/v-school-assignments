import React, {Component} from 'react'
import TodoItem from "./components/TodoItem"
import Header from "./components/Header"

import todosData from "./todosData"

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: todosData
    }
  }
  handleChange = (id)=> {
    this.setState( (prevState) => {
      const updatedData = prevState.data.map(item => {
        if(item.id === id) {
          return (
            //this is some kind of new syntax to avoid modifying the old state directly - i'm returning an object which is the item, and somehow modifying only the "completed" property of it
            {
              ...item,
              completed: !item.completed
            }
          )
        }
        return item
      })
      return(
        {
          data: updatedData
        }
      )
    })
  }
  render() {
    const list = this.state.data.map( item => 
     <TodoItem key={item.id} toDo={item} changeHandled={this.handleChange} />
    )
    return (
      <div className="outermost">
        <Header />
        <div className="App todo-list">
          {list}
        </div>
      </div>
    )
        
  }
}

export default App;
