import React from 'react'
const {Provider, Consumer} = React.createContext()

class ThemeContextProvider extends React.Component {
    state = {
        theme: 'lightTheme'
    }
    switchTheme = () => {
        this.setState(prevState =>{
            return({
                theme: prevState.theme === 'lightTheme'? 'darkTheme': 'lightTheme'
            })
        }
        )
    }
    
    render() {
        return(
            <Provider value={{theme: this.state.theme, switchTheme: this.switchTheme}} >
                {this.props.children}
            </Provider>
        )
    }
}

export {ThemeContextProvider, Consumer as ThemeContextConsumer}