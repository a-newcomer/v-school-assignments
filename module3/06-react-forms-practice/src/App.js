import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
      super()
      this.state = {
        firstName: "",
        lastName: "",
        age: "",
        gender: "",
        destination: "",
        willEat: {
          meat: true,
          vegetarian: false,
          vegan: false,
          glutenFree: false
        }
      }
  this.handleChange = this.handleChange.bind(this)    
  }
  handleChange = (e) => {
    const {name, value, type, checked} = e.target
    //const checked = e.target.willEat
    if (type === "checkbox") { 
      this.setState(prevState => {
        return {
          willEat: {
            ...prevState.willEat,
            [name]: checked
          }
        }
      }) 
    } else { 
      this.setState({
          [name]: value
      })
    }
  }

    render() {
        return (
            <main>
                <form>
                    <input type="text" name="firstName" placeholder="First Name" value={this.state.firstName} onChange={this.handleChange} /><br />
                    <input type="text" name="lastName" placeholder="Last Name" value={this.state.lastName} onChange={this.handleChange} /><br />
                    <input type="number" name="age" placeholder="Age" value={this.state.age} onChange={this.handleChange} /><br />
                    
                    <input type="radio" 
                    name="gender" 
                    value="female" 
                    checked={this.state.gender === "female"} 
                    onChange={this.handleChange} /><label> female</label><br />
                    <input type="radio" name="gender" value="male" 
                    checked={this.state.gender === "male"} onChange={this.handleChange} /><label> male</label><br />
                    <input type="radio" name="gender" value="other" 
                    checked={this.state.gender === "other"} onChange={this.handleChange} /><label> other</label><br />
                    <br />
                    <label>Destination</label><br />
                    <select value={this.state.value} onChange={this.handleChange} name="destination">
                      <option value="" >Destination</option>
                      <option value="Prague" >Prague</option>
                      <option value="Budapest" >Budapest</option>
                      <option value="Vienna" >Vienna</option>
                    </select>
                    <br />
                    
                    <label>Food Choices</label><br />
                    <label><input type="checkbox" name="meat" checked={this.state.willEat.meat} onChange={this.handleChange} />Meat</label>
                    <br /><label><input type="checkbox" name="vegetarian" checked={this.state.willEat.vegetarian} onChange={this.handleChange} />vegetarian</label>
                    <br />
                    <label><input type="checkbox" name="vegan" checked={this.state.willEat.vegan} onChange={this.handleChange} />Vegan</label>
                    <br />
                    <label><input type="checkbox" name="glutenFree" checked={this.state.willEat.glutenFree} onChange={this.handleChange} />Gluten Free</label>
                    <br />
                    
                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.destination}</p>
                <p>
                    Your dietary restrictions: <br /> 
                     {this.state.willEat.meat === true && "meat, "}
                    {this.state.willEat.vegetarian === true && "vegetarian, "}
                    {this.state.willEat.vegan === true && "vegan, "}
                    {this.state.willEat.glutenFree === true && "gluten free"}
                    {
                      //why isn't this showing up?
                      Object.entries(this.state.willEat).forEach(([key, value]) => 
                      //console.log(`${key}: ${value}`)
                      (value === true) && `${key}`
                      )
                    }
                </p>
            </main>
        )
    }
}

export default App;
