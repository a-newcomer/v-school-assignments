import React from 'react'
import Form from './components/Form'
import BadgeHolder from './components/BadgeHolder'

/* next steps
give each input a value, using state
- work out how to change state, probably using the handle change buttons, saving the fields in an object(or array?), and placing the object in an array 
- do css to make this info show up in divs on the page, using submit button - don't forget to make the form fields empty again in the same function
 - work out a function for the disabled button conditional - see tutorial https://goshakkk.name/form-recipe-disable-submit-button-react/
*/

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      hometown: "",
      phone: "",
      favFood: "",
      story: "",
      badges: [],
    }
  }
  handleChange = (e) => {
    const {name, value} = e.target
    this.setState( {
      [name]: value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const newBadge = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      hometown: this.state.hometown,
      phone: this.state.phone,
      favFood: this.state.favFood,
      story: this.state.story
    }
    this.setState((prevState) =>(
      {
        badges: [...prevState.badges, newBadge],
        firstName: '',
        lastName: '',
        email: '',
        hometown: '',
        phone: '',
        favFood: '',
        story: '',
     }
     ))
  }
  render() {
    return (
      <div className="App">
       <h1>React Name Badges</h1>
       <Form 
       input={{
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        hometown: this.state.hometown,
        phone: this.state.phone,
        favFood: this.state.favFood,
        story: this.state.story
       }} 
       submitHandler={this.handleSubmit} 
       changeHandler={this.handleChange} />
       <BadgeHolder badgeList={this.state.badges} />
      </div>
    )
  }
 
}

export default App;
