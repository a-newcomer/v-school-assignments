import React from 'react'
import Die from './Die'

class DiceBox extends React.Component {
    
       
    render(props) {
        let stateProperties = (Object.values(this.props.diceFaces))
        let dice = stateProperties.map((die, index) => <Die key={index} face={die} />)
        return (
            <div className="diceBox">
                {dice}
            </div>
        )
    }
}

export default DiceBox