import React,{useState} from 'react'
const CardContext = React.createContext()



function CardContextProvider(props) {

    const [kittyCards, setKittyCards]= useState([])

    const addKittyCard = (uRL, title, desc) => setKittyCards((prevArray) => [...prevArray,{uRL, title, desc}])
    
    console.log(kittyCards)
    return(
        <CardContext.Provider value={{kittyCards,addKittyCard}}>
            {props.children}
        </CardContext.Provider>
    )
}

export {CardContextProvider, CardContext}