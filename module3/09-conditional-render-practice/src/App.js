import React from 'react'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: false
    }
  }
  handleClick = () => {
  
    this.setState(prevState =>(
      {
        isLoggedIn: !prevState.isLoggedIn
      }
     ))
  }
  render() {
    return (
      <div className="App">
        {this.state.isLoggedIn? <h1 style={{color: "#00aa00"}}>You are logged in.</h1> :<h1 style={{color: "#cc0022"}}>You are logged Out.</h1>  }
        <button onClick={this.handleClick}>{this.state.isLoggedIn? <h2>Log Out</h2>:<h2>Log In</h2> }</button>
      </div>
    )
  }
 
}

export default App;
