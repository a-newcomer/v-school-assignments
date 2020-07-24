import React from 'react'

class Toggle extends React.Component {
    state = {
        on: false
    }
    toggle = () => {
        this.setState((prevState)=>({
            on: !prevState.on
        }))
    }
    render(){
        const Component = this.props.component
        return(
            <Component on={this.state.on} toggle={this.toggle} {...this.props} />
        )
    }
}

export function withToggle(component){
    return function(props) {
        return(
            <Toggle component={component} {...props} />
        )
    }

}
