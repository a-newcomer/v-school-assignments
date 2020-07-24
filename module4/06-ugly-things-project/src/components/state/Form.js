import React from 'react'

class Form extends React.Component {
    state = {
        kittyURL: "",
        kittyTitle: "",
        kittyDesc: "",
        kittyCards: []
    }
    handleChange = (e) => {
        const {name, value} = e.target
        this.setState( {
          [name]: value
        })
        //console.log(value)
        //console.log(this.state)
        console.log(" ")
      }
    handleSubmit = (e) => {
        e.preventDefault()
        //const {kittyURL, kittyTitle, kittyDesc} = this.state
        const kittyCard = {
            kittyURL: this.state.kittyURL, 
            kittyTitle: this.state.kittyTitle, 
            kittyDesc: this.state.kittyDesc
        } 
        console.log("kittyCards: " + this.state.kittyCards)
        console.log('state: ' + this.state)

        this.setState((prevState) => ({
            kittyCards: [...prevState.kittyCards, kittyCard],
            kittyURL: "",
            kittyTitle: "",
            kittyDesc: ""
        } ))
    }
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                 <h3>Add the url of your favorite online kitty pix, a name, and a short explanation of why it appeals.</h3>
                 <label>
                     Picture link as URL
                    <input
                    name="kittyURL"
                    type="url" 
                    value={this.state.kittyURL}
                    onChange={this.handleChange} 
                    placeholder="https://photo.png" />
                 </label>
                 <label>
                     Picture Title
                    <input
                    name="kittyTitle"
                    type="text"  
                    value={this.state.kittyTitle} 
                    onChange={this.handleChange} 
                    placeholder="Heading" />
                 </label>
                 <label>
                     A short description
                    <textarea
                    name="kittyDesc"
                    type="text"  
                    value={this.state.kittyDesc } 
                    onChange={this.handleChange} 
                    placeholder="Explain why the picture appeals to you." />
                 </label>
                <button value="submit" >Submit</button>

                 
            </form>
        )
    }
}

export default Form