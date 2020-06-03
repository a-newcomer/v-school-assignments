import React from 'react'
import Square from "./Square"

class SquareBank extends React.Component {
    constructor() {
        super()
    }
    render(props) {
        //need to fix key - causes wierd bug - makes an extra square generate when key is same
        let squares = this.props.colors.map(color => <Square key={Math.floor(Math.random() * 700)} bgColor={color} /> )
        return (
            <div className="squareHolder">
            {squares}
            </div>
        )
    }
}


export default SquareBank