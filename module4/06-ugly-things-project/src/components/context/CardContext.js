import React from React
const {Provider,Consumer} = React.createContext()

/*probably the list of kitty objects belongs in state here, and the submit(or onClick?) method, which should take the kitty object from the form as a parameter, and add it to the array of kitty objects in state here using set state. then I probably won't need another helper function - except think about how bob fiddled this by putting that function inside an anonymous function directly in the component, becuase he wanted to take another parameter (the info he was passing to context) in addition to the event. */ 

class CardContextProvider extends React.Component {
    state = {
        allKittyCards: kittyCards
    }
    
  /*  addToArray = (kittyObject from state) => {
        //e.preventDefault()
        //const {kittyURL, kittyTitle, kittyDesc} = this.state
        const kittyCard = {
            kittyURL: this.state.kittyURL, 
            kittyTitle: this.state.kittyTitle, 
            kittyDesc: this.state.kittyDesc
        } 
        console.log("kittyCards: " + this.state.kittyCards)
        console.log('state: ' + this.state)
//Can I update state like this in this function? Do I have to take a different parameter?
        this.setState((prevState) => ({
            kittyCards: [...prevState.kittyCards, kittyCard],
            kittyURL: "",
            kittyTitle: "",
            kittyDesc: ""
        } ))
    }
*/
    render() {
        return(
            <Provider value={this.state.allKittyCards}>
                {this.props.children}
            </Provider>
        )
    }
}

export {CardContextProvider, Consumer as CardContextConsumer}