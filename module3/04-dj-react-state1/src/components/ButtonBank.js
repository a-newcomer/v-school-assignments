import React from 'react'
import Button from "./Button"

class ButtonBank extends React.Component {
    constructor() {
        super()
    }
    
    render(props) {
        const buttons = this.props.funcs.map(func => <Button cssClass={this.props.funcs.indexOf(func) + 1} btnFunc={func} />)
        return (
            <div className="buttonHolder">               
                {buttons}
            </div>
        )
    }
}



export default ButtonBank