import React from 'react';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      nameEntry: "",
      names: []
    }
  }
  handleChange = (e) => {
    this.setState( {
      [e.target.name] : e.target.value
    })
  }
  handleSubmit = (e) => {
    const {names} = e.target
    this.setState(prevState =>{
      prevState.names.unshift(prevState.nameEntry)
      prevState.nameEntry = ""
      return({
        [names] : prevState.names
      })
    })
    e.preventDefault()
  }
  render() {
    let namesList = this.state.names.map(name => <li key={name}> {name} </li>)
    return (
      <div className="App">
        <h1>Name List</h1>
        <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.nameEntry} name="nameEntry" placeholder="Enter Name" onChange={this.handleChange} />
        <button value="Submit" >Submit</button>
        </form>
        <h1>{this.state.nameEntry}</h1>
        <ul>{namesList}</ul>
      </div>
    )
  }
  
}

export default App;
