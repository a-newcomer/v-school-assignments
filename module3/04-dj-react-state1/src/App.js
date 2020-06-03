import React from 'react';
import SquareBank from "./components/SquareBank";
import ButtonBank from "./components/ButtonBank"

let squareColors = ["white","white","white","white"]

class App extends React.Component{
  constructor() {
    super()
    this.state = {
        colors: squareColors
      }
      this.btnOneClick = this.btnOneClick.bind(this)
      this.btnTwoClick = this.btnTwoClick.bind(this)
      this.btnThreeClick = this.btnThreeClick.bind(this)
      this.btnFourClick = this.btnFourClick.bind(this)
      this.btnFiveClick = this.btnFiveClick.bind(this)
  }
  btnOneClick = function() {
    if (this.state.colors[0] === "white") {
      for(let i=0;i<squareColors.length; i++) {
        squareColors[i] = "black"
      }
        this.setState( {
            colors: squareColors
        })
    } else if (this.state.colors[0] !== "white") {
      for(let i=0;i<squareColors.length; i++) {
        squareColors[i] = "white"
      }
      this.setState( {
        colors: squareColors
    })
    }
  }

  btnTwoClick = function() {
    //console.log("btn2 clicked")
    squareColors[0] = "#cc00ff"
    squareColors[1] = "#cc00ff"
    this.setState( {
      colors: squareColors
  })
  }
  btnThreeClick = function() {
    squareColors[2] = "#3300ff"
    this.setState( {
      colors: squareColors
  })
  }
  btnFourClick = function() {
    squareColors[3] = "#3300ff"
    this.setState( {
      colors: squareColors
  })
  }
  btnFiveClick = function() {
    squareColors[Math.floor(Math.random() * 4)] = "#" + Math.floor(Math.random()*16777215).toString(16)
    this.setState( {
      colors: squareColors
  })
  }
  render() {
    return (
      <div className="App" >
        <SquareBank colors={this.state.colors}/>
        <ButtonBank funcs={[this.btnOneClick,this.btnTwoClick,this.btnThreeClick, this.btnFourClick, this.btnFiveClick]}/> 
      </div>
    )
  }
}

export default App;
