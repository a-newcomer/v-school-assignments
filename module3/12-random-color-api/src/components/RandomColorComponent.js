import React from 'react'
import axios from 'axios'

class RandomColorComponent extends React.Component {
    constructor(){
        super()
        this.state = {
            loading: false,
            randomColor: null
        }
    }
    componentDidMount() {
        this.setState(
            axios.get('http://www.colr.org/json/color/random?timestamp=${new Date().getTime()}')
            .then( results => {

              console.log("data from api: " + results.data.colors[0].hex)

              const colorData = results.data.colors[0].hex
              return(this.setState({
                randomColor: colorData
              }))
            })
            .catch( error=> console.log(error))
         )
    }
    render() {
    let color = {backgroundColor: "#" + this.state.randomColor}
        return(
            <div className="colorBox" style={color} >
                {console.log("state: " + this.state.randomColor)}
            </div>
        )
    }
}

export default RandomColorComponent