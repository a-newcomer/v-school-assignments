import React from 'react'

class Square extends React.Component {
    constructor() {
        super()
    }
    render(props) {
        let styles = {}
        return (
            <div className="square" style={{backgroundColor: this.props.bgColor}}>
            </div>
        )
    }
}

export default Square