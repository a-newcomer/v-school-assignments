import React from "react"

import Header from "./Header"
import {UserContextConsumer} from "./userContext"

class App  extends React.Component{
  state = {
    newUsername: ""
  }
  handleChange = (e) => {
    const {name, value} = e.target
      this.setState({
          [name]: value
      })
  }
  render() {
    return (
      <div className="App">
          <Header />
              <UserContextConsumer>
              
                 {(userObj) => (
                  <main> 
                  <p className="main">No new notifications, {userObj.username}! 🎉</p>
                  <div className="formElements">
                  <input
                      type="text"
                      name="newUsername"
                      placeholder="New username"
                      value={this.state.newUsername}
                      onChange={this.handleChange}
                  />
                 
                  <button onClick={()=>{
                    //still should target the input and clear out the value field
                   return( userObj.changeUserName(this.state.newUsername))
                    }}>Change Username</button>
                    </div>
                  </main>
                 )}
              </UserContextConsumer>
      </div>
  )
  }
    
}

export default App

              /**
               * Challenge: Add the ability for the user to choose a new username
               * 
               * 1. Add state to this component to hold the new username in a controlled form
               * (https://reactjs.org/docs/forms.html#controlled-components)
               * (https://scrimba.com/p/p7P5Hd/cW8Jdfy)
               * 
               * 2. Change userContext into a component that has state and provides the ability
               * to change the user's username. Make sure to export the provider and consumer
               * as named exports and update their uses anywhere else in the app
               * 
               * 3. Give this App component the ability to update the username in context when the
               * button is clicked
               */