/*
//html by Bob Ziroll
<html>
    <head>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <div id="root"></div>
        <script src="index.pack.js"></script>
    </body>
</html>

</html>
//index.js - by Bob Ziroll
import React from 'react'
import ReactDOM from 'react-dom'

import App from "./App"

ReactDOM.render(<App />, document.getElementById('root'))

//App

import React from "react"
import productsData from "./vschoolProducts"
import Product from "./Product"
function App() {
    //I didn't have to lay out the whole product here - I could have just had 2 props - key and the whole product, then I would have added "product" in the Product component i.e. props.product.name
    const productComps = productsData.map( product => {
        return(
        <Product key={product.id} name={product.name} price={product.price} decription={product.description} />
        )
    })
  return (
    <div>
        {productComps}
    </div>
  )
}

export default App
//Product component
import React from "react"

function Product(props) {
    return(
        <div className="product">
            <h1>{props.name}</h1>
            <h5>Price: ${props.price}.00</h5>
            <p><strong>Details: </strong>{props.description}</p>
        </div>
    )
}

export default Product

//product array - by Bob Ziroll
const products = [
    {
        id: "1",
        name: "Pencil",
        price: 1,
        description: "Perfect for those who can't remember things! 5/5 Highly recommend."
    },
    {
        id: "2",
        name: "Housing",
        price: 0,
        description: "Housing provided for out-of-state students or those who can't commute"
    },
    {
        id: "3",
        name: "Computer Rental",
        price: 300,
        description: "Don't have a computer? No problem!"
    },
    {
        id: "4",
        name: "Coffee",
        price: 2,
        description: "Wake up!"
    },
    {
        id: "5",
        name: "Snacks",
        price: 0,
        description: "Free snacks!"
    },
    {
        id: "6",
        name: "Rubber Duckies",
        price: 3.50,
        description: "To help you solve your hardest coding problems."
    },
    {
        id: "7",
        name: "Fidget Spinner",
        price: 21.99,
        description: "Because we like to pretend we're in high school."
    },
    {
        id: "8",
        name: "Sticker Set",
        price: 14.99,
        description: "To prove to other devs you know a lot."
    }
]

export default products
*/
