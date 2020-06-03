/*
//warehouse/template for first toDo app outline components
//create HTML index file with element to place the app, classname "root"

//index.js:

import React from "react"
import ReactDOM from "react-dom"

import App from "./App"

ReactDOM.render(<App />, document.getElementById("root"))

//App.js

import React from "react"
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"

function App() {
    return(
        <div>
            <Header />
            <Main />
            <Footer />
        </div>
    )
}


export default App

//Header.js

import React from "react"

function Header() {
    return(
        <div>
            <h1>First ToDo App Header</h1>
        </div>
    )
}

export default Header

//Main.js

import React from "react"

function Main() {
    return(
        <form>
            <h3>To Do List</h3>
            <ul>
                <li>
                    <p>Item 1</p>
                    <input type="checkbox" name="toDoItem"/>
                </li>
                <li>
                    <p>Item 2</p>
                    <input type="checkbox" name="toDoItem"/>
                </li>
                <li>
                    <p>Item 3</p>
                    <input type="checkbox" name="toDoItem"/>
                </li>
            </ul>
        </form>
    )
}

export default Main

//Footer.js

import React from "react"

function Footer() {
    return(
        <div>Footer stuff goes here</div>
    )
}

export default Footer

*/