import React from 'react'
import ToDoList from './components/ToDoList'

class App extends React.Component {
  constructor(){
    super()
  }

  render() {
    return (
      <div className="App">
        <h1>Practice App: React To Do List with Axios</h1>
        <ToDoList />
      </div>
    )
  }
  
}

export default App;
