import React from 'react'
import {ThemeContextConsumer }from './themeContext'

function Button() {
    return(
        <ThemeContextConsumer >
            {toggle => <button onClick={toggle.switchTheme}>
                Switch Theme
                </button>}
        </ThemeContextConsumer>
    )
}

export default Button