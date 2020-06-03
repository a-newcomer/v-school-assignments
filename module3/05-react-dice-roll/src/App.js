import React from 'react';
import DiceBox from './components/DiceBox';
import Button from './components/Button'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      die1:  this.diceRoll(),
      die2:  this.diceRoll(),
      die3:  this.diceRoll(),
      die4:  this.diceRoll(),
      die5:  this.diceRoll(),
      die6:  this.diceRoll()
    }
    
  } 
 diceRoll = ()=> Math.ceil(Math.random() * 6)
 //this is totaly cheating - I'm just making the page reload on the button click, which goes against everything React. 
 handleClick = () => {window.location.reload(false)}
  render() {
    
    return (
      <div className="App">
        {/* Move the map function from diceBox up here to App, and make handleClick function also map over setState and create components for DiceBox - maybe use a boolean "button clicked" to decide which compnent to use? */}
        <DiceBox diceFaces={this.state} />
        <Button clickHandler={this.handleClick} />
      </div>
    );
  }

}

export default App