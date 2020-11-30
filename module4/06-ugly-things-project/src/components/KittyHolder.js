import React, {useContext} from 'react'
import {CardContext} from './context/CardContext'
import KittyCard from './kittyCard';

function KittyHolder(props){
    const kittyContext = useContext(CardContext)
    console.log("kittyContext", kittyContext)
    let mappedKittyCards = kittyContext.kittyCards.map(card => 
        <KittyCard kittyTitle={card.title} kittyURL={card.uRL} kittyDesc={card.desc} />)
    return(
        <div className="kittyHolder" >
            
        {mappedKittyCards}

            {/* <KittyCard  kittyTitle="Kitty Pic Title" kittyURL="http://placekitten.com/600/600" kittyDesc="Furry." />
            
            <KittyCard  kittyTitle="Kitty Pic 2 Title" kittyURL="https://images.unsplash.com/photo-1559564207-09c99dc78a70" kittyDesc="Even furrier." />
            <KittyCard  kittyTitle="Kitty Pic 4 Title" kittyURL="http://placekitten.com/200/200" kittyDesc="The Furriest." />
            <KittyCard  kittyTitle="Kitty Pic 3 Title" kittyURL="http://placekitten.com/300/300" kittyDesc="Ahh, so furry." /> */}
        </div>
    )
}

export default KittyHolder