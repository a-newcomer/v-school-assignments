import React from "react"
const {Provider, Consumer} = React.createContext()

class UserContextProvider extends React.Component {
    state = {
        username: "Learner"
    }
   changeUserName = (username) => {
       this.setState({
       username: username
        })
    }
    render() {

        return(
            <Provider value={{username: this.state.username, changeUserName: this.changeUserName}}>
                {this.props.children}
            </Provider>
        )
    }
}


export {UserContextProvider, Consumer as UserContextConsumer}